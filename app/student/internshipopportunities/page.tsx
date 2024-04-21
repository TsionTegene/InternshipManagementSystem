'use client'
import React, { useState } from 'react';
import Card from '@/components/card/Cards';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const Page = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredOpportunities, setFilteredOpportunities] = useState([]);

  const opportunities = [
    { id: 1, title: 'lorem ipsum 1', imageUrl: '/images/landing2.png', startdate: '14/07/2024', enddate: '11/09/2024', address: 'Hawassa' },
    { id: 2, title: 'lorem ipsum 2', imageUrl: '/images/landing2.png', startdate: '22/01/2024', enddate: '24/05/2024', address: 'Addis Abeba' },
    { id: 3, title: 'lorem ipsum 3', imageUrl: '/images/landing2.png', startdate: '00/00/00', enddate: '00/00/00', address: 'Addis Abeba' },
    { id: 4, title: 'lorem ipsum 4', imageUrl: '/images/landing2.png', startdate: '00/00/00', enddate: '00/00/00', address: 'Addis Abeba' },
    { id: 5, title: 'lorem ipsum 5', imageUrl: '/images/landing2.png', startdate: '00/00/00', enddate: '00/00/00', address: 'Addis Abeba' },
    { id: 6, title: 'lorem ipsum 6', imageUrl: '/images/landing2.png', startdate: '00/00/00', enddate: '00/00/00', address: 'Addis Abeba' }
  ];

  // Function to handle search query change
  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
    // Filter opportunities based on search query
    const filtered = opportunities.filter(opportunity => opportunity.title.toLowerCase().includes(value.toLowerCase()));
    setFilteredOpportunities(filtered);
  };

  // Render either filtered opportunities or all opportunities
  const renderOpportunities = () => {
    const dataToRender = searchQuery ? filteredOpportunities : opportunities;
    return dataToRender.map((opportunity) => (
      <Link key={opportunity.id} href={`/student/internshipopportunities/${opportunity.id}`} onClick={() => console.log('Navigating to detail:', opportunity.id)}>
        <Card
          title={opportunity.title}
          imageUrl={opportunity.imageUrl}
          startdate={opportunity.startdate}
          enddate={opportunity.enddate}
          address={opportunity.address}
        />
      </Link>
    ));
  };

  return (
    <div className=''>
      <Input className='flex rounded-full w-10/12 ml-14 -mt-2' placeholder='Search...' value={searchQuery} onChange={handleSearchChange} />
      <div className="grid grid-cols-2 gap-16 ml-15 justify-evenly m-5 mt-10">
        {renderOpportunities()}
      </div>
    </div>
  );
};

export default Page;
