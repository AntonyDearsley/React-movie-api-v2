import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/fontawesome-free-solid'
import TextField from '@mui/material/TextField';
import * as db from '../../services/db_funtion';
import "./index.css";
import { useLocation } from 'wouter'

export default function SignUp() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [email, setEmail] = useState("")

    const [, pathLocation] = useLocation()

    
    const handleClick = () => {
        window.history.back()
    }

    const handleSubmit = e => {
        e.preventDefault()

        const params = { username , email , password, password2 }

        const validate = db.validateRegister(params)

        if (validate.value) {
            
            db.insertUser(params).then(response => {
                if (response === 'true')  {
                    alert('El Usuario ha sido creado con éxito')
                    pathLocation("/login")
                } else {
                    alert('El usuario o correo eléctronico ya esta en uso')  
                } 
            })
           
        } else alert(validate.message)
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
                        <TextField className='item' type="text" label="Usuario"id="standard-basic" variant="standard" name='username' value={username} onChange={e => setUsername(e.target.value)} />
                    </div>

                    <div className='mb-4 flex flex-col'>
                        <TextField label="Correo"id="standard-basic" variant="standard" value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div className='mb-4 flex flex-col'>
                        <TextField label="Contraseña"id="standard-basic" variant="standard" name='password' value={password} onChange={e => setPassword(e.target.value)} />
                    </div>

                    <div className='mb-4 flex flex-col'>
                        <TextField label="Confirmar contraseña"id="standard-basic" variant="standard" value={password2} onChange={e => setPassword2(e.target.value)} />
                    </div>

                    <div className='w-full '>
                        <input className='bg-green-600 border-2 border-green-600 font-bold w-full 
                        rounded-lg hover:cursor-pointer hover:bg-zinc-900  hover:text-green-500' 
                        type="submit" name='submit' value='Crear' />
                    </div>
                </form>

                <a href="/login"> Ya tienes una cuenta?</a>
            </div>

        </section>

    </div>
}