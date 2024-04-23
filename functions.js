/* Creates a typewriter effect by adding text one character at a time
    skips over spaces for a smoother animation */
var text = "  Hi, I'm George";
i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
    }
}


/* Toggles the flip class for the project cards, creating the fliping animation */
function flip(x) {
    id = x.id
    var card = document.getElementById(id);
    card.classList.toggle('flip');
}


/* Gets the information inputted from the form and sends it using mail.js */
function send(name, email, message) {
    var templateParams = {
        to_name: 'George',
        from_name: name,
        subject: 'Contact Form Message',
        message: email + message,
    };
    emailjs.send('service_j2mkwmy', 'template_zilck42', templateParams, 'OmkW-QBfWdiQpxshy');
}


/* Validates the contents of the form */
function valid() {
    var name = document.querySelector('[name="name"]').value;
    var email = document.querySelector('[name="email"]').value;
    var message = document.querySelector('[name="message"]').value;

    send(name, email, message);
}