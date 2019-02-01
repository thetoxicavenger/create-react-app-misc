export type roles = 'Associate Web Development Instructor' | 'Resident Instructor'

export type Instructors = Instructor[]

export interface Instructor {
  id: number;
  firstName: string;
  lastName: string;
  role: roles;
  skills: string[];
  tenure: string;
}

export type AppState = {
  instructors: Instructor[];
}