import { useEffect, useState } from "react";

const Cronometro = () => {
    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setSegundos((actual) => actual + 1);
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <>
            <p>Segundos: {segundos}</p>
        </>
    );
};

export default Cronometro;