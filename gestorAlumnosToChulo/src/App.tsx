
import { Alumno } from './components/Alumno'
import './App.css'

type Alumno = {
  nombre: string;
  apellidos: string;
  curso: string;
  anio: number;
  imageUrl: string;
};

const alumnos: Alumno[] = [
  {
    nombre: "Lucía",
    apellidos: "García Pérez",
    curso: "1º ESO",
    anio: 2024,
    imageUrl: "https://picsum.photos/seed/alumno1/400/300"
  },
  {
    nombre: "Carlos",
    apellidos: "López Martínez",
    curso: "2º ESO",
    anio: 2023,
    imageUrl: "https://picsum.photos/seed/alumno2/400/300"
  },
  {
    nombre: "Marina",
    apellidos: "Sánchez Ruiz",
    curso: "3º ESO",
    anio: 2022,
    imageUrl: "https://picsum.photos/seed/alumno3/400/300"
  },
  {
    nombre: "Javier",
    apellidos: "Fernández Gómez",
    curso: "4º ESO",
    anio: 2021,
    imageUrl: "https://picsum.photos/seed/alumno4/400/300"
  },
  {
    nombre: "Ana",
    apellidos: "Romero Díaz",
    curso: "1º Bachillerato",
    anio: 2024,
    imageUrl: "https://picsum.photos/seed/alumno5/400/300"
  }
];

function App() {
  

  return (
      <div className='flex flex-col gap-2 items-center bg-gray-800 justify-center h-screen'>
        
        
        <h1 className='m-3 font-extrabold text-4xl text-white text-shadow-2xl'>GESTOR DE ALUMNOS</h1>
        
        <div className='gap-2 flex justify-center text-center'>
          {
            alumnos.map((alumno, index) => (
              <Alumno
                key={`alumno-${index}`}
                nombre={alumno.nombre}
                apellidos={alumno.apellidos}
                curso={alumno.curso}
                anio={alumno.anio}
                foto={alumno.imageUrl}
              />
            ))

          }
          
        </div>
      </div>
  )
}


export default App
