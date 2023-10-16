import React from 'react';
import Inicio from './Inicio'; 

export default function Home({ children = <Inicio /> }) {
  return (
    <div>
      {children}
    </div>
  );
}
