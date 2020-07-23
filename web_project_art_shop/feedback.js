let form = document.getElementById('forma');
function show(state){
    document.getElementById('forma').style.display = state;
    document.getElementById('backimage').style.display = state;
}
function sent() {
    if ((formo.name.value == '')||(formo.name.value == ' ')) {
        formo.name.classList.add("red");
        return 0;
    } else if (formo.name.classList.contains("red"))
        formo.name.classList.remove("red");
    if ((formo.tel.value == '')||(formo.tel.value == ' ')||(formo.tel.validity.patternMismatch)) {
        console.log(formo.tel.value);
        formo.tel.classList.add("red");
        return 0;
    } else if (formo.tel.classList.contains("red"))
        formo.tel.classList.remove("red");
    if (formo.email.validity.typeMismatch) {
        formo.email.classList.add("red");
        return 0;
    } else if (formo.email.classList.contains("red"))
        formo.email.classList.remove("red");

}