import { useState } from "react";
import styled from "styled-components";

export const Toast = styled.div<{ display: any, type: "info" | "success" | "error" | "warning" }>`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 300px;
  z-index: 1000;
  font-family: sans-serif;

.toast {
  padding: 1rem 1.5rem;
  border-radius: 0.375rem;
  color: white;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  opacity: 0.95;
  animation: slide-in 0.4s ease forwards;
  display: ${({display})=> display.toString()=="true" ? "block":"none"}

}

.cancel{
  posiiton: absolute;
  right:4px;

}

.toast-type {
  background-color:  ${({ type }) => {
        switch (type) {
            case "success":
                return "#22c55e"
            case "error":
                return "#ef4444"
            case "info":
                return "#2563eb"
            case "warning":
                return "#f59e0b"
            default:
                return "#fff"
        }
    }}; 
}

`

export const ToastNotiier = ({ type, display, message }: { type: "success" | "warning" | "info" | "error", display: any, message: string }) => {
    const [cancel, setCancel] = useState(true)
    return (
        <Toast display={cancel.toString() == "false" ? cancel.toString() : display.toString()} type={type} >

            <div className="toast toast-type" onClick={() => {
                setCancel(false)
            }}>{message}</div>
        </Toast>
    )
}