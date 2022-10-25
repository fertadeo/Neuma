import { useState } from "react"
import { CoursesContext } from "./CoursesContext"






export function CoursesProvider({ children }) {
     
     const [curso, setCurso] = useState([]);

     
     


    return (
        <CoursesContext.Provider 
        value={{ curso, setCurso }}>
            { children }
        </CoursesContext.Provider>
    )
}