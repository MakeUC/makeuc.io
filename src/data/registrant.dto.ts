export type RegistrantDTO = {
  fullName: string;
  age: number;
  email: string;
  phone: string;
  school: string;
  country: string;
  degree: string;
  major: string;
  graduation: number;
  hackathonsAttended: string;
  resume?: FileList;
  ethnicity: string;
  gender: string;
  questions?: string;
  agreed: boolean;
  authorized: boolean;
  communication: boolean;
};
