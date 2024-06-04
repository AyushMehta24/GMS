export interface userT {
    id: string;
    email: string;
    role: string;
    iat: number;
    exp: number;
  }

  export interface initialData  {
    id: string;
    email: string;
    name: string;
    role: string;
    profile_pic: string | null;
}