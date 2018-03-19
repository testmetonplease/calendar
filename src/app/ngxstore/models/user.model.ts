export interface User {
  uid: string;
  email: string;
  hash: string;
  name: string;
  role: string;
  lastVisit: Date;
}
export interface Authenticate {
  email: string;
  password: string;
}
