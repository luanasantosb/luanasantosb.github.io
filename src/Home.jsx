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
                <p>Sou profissional de Tecnologia da Informação, com experiência em atendimento ao cliente e suporte técnico. Tenho formação em Montagem e Manutenção de Computadores pelo SENAI/RS, certificação em Suporte de TI pelo Google (Coursera) e atualmente curso Sistemas para Internet no IFRS. </p>

<p>Desenvolvo projetos em Front-End com HTML, CSS e JavaScript, com foco em responsividade, usabilidade e boas práticas. Sou apaixonada por tecnologia e estou sempre em busca de novos conhecimentos e desafios para evoluir profissionalmente.</p>

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
