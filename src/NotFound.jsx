import React, { useEffect } from 'react';

function NotFound() {
  const [visible, setVisible] = React.useState(true);
  useEffect(() => {
    setInterval(() => {
      setVisible(!visible);
    }, 3000);
  }, []);
  return (
    <div>
      {visible? <h1>Welcome to Our Competition World</h1> : null}
     
    </div>
  );
}

export default NotFound;
