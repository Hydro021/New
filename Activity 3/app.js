import { leftdiv } from "./info.js";
import { rightdiv } from "./image.js";

const data = {
    title1: "Brown Puppy",
    para1: "This adorable brown puppy is full of energy and loves to play all day long.",
    para2: "With its fluffy fur and wagging tail, this puppy brings joy to everyone it meets.",
    button1: "Home",
    button2: "View",
    button3: "Contact Us",
    button4: "About Us",
    myImage: "dog.jpg"
};

const { title1, para1, para2, button1, button2, button3, button4, myImage } = data;
container.append(leftdiv(title1, para1, para2, button1, button2, button3, button4));
container.append(rightdiv(myImage));
