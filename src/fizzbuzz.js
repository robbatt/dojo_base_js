function convert(num) {

    // Sonderbehandlung konvertiert 3 zu "fizz"
    if(num === 3) {
        return "fizz"
    }

    // Standard, konvertiert Zahl zu Zeichenkette
    return num.toString();
}
module.exports = convert;
