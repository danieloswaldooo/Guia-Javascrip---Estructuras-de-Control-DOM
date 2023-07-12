document.getElementById('convertirBtn').addEventListener('click', convertTemperature);

function convertTemperature() {
    let celsius = parseFloat(document.getElementById('celsiusInput').value);
    let fahrenheit = (celsius * 9/5) + 32;
    let result = "";

    if (fahrenheit >= 14 && fahrenheit < 32) {
        result = "Temperatura baja";
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
        result = "Temperatura adecuada";
    } else if (fahrenheit >= 68 && fahrenheit < 96) {
        result = "Temperatura alta";
    } else {
        result = "Temperatura desconocida";
    }

    document.getElementById('result').textContent = result;
    document.getElementById('fahrenheitResult').textContent = "Temperatura en Fahrenheit: " + fahrenheit.toFixed(2) + " °F";
}