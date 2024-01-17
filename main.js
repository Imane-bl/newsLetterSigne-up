function check() {
    var inputText = document.getElementsByClassName("input")[0].value;
    var emailreg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailreg.test(inputText)) {
        alert("Valid Email!");
    } else {
        // Access the first element with the class "input" and set its style
        document.getElementsByClassName("input")[0].style.color = "red";
        alert("Invalid Email! Please enter a valid email address.");
    }
}
