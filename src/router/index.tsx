import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Test from "../pages/Test";
import Home from "../pages/Home";
import About from '../pages/About';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <nav style={{ padding: 10 }}>
                <Link to="/">Home</Link> | <Link to="/test">Test</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<Test />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}
