import React from 'react'
import Navbar from '../components/navbar'
import { Link } from 'react-router'

export const santries = [
    {id: 1, name: 'Budi'},
    {id: 2, name: 'Joko'},
    {id: 3, name: 'Tono'}
  ]

function Home() {


  return (
    <div className='w-full flex flex-col items-center pb-12'>
        <div className='flex justify-center items-center my-12'>
            <h1 className='text-4xl md:text-5xl font-extrabold text-[#112352]'>Home</h1>
        </div>

        {santries.map((santri) => {
          return (
            <Link 
              className='bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-2xl w-full md:w-1/2 p-5 mb-4 cursor-pointer shadow-sm hover:shadow-xl hover:border-[#112352]/30 hover:-translate-y-1 transition-all duration-300 text-[#112352] font-bold text-lg text-center' 
              key={santri.id}
              to={`/${santri.id}`}
            >
              {santri.name}
            </Link>
          )
        })}
    </div>
  ) 
}

export default Home