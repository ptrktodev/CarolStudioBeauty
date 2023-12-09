import React from "react";
import "./style.css";

import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as Wpp } from "../wpp.svg";

const Header = () => {
  return (
    <section>
      <div className="container navegacaoTopo">
        <Logo />
        <ul className="nav">
          <li>
            <a href="#servicos">Serviços</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </div>
      <div className="whatsapp-icon">
        <a href="https://wa.me/5548996144267" target="_blank" rel="noreferrer">
          <Wpp />
        </a>
      </div>
    </section>
  );
};

export default Header;
