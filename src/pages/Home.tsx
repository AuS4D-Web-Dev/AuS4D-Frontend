import { motion } from "framer-motion";
import { useEffect } from "react";
import { useIntl } from "react-intl";
import Footer from "../components/home/Footer";
import InfoCard from "../components/home/InfoCard";
import NavBar from "../components/home/NavBar";

const revealMotionProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
} as const;

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const intl = useIntl();

    type CardBodyBlock =
        | { type: "paragraph"; text: string }
        | { type: "highlight"; text: string }
        | { type: "list"; items: string[] };

    type CardMedia = {
        kind: "image" | "video";
        src: string;
        alt: string;
    };

    interface CardData {
        title: string;
        body: CardBodyBlock[];
        media?: CardMedia;
    }

    const changeListItems = [
        intl.formatMessage({ id: "home.cards.changes.bullet.1" }),
        intl.formatMessage({ id: "home.cards.changes.bullet.2" }),
        intl.formatMessage({ id: "home.cards.changes.bullet.3" }),
        intl.formatMessage({ id: "home.cards.changes.bullet.4" }),
        intl.formatMessage({ id: "home.cards.changes.bullet.5" })
    ];

    const aboutListItems = [
        intl.formatMessage({ id: "home.cards.about.bullet.1" }),
        intl.formatMessage({ id: "home.cards.about.bullet.2" }),
        intl.formatMessage({ id: "home.cards.about.bullet.3" })
    ];

    const infoCardCopy: CardData[] = [
        {
            title: intl.formatMessage({ id: "home.cards.development.title" }),
            body: [
                { type: "paragraph", text: intl.formatMessage({ id: "home.cards.development.paragraph.1" }) },
                { type: "paragraph", text: intl.formatMessage({ id: "home.cards.development.paragraph.2" }) },
                { type: "paragraph", text: intl.formatMessage({ id: "home.cards.development.paragraph.3" }) },
                { type: "paragraph", text: intl.formatMessage({ id: "home.cards.development.paragraph.4" }) }
            ]
        },
        {
            title: intl.formatMessage({ id: "home.cards.changes.title" }),
            body: [
                { type: "list", items: changeListItems },
                { type: "paragraph", text: intl.formatMessage({ id: "home.cards.changes.outro" }) }
            ]
        },
        {
            title: intl.formatMessage({ id: "home.cards.about.title" }),
            body: [
                { type: "paragraph", text: intl.formatMessage({ id: "home.cards.about.paragraph.1" }) },
                { type: "highlight", text: intl.formatMessage({ id: "home.cards.about.emphasis" }) },
                { type: "list", items: aboutListItems }
            ]
        }
    ];

    const footerText = intl.formatMessage(
        { id: "home.footer.attribution" },
        { year: new Date().getFullYear().toString() }
    );

    return (
        <main className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white min-h-screen">
            <style>{`
        @media print {
          @page { size: A4; margin: 16mm; }
          .no-print { display: none !important; }
          body, main { color: #000 !important; background: #fff !important; }
          .print-bg-white { background: #fff !important; }
          .print-text-black { color: #000 !important; }
          .print-border { border-color: #000 !important; }
          .avoid-break { break-inside: avoid; page-break-inside: avoid; }
        }
      `}</style>

            <NavBar />

            <header id="hero" className="pt-28 md:pt-32 px-6">
                <div className="max-w-5xl mx-auto bg-white/5 rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl print-bg-white print-text-black">
                    <div className="flex items-center gap-4 md:gap-6">
                        <img
                            src="/logo.jpeg"
                            alt={`${intl.formatMessage({ id: "home.brand" })} logo`}
                            className="w-28 h-10 md:w-40 md:h-14 object-contain bg-white rounded-md p-2 print-bg-white"
                        />
                        <div>
                            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white print-text-black">
                                {intl.formatMessage({ id: "home.hero.title" })}
                            </h1>
                            <p className="text-sm md:text-base text-gray-300 mt-1 print-text-black">
                                {intl.formatMessage({ id: "home.hero.subtitle" })}
                            </p>
                        </div>
                    </div>
                    <motion.p {...revealMotionProps} className="mt-6 text-base md:text-lg text-gray-300 print-text-black">
                        {intl.formatMessage({ id: "home.hero.description" })}
                    </motion.p>
                    <div className="no-print mt-6">
                        <button
                            type="button"
                            onClick={() => window.print()}
                            className="px-4 py-2 rounded-xl bg-emerald-500/90 hover:bg-emerald-500 text-white font-medium shadow"
                        >
                            {intl.formatMessage({ id: "home.hero.printCta" })}
                        </button>
                    </div>
                </div>
            </header>

            <section id="about" className="px-6 mt-12">
                <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-6">
                    <div className="md:col-span-5 bg-white/5 rounded-2xl p-6 md:p-8 shadow-xl print-bg-white print-text-black">
                        <h2 className="text-2xl md:text-3xl font-bold text-emerald-300 mb-3 print-text-black">
                            {intl.formatMessage({ id: "home.about.heading" })}
                        </h2>
                        <p className="text-gray-300 leading-relaxed print-text-black">
                            {intl.formatMessage({ id: "home.about.intro" })}
                        </p>
                    </div>
                    <div className="md:col-span-7 bg-white/5 rounded-2xl p-6 md:p-8 shadow-xl print-bg-white print-text-black">
                        <h3 className="text-xl font-semibold mb-2 text-emerald-200 print-text-black">
                            {intl.formatMessage({ id: "home.about.highlight.heading" })}
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-300 print-text-black">
                            <li>{intl.formatMessage({ id: "home.about.highlight.item.1" })}</li>
                            <li>{intl.formatMessage({ id: "home.about.highlight.item.2" })}</li>
                            <li>{intl.formatMessage({ id: "home.about.highlight.item.3" })}</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="content" className="px-6 mt-12">
                <div className="max-w-5xl mx-auto space-y-6">
                    {infoCardCopy.map(({ title, body, media }) => (
                        <InfoCard
                            key={title}
                            title={title}
                            body={body}
                            media={media}
                        />
                    ))}
                </div>
            </section>

            <Footer text={footerText} />
        </main>
    );
}
