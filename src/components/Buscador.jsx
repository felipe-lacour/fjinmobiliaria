import { useEffect, useState } from 'react';
import operacionesJSON from '../json/operaciones.json';
import tiposJSON from '../json/tipos.json';
import { Opciones } from './Opciones';
import { NavLink, useParams } from 'react-router-dom'

export function Buscador () {
  const [operaciones, setOperaciones] = useState(operacionesJSON)
  const [tipos, setTipos] = useState(tiposJSON)
  useEffect(() => {
    setOperaciones(operacionesJSON)
    setTipos(tiposJSON)
  }, [])
  
  const [ids, setIds] = useState()
  const { id } = useParams()

  useEffect(() => {
    if(id){
      setIds(id)
      console.log(ids)
    } else {
      setIds("")
    }
  }, [id, ids])


  return(
    <div className="max-w-5xl mx-auto -translate-y-1/2 p-2 ">
      <div className="bg-gray-200 border-b-4 border-slate-700 rounded-t-lg">
        <ul className="flex gap-8">
          <NavLink
            to={'/'}
            className={({ isActive, isPending }) =>
            (isPending ? "pending" : isActive ? "active" : "") + " p-6 box-border border-red-400"
            }
            style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              borderBottomWidth: isActive ? "8px" : "0px"};
            }}>TODAS</NavLink>
          <NavLink   
            to={'/Venta'}
            className={({ isActive, isPending }) =>
            (isPending ? "pending" : isActive ? "active" : "") + " p-6 box-border border-red-400"
            }
            style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              borderBottomWidth: isActive ? "8px" : "0px"};
            }}>VENTA</NavLink>
          <NavLink
            to={'/Alquiler'}
            className={({ isActive, isPending }) =>
            (isPending ? "pending" : isActive ? "active" : "") + " p-6 box-border border-red-400"
            }
            style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              borderBottomWidth: isActive ? "8px" : "0px"};
            }}>ALQUILER</NavLink>
          <NavLink
            to={'/Alq. Temporario'}
            className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "") + " p-6 box-border border-red-400"}
            style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              borderBottomWidth: isActive ? "8px" : "0px"};
            }}>ALQUILER TEMPORAL</NavLink>
        </ul>
      </div>
      <div className="bg-gray-200 md:p-8 p-2 gap-4 flex flex-col md:flex-row md:gap-16 h-fit relative rounded-b-lg">
        <div className="flex flex-col md:w-1/4 gap-2">
          <label htmlFor="operacion" className="text-xs text-gray-500 font-bold">Operacion</label>
          <select name="operacion" id="operacion" className='p-2 rounded outline-red-300' defaultValue={ids}>
            <option value="">OPERACION</option>
            {operaciones.items.map(operacion => <Opciones opcion={operacion} key={operacion.id}/>)}
          </select>
        </div>
        <div className="flex flex-col md:w-1/4 gap-2">
          <label htmlFor="tipo" className="text-xs text-gray-500 font-bold">Tipo</label>
          <select name="operacion" id="operacion" className='p-2 rounded outline-red-300' defaultValue={""}>
            <option value="">TIPO</option>
            {tipos.items.map(operacion => <Opciones opcion={operacion} key={operacion.id}/>)}
          </select>
        </div>
        <div className="flex flex-col md:w-1/4 gap-2">
          <label htmlFor="ubicacion" className="text-xs text-gray-500 font-bold">Ubicacion o Palabra Clave</label>
          <input type="text" id="ubicacion" className="p-2 rounded"/>
        </div>
        <button className="lg:absolute lg:right-8 lg:top-1/2 lg:-translate-y-1/2 bg-red-500 text-gray-100 font-bold p-4 rounded-lg h-14">Buscar</button>
      </div>
    </div>
  )
}