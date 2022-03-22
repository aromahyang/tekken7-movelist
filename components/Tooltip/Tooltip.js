import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import useTooltip from '~/hooks/useTooltip';

function Tooltip({ buttonRef, target = -1, children }) {
  const { tooltipIndex, top, right, showTooltip } = useTooltip();

  const handleResize = () => {
    if (buttonRef.current && tooltipIndex > -1 && tooltipIndex === target) {
      const { top, right } = buttonRef.current.getBoundingClientRect();
      showTooltip(tooltipIndex, `${top + 36}px`, `calc(100% - ${right}px)`);
    }
  };

  const moveTooltip = () => {
    if (window) {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  };
  useEffect(moveTooltip, [tooltipIndex]);

  if (!(typeof window === 'object')) {
    // You should explicitly check if the component is called on the server or the client
    return null;
  }

  const portalRef = document.querySelector('#portal');

  return createPortal(
    tooltipIndex > -1 && tooltipIndex === target ? (
      <div className="tooltip-container" style={{ top, right }}>
        <span className="tooltip-arrow-border" />
        <span className="tooltip-arrow-black" />
        {children}
      </div>
    ) : null,
    portalRef
  );
}

export default Tooltip;
