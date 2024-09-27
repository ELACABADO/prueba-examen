import { useState } from "react";

export default function ListaCompras() {
  const [listaCompras, setListaCompras] = useState([{ producto: "leche", checked: false }]);
  const [producto, setProducto] = useState("");

  const toggleCheckbox = (index) => {
    const nuevaLista = [...listaCompras];
    nuevaLista[index].checked = !nuevaLista[index].checked;
    setListaCompras(nuevaLista);
  };

  return (
    <>
      <label htmlFor="producto">Nombre del producto</label>
      <input
        id="producto"
        type="text"
        value={producto}
        onChange={(e) => setProducto(e.target.value)}
      />
      <input
        type="button"
        value="Añadir"
        onClick={() => {
          setListaCompras([...listaCompras, { producto: producto, checked: false }]);
          setProducto("");
        }}
      />
      
      {listaCompras.map((producto, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={producto.checked}
            onChange={() => toggleCheckbox(index)}
          />
          <label htmlFor={`producto-${index}`}>{producto.producto}</label>
        </div>
      ))}
    </>
  );
}
