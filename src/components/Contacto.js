import React from 'react';
import logo from '../images/logo.png'

const Contacto = () => {
    return (
        <div id="contacto" className="section-title">
            <h2>Contacto</h2>
            <h2><hr /></h2>
            <div className="row">
                <div className="col-md-4">
                    <h2>
                        <img src={logo} alt="logo"  />
                    </h2>
                </div>
                <div className="col-md-4">
                    <div className="contacto-row">
                        <i className="fa fa-map-marker fa-2x contacto-icon" aria-hidden="true"></i>
                        <p className="contacto-text">Nombre Calle 1234 1° A, CABA, Buenos Aires, Argentina</p>
                    </div>
                    <div className="contacto-row">
                        <i className="fa fa-phone fa-2x contacto-icon" aria-hidden="true"></i>
                        <p className="contacto-text">+54 11 1234 5678</p>
                    </div>
                    <div className="contacto-row">
                        <i className="fa fa-envelope fa-2x contacto-icon" aria-hidden="true"></i>
                        <p className="contacto-text">my@email.com</p>
                    </div>
                    <div className="contacto-row">
                        <i className="fa fa-google-plus fa-2x contacto-icon" aria-hidden="true"></i>
                        <p className="contacto-text">+UserName111</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="contacto-row">
                        <i className="fa fa-clock-o fa-2x contacto-icon" aria-hidden="true"></i>
                        <p className="contacto-text">Horarios de atención: </p>
                    </div>
                    <table>
                      <tbody>
                        <tr>
                            <td>
                                <p className="contacto-horarios">Lunes a Viernes: </p>
                            </td>
                          <td>
                                <p className="contacto-horarios contacto-horarios-right">09:00 a 17:00hs</p>
                          </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="contacto-horarios">Sábados: </p>
                            </td>
                            <td>
                                <p className="contacto-horarios contacto-horarios-right">09:00 a 14:00hs</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="contacto-horarios">Domingos: </p>
                            </td>
                            <td>
                                <p className="contacto-horarios contacto-horarios-right">Cerrado. </p>
                            </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="contacto-row">
                        <i className="fa fa-institution fa-2x contacto-icon" aria-hidden="true"></i>
                        <p className="contacto-text">CPI 000 </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacto;