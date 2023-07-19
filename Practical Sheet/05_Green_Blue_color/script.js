function pinkColorFn() {
    var box1 = document.querySelector(".box1");
    if (box1.style.backgroundColor != "green") {
        box1.style.backgroundColor = "green";
    }
    else {
        box1.style.backgroundColor = "transparent";
        return false;
    }
}

function blueColorFn() {
    var box2 = document.querySelector(".box2");
    if (box2.style.backgroundColor != "red") {
        box2.style.backgroundColor = "red";
    }
    else {
        box2.style.backgroundColor = "transparent";
        return false;
    }
}