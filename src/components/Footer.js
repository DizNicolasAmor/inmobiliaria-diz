import React from 'react';


const Footer = () => {
  return (
    <div id="footer">
    	<h5 className="footer-text">@autor:  Nico Diz
    	&nbsp;
    		<a href="https://github.com/DizNicolasAmor" title="GitHub" rel="noopener noreferrer" target="_blank">
	    		<i className='fa fa-github fa-2x footer-icons'></i>
    		</a>
    		<a href="https://www.linkedin.com/in/nicol%C3%A1s-diz-0b51ba142/" title="LinkedIn" rel="noopener noreferrer" target="_blank">
				<i className='fa fa-linkedin fa-2x footer-icons'></i>
    		</a>
    		<a href="mailto:diz.nicolasamor@gmail.com" title="Email" rel="noopener noreferrer" target="_blank">
				<i className='fa fa-envelope fa-2x footer-icons'></i>
    		</a>
    	</h5>
    </div>
    );
} 

export default Footer;