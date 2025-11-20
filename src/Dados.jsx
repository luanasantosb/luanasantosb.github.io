import foto_curriculo from "./assets/foto_curriculo.jpg";

function Dados() {
  const estiloContainer = {
    backgroundColor: '#FAFAF8',
    display: 'flex',
    justifyContent:'center'
  };

  const estiloTitulo ={
    marginBottom:'10px',
  }
  const estiloSubtitulo={
    fontWeight: 'bold',
    fontSize:'20px',
    marginBottom:'10px',
    
  }
  const estiloTexto = {
    textAlign: 'left',
    lineHeight: '1.5',
    fontSize: '16px',
    fontFamily: 'Arial',
    padding: '5px',
    margin:'10px'
  }
  const estiloLink = {
    color: '#212121',
    textDecoration: 'none',
    display: 'block',
    marginTop: '5px'
  };

  const estiloFoto = {
    marginTop:'10px',
    width: "150px",
    display: 'flex',
    marginRight:'10px'
  }

  return (
    <>
    <div style={estiloContainer}>
      <img style={estiloFoto}
        src={foto_curriculo}
        alt="foto" />

      <div style={estiloTexto}>
        <h1 style={estiloTitulo}>Luana Santos Barreto</h1>
        <p style={estiloSubtitulo}>Desenvolvedora front-end</p>
        <p>+555199650-6622</p>
        <p>luanasanos.inf@gmail.com</p>
        <p>< a href="https://www.linkedin.com/in/luanasantosb/" target="_blank" style={estiloLink}>Linkedin</a></p>
          <p><a href="https://github.com/luanasantosb" target="_blank" style={estiloLink}>GitHub</a></p>
          </div>
        </div>
        </>
  );
}

export default Dados;
