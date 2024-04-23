"use client";
import { useRouter } from "next/navigation";
import CardDetail from "@/components/carddetail/detail"; // Correct import statement
import { duration } from "@mui/material";

// Define mock opportunity data

const OpportunityDetailPage = ({ params }) => {
  const mockOpportunities = [
    {
      id: "1",
      title: "software engineering intern",
      imageUrl: "/images/lady.jpg",
      companyName: "TotalTech solution provider",
      btn: "Apply",
      startDate: "12/12/12",
      endDate: "12/12/12",
      schedule: "Full Time",
      compensations: "Paid",
      responsibilities: [
        "Developing web applications",
        "Testing software components",
      ],
      qualifications: [
        "Strong programming skills",
        "Familiarity with HTML,CSS and Javascript",
      ],
      applicationInstructions: "Please submit your resume and cover letter.",
      location: "Hawassa",
      deadline: "12/12/12",
    },
    {
      id: "2",
      title: "computer science intern",
      imageUrl: "/images/landing2.png",
      companyName: "Metatech",
      btn: "Apply",
      startDate: "12/12/12",
      endDate: "12/12/12",
      schedule: "Full Time",
      compensations: "Paid",
      responsibilities: [
        "Developing web applications",
        "Testing software components",
      ],
      qualifications: [
        "Strong programming skills",
        "Familiarity with HTML,CSS and Javascript",
      ],
      applicationInstructions: "Please submit your resume and cover letter.",
      location: "Hawassa",
      deadline: "12/12/12",
    },
    {
      id: "3",
      title: "software engineering intern",
      imageUrl: "/images/landing2.png",
      companyName: "TotalTech",
      btn: "Apply",
      startDate: "12/12/12",
      endDate: "12/12/12",
      schedule: "Full Time",
      compensations: "Paid",
      responsibilities: [
        "Developing web applications",
        "Testing software components",
      ],
      qualifications: [
        "Strong programming skills",
        "Familiarity with HTML,CSS and Javascript",
      ],
      applicationInstructions: "Please submit your resume and cover letter.",
      location: "Hawassa",
      deadline: "12/12/12",
    },
    {
      id: "4",
      title: "computer science intern",
      imageUrl: "/images/landing2.png",
      companyName: "Metatech",
      btn: "Apply",
      startDate: "12/12/12",
      endDate: "12/12/12",
      schedule: "Full Time",
      compensations: "Paid",
      responsibilities: [
        "Developing web applications",
        "Testing software components",
      ],
      qualifications: [
        "Strong programming skills",
        "Familiarity with HTML,CSS and Javascript",
      ],
      applicationInstructions: "Please submit your resume and cover letter.",
      location: "Hawassa",
      deadline: "12/12/12",
    },
    {
      id: "5",
      title: "computer science intern",
      imageUrl: "/images/landing2.png",
      companyName: "Metatech",
      btn: "Apply",
      startDate: "12/12/12",
      endDate: "12/12/12",
      schedule: "Full Time",
      compensations: "Paid",
      responsibilities: [
        "Developing web applications",
        "Testing software components",
      ],
      qualifications: [
        "Strong programming skills",
        "Familiarity with HTML,CSS and Javascript",
      ],
      applicationInstructions: "Please submit your resume and cover letter.",
      location: "Hawassa",
      deadline: "12/12/12",
    },
    {
      id: "6",
      title: "software engineering intern",
      imageUrl: "/images/landing2.png",
      companyName: "TotalTech",
      btn: "Apply",
      startDate: "12/12/12",
      endDate: "12/12/12",
      schedule: "Full Time",
      compensations: "Paid",
      responsibilities: [
        "Developing web applications",
        "Testing software components",
      ],
      qualifications: [
        "Strong programming skills",
        "Familiarity with HTML,CSS and Javascript",
      ],
      applicationInstructions: "Please submit your resume and cover letter.",
      location: "Hawassa",
      deadline: "12/12/12",
    },
  ];
  const router = useRouter();

  // Find the opportunity with the matching opportunityId
  const opportunity = mockOpportunities.find((opp) => opp.id === params.id);

  // Handle the case where opportunity is undefined
  if (!opportunity) {
    return <div>Opportunity not found</div>;
  }

  return (
    <div>
      <CardDetail
        title={opportunity.title}
        imageUrl={opportunity.imageUrl}
        location={opportunity.location}
        companyName={opportunity.companyName}
        btn={opportunity.btn}
        startDate={opportunity.startDate}
        endDate={opportunity.endDate}
        deadline={opportunity.deadline}
        schedule={opportunity.schedule}
        compensations={opportunity.compensations}
        responsibilities={opportunity.responsibilities}
        qualifications={opportunity.qualifications}
        applicationInstructions={opportunity.applicationInstructions}
      />
    </div>
  );
};

export default OpportunityDetailPage;
