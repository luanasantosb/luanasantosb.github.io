function Formacao() {
    const containerEstilo = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        backgroundColor: '#BDDCE1',
        minHeight: '100vh',
    };

    const cardEstilo = {
        backgroundColor: '#FAFAF8',
        borderLeft: '6px solid #0097a7',
        borderRadius: '10px',
        padding: '15px',
        width: '30%',
        textAlign: 'left',
    };

    return (
        <div style={containerEstilo}>
            <div style={cardEstilo}>
                <strong>Instituto Federal do Rio Grande do Sul (IFRS)</strong>
                <p>Análise e Desenvolvimento de Sistemas</p>
                <p>Status: Cursando</p>
            </div>

            <div style={cardEstilo}>
                <strong>SENAI/RS</strong>
                <p>Técnico em Redes de Computadores</p>
                <p>status: Concluído</p>
            </div>

            <div style={cardEstilo}>
                <strong>Escola técnica Alcides Maya</strong>I
                <p>Técnico em Informática</p>
                <p>status: Concluído</p>
            </div>

        </div>
    );
}

export default Formacao;
