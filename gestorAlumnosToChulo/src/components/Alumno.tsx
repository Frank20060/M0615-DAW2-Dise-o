
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type AlumnoProps = {
  nombre: string;
  apellidos: string;
  curso: string;
  anio: number;
  foto: string;
};

export function Alumno({
  nombre,
  apellidos,
  curso,
  anio,
  foto,
}: AlumnoProps) {
  return (
    <div className="h-[300px] w-[200px] shadow-2xl card flex flex-col bg-gray-400 justify-center items-center p-2 border-2 border-blue-900 rounded-md">
      <Avatar>
        <AvatarImage src={foto} />
        <AvatarFallback>
          {nombre.charAt(0)}
          {apellidos.charAt(0)}
        </AvatarFallback>
      </Avatar>
      <h1 className="font-extrabold text-black text-3xl">{nombre}</h1>
      <h2 className="font-bold text-gray-700 text-2xl">{apellidos}</h2>
      <h3 className="font-bold">
        {curso} - {anio}
      </h3>
    </div>
  );
}