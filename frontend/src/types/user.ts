export interface IUser {
    firstName: string;
    lastName: string;
    email:string;
    profession?: string;
    location?: string;
    phone?: string;
    deviceCount?:number
}

export interface IUserUpdateForm extends IUser {
  currentPassword: string;
  newPassword: string;
}