var colours = require('../../src/script/modules/bodyColour');

describe("colours tests", function() {

    it('should exist', function() {
        expect(colours).toBeDefined();
    });

    it("should return pink", function() {
        expect(colours).toBe('pink');
    });
});
