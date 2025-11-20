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
                <p>Profissional apaixonada por tecnologia e entusiasta da Língua Espanhola, com experiência em atendimento ao cliente (SAC), área que despertou meu interesse pela Tecnologia da Informação. Possuo formação em montagem e manutenção de computadores pelo SENAI/RS e certificação profissional em Suporte em TI pela Google / Coursera.</p>

                <p>Desenvolvo também projetos iniciais em front-end, utilizando HTML, CSS e JavaScript, aplicando boas práticas de estruturação, responsividade e usabilidade. Tenho interesse permanente em aprimorar minhas habilidades e ampliar meus conhecimentos em desenvolvimento web.</p>

                <p>Atualmente curso Análise e Desenvolvimento de Sistemas no IFRS e busco oportunidades que me permitam evoluir tecnicamente e consolidar minha carreira na área de tecnologia.</p>
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
