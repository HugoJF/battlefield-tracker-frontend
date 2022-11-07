import {FC} from "react";

const flagNames ={
    us: 'USA',
    br: 'Brazil',
}

type ServerCardProps = {
    name: string;
    flag: 'us' | 'br';
    thumbnailUrl: string;
    thumbnailAlt: string;
    href: string;
    details: string[];
    pills: string[];
}

export const ServerCard: FC<ServerCardProps> = ({name, flag, thumbnailUrl, thumbnailAlt, href, details, pills}) => {
    return <a
        href={href}
        target="_blank"
        className="duration-300 group flex flex-col sm:flex-row items-center space-x-4 p-4 my-4 text-white hover:bg-gray-800 rounded-lg" rel="noreferrer"
    >
        {/* Image */}
        <div className="mb-4 sm:mb-0 flex-shrink-0">
            <img
                className="w-[146px] rounded shadow-md"
                src={thumbnailUrl}
                alt={thumbnailAlt}
            />
        </div>

        {/* Information */}
        <div>
            {/* Title */}
            <div className="flex">
                <div className="flex items-center mr-2 flex-shrink-0">
                    <img
                        width="16"
                        src={`https://cdn.battlelog.com/bl-cdn/cdnprefix/1323198/public/common/flags/${flag.toLowerCase()}.gif`}
                        alt={flagNames[flag]}
                    />
                </div>
                <h1 className="text-xl">{name}</h1>
            </div>

            {/* Details */}
            <h2 className="text-gray-400 tracking-tight">
                {details.join(' • ')}
            </h2>

            {/* Pills */}
            <div className="mt-1 flex space-x-4 text-sm tracking-tight">
                {pills.map(pill => (
                    <div
                        className="flex py-1 px-3 text-gray-300 font-light bg-gray-800 rounded-full"
                    >
                        {pill}
                    </div>
                ))}
            </div>
        </div>
    </a>
}
