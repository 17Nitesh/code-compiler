import { useState } from "react";
import axios from "axios";

export default function useCodeEditor() {
    const [output, setOutput] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const execute = async (code: string, language: string) => {
        setLoading(true);
        setError(null);
        setOutput("");
        try {
            const response = await axios.post(import.meta.env.VITE_API_URI, {
                code,
                language
            })
            setOutput(response.data.output);


        } catch (err: any) {
            setError(err?.message || "An error occured");
        } finally {
            setLoading(false);
        }
    }
    return { output, loading, error, execute };
}