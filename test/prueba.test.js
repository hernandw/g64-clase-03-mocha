import { expect } from "chai";

describe("Primer encuentro con los test con Mocha", () => {
  it("Primer test con Mocha", () => {
    let num1 = 1;
    let num2 = 5;
    let sum = num1 + num2;

    expect(sum).to.equal(6);
  });
    it.skip("Segundo test con Mocha que probara una multiplicacion", () => {
        let num1 = 5;
        let num2 = 10;
        let resultado = num1 * num2;
        expect(resultado).to.equal(50);

    })
    it("Tercer test con Mocha que probara una division", () => {
        let num1 = 10;
        let num2 = 5;
        let resultado = num1 / num2;
        expect(resultado).to.equal(2);
    })
});
