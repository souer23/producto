import { useState, useEffect } from 'react';
import FormularioProducto from './FormularioProducto';
import ListadoProductos from './ListadoProductos';

const CatalogoProductos = () => {
    const [productos, setProductos] = useState([]);

    const agregarProducto = (nuevoProducto) => {
        setProductos([...productos, nuevoProducto]);
    };

    const eliminarProducto = (id) => {
        const productosActualizados = productos.filter(producto => producto.id !== id);
        setProductos(productosActualizados);
    };
    useEffect(() => {
        const productosGuardados = JSON.parse(localStorage.getItem('productos'));
        if (productosGuardados) {
            setProductos(productosGuardados);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('productos', JSON.stringify(productos));
    }, [productos]);

    return (
        <div className="container">
            <h1>Catálogo de Productos</h1>
            <FormularioProducto agregarProducto={agregarProducto} />
            <ListadoProductos productos={productos} eliminarProducto={eliminarProducto} />
        </div>
    );
};

export default CatalogoProductos;
