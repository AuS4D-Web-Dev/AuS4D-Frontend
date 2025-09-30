import { useIntl } from "react-intl";

const NavBar = () => {
    const intl = useIntl();
    const navItems = [
        { href: "#hero", label: intl.formatMessage({ id: "home.nav.home" }) },
        { href: "#about", label: intl.formatMessage({ id: "home.nav.about" }) },
        { href: "#content", label: intl.formatMessage({ id: "home.nav.faq" }) },
        { href: "#footer", label: intl.formatMessage({ id: "home.nav.contact" }) }
    ] as const;

    return (
        <nav className="no-print fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <span className="text-xl font-bold text-emerald-400">{intl.formatMessage({ id: "home.brand" })}</span>
                <div className="space-x-6 text-sm">
                    {navItems.map(({ label, href }) => (
                        <a key={href} href={href} className="cursor-pointer hover:text-emerald-300 transition-colors">
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
