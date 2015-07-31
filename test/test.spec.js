var methods = require("../src/script/test");
var colours = require('../src/script/modules/bodyColour');

describe("methods tests", function() {
    it("should return 29", function() {
        expect(methods.calculateAge(1985)).toBe(30);
    });

    it("should throw an error", function() {
        expect(function() {
            methods.calculateAge("Mumbo-Jumbo")
        }).toThrow(new Error("Only works with numbers"));
    });

    it("should return pink", function() {
        expect(colours).toBe('pink');
    });
});
