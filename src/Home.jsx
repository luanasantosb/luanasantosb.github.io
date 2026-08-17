import wordpress from "./assets/wordpress.png";
import bootstrap from "./assets/bootstrap.png";
import html from "./assets/html.png"
import css from "./assets/css.png"
import javascript from "./assets/javascript.png"
import react from "./assets/react.png"
import github from "./assets/github.png"

function Home() {
    const estiloTexto = {
        lineHeight: '1.5',
        fontSize: '16px',
        fontFamily: 'Arial',
        padding: '16px',
        maxWidth: '800px',
        margin: '0 auto 15px auto',
    };
    const estiloSkills = {
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center',
    gap: '10px'
};

    const estiloImg = {
        gap: '2px',
    }

    return (
        <>
            <div style={estiloTexto}>
                <p>Sou profissional de Tecnologia da Informação com atuação autônoma, dedicada a transformar desafios em soluções práticas por meio da tecnologia. Minha trajetória começou no atendimento ao cliente (SAC), experiência que fortaleceu minha comunicação, empatia e capacidade de resolver problemas, habilidades que hoje aplico no suporte técnico e no desenvolvimento web. </p>

<p>Tenho formação em Montagem e Manutenção de Computadores pelo SENAI/RS, certificação em Suporte em TI pela Google (Coursera) e atualmente curso Sistemas para internet no IFRS.</p>

<p>Também desenvolvo projetos em front-end utilizando HTML, CSS e JavaScript, sempre buscando aplicar boas práticas de estruturação, responsividade e usabilidade. Acredito no aprendizado contínuo e estou em constante evolução para ampliar meus conhecimentos e entregar soluções cada vez mais eficientes. Além da tecnologia, sou entusiasta da Língua Espanhola, o que reforça meu interesse por comunicação e aprendizado constante.
</p>
            </div>

            <div style={estiloSkills}>
                <img style={estiloImg}
                    src={wordpress}
                    alt="wordpress" />

                <img style={estiloImg}
                    src={html}
                    alt="html" />

                <img style={estiloImg}
                    src={css}
                    alt="css" />

                <img style={estiloImg}
                    src={javascript}
                    alt="javascript" />

                <img style={estiloImg}
                    src={bootstrap}
                    alt="bootstrap" />

                <img style={estiloImg}
                    src={react}
                    alt="react" />

                <img style={estiloImg}
                    src={github}
                    alt="github" />

            </div>
        </>

    );
}

export default Home;
