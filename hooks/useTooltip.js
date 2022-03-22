import { useCallback, useContext } from 'react';
import { TooltipContext } from '~/context/TooltipContext';

function useTooltip() {
  const {
    tooltipIndex,
    setTooltipIndex,
    top,
    setTop,
    right,
    setRight,
  } = useContext(TooltipContext);

  const showTooltip = useCallback(
    (index, top, right) => {
      setTop(top);
      setRight(right);
      setTooltipIndex(index);
    },
    [setTop, setRight, setTooltipIndex]
  );

  const hideTooltip = () => {
    setTooltipIndex(-1);
  };

  return {
    showTooltip,
    hideTooltip,
    tooltipIndex,
    top,
    right,
  };
}

export default useTooltip;
