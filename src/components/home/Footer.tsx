import type { FC } from "react";

interface FooterProps {
    id?: string;
}

const Footer: FC<FooterProps> = ({ id = "footer" }) => (
    <footer
        id={id}
        className="bg-green-800 text-white py-10 text-center mt-auto font-poppins"
    >
        <p className="text-lg font-medium">
            © {new Date().getFullYear()} Australian Students for Development Network
        </p>
        <p className="text-sm mt-2 text-green-200">
            Building connections for a more just and sustainable world.
        </p>
    </footer>
);

export default Footer;
