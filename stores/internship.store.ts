// Internship store 

import { create } from "zustand";

/*
model Internship {
  id                      String                @id @default(auto()) @map("_id") @db.ObjectId
  title                   String
  companyId               String                @db.ObjectId
  company                 Company               @relation(fields: [companyId], references: [id])
  startDate               DateTime
  endDate                 DateTime
  schedule                Schedule
  compensations           Compensations
  description             InternshipDescription @relation(fields: [internshipDescriptionId], references: [id])
  internshipDescriptionId String                @unique @db.ObjectId
  createdAt               DateTime              @default(now())
  updatedAt               DateTime              @updatedAt
  Report                  Report[]
  Application             Application[]
}

model InternshipDescription {
  id                      String      @id @default(auto()) @map("_id") @db.ObjectId
  responsibilities        String[]
  qualifications          String[]
  applicationInstructions String
  description             String
  deadline                DateTime
  createdAt               DateTime    @default(now())
  updatedAt               DateTime    @updatedAt
  Internship              Internship?
}
*/
interface InternshipsState {
    internships: any[];
    internship: any;
    isLoading: boolean;
    error: string;
    setInternships: (students: any[]) => void;
    setIsLoading: (isLoading: boolean) => void;
    setError: (error: string) => void;
}

interface InternshipFilter {
    companyId: string;
    departmentId: string;
    universityId: string;
}

export const useInternshipStore = create<InternshipsState>((set) => ({
    internships: [],
    internship: {},
    isLoading: false,
    error: "",
    setInternships: (internships) => set(() => ({ internships })),
    setIsLoading: (isLoading) => set(() => ({ isLoading })),
    setError: (error) => set(() => ({ error })),
}))