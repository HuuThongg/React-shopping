'use client'
import {useEffect,useState} from 'react'
import { useQuery } from "@apollo/client";
import OperationFavorite from "@/graphql/operations/favorites";
const page = () => {
  

  // The default value is 'blue', it will be used during pre-rendering and the first render in the browser (hydration)
  const [color, setColor] = useState('blue')
  // During hydration `useEffect` is called. `window` is available in `useEffect`. In this case because we know we're in the browser checking for window is not needed. If you need to read something from window that is fine.
  // By calling `setColor` in `useEffect` a render is triggered after hydrating, this causes the "browser specific" value to be available. In this case 'red'.
  const { data, error, loading } = useQuery(OperationFavorite.Query.favorite);
  if (loading) console.log("loading")

  if (error) console.log("error ddd")
  console.log("data", data)


  useEffect(() => setColor('red'), [])
  
  // As color is a state passed as a prop there is no mismatch between what was rendered server-side vs what was rendered in the first render. After useEffect runs the color is set to 'red'
  return <h1 className={`title ${color} pt-[20rem]`}>Hello World! ${color}</h1>
}

export default page