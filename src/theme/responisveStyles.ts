import { useCallback, useEffect, useMemo, useState } from "react";
// All nerve modules ui features
const ResponsiveMedia = {
  breadCrumbs: {
    breadCrumbsFonts: {
      sm: { fontSize: "12px", fontWeight: "700" },
      tab: { fontSize: "12px", fontWeight: "700" },
      tabPortrait: { fontSize: "12px", fontWeight: "700" },
      md: { fontSize: "16px", fontWeight: "800" },
    },
  },
  callToAction: {
    buttonsComponent: {
      sm: {
        height: "20px",
        width: "80px",
        size: "sm",
      },

      tabPortrait: {
        height: "20px",
        width: "80px",
        size: "sm",
      },
      tab: {
        height: "20px",
        width: "80px",
        size: "sm",
      },
      md: {
        height: "40px",
        width: "150px",
        size: "sm",
      },
    },
    buttonFonts: {
      sm: { fontSize: "10px" },
      md: { fontSize: "16px" },
    },
  },
  selectFilters: {
    baseFilterFlex: {
      md: { justifyContent: "space-around", alignItems: "left" },
      sm: { alignItems: "center", justifyContent: "flex-start" },
    },
    columnFilters: {
      sm: {
        marginTop: "10px",
        height: "auto",
        justifyContent: "flex-start",
        gap: "15px 0",
        flexDirection: "column",
        width: "100%",
        marginBottom: "10px",
        // flexFlow: "column nowrap",
      },
      md: {
        height: "100px",
        marginTop: "15px",
        justifyContent: "flex-start",
        flexDirection: "row",
        gap: "0px 15px",
        width: "100%",
        marginBottom: "-30px",
      },
      tab: {
        height: "100px",
        marginTop: "15px",
        justifyContent: "flex-start",
        flexDirection: "row",
        gap: "0px 15px",
        width: "100%",
        marginBottom: "-30px",
      },
      tabPortrait: {
        height: "100px",
        marginTop: "15px",
        justifyContent: "flex-start",
        flexDirection: "row",
        gap: "0px 15px",
        width: "100%",
        marginBottom: "-30px",
      },
    },
    columnSwapper: {
      sm: {
        order: "-1",
      },
      tab: { order: "-1" },
      tabPortrait: { order: "1" },
      md: {
        order: "1",
        selfAlign: "flex-end",
        marginLeft: "auto",
      },
    },
  },
  tableContent: {},
  formFieldsGrid: (gridTemplateColumns) => gridRelay(gridTemplateColumns),
  informationConfirmationDetailsModal: (gridTemplateColumns) =>
    gridRelay(gridTemplateColumns),
  gridIntersects: (mediaSymbol) => gridIntersects(mediaSymbol),
};

export const gridRelay = (gridTemplateColumns = "repeat(3, 1fr)") => {
  return {
    md: {
      gridTemplateColumns: gridTemplateColumns,
    },
    sm: {
      //gridTemplateRows: "repeat(auto, 1fr)",
      gridTemplateColumns: "repeat(auto, 1fr)",
    },
  };
};

export const gridIntersects = (mediaSymbol) => {
  console.log(window.innerWidth);
  const mediaSets = {
    xs: "repeat(auto, 1fr)",
    sm: "repeat(auto, 1fr)",
    tab: "repeat(1, 1fr)",
    tabPortrait: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
    lg: "repeat(3, 1fr)",
    xl: "repeat(3, 1fr)",
    "2xl": "repeat(3, 1fr)",
  };

  return mediaSets[mediaSymbol];
};

export const useMediaQueryRequest = ({
  screenResolver = "(max-width: 768px)", // mobile first approach
}) => {
  const mediaQery = useMemo(
    () => window.matchMedia(screenResolver),
    [screenResolver],
  );

  const [isReached, setIsReached] = useState(mediaQery.matches);

  useEffect(() => {
    const handleMediaQueryRequest = (e) => setIsReached(e.matches);
    mediaQery.addEventListener("change", handleMediaQueryRequest);

    return () => {
      mediaQery.removeEventListener("change", handleMediaQueryRequest);
    };
  }, [mediaQery]);

  return {
    hitsBreakPoint: isReached,
  };
};

export const useCurrentScreenQuery = () => {
  const screenSizes = useMemo(() => {
    return {
      //using rems...
      "2xl": 5000, //extra hd screens
      xl: 2090, //full hd
      lg: 1800, //large desktop
      md: 1280, //desktop
      tabPortrait: 1024, //tablets
      tab: 1000,
      sm: 926, // phones
      xs: 480,
    };
  }, []);

  const findNearestBoundary = useCallback((querySet) => {
    for (let i = querySet.length - 1; i >= 0; i--) {
      if (window.matchMedia(querySet[i]).matches) {
        switch (querySet[i]) {
          case `(max-width: 480px)`:
            return "xs";
          case `(max-width: 926px)`:
            return "sm";
          case "(max-width: 1000px)":
            return "tab";
          case "(max-width: 1024px)":
            return "tabPortrait";
          case "(max-width: 1280px)":
            return "md";

          case "(max-width: 1800px)":
            return "lg";
          case "(max-width: 2090px)":
            return "xl";
          case "(max-width: 5000px)":
            return "2xl";
          default:
            return "md";
        }
      }
    }
  }, []);

  const buildQuerySets = useCallback(() => {
    return Object.keys(screenSizes)?.map(
      (item) => `(max-width: ${screenSizes[item]}px)`,
    );
  }, [screenSizes]);

  const nearestMediaBoundary = useMemo(
    () => findNearestBoundary(buildQuerySets()),
    [buildQuerySets, findNearestBoundary],
  );

  const [nearestBound, setNearestBound] = useState(nearestMediaBoundary);

  const handleListener = useCallback(() => {
    console.log(findNearestBoundary(buildQuerySets()));
    return setNearestBound(findNearestBoundary(buildQuerySets()));
  }, [buildQuerySets, findNearestBoundary]);

  useEffect(() => {
    window.addEventListener("resize", handleListener);
    return () => {
      window.removeEventListener("resize", handleListener);
    };
  }, [buildQuerySets, findNearestBoundary, handleListener]);

  return nearestBound;
};

export default ResponsiveMedia;
