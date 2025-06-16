import {jwtDecode} from "jwt-decode";

interface DecodedToken {
    exp: number,
    iat?:number,
    id?:string,
    email?:string,
    [key:string]: any,
}

export const getToken = (): string|null => {
    return localStorage.getItem("token");
}

export const getUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user): null;
}

export const isLoggedIn = (): boolean => {
    const token = getToken();
    
    if(!token) return false;

    try{
        const decoded = jwtDecode<DecodedToken>(token);
        const currentTime = Date.now() / 1000;

        if(decoded.exp && decoded.exp<currentTime){
            logout();
            return false;
        }

        return true;
    }catch(error){
        console.log("Invalid token",error);
        logout();
        return false;
    }
}

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    console.log("Loggedout clicked");
}