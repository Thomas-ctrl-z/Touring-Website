const phone = document.getElementById("phone");
const email = document.getElementById("email");


function togglePhone(event) {
    event.preventDefault();

    if (phone.style.display === "inline") {
        phone.style.display = "none";
    } else {
        phone.style.display = "inline";
    }
}


function toggleEmail(event) {
    event.preventDefault();

    if (email.style.display === "inline") {
        email.style.display = "none";
    } else {
        email.style.display = "inline";
    }
}


// HEADER SCROLL

const header = document.querySelector("header")

window.addEventListener("scroll", () => {

    let scroll = Math.min(window.scrollY / 150, 1);

    scroll = 1 - Math.pow(1 - scroll, 3);

    header.style.backgroundColor = `rgba(19, 117, 71, ${scroll})`;

});


// ---------------END------------