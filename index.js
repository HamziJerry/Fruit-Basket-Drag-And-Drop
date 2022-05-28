console.log("This is javascript drag and drop tutorial");

let imgBox = document.querySelector(".imgBox");
let boxes = document.getElementsByClassName("box");


imgBox.addEventListener("dragstart", (e)=> {
    console.log("Drag Start event listener triggered");;
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
});

imgBox.addEventListener("dragend", (e)=> {
    e.target.className = 'imgBox';
    console.log("Drag End event listener triggered");
});

for(let box of boxes){
    box.addEventListener("dragover", (e)=> {
        e.preventDefault();
        console.log("Drag Over event listener triggered");
    });

    box.addEventListener("dragenter", (e)=> {
        console.log("Drag Enter event listener triggered");
    });

    box.addEventListener("dragleave", (e)=> {
        console.log("Drag Leave event listener triggered");
    });

    box.addEventListener('drop', (e)=> {
        e.target.append(imgBox);
        console.log("Drag Drop event listener triggered");
    });

}