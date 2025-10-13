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
    // 和文件一致的灰色占位视觉
    if (!media) {
        return (
            <div className="flex aspect-[16/9] w-full items-center justify-center rounded-lg bg-gray-200 text-sm text-gray-500">
                Media coming soon
            </div>
        );
    }

    if (media.kind === "video") {
        return (
            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-200">
                <video
                    src={media.src}
                    aria-label={media.alt}
                    loop
                    muted
                    autoPlay
                    playsInline
                    className="h-full w-full object-cover"
                />
            </div>
        );
    }

    return (
        <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-200">
            <img src={media.src} alt={media.alt} className="h-full w-full object-cover" />
        </div>
    );
};

const InfoCard: FC<InfoCardProps> = ({ title, body, media }) => {
    const [isOpen, setIsOpen] = useState(false);

    const renderBlocks = () =>
        body.map((block, index) => {
            const isLast = index === body.length - 1;

            if (block.type === "highlight") {
                return (
                    <p
                        key={`highlight-${index}`}
                        className={`text-lg font-semibold text-green-800 ${isLast ? "" : "mb-1"}`.trim()}
                    >
                        {block.text}
                    </p>
                );
            }

            if (block.type === "list") {
                return (
                    <ul
                        key={`list-${index}`}
                        className="list-disc pl-6 space-y-2 text-left text-lg text-gray-700"
                    >
                        {block.items.map((item, i) => (
                            <li key={`${i}-${item}`} className="leading-relaxed">
                                {item}
                            </li>
                        ))}
                    </ul>
                );
            }

            return (
                <p
                    key={`paragraph-${index}`}
                    className={`text-lg leading-relaxed text-gray-700 ${isLast ? "" : "mb-3"}`.trim()}
                >
                    {block.text}
                </p>
            );
        });

    const renderBody = () => (
        <div className="mt-3 w-full rounded-xl bg-gray-50 p-6">
            <div className="flex w-full items-start gap-8 md:flex-row md:items-start">
                <div className="w-full md:w-1/3 flex-shrink-0">{renderMedia(media)}</div>
                <div className="flex-1 text-left">
                    <div className="flex flex-col gap-3">{renderBlocks()}</div>
                </div>
            </div>
        </div>
    );

    return (
        <article className="mx-auto max-w-6xl border-b border-gray-200 py-4 font-poppins text-left">
            {/* 头部按钮与 + / −，样式对齐文件 */}
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex w-full items-center justify-between text-left focus:outline-none"
                aria-expanded={isOpen}
            >
        <span className="text-xl font-semibold text-green-800 hover:text-green-900 transition-colors md:text-2xl">
          {title}
        </span>
                <span className="text-2xl font-light text-green-800 md:text-3xl" aria-hidden>
          {isOpen ? "−" : "+"}
        </span>
            </button>

            {/* 动画展开区：使用与文件一致的过渡参数 */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="infocard-content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        {renderBody()}
                    </motion.div>
                )}
            </AnimatePresence>
        </article>
    );
};

export default InfoCard;
