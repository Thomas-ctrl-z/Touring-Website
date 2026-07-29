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
