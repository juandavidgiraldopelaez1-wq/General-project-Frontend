import { useEffect, useState } from "react";

const RecordarNombre = () => {
    const [nombre, setNombre] = useState(
        () => localStorage.getItem("nombre") || ""
    );

    useEffect(() => {
        localStorage.setItem("nombre", nombre);
    }, [nombre]);

    return (
        <>
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Escribe tu nombre"
            />

            <p>Hola, {nombre}</p>
        </>
    );
};

export default RecordarNombre;