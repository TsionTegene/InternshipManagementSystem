'use client'
import { useRouter } from 'next/navigation';
import CardDetail from '@/components/carddetail/detail'; // Correct import statement
import { duration } from '@mui/material';

// Define mock opportunity data

const OpportunityDetailPage = ({ params }) => {
    const mockOpportunities = [
        { id: '1', field: 'software engineering intern', imageUrl: '/images/landing2.png', companyName: 'TotalTech', btn: 'Apply', duration: '3 Months', location: 'Hawassa' },
        { id: '2', field: 'computer science intern', imageUrl: '/images/landing2.png', companyName: 'Metatech', btn: 'Apply', duration: '3 Months', location: 'Hawassa' },
        { id: '3', field: 'software engineering intern', imageUrl: '/images/landing2.png', companyName: 'TotalTech', btn: 'Apply', duration: '3 Months', location: 'Hawassa' },
        { id: '4', field: 'computer science intern', imageUrl: '/images/landing2.png', companyName: 'Metatech', btn: 'Apply', duration: '3 Months', location: 'Hawassa' },
        { id: '5', field: 'computer science intern', imageUrl: '/images/landing2.png', companyName: 'Metatech', btn: 'Apply', duration: '3 Months', location: 'Hawassa' },
        { id: '6', field: 'software engineering intern', imageUrl: '/images/landing2.png', companyName: 'TotalTech', btn: 'Apply', duration: '3 Months', location: 'Hawassa' },
    ];
    const router = useRouter();

    // Find the opportunity with the matching opportunityId
    const opportunity = mockOpportunities.find(opp => opp.id === params.id);

    // Handle the case where opportunity is undefined
    if (!opportunity) {
        return <div>Opportunity not found</div>;
    }

    return (
        <div>
            <h1>Opportunity Detail</h1>
            <CardDetail field={opportunity.field} imageUrl={opportunity.imageUrl} location={opportunity.location} companyName={opportunity.companyName} btn={opportunity.btn} duration={opportunity.duration} />

        </div>
    );
};

export default OpportunityDetailPage;

