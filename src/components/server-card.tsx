import {FC} from "react";
import clsx from "clsx";
import {MapPin, Users} from "lucide-react";

const flagNames = {
    us: 'USA',
    br: 'Brazil',
}

type ServerCardProps = {
    name: string;
    flag?: 'us' | 'br';
    thumbnailUrl: string;
    thumbnailAlt?: string;
    href?: string;
    details: string[];
    playerCount: number;
    maxPlayers: number;
    inQue?: number;
}

function getPlayerCountColor(howFilled: number) {
    if (howFilled >= 95) {
        return 'text-red-500';
    }

    if (howFilled > 70) {
        return 'text-yellow-500';
    }

    return 'text-gray-400';
}

export const ServerCard: FC<ServerCardProps> = ({
                                                    name,
                                                    flag,
                                                    thumbnailUrl,
                                                    thumbnailAlt,
                                                    href,
                                                    details,
                                                    playerCount,
                                                    maxPlayers,
                                                    inQue
                                                }) => {
    const howFilled = Math.round((playerCount / maxPlayers) * 100);
    const playerCountColor = getPlayerCountColor(howFilled);

    return <div
        className="group duration-300 flex flex-col sm:flex-row sm:items-stretch space-x-4 text-white rounded-lg"
    >
        {/* Image */}
        <div className="mb-4 sm:mb-0 flex-shrink-0">
            <img
                className="mx-auto w-[146px] rounded shadow-md"
                src={thumbnailUrl}
                alt={thumbnailAlt}
            />
        </div>

        {/* Information */}
        <div className="flex flex-col min-w-0">
            {/* Title */}
            <div className="flex">
                {flag && <div className="flex items-center mr-2 flex-shrink-0">
                    <img
                        width="16"
                        src={`https://cdn.battlelog.com/bl-cdn/cdnprefix/1323198/public/common/flags/${flag.toLowerCase()}.gif`}
                        alt={flagNames[flag]}
                    />
                </div>}

                <h1
                    className={clsx('text-lg overflow-ellipsis whitespace-nowrap overflow-hidden truncate', {'hover:underline': href})}
                    title={name}
                >
                    {href && <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {name}
                    </a>}
                    {!href && name}
                </h1>
            </div>

            {/*Dead space because I'm too lazy to figure out how to handle the flag alignment*/}
            <div className="flex-grow"></div>

            {/* Details */}
            <h2 className="flex items-center gap-1 text-sm text-gray-400 tracking-tight">
                <MapPin size={18}/>
                <span>{details.join(' • ')}</span>
            </h2>

            <p className={clsx('flex items-center gap-1 text-sm', playerCountColor)}>
                <Users size={18} className="text-gray-400"/>
                <span>{playerCount}/{maxPlayers}</span>
                {!!inQue && <span>+ {inQue}</span>}
            </p>
        </div>
    </div>
}
