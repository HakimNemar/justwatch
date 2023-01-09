import { useEffect, useState } from 'react';

const useRequest = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            url().then(movies => {
                setData(movies);
            });
        }
        catch {
            setError("Désolé mais nos services son momentanément indisponible ");
        }
    }, [url]);

    return [data, error];
};

export default useRequest;