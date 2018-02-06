import React from 'react';
import {connect} from "react-redux";
import { seleccionarPregunta } from "../actions/preguntasActions";


const Requisitos = () => {
    return (
            <ul>
                <li><p>Se requiere una entrevista personal en nuestra oficina para poder reservar el departamento.</p></li>
                <li><p>En caso de ser extranjero es necesario presentar el pasaporte y tarjeta de crédito.</p></li>
                <li><p>Los honorarios dependen del período del contrato. Consulte antes de solicitar la visita al inmueble.</p></li>
                <li><p>El día de la firma de contrato debe realizarse todo el pago adelantado de todos los meses de alquiler y depósito  que correspondan y en la moneda que figure en la ficha de la propiedad, según sea en dólares estadounidenses (U$S) o pesos argentinos ($). También deben abonarse el mismo día los honorarios, importe que varían según el período del contrato.</p></li>
                <li><p>Se suelen pedir 2 meses de depósito que el propietario reintegrará al final del contrato a menos que haya gastos pendientes (de luz, internet, gas y teléfono),  daños o limpieza en la propiedad.</p></li>
                <li><p>Los alquileres temporarios no requieren de garantía por eso son ideales para extranjeros y turistas.</p></li>
                <li><p>Para reservar un depto. en alquiler temporario es necesario presentarse con la ficha de datos personales completa: Planilla-datos-alquileres-temporarios.</p></li>
            </ul>
        );
}


const Preguntas = (props) => {
    return (
        <div id="preguntas">
            <h2>Preguntas Frecuentes</h2>
            <h2><hr /></h2>
            <ul>
                <li>
                    <p onClick = { () => props.seleccionarPregunta('pregunta-1') } ><strong>¿Cómo reservar un inmueble?</strong></p>
                    { props.preguntas.preguntaActiva === 'pregunta-1' ? 
                      <p>Todas las reservas deben realizarse en forma personal en nuestro local ubicado en  ___. en el horario de atención al público. 
                        Le recomendamos solicitar una cita con anticipación. Lamentablemente no es posible reservar por email o a distancia ya que es necesaria 
                        una entrevista personal en la que se explicarán las condiciones y documentos necesarios para poder avanzar.</p>
                      : '' }
                     
                </li>
                <li>
                    <p onClick = { () => props.seleccionarPregunta('pregunta-2') } ><strong>Horario de atención</strong></p>
                    { props.preguntas.preguntaActiva === 'pregunta-2' ? 
                        <p>El horario de atención al público es de Lunes a Viernes de 09:00 a 17:00hs. Sábados de 09:00 a 14:00Hs.</p>
                        : '' }
                </li>
                <li>
                    <p onClick = { () => props.seleccionarPregunta('pregunta-3') } ><strong>¿Cómo puedo hacer para ver un departamento personalmente y cuáles son los horarios?</strong></p>
                    { props.preguntas.preguntaActiva === 'pregunta-3' ? 
                        <p>Para ver una propiedad personalmente debe llamarnos al +54 9 1234 5678 y solicitar una cita. 
                        El horario de atención al público es de Lunes a Viernes de 09:00 a 17:00hs. Sábados de 09:00 a 14:00Hs.</p>
                        : '' }
                </li>
                <li>
                    <p onClick = { () => props.seleccionarPregunta('pregunta-4') } ><strong>Tasaciones</strong></p>
                    { props.preguntas.preguntaActiva === 'pregunta-4' ? 
                        <p>Para poder coordinar una tasación, llámenos al +54 9 1234 5678 o envíenos un mail con la dirección del inmueble y los metros cuadrados por escritura. 
                        Para poder realizar la tasación, vamos a necesitar la escritura del inmueble, el último importe de expensas, el valor del abl/inmobiliario y el de Aysa.</p>
                        : '' }
                </li>
                <li>
                    <p onClick = { () => props.seleccionarPregunta('pregunta-5') } ><strong>Requisitos para realizar operaciones</strong></p>
                    { props.preguntas.preguntaActiva === 'pregunta-5' ? 
                        <Requisitos />
                        : '' }
                </li>
            </ul>
        </div>
    );
}


const mapStateToProps = (state) => {
  return {
      preguntas: state.preguntas
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        seleccionarPregunta: (str) => {
          dispatch(seleccionarPregunta(str));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Preguntas);
