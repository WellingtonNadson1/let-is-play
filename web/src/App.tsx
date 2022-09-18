import logoImg from '/img/logo.svg'
import { MagnifyingGlassPlus } from 'phosphor-react'
import { CardGame } from './components/cardGame'

export function App() {
  
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <img src={logoImg} className="my-14" alt="logo" />

      <h1 className='text-white font-black text-6xl mb-16'>
        Seu <span className='text-transparent bg-gradient-game bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mb-8 mx-8'>
        
        <CardGame img='image 1' title='League of Legends' subtitle='5 anúncios' />
        <CardGame img='image 2' title='Apex Legends' subtitle='3 anúncios' />
        <CardGame img='image 3' title='Counter Strike' subtitle='2 anúncios' />
        <CardGame img='image 5' title='World of Warcraft' subtitle='5 anúncios' />
        <CardGame img='image 6' title='Dota 2' subtitle='5 anúncios' />
        <CardGame img='image 7' title='Fortnite' subtitle='5 anúncios' />

      </div>
      
      <div className='pt-2 bg-gradient-game self-stretch rounded-lg overflow-hidden mb-8 mx-8'>
        <div className='bg-[#2A2634] px-8 py-6 flex items-center justify-between'>
          <div>
            <strong className='font-black text-2xl text-white block'>
              Não encontrou seu duo?
            </strong>
            <span className='text-zinc-400 text-sm block'>
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

            <button className='flex items-center justify-between gap-1 transition duration-0 hover:duration-300 hover:bg-violet-600 bg-violet-500 rounded-lg text-white py-3 px-4'>
              <MagnifyingGlassPlus size={24}/>
              Publicar anúncio
            </button> 
        </div>

      </div>

    </div>
  )
}
