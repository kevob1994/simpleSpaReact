import Header from '../Components/common/Header';
import Navbar from '../Components/common/Navbar';
import Calculator from '../Components/Calculator';
export default () => (
    <div>
        <Header />
        <Navbar />
        <div className="title">
            <h1 >Calculadora</h1>
        </div>
        <Calculator />

        <style jsx global>
            {
                `
                .title {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-shadow: 0 0 20px #FF0000, 0 0 20px #0000FF;
                    }

                    body {
                        background: #100a1c;
                        background-image:
                            radial-gradient(50% 30% ellipse at center top, #201e40 0%, rgba(0,0,0,0) 100%),
                            radial-gradient(60% 50% ellipse at center bottom, #261226 0%, #100a1c 100%);
                        background-attachment: fixed;
                        color: #fff;
                    }
                `
            }
        </style>
    </div>
)