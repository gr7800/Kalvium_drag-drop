const draggables = document.querySelectorAll(".draggable");
const dropzones = document.querySelectorAll(".dropzone");

// Add listeners for draggable elements
draggables.forEach(draggable => {
    draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
    });

    draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
    });
});

// Add listeners for dropzone elements
dropzones.forEach(dropzone => {
    dropzone.addEventListener("dragover", e => {
        e.preventDefault();
        dropzone.classList.add("dragover");

    });

    dropzone.addEventListener("dragleave", () => {
        dropzone.classList.remove("dragover");
    });

    dropzone.addEventListener("drop", e => {
        e.preventDefault();
        const draggable = document.querySelector(".dragging");
        if (draggable.parentNode != dropzone) {
            dropzone.appendChild(draggable);
        }
        dropzone.classList.remove("dragover");
    });
});
