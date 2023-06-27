import nordeltaimg from '../img/imagen-nordelta.avif'
import { Buscador } from './Buscador'

export function NordeltaImg () {
  return(
    <section className='realtive'>
      <div className='relative h-nordelta w-full overflow-hidden before:bg-black/40 before:w-full before:h-full before:absolute before:l-0 before:t-0'>
        <img src={nordeltaimg} alt="" className='w-full h-full object-cover'/>
      </div>
      <div className='absolute inset-y-1/2 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-lg w-full'>
        <Buscador/>
      </div>
    </section>
  )
}