import React from 'react';

export default function FilterButton({...props}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={"px-3 py-1 border-2 rounded-xl w-36"} {...props} />
    );
}

