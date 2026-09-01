function Projetos() {
    const estiloContainer = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        backgroundColor: '#c0ffee',
        minHeight: '100vh',
        margin: '0',
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const estiloCard = {
        backgroundColor: '#FAFAF8',
        borderLeft: '6px solid #0097a7',
        borderRadius: '10px',
        padding: '10px',
        width: '30%',
        textAlign: 'left',
    };
    const estiloLink = {
        textDecoration: 'none',
        color: '#212121',
    }

    return (
        <div style={estiloContainer}>
            <div style={estiloCard}>
                <h3> "Projeto de Website – Rock na praça"</h3>
                <p>Site estático desenvolvido em HTML, CSS e JavaScript, voltado para divulgação e venda de produtos do evento. Destinado a pessoas e empresas interessadas no rock independente, o site apresenta informações sobre programação, artistas e localização, além de um catálogo de produtos. O design segue a identidade visual do evento, garantindo uma experiência atraente, clara e responsiva em todos os dispositivos.</p>
                <p><a href="https://github.com/luanasantosb/rock-na-praca" style={estiloLink}>Ver no GitHub</a></p>

            </div>
                <div style={estiloCard}>
                    <h3> "Projeto de Website – Rock na praça"</h3>
                    <p>Site estático desenvolvido em HTML, CSS e JavaScript, voltado para divulgação e venda de produtos do evento. Destinado a pessoas e empresas interessadas no rock independente, o site apresenta informações sobre programação, artistas e localização, além de um catálogo de produtos. O design segue a identidade visual do evento, garantindo uma experiência atraente, clara e responsiva em todos os dispositivos.</p>
                    <p><a href="https://github.com/luanasantosb/rock-na-praca" style={estiloLink}>Ver no GitHub</a></p>


                </div>
            </div>
            );
}

            export default Projetos;
