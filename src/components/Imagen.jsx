import React from 'react';

const Imagen = () => {
  return (
    <div>
      <h1>opa opa opa</h1>
      {/* Acceso a la imagen directamente desde la carpeta public */}
      <img src="/bart.jpg" alt="mi logo" style={{ width: '15%' }} />
    </div>
  );
};

export default Imagen;