import { useEffect, useState } from "react";
import api from "../services/api";

export function useLocal() {
    const [data, setData] = useState([]);

    useEffect(() => {
        api.get("/local/")
            .then((res) => setData(res.data))
            .catch((err) => console.error(err));
    }, []);

    return data;
}
