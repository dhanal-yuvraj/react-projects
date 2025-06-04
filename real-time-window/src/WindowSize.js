import React, { useState, useEffect } from 'react';

function WindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ padding: '20px', fontSize: '20px' }}>
      <p>Window size is:</p>
      <p><strong>{size.width}px</strong> wide</p>
      <p><strong>{size.height}px</strong> tall</p>
    </div>
  );
}

export default WindowSize;
