import React from 'react';

const Inicio = () => {
    return (
        <div id="inicio">
            <h2>Inmobiliaria Diz</h2>
            <h2><hr /></h2>

            <div className="row">
                <div className="col-md-6">
                    <div className="inicioGrid">
                        <h2 id="inicioLogo">
                            <i className="fa fa-home fa-4x icon-inicio" aria-hidden="true"></i>
                        </h2>
                        <h2 id="villa-gesell">Propiedades en 
                            <br />Villa Gesell
                        </h2>
                    </div>
                </div>

                <div className="col-md-6">
                	<p>Este proyecto es una plantilla que desarrollé desde cero utilizando ReactJS.</p>
                	<p>Las imágenes y datos de las propiedades provienen de información pública de la API de
                		<a href="https://www.mercadolibre.com.ar/" 
                		title="https://www.mercadolibre.com.ar/" 
                		rel="noopener noreferrer" target="_blank"> MercadoLibre</a>.</p> 
                	<p>No guardo ninguna relación comercial con la empresa ni los productos. Sólo utilizo datos de dicha API pública para implementar 'axios' y además, visualizar el diseño.</p>
                	<p>El código fuente del proyecto está en 
                		<a href="https://github.com/DizNicolasAmor/inmobiliaria-diz" 
                		title="https://github.com/DizNicolasAmor/inmobiliaria-diz" 
                		rel="noopener noreferrer" target="_blank"> este link</a>.</p> 
                	<p>Desarrolladores pueden usar el código y modificarlo libremente.</p>
                </div>
            </div>
        </div>
    );
}

export default Inicio;