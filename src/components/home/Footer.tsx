import type { FC } from "react";

interface FooterProps {
    id?: string;
    text: string;
}

const Footer: FC<FooterProps> = ({ id = "footer", text }) => (
    <footer id={id} className="px-6 py-12">
        <div className="max-w-5xl mx-auto text-center text-gray-400 print-text-black">
            <hr className="border-gray-700 print-border mb-6" />
            <p className="text-sm print-text-black">{text}</p>
        </div>
    </footer>
);

export default Footer;
