function Sendmails() {
    var data = {
        name1: document.getElementById("name1").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        message: document.getElementById("message").value
    }
    const serviceID = "service_dpmfavm"
    const templateID = "template_tle3hrp"

    emailjs.send(serviceID, templateID, data)
        .then(
            res => {
                document.getElementById("name1").value = "";
                document.getElementById("email").value = "";
                document.getElementById("number").value="";
                document.getElementById("message").value = "";
                console.log(res)
                alert("Message sent successfully")
            }
        )
        .catch((err) => console.log(err))
}
