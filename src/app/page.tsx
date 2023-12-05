import Image from 'next/image'
import code from '@/code.png'
import fundo from '@/fundo.png'


export default function Home() {
  return (
    <main className='bg-slate-700 lg:bg-background lg:bg-cover flex flex-col max-h-screen h-screen'>
      <div className="p-16 lg:p-16 mt-48 flex-1 flex flex-col justify-between">
        <Image src={code} alt="cover" className='w-60 mx-4' />

        <div className="flex flex-col gap-4 mx-10 my-16">
        
          <label>Nome do Usuário</label>
          <input className='rounded-lg w-full h-10 bg-slate-600 border-gray-600' type="" />

          <label>Senha</label>
          <input  className='rounded-lg w-full h-10 bg-slate-600' type="" />

          <button className='rounded-lg w-full h-10  bg-pink-700 hover:bg-pink-600 font-sans'>Entrar</button>
          <button className='rounded-lg w-full h-10 bg-slate-200 hover:bg-slate-100 text-pink-800 font-sans'>Esqueci minha senha</button>

        </div>

      </div>

    </main>
  )
}
