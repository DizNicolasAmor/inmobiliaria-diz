export function seleccionarPregunta(preguntaId) {
    return {
        type: "SELECCIONAR_PREGUNTA",
        payload: preguntaId
    };
}
