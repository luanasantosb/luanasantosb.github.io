function Experiencias() {
    const containerEstilo = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        backgroundColor: '#c0ffee',
        minHeight: '100vh',
    };

    const cardEstilo = {
        backgroundColor: '#FAFAF8',
        borderLeft: '6px solid #0097a7',
        borderRadius: '10px',
        padding: '10px',
        width: '30%',
        textAlign: 'left',
    };

    return (
        <div style={containerEstilo}>

            <div style={cardEstilo}>
                <p style={{ color: 'black', fontWeight: 'bold' }}>Suporte em TI</p>
                <p>Autônoma</p>
                <p>Período: 01/2014 - o momento</p>
                <p>
                    Atribuições: Suporte ao usuário;<br />
                    Manutenção e montagem de computadores;<br />
                    Backup;
                </p>
            </div>

            <div style={cardEstilo}>
                <p style={{ color: 'black', fontWeight: 'bold' }}>Suporte em TI</p>
                <p>Associação Antônio Vieira</p>
                <p>Período: 01/2024 - 07/2024</p>
                <p>
                    Atribuições: Abertura de chamados;<br />
                    Formatação e configuração de desktops e notebooks;<br />
                    Suporte técnico presencial e remoto (nível 2) a usuários Microsoft Windows e Office 365;
                </p>
            </div>

        </div>
    );
}

export default Experiencias;
