import {FC} from "react";

type TitleProps = {
    children: string;
}

export const Title: FC<TitleProps> = ({children}) => {
    return <h1 className="text-3xl text-white font-bold uppercase">{children}</h1>
}
