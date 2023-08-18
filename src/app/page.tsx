'use client'

import Image from 'next/image'
import { useState } from 'react'



export default function Home() {
  const [viewGif, setViewGif] = useState(false)

  const handleViewGif = () => {
    setViewGif(true)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[url('/thiago.png')]">
      

{   !viewGif ?   <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center text-white">Thiago</h1>
        <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md" onClick={handleViewGif}>Feliz cumple</button>
      </div>
      :
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center text-white">FELIZ CUMPLEEEEEEEE</h1>
      </div>
      
    
    }
      <div className="flex flex-col items-center justify-center">
        {
          viewGif && (
            <Image
              src="/thiago.gif"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          )
        }
      </div>
     { viewGif && <audio src="/cumple.mp4" autoPlay loop></audio>}
    </main>
  )
}
