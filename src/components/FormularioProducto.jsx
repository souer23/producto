import { useState } from 'react';

const FormularioProducto = ({ agregarProducto }) => {
    const [nombre, setNombre] = useState('');
    const [categoria, setCategoria] = useState('');
    const [precio, setPrecio] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre.trim() || !categoria.trim() || !precio.trim()) {
            alert('Por favor completa todos los campos.');
            return;
        }
        if (isNaN(parseFloat(precio))) {
            alert('El precio debe ser un número válido.');
            return;
        }

        const nuevoProducto = {
            id: Date.now(), 
            nombre,
            categoria,
            precio: parseFloat(precio).toFixed(2), 
        };

        agregarProducto(nuevoProducto);

        setNombre('');
        setCategoria('');
        setPrecio('');
    };

    return (
        <div>
            <h2>Agregar Nuevo Producto</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Categoría:</label>
                    <input
                        type="text"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Precio:</label>
                    <input
                        type="text"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Agregar Producto</button>
            </form>
        </div>
    );
};

export default FormularioProducto;