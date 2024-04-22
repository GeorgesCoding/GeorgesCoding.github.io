var text = "  Hi, I'm George";
i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
    }
}

function flip(x) {
    id = x.id
    var card = document.getElementById(id);
    card.classList.toggle('flip');
}

/*     
    var name = document.querySelector('[name="name"]').value;
    var email = document.querySelector('[name="email"]').value;
    var message = document.querySelector('[name="message"]').value;
*/

function send() {
}
