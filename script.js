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