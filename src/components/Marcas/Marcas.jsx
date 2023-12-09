import React from "react";
import "./style.css";

import Marca1 from "./assets/desirius.png";
import Marca2 from "./assets/absolute.png";
import Marca3 from "./assets/mirra.png";

const Marcas = () => {
  return (
    <section>
      <div className="container marcas">
        <h1>AS MELHORES MARCAS, VOCÊ ENCONTRA AQUI!</h1>
        <div className="items">
          <div className="items-img1">
            <img src={Marca1} alt="imagem" />
          </div>
          <div className="items-img1">
            <img src={Marca2} alt="imagem" />
          </div>
          <div className="items-img">
            <img src={Marca3} alt="imagem" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marcas;
