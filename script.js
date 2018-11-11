function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
    //console.log(array.length);
}

preloadImages(["images/background1.jpg", "images/me3.jpg"]);


/*
function mobilizeEducation(x) {
    if (x.matches) { // If media query matches
        document.getElementById("educationContainer2").classList.remove("row");
        //document.body.style.backgroundColor = "yellow";
    } else {
        document.getElementById("educationContainer2").classList.add("row");
        //document.body.style.backgroundColor = "pink";
    }
}

var x = window.matchMedia("(max-width: 800px)")
mobilizeEducation(x) // Call listener function at run time
x.addListener(mobilizeEducation) // Attach listener function on state changes
*/



function mobilizeFooter(x) {
    if (x.matches) { // If media query matches
        document.getElementById("contactContainer").classList.remove("row");
        document.getElementById("mobileContactDiv").classList.add("row", "space-around");
        //document.body.style.backgroundColor = "yellow";
    } else {
        document.getElementById("contactContainer").classList.add("row");
        //document.body.style.backgroundColor = "pink";
    }
}

var x = window.matchMedia("(max-width: 930px)")
mobilizeFooter(x) // Call listener function at run time
x.addListener(mobilizeFooter) // Attach listener function on state changes



let count = 0;
let certArray = [
    "cert1.png",
    "cert2.png",
    "cert3.png",
    "cert4.png",
    "cert5.png",
    "cert6.png",
    "cert7.png",
    "cert8.png"
]
let linksArray = [
    "https://www.freecodecamp.org/certification/zacmoss/full-stack",
    "https://www.freecodecamp.org/certification/zacmoss/legacy-front-end",
    "https://www.freecodecamp.org/certification/zacmoss/javascript-algorithms-and-data-structures",
    "https://www.freecodecamp.org/certification/zacmoss/apis-and-microservices",
    "https://www.freecodecamp.org/certification/zacmoss/data-visualization",
    "https://www.freecodecamp.org/certification/zacmoss/information-security-and-quality-assurance",
    "https://www.freecodecamp.org/certification/zacmoss/responsive-web-design",
    "https://www.freecodecamp.org/certification/zacmoss/front-end-libraries"
]
let slide;
let certLink;
let rightClick = () => {
    if (count < 7) {
        count++;
    } else {
        count = 0;
    }
    slide = certArray[count];
    certLink = linksArray[count];
    document.getElementById("slide").setAttribute("src", "images/" + slide);
    document.getElementById("certLink").setAttribute("href", certLink);
}
let leftClick = () => {
    if (count > 0) {
        count--;
    } else {
        count = 7;
    }
    slide = certArray[count];
    certLink = linksArray[count];
    document.getElementById("slide").setAttribute("src", "images/" + slide);
    document.getElementById("certLink").setAttribute("href", certLink);
}