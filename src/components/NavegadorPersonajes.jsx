import { useEffect, useState } from "react";

const NavegadorPersonajes = () => {
    const [id, setId] = useState(1);
    const [personaje, setPersonaje] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const controlador = new AbortController();

        async function consultarPersonaje() {
            setCargando(true);
            setError("");

            try {
                const respuesta = await fetch(
                    `https://rickandmortyapi.com/api/character/${id}`,
                    { signal: controlador.signal }
                );

                if (!respuesta.ok) {
                    throw new Error("No se pudo cargar el personaje");
                }

                const datos = await respuesta.json();
                setPersonaje(datos);
            } catch (e) {
                if (e.name !== "AbortError") {
                    setError("Error al cargar el personaje");
                }
            } finally {
                if (!controlador.signal.aborted) {
                    setCargando(false);
                }
            }
        }

        consultarPersonaje();

        return () => {
            controlador.abort();
        };
    }, [id]);

    function anterior() {
        setId(id => Math.max(1, id - 1));
    }

    function siguiente() {
        setId(id => id + 1);
    }

    return (
        <>
            <button onClick={anterior} disabled={id === 1}>
                Anterior
            </button>

            <button onClick={siguiente}>
                Siguiente
            </button>

            <p>ID: {id}</p>

            {cargando ? (
                <p>Cargando...</p>
            ) : error ? (
                <p>{error}</p>
            ) : personaje ? (
                <>
                    <img src={personaje.image} alt={personaje.name} />
                    <h2>{personaje.name}</h2>
                    <p>Especie: {personaje.species}</p>
                    <p>Estado: {personaje.status}</p>
                </>
            ) : null}
        </>
    );
};

export default NavegadorPersonajes;