export interface IUser {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    profession?: string,
    phone?: number,
    deviceCount?:number,
    location?: string,
}