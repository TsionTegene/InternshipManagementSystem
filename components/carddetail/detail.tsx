import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button';

interface isDetail {
    imageUrl: string;
    companyName: string;
    duration: string;
    location: string;
    requirements: string;
    numberOfApplicants: number;
    field: string;
    btn: any;

}

const cardDetail = ({ imageUrl, companyName, duration, location, requirements, numberOfApplicants, btn, field }: isDetail) => {

    return (
        <div>
            {imageUrl && <Image src={imageUrl} alt={''} width={200} height={100} className=''/>}
            {companyName && <p className="text-xl font-normal mb-2">{companyName}</p>}
            {location && <p className="text-xl font-normal mb-2">{location}</p>}
            {requirements && <p>{requirements}</p>}
            {duration && <p>{duration}</p>}
            {field && <p>{field}</p>}
            {numberOfApplicants && numberOfApplicants}
            {btn && <Button>{btn}</Button>}
        </div>
    )
};


export default cardDetail