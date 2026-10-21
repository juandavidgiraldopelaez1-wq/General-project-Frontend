import { useEffect, useState } from "react";

const PersonajeApi = () => {
    const [personaje, setPersonaje] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function consultarPersonaje() {
            try {
                const respuesta = await fetch(
                    "https://rickandmortyapi.com/api/character/1"
                );

                if (!respuesta.ok) {
                    throw new Error("Error al consultar el personaje");
                }

                const datos = await respuesta.json();
                setPersonaje(datos);
            } catch (e) {
                setError("No se pudo cargar el personaje");
            } finally {
                setCargando(false);
            }
        }

        consultarPersonaje();
    }, []);

    return (
        <>
            {cargando ? (
                <p>Cargando...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <>
                    <img src={personaje.image} alt={personaje.name} />
                    <h2>{personaje.name}</h2>
                    <p>Especie: {personaje.species}</p>
                    <p>Estado: {personaje.status}</p>
                </>
            )}
        </>
    );
};

export default PersonajeApi;