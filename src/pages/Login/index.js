import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/fontawesome-free-solid'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

export default function Login() {

    const handleClick = () => {
        window.history.back()
    }

    const CssTextField = styled(TextField)({
        '& label.Mui-focused': { //color label cuando focus
            color: 'blue',
        },
        '& .MuiInput-underline:after': { //color linea cuando focus
            borderBottomColor: 'blue',
        },
        ' label': { //color label
            color: 'white',
        },
        '& .MuiInput-underline:before': { //color linea 
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '&:hover .MuiInput-underline': {
                borderBottomColor: 'red',
            },
            // '& fieldset': {
            //      orderColor: 'red',
            // },
            // '&:hover fieldset': {
            //      orderColor: 'yellow',
            // },
            // '&.Mui-focused fieldset': { 
            //      orderColor: 'blue',
            // },
        },
    })

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
                <form className=' flex flex-col items-center font-Montserrat'>

                    <div className='mb-4 flex flex-col'>
                        <CssTextField label="Usuario"id="standard-basic" variant="standard" />
                    </div>

                    <div className='mb-4 flex flex-col'>
                        <CssTextField label="Correo"id="standard-basic" variant="standard" />
                    </div>

                    <div className='mb-4 flex flex-col'>
                        <CssTextField label="Contraseña"id="standard-basic" variant="standard" />
                    </div>

                    <div className='mb-4 flex flex-col'>
                        <CssTextField label="Confirmar contraseña"id="standard-basic" variant="standard" />
                    </div>

                    <div className='w-full '>
                        <input className='bg-green-600 border-2 border-green-600 font-bold w-full rounded-lg hover:cursor-pointer hover:bg-zinc-900  hover:text-green-500' type="submit" value='Crear' />
                    </div>
                </form>
            </div>

        </section>

    </div>
}