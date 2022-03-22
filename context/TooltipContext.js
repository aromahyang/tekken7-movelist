import { createContext, useState } from 'react';

export const TooltipContext = createContext({});

export function TooltipProvider({ children }) {
  const [tooltipIndex, setTooltipIndex] = useState(-1); // 0: filter, 1: information, 2: language
  const [top, setTop] = useState(0);
  const [right, setRight] = useState(0);

  return (
    <TooltipContext.Provider
      value={{
        tooltipIndex,
        setTooltipIndex,
        top,
        setTop,
        right,
        setRight,
      }}
    >
      {children}
    </TooltipContext.Provider>
  );
}
