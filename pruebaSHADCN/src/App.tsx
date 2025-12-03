import './App.css'
import { useEffect, useState } from "react";

import { Button } from './components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"

function App() {

  const [cont, setCont] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCont(prev =>
        prev === 100 ? 0 : prev + 1
      );
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {/*La app*/}
      <div className='flex flex-col gap-2 items-center bg-green-600 justify-center h-screen'>

        <Button className="bg-green-950 hover:bg-red-600 hover:scale-120 transition-all" variant="default">Ciro Gilipollas</Button>
        <Select>
          <SelectTrigger className=" w-[180px] bg-amber-300 text-red-600 border-4 border-pink-700">
            <SelectValue  placeholder="Select a panna" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Pannas</SelectLabel>
              <SelectItem value="ciro">Ciro</SelectItem>
              <SelectItem value="frank">Frank</SelectItem>
              <SelectItem value="julian">Julian</SelectItem>
              <SelectItem value="ivan">Ivan</SelectItem>
              <SelectItem value="joel">Joel</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>


        <div className='w-1/2 mt-2'>
           <Progress value={cont} />
        </div>
       


      </div>
    </>
  )
}

export default App
