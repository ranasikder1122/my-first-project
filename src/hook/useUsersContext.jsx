import { useContext } from "react"
import { UserContext } from "../ContextAPI/UserContext"

export const useUsersContext = ()=>{
    return useContext(UserContext)
}