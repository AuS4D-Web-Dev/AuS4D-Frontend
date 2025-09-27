import { motion } from "framer-motion";
import { useEffect } from "react";

/*
  How to use the logo:
  - Save the provided logo file to /public/aus4d-logo.jpg (or .png)
  - Update the src below if you use a different path/name
*/

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Simple helper to disable motion when printing
    const motionProps = {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    } as const;

    return (
        <main className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white min-h-screen">
            {/* Print styles */}
            <style>{`
        @media print {
          @page { size: A4; margin: 16mm; }
          /* Hide interactive/animated-only UI in print */
          .no-print { display: none !important; }
          /* Use light text for print readability */
          body, main { color: #000 !important; background: #fff !important; }
          .print-bg-white { background: #fff !important; }
          .print-text-black { color: #000 !important; }
          .print-border { border-color: #000 !important; }
          /* Expand accordions for print */
          details { open: open; }
          /* Avoid orphan headings and broken cards */
          .avoid-break, h2, h3 { break-inside: avoid; page-break-inside: avoid; }
        }
      `}</style>

            {/* Navbar (hidden in print) */}
            <nav className="no-print fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <span className="text-xl font-bold text-emerald-400">AuS4D</span>
                    <div className="space-x-6 text-sm">
                        <a href="#hero" className="cursor-pointer hover:text-emerald-300 transition-colors">Home</a>
                        <a href="#about" className="cursor-pointer hover:text-emerald-300 transition-colors">About</a>
                        <a href="#content" className="cursor-pointer hover:text-emerald-300 transition-colors">FAQs</a>
                        <a href="#footer" className="cursor-pointer hover:text-emerald-300 transition-colors">Contact</a>
                    </div>
                </div>
            </nav>

            {/* Header for PDF (shows on both web & print) */}
            <header id="hero" className="pt-28 md:pt-32 px-6">
                <div className="max-w-5xl mx-auto bg-white/5 rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl print-bg-white print-text-black">
                    <div className="flex items-center gap-4 md:gap-6">
                        <img
                            src="/logo.jpeg"
                            alt="AuS4D logo"
                            className="w-28 h-10 md:w-40 md:h-14 object-contain bg-white rounded-md p-2 print-bg-white"
                        />
                        <div>
                            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white print-text-black">
                                Australian Students for Development
                            </h1>
                            <p className="text-sm md:text-base text-gray-300 mt-1 print-text-black">
                                A student-led network for international development & humanitarian action
                            </p>
                        </div>
                    </div>

                    {/* Web hero subcopy (kept subtle for PDF) */}
                    <motion.p {...motionProps} className="mt-6 text-base md:text-lg text-gray-300 print-text-black">
                        Smooth animations on web, clear structure on PDF — built with React, Tailwind, and Framer Motion.
                    </motion.p>

                    {/* Print button (hidden when printing) */}
                    <div className="no-print mt-6">
                        <button onClick={() => window.print()} className="px-4 py-2 rounded-xl bg-emerald-500/90 hover:bg-emerald-500 text-white font-medium shadow">
                            Print to PDF
                        </button>
                    </div>
                </div>
            </header>

            {/* About */}
            <section id="about" className="px-6 mt-12">
                <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-6">
                    <motion.div {...motionProps} className="md:col-span-5 bg-white/5 rounded-2xl p-6 md:p-8 shadow-xl print-bg-white print-text-black">
                        <h2 className="text-2xl md:text-3xl font-bold text-emerald-300 mb-3 print-text-black">About AuS4D</h2>
                        <p className="text-gray-300 leading-relaxed print-text-black">
                            We connect students and early‑career practitioners across disciplines, universities and pathways to learn,
                            connect and collaborate on just, sustainable development.
                        </p>
                    </motion.div>
                    <motion.div {...motionProps} className="md:col-span-7 bg-white/5 rounded-2xl p-6 md:p-8 shadow-xl avoid-break print-bg-white print-text-black">
                        <h3 className="text-xl font-semibold mb-2 text-emerald-200 print-text-black">What you can expect</h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-300 print-text-black">
                            <li>Talks with practitioners and academics</li>
                            <li>Student‑led events and collaborative projects</li>
                            <li>Career pathways and mentoring opportunities</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* FAQ / Content mapped from your document */}
            <section id="content" className="px-6 mt-12">
                <div className="max-w-5xl mx-auto space-y-6">
                    {/* Card 1 */}
                    <article className="bg-white/5 rounded-2xl p-6 md:p-8 shadow-xl print-bg-white print-text-black avoid-break">
                        <h2 className="text-2xl md:text-3xl font-bold text-emerald-300 mb-4 print-text-black">What is International Development?</h2>
                        <p className="text-gray-300 leading-relaxed mb-3 print-text-black">
                            International development is about understanding and responding to the ways our world is changing — socially, economically,
                            politically, culturally, and environmentally. It is concerned with human well‑being, justice, and sustainability, while recognising
                            that “development” is debated and contested.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-3 print-text-black">
                            It refers both to broad processes of change (in economies, governance, communities and environments) and to intentional efforts to
                            address global challenges like poverty reduction, human rights, peacebuilding, climate action and sustainable futures.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-3 print-text-black">
                            Questions of power and justice sit at the centre: Who decides what progress looks like? Whose voices are included? How can we avoid
                            reproducing colonial legacies or new inequalities? It is an interdisciplinary space drawing on politics, economics, anthropology,
                            law, geography, history, gender and environmental studies.
                        </p>
                        <p className="text-gray-300 leading-relaxed print-text-black">
                            Ultimately, it is about working together across borders and scales to imagine and build fairer, more sustainable and more inclusive futures.
                        </p>
                    </article>

                    {/* Card 2 */}
                    <article className="bg-white/5 rounded-2xl p-6 md:p-8 shadow-xl print-bg-white print-text-black avoid-break">
                        <h2 className="text-2xl md:text-3xl font-bold text-emerald-300 mb-4 print-text-black">What’s changing in international development right now?</h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-300 print-text-black">
                            <li><b>Shrinking aid budgets:</b> Many governments are cutting or redirecting aid, often towards short‑term relief or domestic priorities.</li>
                            <li><b>Institutional shifts:</b> Major agencies are being restructured, disrupting projects and raising questions about future leadership.</li>
                            <li><b>Geopolitics over poverty:</b> Aid is increasingly tied to national interests such as security, trade and migration control.</li>
                            <li><b>Pressure on vulnerable sectors:</b> Health, climate and fragile states face funding strain, reducing long‑term solutions.</li>
                            <li><b>New approaches:</b> Emphasis on efficiency, innovation, local leadership and stronger partnerships is growing.</li>
                        </ul>
                        <p className="mt-3 text-gray-300 print-text-black">
                            These shifts show how contested and political development is — and why spaces like AuS4D are needed to make sense of change and explore how young people can contribute to a fairer, more sustainable world.
                        </p>
                    </article>

                    {/* Card 3 */}
                    <article className="bg-white/5 rounded-2xl p-6 md:p-8 shadow-xl print-bg-white print-text-black avoid-break">
                        <h2 className="text-2xl md:text-3xl font-bold text-emerald-300 mb-4 print-text-black">What is AuS4D?</h2>
                        <p className="text-gray-300 leading-relaxed mb-3 print-text-black">
                            The Australian Students for Development (AuS4D) Network is Australia’s first student‑led network for international development and humanitarian action, connecting students and early‑career practitioners across disciplines, universities and career pathways.
                        </p>
                        <h3 className="text-xl font-semibold mt-2 mb-2 text-emerald-200 print-text-black">AuS4D exists to:</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-300 print-text-black">
                            <li><b>Learn</b> — engage with experts and practitioners to understand current debates and challenges.</li>
                            <li><b>Connect</b> — build a community committed to justice, equity and sustainability.</li>
                            <li><b>Collaborate</b> — create opportunities to work together on events, projects and ideas that drive meaningful change.</li>
                        </ul>
                    </article>
                </div>
            </section>

            {/* Footer */}
            <footer id="footer" className="px-6 py-12">
                <div className="max-w-5xl mx-auto text-center text-gray-400 print-text-black">
                    <hr className="border-gray-700 print-border mb-6" />
                    <p className="text-sm">
                        © {new Date().getFullYear()} AuS4D — Built by Leran Peng & Runzhi Zhao (UWA). For print enquiries, contact info@aus4d.org.
                    </p>
                </div>
            </footer>
        </main>
    );
}
