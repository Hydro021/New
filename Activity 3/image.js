const rightdiv = (image) => {
    let mydiv = document.createElement("div"); // Change "mydiv" to "div"
    mydiv.className = "RightClass";
    mydiv.innerHTML = `<img src="./images/${image}">`; // Adjust image path

    return mydiv;
}

export { rightdiv };
