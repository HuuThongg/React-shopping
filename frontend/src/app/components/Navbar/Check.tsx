'use client'
import {useEffect,useState} from 'react'

const Check = () => {
  const [isSsr, setIsSsr] = useState("server");

  useEffect(() => {
    // `useEffect` never runs on the server, so we must be on the client if
    // we hit this block
    setIsSsr("browswer");
  }, []);

  return <div>
    <h1>{isSsr}</h1>
  </div>;
}

export default Check