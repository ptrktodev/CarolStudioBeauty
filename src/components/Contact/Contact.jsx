import React from "react";
import "./style.css";

const Contact = () => {
    return (
        <section id="contato">
            <div className="container contato">
                <h1>ENTRE EM CONTATO COMIGO!</h1>
                <div className="item-contatos">
                    <p>
                        Tem dúvidas, precisa de mais informações ou quer marcar
                        um horário comigo? Entre em contato que estarei pronta
                        para atendè-la.
                    </p>
                </div>
                <button>
                    <a href="https://wa.me/5548996144267" target="_blank">
                        ENTRE EM CONTATO
                    </a>
                </button>
            </div>
        </section>
    );
};

export default Contact;
