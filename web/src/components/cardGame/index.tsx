interface IGame {
  img: string,
  title: string,
  subtitle: string
}

export function CardGame(props: IGame){
  return (
    <a href='' className='relative rounded-lg hover:scale-105 hover:opacity-90 transition duration-0 hover:duration-300'>
      <img className="rounded-lg" src={`/img/${props.img}.svg`} alt="" />
      <div className='w-full rounded-lg pt-16 pb-4 px-4 bg-gradient-card absolute bottom-0 left-0 right-0'>
        <strong className='font-bold text-white block'>
          {props.title}
        </strong>
        <span className='text-zinc-300 text-sm block'>
          {props.subtitle}
        </span>
      </div>
    </a>
  )
}