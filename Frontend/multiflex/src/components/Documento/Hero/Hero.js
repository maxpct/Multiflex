import './Hero.css';

import Imagen from './Imagen/Imagen';
import Titulo from './Titulo/Titulo';
import Texto from './Texto/Texto';
import Boton from './Boton/Boton';

function Hero() {

    return (

        <div className="hero-documento">

            <Imagen />

            <div className="hero-capa"></div>

            <div className="hero-contenido">

                <Titulo />

                <Texto />

                <Boton />

            </div>

        </div>

    );

}

export default Hero;