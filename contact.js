window.addEventListener('load', function () {

    const contactMail = "ricardo.eid@bbs1-lueneburg.de"

    const form = document.querySelector("#contact-form");
    form.addEventListener("submit", e => {
        e.preventDefault();
        let name = document.querySelector("#name").value;
        let lastname = document.querySelector("#lastname").value;
        let email = document.querySelector("#mail").value;
        let msg = document.querySelector("#msg").value;


        document.querySelector("#contact-form").reset();

        console.log("test")
        sendEmail(contactMail, name, email, lastname, msg);
    })

    function sendEmail(contactMail, name, email, lastname, msg) {
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "ricardo.eid@bbs1-lueneburg.de",
            Password: "129B6215BEAABE2597C49CBE559D969FA6C2",
            To: contactMail,
            From: "no-reply@candleshop.de",
            Subject: `${name} CandleShop Contact Form`,
            Body: `${name} ${lastname} hat eine Nachricht hinterlassen <br> ${msg} <br>`,
        }).then((success) => {

            alert("message sent successfully. Please check the spam folder in your mail.");
        }).catch((error) => {

            alert("error sending message");
        })
    }
});