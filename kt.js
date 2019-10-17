function a(b) {
    regexp = /^[0-9]{5}(?:\-[0-9]{4})?$/;
    if (regexp.test(b)){
        document.write("Số liệu của quốc gia mỹ " + "<br>");
    }
    else {
        document.write("Không số liệu của quốc gia mỹ " + "<br>");
    }
}
function abc() {
    var input = document.getElementById("input").value;
    var cd = a(input);
    document.getElementById("love").innerHTML = love;
}
