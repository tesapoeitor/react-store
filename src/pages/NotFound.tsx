import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <h1>404 Not Fount</h1>
            <img src="https://www.pintzap.com/storage/img/memegenerator/templates/yo-habia-ponido-mis-cosas-aqui.webp" alt="meme gato" />
            <h2>Yo había ponido mi pagina aquí.</h2>
            <Link to={"/"}>Ir al Home</Link>
        </>
    )
}

export { NotFound }