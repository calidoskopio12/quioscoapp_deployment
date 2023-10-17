
import Layout from "../layout/layout"
import Producto from "../components/Producto"
import useQuiosco from "../hooks/useQuiosco"

export default function Home() {
  const {categoriaActual } = useQuiosco()
  return (
      <Layout pagina={`Menu ${categoriaActual?.nombre}`}>
        <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
        <p className="text-2xl my-10">
          Elige y personaliza tu pedido:
        </p>
      <div className="grid gap-4 grid-cols-1 xl:grid-col-3 md:grid-cols-2 2xl:grid-cols-4">
      {categoriaActual?.productos?.map( producto => (
          <Producto
           key={producto.id}
           producto={producto}
          />
        ))}
      </div>
      </Layout>
  )
}

