let submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", function() {
    document.getElementById("vorname").value = "";
    document.getElementById("nachname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("textfeld").value = "";
});

