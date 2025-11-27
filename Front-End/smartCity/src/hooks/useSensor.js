import { useEffect, useState } from "react";
import api from "../services/api";

export function useSensor() {
    const [data, setData] = useState([]);

useEffect(() => {
    const token = localStorage.getItem("access");
    if (!token) return; 

    api.get("/sensor/") 
        .then(res => setData(res.data)) 
        .catch(err => console.error(err)); 
    }, []);

    return data;
}
A
