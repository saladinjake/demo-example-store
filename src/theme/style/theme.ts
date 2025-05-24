import merge from 'lodash.merge';
import themeBasic from "./lightMode"
import {  DefaultTheme } from "styled-components";


const baseTheme : DefaultTheme = {
  ...themeBasic,
  color: {
    primary: '#fff',
    secondary: '#f60',
    text: 'rgb(33, 37, 41)'
  },
  font: {
    primary: 'sans-serif'
  },
  fontSize: {
    md: '1.6rem',
    lg: '3.6rem'
  }
};

export type ThemeType = typeof baseTheme;

export const theme: Record<'light' | 'dark', ThemeType> = {
  light: baseTheme,
  dark: merge({}, baseTheme, {
    color: {
      primary: 'rgb(25, 25, 25)',
      secondary: 'rgb(100, 181, 246)',
      text: 'rgb(238, 238, 238)'
    }
  })
};