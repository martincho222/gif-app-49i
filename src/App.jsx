import { useState, useEffect } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

function App() {
  const [categories, setCategories] = useState([""])
  // const [count, setCount] = useState(0);

  // useEffect(() => { //callback se ejecuta cuando se monta el componente
  //   console.log("El contador a cambiado", count);

  //   return () => {//cleaner o limpador
  //     //este codigo se ejecuta cuando se desmonta el componente
  //   }
  // }, [count])//se ejectua cuando hay algun cambio en un estado(update)


  return (
    <>
      <h1>Gifs App</h1>
      <AddCategory setCategories={setCategories} />
      <button onClick={() => setCategories([""])}>limpiar</button>
      <ol>
        {categories.map((category) => {
          return <GifGrid category={category} key={category} />
        })}
      </ol>
      
    </>
  )
}

export default App
