//let"..."repeat
var output = "";

function drawDot() {
    if (output == "...") {
        output = "";
    }
    output += ".";
    console.log(output);
    setTimeout(drawDot, 1000);
}
drawDot();

function appearDot() {
    document.getElementById("dot").innerText = "";
    document.getElementById("dot").innerText = output;
    setTimeout(appearDot, 1000)
}
appearDot();