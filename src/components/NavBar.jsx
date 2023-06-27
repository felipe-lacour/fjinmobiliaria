

export function NavBar () {
  return(
    <ul className="flex gap-4 text-red-400 list-none" id="ul">
      <li className="flex items-center"><a href="#ul" className="hover:bg-red-400 hover:text-slate-900 transition-all p-2 rounded">VENTA</a></li>
      <li className="flex items-center"><a href="#ul" className="hover:bg-red-400 hover:text-slate-900 transition-all p-2 rounded">ALQUILER</a></li>
      <li className="flex items-center"><a href="#ul" className="hover:bg-red-400 hover:text-slate-900 transition-all p-2 rounded">NOSOTROS</a></li>
      <li className="flex items-center"><a href="#ul" className="hover:bg-red-400 hover:text-slate-900 transition-all p-2 rounded">TASACIONES</a></li>
      <li className="flex items-center"><a href="#ul" className="hover:bg-red-400 hover:text-slate-900 transition-all p-2 rounded">CONTACTO</a></li>
    </ul>
  )
}