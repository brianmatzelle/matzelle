import React from 'react';

const Link = ({ href, children }: {
    href: string;
    children: React.ReactNode;
}) => {
    return (
        <a className='text-[#005A43] hover:underline' href={href}>{children}</a>
    );
}

export { Link };