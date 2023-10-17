import { useState, useEffect, createContext } from "react";
import '../styles/globals.css'
import { QuioscoProvider } from '../context/QuioscoProvider'

function MyApp({ Component, pageProps }) {
  const [categorias, setCategorias] = useState()

  const obtenerCategoria = async () => {
    const {data} = await axios('/api/categorias')
    setCategorias(data)

    useEffect(() => {
     
      obtenerCategoria()
    
    }, [])
    
  }
  return (
    <QuioscoProvider>
      <Component {...pageProps} />
    </QuioscoProvider>
  )
}

export default MyApp
