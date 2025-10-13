import { motion } from "framer-motion";
import { useEffect } from "react";
import { useIntl } from "react-intl";
import Footer from "../components/home/Footer";
import InfoCard from "../components/home/InfoCard";
import NavBar from "../components/home/NavBar";

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const intl = useIntl();

    type CardBodyBlock =
        | { type: "paragraph"; text: string }
        | { type: "highlight"; text: string }
        | { type: "list"; items: string[] };

    interface CardData {
        title: string;
        body: CardBodyBlock[];
    }

    const changeListItems = [
        intl.formatMessage({ id: "home.cards.changes.bullet.1" }),
        intl.formatMessage({ id: "home.cards.changes.bullet.2" }),
        intl.formatMessage({ id: "home.cards.changes.bullet.3" }),
        intl.formatMessage({ id: "home.cards.changes.bullet.4" }),
        intl.formatMessage({ id: "home.cards.changes.bullet.5" }),
    ];

    const aboutListItems = [
        intl.formatMessage({ id: "home.cards.about.bullet.1" }),
        intl.formatMessage({ id: "home.cards.about.bullet.2" }),
        intl.formatMessage({ id: "home.cards.about.bullet.3" }),
    ];

    const infoCardCopy: CardData[] = [
        {
            title: intl.formatMessage({ id: "home.cards.development.title" }),
            body: [
                { type: "paragraph", text: intl.formatMessage({ id: "home.cards.development.paragraph.1" }) },
                { type: "paragraph", text: intl.formatMessage({ id: "home.cards.development.paragraph.2" }) },
                { type: "paragraph", text: intl.formatMessage({ id: "home.cards.development.paragraph.3" }) },
                {
                    type: "list",
                    items: [
                        intl.formatMessage({ id: "home.cards.development.bullet.1" }),
                        intl.formatMessage({ id: "home.cards.development.bullet.2" }),
                        intl.formatMessage({ id: "home.cards.development.bullet.3" }),
                        intl.formatMessage({ id: "home.cards.development.bullet.4" }),
                        intl.formatMessage({ id: "home.cards.development.bullet.5" }),
                    ],
                },
                { type: "paragraph", text: intl.formatMessage({ id: "home.cards.development.paragraph.4" }) },
                { type: "paragraph", text: intl.formatMessage({ id: "home.cards.development.paragraph.5" }) },
                { type: "paragraph", text: intl.formatMessage({ id: "home.cards.development.paragraph.6" }) },
                { type: "paragraph", text: intl.formatMessage({ id: "home.cards.development.paragraph.7" }) },
            ],
        },
        {
            title: intl.formatMessage({ id: "home.cards.changes.title" }),
            body: [
                { type: "paragraph", text: intl.formatMessage({ id: "home.cards.changes.intro" }) },
                { type: "list", items: changeListItems },
                { type: "paragraph", text: intl.formatMessage({ id: "home.cards.changes.outro" }) },
            ],
        },
        {
            title: intl.formatMessage({ id: "home.cards.about.title" }),
            body: [
                { type: "paragraph", text: intl.formatMessage({ id: "home.cards.about.paragraph.1" }) },
                { type: "paragraph", text: intl.formatMessage({ id: "home.cards.about.paragraph.2" }) },
                { type: "highlight", text: intl.formatMessage({ id: "home.cards.about.emphasis" }) },
                { type: "list", items: aboutListItems },
                { type: "paragraph", text: intl.formatMessage({ id: "home.cards.about.paragraph.3" }) },
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800 font-poppins">
            {/* 顶部导航 */}
            <NavBar />

            {/* Hero Section */}
            <header id="hero" className="pt-28 md:pt-32 px-6">
                <section className="relative flex flex-col items-center justify-center text-center py-10">
                    <motion.img
                        src="/aus4d-logo.png"
                        alt={`${intl.formatMessage({ id: "home.brand" })} logo`}
                        className="w-44 md:w-60 mb-6 object-contain"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    />

                    <motion.h1
                        className="max-w-3xl text-4xl md:text-6xl font-extrabold tracking-tight text-green-900 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.6 }}
                    >
                        {intl.formatMessage({ id: "home.hero.title" })}
                    </motion.h1>

                    <motion.p
                        className="mt-4 max-w-2xl text-lg md:text-xl text-gray-700 font-light"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        {intl.formatMessage({ id: "home.hero.subtitle" })}
                    </motion.p>

                    <motion.div
                        className="mt-10 flex flex-wrap justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.6 }}
                    >
                        <a
                            href="#content"
                            className="rounded-full bg-green-700 px-6 py-3 text-lg font-semibold text-white hover:bg-green-800 transition"
                        >
                            {intl.formatMessage({ id: "home.hero.cta" })}
                            <span className="ml-2 text-sm opacity-80">
                {intl.formatMessage({ id: "home.hero.cta.soon" })}
              </span>
                        </a>
                    </motion.div>

                    {/* 手写 learn more + 下箭头 */}
                    <motion.div
                        className="mt-10 flex flex-col items-center text-green-800"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <p className="text-2xl italic font-handwritten">
                            {intl.formatMessage({ id: "home.hero.learnMore" })}
                        </p>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="mt-2 text-3xl"
                            aria-hidden
                        >
                            ↓
                        </motion.div>
                    </motion.div>
                </section>
            </header>

            {/* InfoCard 内容区（3 个下拉块） */}
            <section id="content" className="px-6 mt-12">
                <div className="mx-auto max-w-6xl space-y-2">
                    {infoCardCopy.map(({ title, body }) => (
                        <InfoCard key={title} title={title} body={body} />
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer id="footer" className="mt-16">
                <Footer />
            </footer>
        </main>
    );
}
