import React from "react";
import "./style.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import IMG1 from "./assets/alisamento.jpeg";
import IMG2 from "./assets/botox.jpeg";
import IMG3 from "./assets/ciliosbr.jpeg";
import IMG4 from "./assets/cilioseg.jpeg";
import IMG5 from "./assets/coloracao_reconstrucao.jpeg";
import IMG6 from "./assets/corte.jpeg";
import IMG7 from "./assets/designersobran.jpeg";
import IMG8 from "./assets/esmaltacao.jpeg";
import IMG9 from "./assets/esmaltacao1.jpeg";
import IMG10 from "./assets/mechas.jpeg";

const Servicos = () => {
    const [imgPrev, setimgPrev] = React.useState(3);

    React.useEffect(() => {
        function resizeWidth() {
            if (window.innerWidth < 600) {
                setimgPrev(1);
            } else if (window.innerWidth < 900) {
                setimgPrev(2);
            } else {
                setimgPrev(3);
            }
        }

        resizeWidth();
        window.addEventListener("resize", resizeWidth);
        return () => {
            window.removeEventListener("resize", resizeWidth);
        };
    }, []);

    const img = [
        {
            id: "1",
            title: "Alisamento",
            sub: "Cabelo",
            color1: "#EDC8FF",
            color2: "#BD00FF",
            url: IMG1,
        },
        {
            id: "2",
            title: "Botox",
            sub: "Cabelo",
            color1: "#EDC8FF",
            color2: "#BD00FF",
            url: IMG2,
        },
        {
            id: "5",
            title: "Coloração & Reconstrução",
            sub: "Cabelo",
            color1: "#EDC8FF",
            color2: "#BD00FF",
            url: IMG5,
        },
        {
            id: "6",
            title: "Corte",
            sub: "Cabelo",
            color1: "#EDC8FF",
            color2: "#BD00FF",
            url: IMG6,
        },
        {
            id: "10",
            title: "Mechas",
            sub: "Cabelo",
            color1: "#EDC8FF",
            color2: "#BD00FF",
            url: IMG10,
        },
        {
            id: "7",
            title: "Designer de Sobrancelha",
            sub: "Sabrancelha",
            color1: "#FEFFD8",
            color2: "#9B8C00",
            url: IMG7,
        },
        {
            id: "3",
            title: "Extensão de cílios volume egípcio",
            sub: "Cílios",
            color1: "#CCFFFF",
            color2: "#00A3FF",
            url: IMG3,
        },
        {
            id: "4",
            title: "Extensão de cílios volume brasileiro",
            sub: "Cílios",
            color1: "#CCFFFF",
            color2: "#00A3FF",
            url: IMG4,
        },

        {
            id: "8",
            title: "Esmaltação em gel",
            sub: "Unha",
            color1: "#FFC5C5",
            color2: "#FF0000",
            url: IMG8,
        },
        {
            id: "9",
            title: "Esmaltação em gel",
            sub: "Unha",
            color1: "#FFC5C5",
            color2: "#FF0000",
            url: IMG9,
        },
    ];

    return (
        <section id="servicos">
            <div className="container servicos">
                <h1>CONFIRA OS SERVIÇOS.</h1>
                <span className="span-warn">Arraste para o lado. 📸</span>
                <Swiper className="slide-bloco" slidesPerView={imgPrev}>
                    {img.map((i) => (
                        <SwiperSlide key={i.id} className="slide-item">
                            <img src={i.url} className="slide-img" />
                            <div className="slide-div">
                                <span
                                    style={{
                                        background: `${i.color1}`,
                                        border: `1px solid ${i.color2}`,
                                        color: `${i.color2}`,
                                    }}
                                >
                                    {i.sub}
                                </span>
                                <p>{i.title}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Servicos;
