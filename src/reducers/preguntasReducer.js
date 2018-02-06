const preguntasReducer = (
    state = {
        preguntaActiva: 'pregunta-1'
    }, 
    action) => {
        switch (action.type) {
            case "SELECCIONAR_PREGUNTA":
                state = {
                    ...state,
                    preguntaActiva: action.payload
                };
                break;
            default: 
                break;
        }
        return state;
};

export default preguntasReducer;