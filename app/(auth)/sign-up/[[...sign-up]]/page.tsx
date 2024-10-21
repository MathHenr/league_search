import Image from "next/image"
import { SignUp } from "@clerk/nextjs"

import Footer from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen grid lg:grid-cols-3">
      <div className="lg:hidden min-h-screen w-full absolute bg-League bg-center bg-cover blur-md -z-10" />
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="flex items-center justify-center pt-12">
          <Image src="/logo.svg" alt="Logo" height={100} width={100}/>
        </div>
        <div className="text-center space-y-2 py-4 z-10">
          <h2 className="lg:bg-gradient-to-l from-[#FF0D09] via-[#FF4A31] to-[#FF704A] lg:inline-block lg:text-transparent lg:bg-clip-text text-3xl font-semibold text-white">Welcome to LoL Pro</h2>
          <p className="text-base font-normal lg:text-slate-600 text-white">A tool for gathering information on the competitive League of Legends scene.</p>
        </div>
        <div className="flex items-center justify-center">
          <SignUp />  
        </div>
      </div>

      <div className="bg-League bg-cover bg-center hidden lg:grid lg:col-span-2 items-center justify-center" />

      <Footer/>
    </div>
  )
}