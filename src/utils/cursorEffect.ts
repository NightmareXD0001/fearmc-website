
/**
 * Custom cursor effect utility 
 * Initializes a custom cursor effect for the application
 */

export const initCustomCursor = () => {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  const moveCursor = (e: MouseEvent) => {
    document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
  };

  document.addEventListener('mousemove', moveCursor);

  // Add hover effect for interactive elements
  const addHoverListeners = () => {
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, select, textarea');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        document.documentElement.classList.add('cursor-hover');
      });
      
      el.addEventListener('mouseleave', () => {
        document.documentElement.classList.remove('cursor-hover');
      });
    });
  };
  
  // Run initially and also use MutationObserver to handle dynamically added elements
  addHoverListeners();
  const observer = new MutationObserver(addHoverListeners);
  observer.observe(document.body, { childList: true, subtree: true });

  return () => {
    document.removeEventListener('mousemove', moveCursor);
    if (cursor.parentNode) {
      document.body.removeChild(cursor);
    }
    observer.disconnect();
  };
};
