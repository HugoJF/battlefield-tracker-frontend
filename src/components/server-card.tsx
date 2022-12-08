import {FC} from "react";
import clsx from "clsx";

const flagNames = {
    us: 'USA',
    br: 'Brazil',
}

type ServerCardProps = {
    name: string;
    flag?: 'us' | 'br';
    thumbnailUrl: string;
    thumbnailAlt: string;
    href?: string;
    details: string[];
    pills: string[];
}

export const ServerCard: FC<ServerCardProps> = ({name, flag, thumbnailUrl, thumbnailAlt, href, details, pills}) => {
    return <div
        className="group duration-300 flex flex-col sm:flex-row sm:items-center space-x-4 px-1 sm:p-4 my-4 text-white rounded-lg"
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
        <div>
            {/* Title */}
            <div className="flex">
                {flag && <div className="flex items-center mr-2 flex-shrink-0">
                    <img
                        width="16"
                        src={`https://cdn.battlelog.com/bl-cdn/cdnprefix/1323198/public/common/flags/${flag.toLowerCase()}.gif`}
                        alt={flagNames[flag]}
                    />
                </div>}

                <h1 className={clsx('text-xl', {'hover:underline': href})}>
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
    </div>
}
