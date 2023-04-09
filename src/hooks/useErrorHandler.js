import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useErrorHandler = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleError = useCallback(
        (error) => {
            setError(error);
            navigate('/error', { replace: true }); // Hata sayfasına yönlendir
        },
        [navigate]
    );

    return { error, handleError };
};