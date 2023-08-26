
let list = document.querySelectorAll(".links a");
let menuBtn = document.querySelector(".menu-icon");
let closeBtn = document.querySelector(".close-icon");
let links = document.querySelectorAll("a");
let navBar = document.querySelector("nav");

menuBtn.onclick = () => {
    navBar.style.position = "fixed";
    navBar.style.left = "50%";
    menuBtn.style.visibility = "hidden";
};

closeBtn.onclick = () => {
    navBar.style.left = "100%";
    menuBtn.style.visibility = "visible";
};


function active() {
    list.forEach((e) => {
        e.classList.remove("active")
        this.classList.add("active");
    })
};

list.forEach((e) => {
    e.addEventListener("click", active);
});

function active() {
    links.forEach((e) => {
        e.classList.remove("active")
        this.classList.add("active");
    })
};

links.forEach((e) => {
    e.addEventListener("click", active);
});

var section = document.querySelectorAll("section");


// onscroll = function () {
//     var scrollPosition = document.documentElement.scrollTop;

//     section.forEach((section) => {
//         if (scrollPosition >= section.offsetTop - section.offsetHeight * 0.35 && scrollPosition < section.offsetTop + section.offsetHeight ) {
//             var currentId = section.attributes.id.value;
//             removeActive();
//             addActive(currentId);
//         }
//     });
// }

// var removeActive = function() {
//     document.querySelectorAll(".links a").forEach((el) => {
//         el.classList.remove("active");
//     });
// };

// var addActive = function (id) {
//     console.log(id);
//     var selector = `.links a[href = "#${id}"]`;
//     document.querySelector(selector).classList.add("active");
// };









onscroll = function () {
    var scrollPosition = document.documentElement.scrollTop;

    section.forEach((section) => {
        if (scrollPosition >= section.offsetTop - section.offsetHeight * 0.7 && scrollPosition < section.offsetTop + section.offsetHeight ) {
            var currentId = section.attributes.id.value;
            removeActive();
            addActive(currentId);
        }
    });
}

var removeActive = function() {
    document.querySelectorAll("nav a").forEach((el) => {
        el.classList.remove("active");
    });
};

var addActive = function (id) {
    console.log(id);
    var selector = `nav a[href = "#${id}"]`;
    document.querySelector(selector).classList.add("active");
};




