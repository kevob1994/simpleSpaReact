import ClassComponent from './../Components/ClassComponent'
import {estudiantesMatematicas, estudiantesCiencias} from './../data/data'
import Header from '../Components/common/Header'
import Navbar from '../Components/common/Navbar'
export default () => (
    <div>
        <Header />
        <Navbar />
        <h1 style={{textAlign:"center",  textShadow: "0 0 20px #FF0000, 0 0 20px #0000FF", color:"white"}}>Cursos del Plan</h1>
        <div style={{display:"flex", justifyContent:"space-around"}}>
            <ClassComponent title="Matemáticas" studentsList={ estudiantesMatematicas }/>
            <ClassComponent title="Ciencias"  studentsList={estudiantesCiencias}/>
        </div>
        <style jsx global>
           { `
                body {
                    background: #100a1c;
                    background-image:
                        radial-gradient(50% 30% ellipse at center top, #201e40 0%, rgba(0,0,0,0) 100%),
                        radial-gradient(60% 50% ellipse at center bottom, #261226 0%, #100a1c 100%);
                    background-attachment: fixed;
                    color: #6cacc5;
                }
            `}
        </style>
    </div>
)