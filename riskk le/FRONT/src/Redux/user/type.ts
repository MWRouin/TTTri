export interface User {
  userId?: number;
  firstname: string;
  lastname: string;
  telephone: number;
  password: string;
  email: string;
  roleId: number;
  addresse: string;
  token?: string;
  etat?: string;
}
