import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { FC, ReactNode } from "react";

type MediaKind = "image" | "video";

interface MediaProps {
    kind: MediaKind;
    src: string;
    alt: string;
}

type BodyBlock =
    | { type: "paragraph"; text: string }
    | { type: "highlight"; text: string }
    | { type: "list"; items: string[] };

interface InfoCardProps {
    title: string;
    body: BodyBlock[];
    media?: MediaProps;
}

const renderMedia = (media?: MediaProps): ReactNode => {
    if (!media) {
        return (
            <div className="flex h-40 w-full items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-sm text-emerald-200/80">
                Media coming soon
            </div>
        );
    }

    if (media.kind === "video") {
        return (
            <video
                src={media.src}
                aria-label={media.alt}
                loop
                muted
                autoPlay
                playsInline
                className="h-full w-full rounded-xl object-cover"
            />
        );
    }

    return <img src={media.src} alt={media.alt} className="h-full w-full rounded-xl object-cover" />;
};

const InfoCard: FC<InfoCardProps> = ({ title, body, media }) => {
    const [isOpen, setIsOpen] = useState(false);

    const renderBlocks = () =>
        body.map((block, index) => {
            const baseClasses = "text-base md:text-lg print-text-black";
            const isLast = index === body.length - 1;

            if (block.type === "highlight") {
                return (
                    <p
                        key={`highlight-${block.text}`}
                        className={`${baseClasses} text-emerald-200 font-semibold ${isLast ? "" : "mb-1"}`.trim()}
                    >
                        {block.text}
                    </p>
                );
            }

            if (block.type === "list") {
                return (
                    <ul
                        key={`list-${index}`}
                        className="list-disc pl-5 space-y-2 text-gray-200 text-base md:text-lg print-text-black"
                    >
                        {block.items.map((item) => (
                            <li key={item} className="text-gray-200 leading-relaxed print-text-black">
                                {item}
                            </li>
                        ))}
                    </ul>
                );
            }

            return (
                <p
                    key={`paragraph-${block.text}`}
                    className={`${baseClasses} text-gray-300 leading-relaxed ${isLast ? "" : "mb-3"}`.trim()}
                >
                    {block.text}
                </p>
            );
        });

    const renderBody = () => (
        <div className="flex flex-col gap-6 md:flex-row">
            <div className="md:w-2/5 flex items-center justify-center">{renderMedia(media)}</div>
            <div className="md:w-3/5">
                <div className="flex flex-col gap-3">{renderBlocks()}</div>
            </div>
        </div>
    );

    return (
        <article className="bg-white/5 rounded-2xl p-6 md:p-8 shadow-xl print-bg-white print-text-black avoid-break">
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex w-full items-center justify-between text-left print:hidden"
                aria-expanded={isOpen}
            >
                <span className="text-2xl md:text-3xl font-bold text-emerald-300 print-text-black">{title}</span>
                <span className="text-emerald-200 text-xl md:text-2xl" aria-hidden="true">
                    {isOpen ? "–" : "+"}
                </span>
            </button>
            <h2 className="hidden text-2xl md:text-3xl font-bold text-emerald-300 print:block print:text-black">
                {title}
            </h2>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="infocard-content"
                        initial={{ height: 0, opacity: 0, scale: 0.98 }}
                        animate={{ height: "auto", opacity: 1, scale: 1 }}
                        exit={{ height: 0, opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden print:hidden"
                    >
                        <div className="mt-6">{renderBody()}</div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="hidden mt-6 print:block">{renderBody()}</div>
        </article>
    );
};

export default InfoCard;
