import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./Home.module.css";

export default function Home() {
    const [count, setCount] = useState(0);

    return (
        <main className="mx-auto max-w-5xl p-8 text-center">
            <div className="flex items-center justify-center gap-6">
                <a href="https://vite.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} alt="Vite logo" className={`${styles.logo} inline-block`} />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img
                        src={reactLogo}
                        alt="React logo"
                        className={`${styles.logo} ${styles.react} ${styles.spin} inline-block`}
                    />
                </a>
            </div>

            <h1 className="mt-4 text-3xl font-bold">Vite + React + Tailwind</h1>

            <div className="mx-auto mt-5 max-w-md rounded-2xl border border-gray-200 p-6 shadow-sm dark:border-neutral-700">
                <button
                    onClick={() => setCount((c) => c + 1)}
                    className="rounded-xl border border-transparent bg-gray-900 px-4 py-2 font-semibold text-white transition hover:opacity-90 active:scale-95 focus:outline-none focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:bg-white dark:text-gray-900"
                >
                    count is {count}
                </button>

                <p className="mt-3 text-sm text-gray-600 dark:text-neutral-400">
                    Edit{" "}
                    <code className="rounded bg-gray-100 px-1 py-0.5 dark:bg-neutral-800 dark:text-neutral-200">
                        src/pages/Home.tsx
                    </code>{" "}
                    and save to test HMR
                </p>
            </div>

            <p className="mt-4 text-sm text-gray-500 dark:text-neutral-400">
                Click on the Vite and React logos to learn more
            </p>
        </main>
    );
}
