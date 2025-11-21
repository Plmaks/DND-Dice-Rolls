function dice() {
    random = Math.round(Math.random() * (21 - 0) + 0);
    document.getElementById("result").innerHTML = random;
}