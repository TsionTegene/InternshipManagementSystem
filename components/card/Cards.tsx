"use client"
import React from 'react';
import { IconType } from 'react-icons';

interface IsCard {
    title: any;
    description: any;
    icon: any;
    imageUrl: string;
    startdate: string;
    enddate: string;
    address: string;
    id: any;
}

const Card = ({ id, title, description, icon, imageUrl, startdate, enddate, address }: IsCard) => {
    return (
        <div className="flex flex-col card p-4  rounded-md shadow-lg items-center " style={{ background: 'linear-gradient(to top, rgb(154, 208, 194), rgb(23, 107, 135))', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)' }}>
            {icon && icon}
            {id && id}
            {imageUrl && <img src={imageUrl} alt={title} className="h-30 w-40 mb-2" />}
            {title && <h2 className="text-xl font-normal mb-2 text-white">{title}</h2>}
            {description && <p className='text-center'>{description}</p>}
            {startdate && <p>Start Date: {startdate}</p>}
            {enddate && <p>End Date: {enddate}</p>}
            {address && <p>Address: {address}</p>}
        </div>
    );
};

export default Card;
