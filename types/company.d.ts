export type Company = {
    id: string;
    companyName: string;
    website: string;
    companyEmail: string;
    companyPhoneNum: string;
    industryType: string;
    address: {
        city: string;
        subcity: string;
        region: string;
    };
    image: string;
    logo: string;
};
