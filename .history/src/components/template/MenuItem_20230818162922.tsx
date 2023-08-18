import React from 'react';
import Link from 'next/link';

interface InternalLinkProps {
    url: string;
    className?: string;
    onClick?: (evento: React.MouseEvent<HTMLAnchorElement>) => void;
    children: React.ReactNode;
}

const InternalLink: React.FC<InternalLinkProps> = ({ url, className, onClick, children }) => {
    return (
        <Link legacyBehavior href={url}>
            <a className={className} onClick={onClick}>
                {children}
            </a>
        </Link>
    );
};

interface MenuItemProps {
    texto: string;
    icone: React.ReactNode;
    url?: string;
    className?: string;
    onClick?: (evento: React.MouseEvent<HTMLLIElement>) => void;
}

export default function MenuItem(props: MenuItemProps) {
    function renderizarLink() {
        return (
            <InternalLink url={props.url} className={`
                    flex flex-col justify-center items-center
                    h-20 w-20
                    dark:text-gray-200
                    ${props.className}
                `}>
                {props.icone}
                <span className={`text-xs font-light`}>
                    {props.texto}
                </span>
            </InternalLink>
        );
    }
    return (
        <li onClick={props.onClick} className={`hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer`}>
            {renderizarLink()}
        </li>
    );
}
