window.history.pushState('', '', location.pathname.slice(0, -1));

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


/* Sends form to email via EmailJS, resets form and reCAPTCHA */
function send(name, email, message) {
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
    document.getElementById("form").reset();
    grecaptcha.reset();
}


/* Validates the contents of the form and reCAPTCHA*/
function valid() {
    var name = String(document.querySelector('[name="name"]').value);
    var email = String(document.querySelector('[name="email"]').value);
    var message = String(document.querySelector('[name="message"]').value);
    var format = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    var captchaToken = grecaptcha.getResponse();

    if (name == "") {
        alert("Name must be filled");
        document.getElementById("name").focus();
    }
    else if (email == "") {
        alert("Email must be filled");
        document.getElementById("email").focus();
    }
    else if (message == "") {
        alert("You must include a message");
        document.getElementById("message").focus();
    }
    else if (!(String(email).match(format))) {
        alert("Email is incorrect");
        document.getElementById("email").focus();
    }
    else if (captchaToken.length == 0) {
        alert("Please complete the reCAPTCHA before sending your message!")
    }
    else { send(name, email, message); }
}


/* Adds text and media into the template html file */
function change(param) {
    document.getElementById("projectName").innerHTML = param[0];
    document.getElementById("tools").innerHTML += param[1];
    document.getElementById("github").href = param[2];
    document.getElementById("github").style.fontSize = "50px";
    document.getElementById("text").innerHTML = param[3];

    var video = document.getElementById('video');
    var click = document.getElementById("clickable");
    var picture = document.getElementById("projectPic");
    var otherPics = document.getElementById("otherPics");


    if (param[4] == 1) {
        click.remove();
    }
    else if (param[4] == 2) {
        document.getElementById("button").innerHTML = "Click Me!";
        click.setAttribute("href", "portfolio/coming-soon");
    }
    else {
        click.setAttribute("href", param[4]);
    }

    if (param[5] == 1) {
        video.remove();
    }
    else if (param[5] == 2) {
        video.remove();
        const projectPic = document.createElement('img');
        projectPic.setAttribute('class', "picture");
        projectPic.setAttribute('src', param[6]);
        picture.appendChild(projectPic);
    }
    else {
        var source = document.createElement('source');
        source.setAttribute('src', param[5]);
        source.setAttribute('type', 'video/mp4');
        video.appendChild(source);
        video.play();
    }


    if (param[7] == 1) {
        otherPics.remove();
    }
    else if (param[7] == 2) {
        otherPics.setAttribute("class", "pictureGrid1");

        const otherPic1 = document.createElement("img");
        const otherPic2 = document.createElement("img");
        const otherPic3 = document.createElement("img");

        otherPic1.setAttribute("class", "otherPicture");
        otherPic1.setAttribute("src", param[8][0]);
        otherPic2.setAttribute("class", "otherPicture");
        otherPic2.setAttribute("src", param[8][1]);
        otherPic3.setAttribute("class", "otherPicture");
        otherPic3.setAttribute("src", param[8][2]);

        otherPics.appendChild(otherPic1);
        otherPics.appendChild(otherPic2);
        otherPics.appendChild(otherPic3);
    }
    else {
        otherPics.setAttribute("class", "pictureGrid2");
        const otherPic1 = document.createElement("img");
        const otherPic2 = document.createElement("img");
        const otherPic3 = document.createElement("img");
        const otherPic4 = document.createElement("img");
        const otherPic5 = document.createElement("img");

        otherPic1.setAttribute("class", "otherPicture");
        otherPic1.setAttribute("src", param[8][0]);
        otherPic2.setAttribute("class", "otherPicture");
        otherPic2.setAttribute("src", param[8][1]);
        otherPic3.setAttribute("class", "otherPicture");
        otherPic3.setAttribute("src", param[8][2]);
        otherPic4.setAttribute("class", "otherPicture");
        otherPic4.setAttribute("src", param[8][3]);
        otherPic5.setAttribute("class", "otherPicture");
        otherPic5.setAttribute("src", param[8][4]);

        otherPics.appendChild(otherPic1);
        otherPics.appendChild(otherPic2);
        otherPics.appendChild(otherPic3);
        otherPics.appendChild(otherPic4);
        otherPics.appendChild(otherPic5);
    }

}