const rightdiv = (image) => {
    let mydiv = document.createElement("div"); // Change "mydiv" to "div"
    mydiv.className = "RightClass";
    mydiv.innerHTML = `<img src="./${image}">`; // Adjust image path

    return mydiv;
}

export { rightdiv };
