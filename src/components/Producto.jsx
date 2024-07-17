
const Producto = ({ producto, eliminarProducto }) => {
    const { id, nombre, categoria, precio } = producto;

    return (
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">Categoría: {categoria}</p>
                    <p className="card-text">Precio: ${precio}</p>
                    <button
                        className="btn btn-danger"
                        onClick={() => eliminarProducto(id)}
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Producto;
