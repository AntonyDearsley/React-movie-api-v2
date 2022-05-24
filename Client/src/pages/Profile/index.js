import { faLongArrowAltLeft } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useLocation } from 'wouter';
import { useFav } from '../../hooks/useFav';
import { useList } from '../../hooks/useList';
import { useProfile } from '../../hooks/useProfile';

export default function Profile() {
    const [, pathLocation] = useLocation()
    const fav = useFav({ id_user: localStorage.getItem('IdSesion') })
    const list = useList({ id_user: localStorage.getItem('IdSesion') })
    const profile = useProfile({ id: localStorage.getItem('IdSesion') })
    const [password, setPassword] = useState(false)

    console.log(profile)
    let countFav = 0
    let countList = 0

    const handlePassword = () => {
        setPassword(!password)
    }

    const handleHome = () => {
        pathLocation("/")
    }

    const handleDetails = e => {
        const id = e.target.id

        const tipo = e.target.dataset.tipo === 'M' ? 'movie' : 'serie'
        pathLocation(`/${tipo}/detail/${id}`)
    }

    return <div className='h-screen bg-black flex flex-col'>

        <section className='w-full h-12 flex items-center  border-4 border-white'>
            <div className='w-10 flex items-center text-zinc-100 hover:cursor-pointer absolute left-6'
                onClick={handleHome}>
                <FontAwesomeIcon icon={faLongArrowAltLeft} className='h-10 ' />
                <p className='h-10 flex items-center px-3'>HOME</p>
            </div>
        </section>


        <div className='border-4 border-white h-screen flex '>
            <div className='border-4 border-red-500  w-[25%] '>
                <h1 className='text-2xl font-Montserrat text-zinc-100'>PROFILE</h1>
                <div className='border border-pink-400 '>

                    {
                        profile.loading === true ?
                            <div className='container flex justify-center items-center h-52 '>
                                <span className="loader  " />
                            </div>
                            :
                            <>
                                <div>
                                    <p> NOMBRE DE USUARIO: {profile.value[0].NOMBRE}</p>
                                    <p> EMAIL: {profile.value[0].CORREO}</p>
                                    <div>
                                        <p> CONTRASEÑA: {password === false ?
                                            '*'.repeat(profile.value[0].CONTRASENA.length)
                                            : profile.value[0].CONTRASENA}</p>
                                        <button onClick={handlePassword}>VER</button>
                                    </div>
                                </div>
                                <div>
                                    <button>Cerrar Session</button>
                                    <button>Eliminar Cuenta</button>
                                </div>
                            </>
                    }


                </div>
            </div>
            <div className='border-4 border-blue-500 h-full w-[75%] flex relative'>
                <div className='border-8 border-green-500  absolute h-full w-1/2'>
                    <h1 className='text-2xl font-Montserrat text-zinc-100 text-center'>FAVORITOS</h1>
                    <div className='border border-white max-h-[95%] overflow-auto'>
                        {
                            fav.loading === false ?
                                <table className='w-full'>

                                    {

                                        fav.value.map(result => {
                                            countFav++
                                            return <tr className={
                                                countFav % 2 === 0 ? 'border bg-zinc-900'
                                                    : 'border bg-zinc-700'
                                            }>
                                                <th id={result.ID_MULTIMEDIA} data-tipo={result.TIPO}
                                                    className='text-zinc-200 font-light text-left hover:text-red-600 hover:cursor-pointer'
                                                    onClick={handleDetails}>
                                                    {result.TIPO === 'M' ? 'Película: ' : 'Serie: '}
                                                    {result.NOMBRE}
                                                </th>
                                            </tr>
                                        })
                                    }
                                </table>
                                :

                                <div className='container flex justify-center items-center h-52 '>
                                    <span className="loader  " />
                                </div>
                        }
                    </div>
                </div>
                <div className='border-8 border-orange-500 absolute h-full left-1/2 w-1/2'>
                    <h1 className='text-2xl font-Montserrat text-zinc-100 text-center'>VER MÁS TARDE</h1>
                    <div className='border border-white max-h-[95%] overflow-auto'>
                        {

                            list.loading === false ?

                                <table className='w-full'>

                                    {


                                        list.value.map(result => {
                                            countList++
                                            return <tr className={
                                                countList % 2 === 0 ? 'border bg-zinc-900'
                                                    : 'border bg-zinc-700'
                                            }>
                                                <th id={result.ID_MULTIMEDIA} data-tipo={result.TIPO}
                                                    className='text-zinc-200 font-light text-left hover:text-red-600 hover:cursor-pointer'
                                                    onClick={handleDetails}>
                                                    {result.TIPO === 'M' ? 'Película: ' : 'Serie: '}
                                                    {result.NOMBRE}
                                                </th>
                                            </tr>
                                        })


                                    }

                                </table>
                                :
                                <div className='container flex justify-center items-center h-52 '>
                                    <span className="loader  " />
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
}