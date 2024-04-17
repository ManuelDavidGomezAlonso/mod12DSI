import "mocha";
import { expect } from "chai";
import { jsonCards } from "../src/weather.js";
import { magicCard, color,tipe, rare } from "../src/magiCard.js";

describe("Asynchronous function weatherInfo tests", () => {
  const controller = new jsonCards();
  it("Añadiendo carta", () => {
    controller.delete(12);
    const magic = new magicCard(12, "Cazador", 16, color.multicolor, tipe.creature, rare.mythicRare, "No puede atacar cuerpo a cuerpo", 150, 100, 1000);
    return controller.add(magic).then((data) =>{
        expect(data).to.be.equal('card added');
    });
  });

  it("Añadiendo carta erronea", () => {
    const magic = new magicCard(12, "Cazador", 16, color.multicolor, tipe.creature, rare.mythicRare, "No puede atacar cuerpo a cuerpo", 150, 100, 1000);
    controller.add(magic).catch((err) => {
        expect(err).to.be.equal('card alredy exist');
      });
  });

  it("Mostrando carta", () => {
    const magic = new magicCard(12, "Cazador", 16, color.multicolor, tipe.creature, rare.mythicRare, "No puede atacar cuerpo a cuerpo", 150, 100, 1000);
    controller.showCard(12).then((data) =>{
        expect(data).to.be.equal(JSON.stringify(magic));
    });
  });
  it("Mostrando carta erronea", () => {
    controller.showCard(34).catch((err) => {
        expect(err).to.be.equal('Card not found');
      });
  });
});