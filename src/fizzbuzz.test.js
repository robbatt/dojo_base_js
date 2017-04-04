let convert = require("./fizzbuzz");

test('1 should be converted to "1"', () => {
    // Ergebnis der Konvertierung von 1 mittels Funktion (convert)
    let result = convert(1);
    // Test: Erwartung (expect) dass Ergebnis (toBe) Zeichenkette "1" ist.
    expect(result).toBe("1");
});

test('3 should be converted to "fizz"', () => {
    // Kurzform
    expect(convert(3)).toBe("fizz");
});
