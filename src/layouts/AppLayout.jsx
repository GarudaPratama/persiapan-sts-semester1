import React from 'react'
import Navbar from '../components/navbar'
import { Outlet } from 'react-router'

function AppLayout() {
  return (
    <div className='min-h-screen bg-linear-to-br from-slate-50 via-slate-100 to-slate-200 text-slate-800 flex flex-col font-sans'>
        <Navbar />

        <main className='flex-1 flex flex-col items-center justify-center p-6 max-w-4xl mx-auto w-full'>
            <Outlet />
        </main>
    </div>
  )
}

export default AppLayout