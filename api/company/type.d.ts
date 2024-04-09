// company.d.ts

interface ICompanyRegistrationForm {
    HRUserName: string;
    HREmail: string;
    HRPassword: string;
    HRFirstName: string;
    HRMiddleName: string;
    HRPhoneNumber: string;
    companyName: string;
    website: string;
    companyEmail: string;
    companyPhoneNum: string;
    industryType: string;
    address: {
        city: string;
        region: string;
        subcity: string;
    };
    image?: File; // Optional image file
    logo?: File; // Optional logo file
}

export type { ICompanyRegistrationForm };
