// Informações das medições
import { useEffect, useState } from "react";
import api from "../services/api";

export function useMedicao() {
    const [data, setData] = useState([]);

    useEffect(() => {
        api.get("/medicao/")
            .then((res) => setData(res.data))
            .catch((err) => console.error(err));
    }, []);

    return data;
}
