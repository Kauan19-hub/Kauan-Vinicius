// Informações dos responsáveis
import { useEffect, useState } from "react";
import api from "../services/api";

export function useResponsavel() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        api.get("/responsavel/")
            .then((res) => setData(res.data))
            .catch((err) => console.error(err));
    }, []);

    return data;
}
