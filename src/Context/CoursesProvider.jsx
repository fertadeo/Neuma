import { CoursesContext } from "./CoursesContext"


const user = {
id: 123, 
name: 'Fernando Tadeo',
email: 'chachara@tadeus.com'
}





export const CoursesProvider = ({ children }) => {
    return (
        <CoursesContext.Provider 
        value={{
            user 
            }}>
            {children}
        </CoursesContext.Provider>
    )
}