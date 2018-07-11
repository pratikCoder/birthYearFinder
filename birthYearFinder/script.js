
function calculate() {

    var age = document.getElementById("number").value;

    if (age == "" || age == 0 || age < 0) {
        window.alert("Please type your correct age...");
        return;
    }

    var date = new Date().getFullYear();

    var birthYear = age - date;

    document.getElementById("year").style.display = "block";
    document.getElementById("year").innerHTML = "Your Birth Year is " + birthYear;

}
document.getElementById("year").style.display = "none";

document.getElementById("btn").onclick = function () {
    calculate();
}