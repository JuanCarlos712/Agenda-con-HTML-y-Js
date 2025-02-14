document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector(".form");
    const inputTarea = document.getElementById("tarea");
    const inputDescripcion = document.getElementById("descripcion");
    const listaTareas = document.querySelector(".hero");

    let mensajeVacio = document.querySelector(".hero-blank");

    formulario.addEventListener("submit", (evt) => {
        evt.preventDefault();

        const tarea = inputTarea.value.trim();
        const descripcion = inputDescripcion.value.trim();

        if (tarea === "" || descripcion === "") {
            alert("Por favor, completa ambos campos.");
            return;
        }

        if (mensajeVacio) {
            mensajeVacio.remove();
            mensajeVacio = null;
        }

        const tareaElemento = document.createElement("div");
        tareaElemento.classList.add("tarea");
        tareaElemento.innerHTML = `
            <div class="tarea-info">
                <h3>${tarea}</h3>
                <p>${descripcion}</p>
            </div>
            <div>
                <button class="completado">Completado</button>
                <button class="eliminar">Eliminar</button>
            </div>
        `;

        listaTareas.appendChild(tareaElemento);

        inputTarea.value = "";
        inputDescripcion.value = "";

        const btnEliminar = tareaElemento.querySelector(".eliminar");
        const btnCompletado = tareaElemento.querySelector(".completado");

        // Evento para eliminar la tarea
        btnEliminar.addEventListener("click", () => {
            tareaElemento.remove();
            if (listaTareas.children.length === 0) {
                mensajeVacio = document.createElement("p");
                mensajeVacio.classList.add("hero-blank");
                mensajeVacio.textContent = "No hay tareas disponibles";
                listaTareas.appendChild(mensajeVacio);
            }
        });

        // Evento para marcar como completado (sin vuelta atrás)
        btnCompletado.addEventListener("click", () => {
            if (!tareaElemento.classList.contains("completada")) {
                tareaElemento.classList.add("completada");
                tareaElemento.style.textDecoration = "line-through";
                tareaElemento.style.opacity = "0.6";
            }
        });
    });
});
