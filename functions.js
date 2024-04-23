/* Creates a typewriter effect by adding text one character at a time, skips over spaces for a smoother animation */
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
    var captchaToken = grecaptcha.getResponse();
    
    if (captchaToken == "") {
        alert("Please complete the reCAPTCHA before sending your message!")
    }
    else {
        var templateParams = {
            to_name: 'George',
            from_name: name,
            subject: 'Contact Form Message',
            message: "Email: " + email + "\n\n" + message,
            "g-recaptcha-response": captchaToken
        };
        emailjs.send('service_j2mkwmy', 'template_zilck42', templateParams, 'OmkW-QBfWdiQpxshy').then(
            (response) => {
                alert("Message successfully sent!");
            },
            (error) => {
                alert("There was an error in sending the message. Please contact support@georgescoding.com.");
            },
        );
    }
}


/* Validates the contents of the form */
function valid() {
    var name = String(document.querySelector('[name="name"]').value);
    var email = String(document.querySelector('[name="email"]').value);
    var message = String(document.querySelector('[name="message"]').value);
    var format = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

    if (name == "") { alert("Name must be filled") }
    else if (email == "") { alert("Email must be filled") }
    else if (message == "") { alert("You must include a message") }
    else if (!(String(email).match(format))) { alert("Email is incorrect") }
    else { send(name, email, message); }
}
