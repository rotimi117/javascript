const sum = require("../javascript/sum.js")
Test("The result when you add two values: ", {} => {
    expect(sum(99,9)).toBe(108);
}
);