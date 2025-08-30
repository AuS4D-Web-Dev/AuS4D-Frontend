import { useEffect, useState } from "react";

export default function Test() {
    const [msg, setMsg] = useState("");

    useEffect(() => {
        fetch("/api/v1/test")
            .then((res) => res.text())
            .then((data) => setMsg(data));
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h1>Test Page</h1>
            <p>{msg}</p>
        </div>
    );
}
