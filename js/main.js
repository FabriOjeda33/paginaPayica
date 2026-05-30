function votar(opcion) {
    let resultado = document.getElementById("respuestaVotacion");

    if (opcion == 1) {
        resultado.textContent = "Gracias por votar por los payicos no te arrepentiras de habernos votado en verda eh";
    } else if (opcion == 2) {
        resultado.textContent = "ahh, ya veo, votaste por los manes esos, dale no pasa nada cada quien con sus gustos raros";
    }
}