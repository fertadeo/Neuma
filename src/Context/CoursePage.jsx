
import { Button } from '@mui/material';
import { useContext } from 'react'; 
import { CoursesContext } from './CoursesContext';


export const CoursePage = () => {


    const { curso, setCurso}  = useContext(CoursesContext);


    return (
     <div>
    <h1> Bienvenido a la página del curso {curso?.name} </h1>
    <hr />

    <pre>
        {JSON.stringify(curso, null, 3)}
    </pre>


      <Button 
      variant="contained"
      onClick={ () => setCurso({id: 123, titulo: 'Curso de yoga', email: 'neuma@neuma.com'}) }
      >
         Establecer curso  </Button>

     </div>



    )
}