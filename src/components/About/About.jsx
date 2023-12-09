import React from "react";
import "./style.css";

import Carol from "./assets/carol.png";

const About = () => {
    return (
        <section id="sobre">
            <div className="container About">
                <h1>CONHEÇA MINHA HISTÓRIA</h1>
                <div className="about-div">
                    <img src={Carol} className="about-img" />
                    <p className="about-p">
                        Há 11 anos no ramo da beleza. Em 2019, modernizamos
                        nosso Espaço com uma reforma e, em 2021, o expandimos
                        duplicando de tamanho. No mesmo ano, nossa equipe
                        começou a se especializar em atender cabelos cacheados
                        após notar a carência de profissionais nesse campo.{" "}
                        <br /> <br />
                        Somos referência em cabelos cacheados. Além de cabelo,
                        oferecemos serviços de estética facial, corporal e
                        unhas, sempre com produtos de qualidade. Investimos em
                        treinamento e valorização da equipe que hoje é
                        administrada por 3 mulheres.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
