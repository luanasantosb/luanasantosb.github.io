import { Link } from "react-router-dom";

function Menu() {
  const estiloMenu = {
    display: 'flex',
     justifyContent: 'center',
    alignItems: 'center',
    padding: '10px', 
    gap: '35px',
    backgroundColor:'#BDDCE1',
    padding:'16px',
  };

  const estiloLink = {
    color: 'black',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize:'20px',
  };

  return (
    <>
      <div style={estiloMenu}>
        <Link style={estiloLink} to="/">Perfil</Link>
        <Link style={estiloLink } to="/formacao">Formação</Link>
        <Link style={estiloLink } to="/experiencias">Experiências</Link>
        <Link style={estiloLink } to="/projetos">Projetos</Link>
      </div>
    </>
  );
}

export default Menu;

