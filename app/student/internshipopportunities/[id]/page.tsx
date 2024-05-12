"use client";
import { useRouter } from "next/navigation";
import CardDetail from "@/components/carddetail/detail"; // Correct import statement
import { duration } from "@mui/material";
import { useInternshipByID } from "@/queries/useStudentQueries";
import { useEffect } from "react";

// Define mock opportunity data
const stdFlag = localStorage.getItem("stdFlag")

const OpportunityDetailPage = ({ params }) => {
  const router = useRouter();
  const { data: mockOpportunities, isSuccess } = useInternshipByID(params.id);

  useEffect(() => {
    // Check if data has been successfully fetched
    if (isSuccess) {
      console.log("Detail intern", mockOpportunities);
    }
  }, [isSuccess, mockOpportunities]);

  if (!isSuccess) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <CardDetail
        title={mockOpportunities[0]?.title}
        imageUrl={mockOpportunities[0]?.imageUrl}
        location={mockOpportunities[0]?.location}
        companyName={mockOpportunities[0]?.companyName}
        btn={stdFlag}
        startDate={mockOpportunities[0]?.startDate}
        endDate={mockOpportunities[0]?.endDate}
        deadline={mockOpportunities[0]?.deadline}
        schedule={mockOpportunities[0]?.schedule}
        compensations={mockOpportunities[0]?.compensations}
        responsibilities={mockOpportunities[0]?.description?.responsibilities}
        qualifications={mockOpportunities[0]?.description?.qualifications}
            />
    


    </div>
  );
};

export default OpportunityDetailPage;
