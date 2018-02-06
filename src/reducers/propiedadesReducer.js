const propiedadesReducer = (
    state = {
      propiedades: {
        propiedades: []
      }
    }, 
    action) => {
        switch (action.type) {
            case "GET_DATA":
                state = {
                    ...state,
                    propiedades: action.payload
                };
                break;
            default: 
                break;
        }
        return state;
};

export default propiedadesReducer;