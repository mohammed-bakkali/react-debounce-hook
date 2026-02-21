import { useState, useEffect } from "react";

const useDebounce = (value, delay = 500) => {
    const [useDebounceValue, setebounceValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(()=> {
            setebounceValue(value)
        },delay);

        return () => {
            clearTimeout(handler)
        };
    }, [value, delay]);

    return useDebounceValue
 };

 export default useDebounce