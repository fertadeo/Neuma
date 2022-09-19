import { useContext } from 'react'; 
import { CoursesContext } from './CoursesContext';



export const CoursePage = () => {


    const user  = useContext(CoursesContext);


    return (
     <>
     
     <h1> Pagina de Curso  <small>{user?.name}</small> </h1> 
     <hr></hr>
     <pre>
        {JSON.stringify( user, null, 3)}
     </pre>
     
        <button className='btn btn-primary'> Establecer curso </button>
     
     </>



    )
}