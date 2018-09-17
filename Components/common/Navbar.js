import Link from 'next/link'

const links = [
  {url: "/", nombre: "Home"},
  {url: "/calc", nombre: "Calculadora"},
]

{/* <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/calc"><a>Calculadora</a></Link></li> */}
export default () => (
  <div>
    <nav className="transparent">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">Curso de Next.js y React</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          { 
            links.map( link => {
              return(
                <li key={link.url}><Link href={link.url} ><a>{link.nombre}</a></Link></li>
              )
            })
          }
        </ul>
      </div>
    </nav>
    <style jsx>
      {
        `
          a{
            margin-left: 15px;
          }
          .brand-logo{
            text-shadow: 5px 5px 50px #5D6D7E;
          }
        `
      }
    </style>
  </div>
    
)