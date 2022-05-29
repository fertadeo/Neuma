import React from 'react'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import { Navbar } from '../Navbar'
import flores from '../../img/flores-de-bach.jpeg'
// import musicaFonos from '../../img/musica-para-fonos.jpeg'
// import actualizaBach from '../../img/act-flores-de-bach.jpeg'
import '../cursos/floresdebach.css'





// const listaCursos = [
//   {id:1,
//     title: 'Flores de Bach',
//     subtitle: '',
//     about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec magna posuere, lacinia neque ut, venenatis sapien. Sed non tortor eu mauris molestie cursus. Etiam at dui ac felis ullamcorper molestie ac quis felis. Quisque ullamcorper eu nulla at sollicitudin.',
//     image: flores,
//     profileImage: '',
//     price: '',
//   },
//   {id:2,
//     title: 'Actualización de Flores de Bach',
//     subtitle: '',
//     about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec magna posuere, lacinia neque ut, venenatis sapien. Sed non tortor eu mauris molestie cursus. Etiam at dui ac felis ullamcorper molestie ac quis felis. Quisque ullamcorper eu nulla at sollicitudin.',
//     image: actualizaBach,
//     profileImage: '',
//     price: '',
//   },
//   {id:3,
//     title: 'Musica para Fonoaudiólogos',
//     subtitle: '',
//     about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec magna posuere, lacinia neque ut, venenatis sapien. Sed non tortor eu mauris molestie cursus. Etiam at dui ac felis ullamcorper molestie ac quis felis. Quisque ullamcorper eu nulla at sollicitudin.',
//     image: musicaFonos,
//     profileImage: '',
//     price: '',
//   },
//   {id:4,
//     title: 'Reiki',
//     subtitle: '',
//     about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec magna posuere, lacinia neque ut, venenatis sapien. Sed non tortor eu mauris molestie cursus. Etiam at dui ac felis ullamcorper molestie ac quis felis. Quisque ullamcorper eu nulla at sollicitudin.',
//     image: musicaFonos,
//     profileImage: '',
//     price: '',
//   },
//   {id:5,
//     title: 'Alimentación Saludable',
//     subtitle: '',
//     about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec magna posuere, lacinia neque ut, venenatis sapien. Sed non tortor eu mauris molestie cursus. Etiam at dui ac felis ullamcorper molestie ac quis felis. Quisque ullamcorper eu nulla at sollicitudin.',
//     image: musicaFonos,
//     profileImage: '',
//     price: '',
//   },
//   {id:6,
//     title: 'Coaching',
//     subtitle: '',
//     about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec magna posuere, lacinia neque ut, venenatis sapien. Sed non tortor eu mauris molestie cursus. Etiam at dui ac felis ullamcorper molestie ac quis felis. Quisque ullamcorper eu nulla at sollicitudin.',
//     image: musicaFonos,
//     profileImage: '',
//     price: '',

//   },
//   {id:7,
//     title: 'Musica para Fonoaudiólogos',
//     subtitle: '',
//     about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec magna posuere, lacinia neque ut, venenatis sapien. Sed non tortor eu mauris molestie cursus. Etiam at dui ac felis ullamcorper molestie ac quis felis. Quisque ullamcorper eu nulla at sollicitudin.',
//     image: musicaFonos,
//     profileImage: '',
//     price: '',
//   }

// ]

export default function FloresDeBach() {
  return ( 
    <div> 
      <Navbar/>
      <Grid 
      container
      direction='column'
      xs={12}
      style={{marginTop:'90px'}}
      >
        <Box 
          // style={{border:'blue solid 2px'}}
          item
          display='flex'
          justifyContent='space-around'
          alignItems='center'>
           <h2 style={{fontSize:'2rem'}}> Curso Flores de Bach</h2>
           <p></p>
            <img 
            src={flores} 
            alt='flores'
            style={{width:'50%', display:'flex', alignItems:'center', justifyContent:'center', borderRadius:'10px'}}
            ></img>
        </Box>
        <Box 
        // style={{border:'red solid 2px'}}
        item
        display='flex'
        justifyContent='center'
        >
        <h2>Box 2</h2>
        </Box>
      </Grid>
    </div>
  )
}
