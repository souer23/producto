
import Producto from './Producto';

const ListadoProductos = ({ productos, eliminarProducto }) => {
    return (
        <div>
            <h2>Listado de Productos</h2>
            <div className="row">
                {productos.map((producto) => (
                    <Producto
                        key={producto.id}
                        producto={producto}
                        eliminarProducto={eliminarProducto}
                    />
                ))}
            </div>
        </div>
    );
};

export default ListadoProductos;
