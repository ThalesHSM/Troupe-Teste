import React from 'react';
import NotFoundSvg from '@Assets/NotFound.svg';

function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <img
        src={NotFoundSvg}
        alt=""
        style={{
          width: 500,
        }}
      />
    </div>
  );
}

export default NotFound;
