import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/fontawesome-free-solid'
import TextField from '@mui/material/TextField';
import * as db from '../../services/db_funtion';
import "./index.css";

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const handleClick = () => {
        window.history.back()
    }

    const handleSubmit = e => {
        e.preventDefault()


        const login = db.getUser(username, password)
        login.then(response =>{

            if (response.value === 'true') {
                alert('Has iniciado sesión con éxito')
            } else {
                alert(response.message)
            }

        })

        
    }

    return <div className='h-screen flex flex-col bg-zinc-900 border-8 border-green-400'>

        <section className='w-full h-12 flex items-center bg-green-500 '>
            <div className='w-10 flex items-center text-zinc-100 hover:cursor-pointer absolute left-6'
                onClick={handleClick}>
                <FontAwesomeIcon icon={faLongArrowAltLeft} className='h-10 ' />
                <p className='h-10 flex items-center px-3'>ATRAS</p>
            </div>

        </section>

        <section className='bg-zinc-400 h-screen border-4 flex justify-center items-center'>

            <div className='bg-zinc-800/70 p-6  rounded-3xl shadow-xl'>
                <form className=' flex flex-col items-center font-Montserrat' onSubmit={handleSubmit}>

                    <div className='mb-4 flex flex-col'>
                        <TextField className='item' type="text" label="Usuario o Correo" id="standard-basic" variant="standard" name='username' value={username} onChange={e => setUsername(e.target.value)} />
                    </div>

                    <div className='mb-4 flex flex-col'>
                        <TextField label="Contraseña"id="standard-basic" variant="standard" name='password' value={password} onChange={e => setPassword(e.target.value)} />
                    </div>

                    <div className='w-full '>
                        <input className='bg-green-600 border-2 border-green-600 font-bold w-full 
                        rounded-lg hover:cursor-pointer hover:bg-zinc-900  hover:text-green-500' 
                        type="submit" name='submit' value='Iniciar Sesion' />
                    </div>
                </form>

                
                <a href="/signup"> No tienes cuenta aún?</a>
            </div>

        </section>

    </div>
}