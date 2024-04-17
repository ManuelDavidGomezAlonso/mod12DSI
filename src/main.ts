import { magicCard, tipe, color, rare} from "./magiCard.js";
import { jsonCards } from "./weather.js";

const controller = new jsonCards();
const magic = new magicCard(12, "Cazador", 16, color.multicolor, tipe.creature, rare.mythicRare, "No puede atacar cuerpo a cuerpo", 150, 100, 1000);

controller.add(magic).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})

controller.showCard(magic.id_).then((data)=>{
    console.log(data);
}).catch((error) => {
    console.log(error);
})
