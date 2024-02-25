"use client"
import React from 'react';
import { IconType } from 'react-icons';

interface IsCard {
    title: string;
    description: string;
    icon: any;
}

const Card = ({ title, description, icon }: IsCard) => {
    return (
        <div className="flex flex-col card p-4 border border-gray-300 rounded-md shadow-md items-center " style={{ background: 'linear-gradient(to top, rgb(154, 208, 194), rgb(23, 107, 135))' }}>
            {icon && icon}
            {title && <h2 className="text-xl font-normal mb-2 text-white">{title}</h2>}
            {description && <p className='text-center'>{description}</p>}
        </div>
    );
};

export default Card;
