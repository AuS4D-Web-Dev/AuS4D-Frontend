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

const InfoCard: FC<InfoCardProps> = ({ title, body, media }) => (
    <article className="bg-white/5 rounded-2xl p-6 md:p-8 shadow-xl print-bg-white print-text-black avoid-break">
        <div className="flex flex-col gap-6 md:flex-row">
            <div className="md:w-2/5 flex items-center justify-center">{renderMedia(media)}</div>
            <div className="md:w-3/5">
                <h2 className="text-2xl md:text-3xl font-bold text-emerald-300 mb-3 print-text-black">{title}</h2>
                <div className="flex flex-col gap-3">
                    {body.map((block, index) => {
                        const baseClasses = "text-base md:text-lg print-text-black";
                        const isLast = index === body.length - 1;

                        if (block.type === "highlight") {
                            return (
                                <p
                                    key={block.text}
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
                                key={block.text}
                                className={`${baseClasses} text-gray-300 leading-relaxed ${isLast ? "" : "mb-3"}`.trim()}
                            >
                                {block.text}
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    </article>
);

export default InfoCard;
