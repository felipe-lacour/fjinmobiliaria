import data from '../json/data.json'
import { useState, useEffect } from "react"


export function SectionVenta (){
  const [list, setList] = useState(data)
  useEffect(() => {
    const productPromise = new Promise ((res, rej) => {
      setTimeout(()=>{
        res(list);
      })
    })

    productPromise.then(result => setList(result))
  }, [list])

  return(
    <section className='bg-gray-100'>
      <div className='border-b-4  border-slate-600 max-w-7xl mx-auto'>
        <h2 className=' pt-8 px-6 pb-2 text-2xl font-bold border-b-8 border-red-400 w-fit z-10'>PROPIEDADES EN VENTA</h2>
      </div>
      <div className='2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid gap-10 mx-auto items-center justify-center p-10 max-w-7xl'>
        {list.map(i => {
          return(
            <div key={i.id} className='text-center border-slate-600 rounded-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-all bg-white cursor-pointer'>
              <div className='relative'>
                <img src="https://picsum.photos/160/266" alt="" className='h-40 w-full'/>
                <div className='absolute top-0 left-0 bg-slate-800 p-2 text-gray-200 font-bold'>{i.type}</div>
              </div>
              <div className='pl-4 py-4'>
                <h3 className='font-bold text-xl text-left'>{i.address}</h3>
              </div>
              <div className=' border-slate-400 flex justify-between items-center px-6 py-2'>
                <h5 className='bg-gray-200 text-white font-bold rounded p-2'>{i.operation}</h5>
                <h4 className='font-bold text-2xl'>${i.price}</h4>
              </div>
              <div className='flex justify-around bg-gray-200 border-slate-400 text-gray-400 font-bold'>
                <p className='p-2  border-slate-400 text-center w-full'>{i.square_footage} m2</p>
                <p className='p-2  border-slate-400 text-center w-full'>{i.bedrooms} Dorm</p>
                <p className='p-2 text-center w-full'>{i.bathrooms} Baños</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}