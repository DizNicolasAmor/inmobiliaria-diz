import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {    
    return (


 	    <nav id="nav-bar" 
 	    	 className="navbar navbar-default">
	      <div className="container-fluid">
	        <div className="navbar-header">
	          <button 	type="button" 
	          			className="navbar-toggle hvr-bounce-to-bottom collapsed" 
	          			data-toggle="collapse" 
	          			data-target=".navbar-collapse" 
	          			aria-expanded="false">
	            <span className="sr-only">Menu</span>
	            <span className="icon-bar"></span>
	            <span className="icon-bar"></span>
	            <span className="icon-bar"></span>
	          </button>
	          <a className="navbar-brand" id="brand">Inmobiliaria Diz</a>
	        </div>
	        <div className="navbar-collapse collapse">
	          <ul className="nav navbar-nav navbar-right">
	            <li>
		            <Link 	to="/inmobiliaria-diz"
					        className={"nav-li nav-li-active"}
					        id="nav-inicio"
		            		>Inicio</Link>
	            </li>
	            <li>
		            <Link 	to="/inmobiliaria-diz/institucional"
					        className={"nav-li"}
					        id="nav-institucional"
		            		>Institucional</Link>
	            </li>
	            <li>
		            <Link 	to="/inmobiliaria-diz/propiedades"
					        className={"nav-li"}
					        id="nav-propiedades"
		            		>Propiedades</Link>
	            </li>
	            <li>
		            <Link 	to="/inmobiliaria-diz/preguntas-frecuentes"
					        className={"nav-li"}
					        id="nav-preguntas"
		            		>Preguntas Frecuentes</Link>
	            </li>
	            <li>
		            <Link 	to="/inmobiliaria-diz/contacto"
					        className={"nav-li"}
					        id="nav-contacto"
		            		>Contacto</Link>
	            </li>
	          </ul>
	        </div>
	      </div>
	    </nav>
    );
  }
}

export default Nav;