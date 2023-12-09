import React from "react";
import "./style.css";

import { ReactComponent as Insta } from "./assets/insta.svg";
import { ReactComponent as Wpp } from "./assets/wpp.svg";

const Footer = () => {
  return (
    <section className="footerBG">
      <div className="container footer">
        <div className="item">
          <h2>Contatos</h2>
          <p>(51) 98070-2533 </p>
          <p>patrickrodriguez2002@outlook.com</p>
        </div>
        <div className="item">
          <h2>Endereço</h2>
          <p>Rua Andorinha, 306,</p>
          <p>Bairro XXXXX em Balneário Gaivota, SC.</p>
        </div>
        <div className="item">
          <h2>Redes Sociais</h2>
          <div className="medias">
            <a
              href="https://www.instagram.com/carolrodriguez_hair/"
              target="_blank"
              rel="noreferrer"
            >
              <Insta />
            </a>
            <a
              href="https://wa.me/5548996144267"
              target="_blank"
              rel="noreferrer"
            >
              <Wpp />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
