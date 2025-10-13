import { useIntl } from "react-intl";

const NavBar = () => {
    const intl = useIntl();

    const navItems = [
        { href: "#hero", label: intl.formatMessage({ id: "home.nav.home" }) },
        { href: "#content", label: intl.formatMessage({ id: "home.nav.faq" }) },
        { href: "#footer", label: intl.formatMessage({ id: "home.nav.contact" }) },
    ] as const;

    return (
        <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md shadow-sm font-poppins">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* Brand */}
                <a
                    href="#hero"
                    className="text-2xl font-extrabold tracking-tight text-green-900 hover:text-green-800 transition-colors"
                >
                    {intl.formatMessage({ id: "home.brand" })}
                </a>

                {/* Navigation links */}
                <div className="hidden space-x-8 md:flex">
                    {navItems.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            className="text-gray-700 text-sm font-medium hover:text-green-700 transition-colors"
                        >
                            {label}
                        </a>
                    ))}
                </div>

                {/* Mobile menu (optional future extension) */}
                <div className="flex md:hidden">
                    <button
                        className="rounded-lg p-2 text-green-800 hover:bg-green-100 focus:outline-none"
                        aria-label="Toggle navigation"
                    >
                        {/* You can later add a menu icon here */}
                        ☰
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
