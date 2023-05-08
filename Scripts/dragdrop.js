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


// ... Smaple dragble content ....... 

var chooseElement;

const move = (element)=>{
    const elements=document.querySelectorAll(".element");

    elements.forEach((el)=>{
        el.addEventListener("mousedown",()=>{
            el.style.position = "absolute"
            chooseElement=el;
            document.onmousemove=(e)=>{
                var x = e.pageX
                var y = e.pageY

                chooseElement.style.left = x-50+"px";
                chooseElement.style.top = y-50+"px"

                console.log(chooseElement);
            }
        })
    })
    document.onmouseup=(e)=>{
        chooseElement=null
    }
}