import { useContext } from "react";
import { AuthContext, IAuthContextData } from "../contexts/auth";

export function useAuth(): IAuthContextData{
    const context = useContext(AuthContext);

    if(!context){
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
}