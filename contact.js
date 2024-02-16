/**
 * ricardo.eid@bbs1-lueneburg.de
 * 129B6215BEAABE2597C49CBE559D969FA6C2
 * smtp.elasticemail.com
 * 2525
 */
window.addEventListener('load', function () {
    console.log("fully loaded")
    const form = document.querySelector("#contact-form");
    form.addEventListener("submit", e => {
        e.preventDefault();
        let name = document.querySelector("#name").value;
        let lastname = document.querySelector("#lastname").value;
        let email = document.querySelector("#mail").value;
        let msg = document.querySelector("#msg").value;


        document.querySelector("#contact-form").reset();

        console.log("test")
        sendEmail(name, email, lastname, msg);
    })

    function sendEmail(name, email, lastname, msg) {
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "ricardo.eid@bbs1-lueneburg.de",
            Password: "129B6215BEAABE2597C49CBE559D969FA6C2",
            To: "ricardo.eid@bbs1-lueneburg.de",
            From: "ricardo.eid@bbs1-lueneburg.de",
            Subject: `${name} Just messaged you from the website form`,
            Body: `${name} <br> ${lastname} <br> Email: ${email} <br> ${msg} <br>`,
        }).then((success) => {

            alert("message sent successfully. Please check the spam folder in your mail.");
        }).catch((error) => {

            alert("error sending message");
        })
    }
});