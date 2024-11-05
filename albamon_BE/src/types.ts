export interface User {
  id: string;
  name: string;
  birthDate: string;
  gender: Gender;
  occupation: string;
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}
