import { expect, use } from "chai";
import chaiHttp from "chai-http";

const chai = use(chaiHttp);
chai.request();

/* import router from "../router/router.js"; */

const url = "http://localhost:3000";

describe("Primer encuentro con los test con Mocha", () => {
  it("Primer test con Mocha", () => {
    let num1 = 1;
    let num2 = 5;
    let sum = num1 + num2;

    expect(sum).to.equal(6);
  });
  it("Segundo test con Mocha que probara una multiplicacion", () => {
    let num1 = 5;
    let num2 = 10;
    let resultado = num1 * num2;
    expect(resultado).to.equal(50);
  });
  it("Tercer test con Mocha que probara una division", () => {
    let num1 = 10;
    let num2 = 5;
    let resultado = num1 / num2;
    expect(resultado).to.equal(2);
  });
  it.skip("Cuarto test con Mocha que probara la ruta raiz", () => {
    chai
      .request(url)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal("Hello World!");
      });
  });
  it("Quinto test con Mocha que probara la ruta /country", () => {
    chai
      .request(url)
      .get("/country")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal({
          id: 1,
          country: "Colombia",
          capital: "Bogota",
          population: 40000000,
          year: 2021,
          days: 17
        });
      });
  })
  it("Sexto test con Mocha que probara la ruta /country", () => {
    chai
      .request(url)
      .get("/country")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property("countries");
        expect(res.body).to.have.property("year");
        });
      });
  })

