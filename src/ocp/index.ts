import TypeVehicle from "./TypeVehicle";
import Car from "./vehicles/Car";
import Motorcycle from "./vehicles/Motorcycle";

const type = TypeVehicle.CAR;
let vehicle;

if (type === TypeVehicle.CAR) {
  vehicle = new Car("Amarelo", 2022, 140, 1, 0);
} else if (type === TypeVehicle.MOTORCYCLE) {
  vehicle = new Motorcycle("Amarelo", 2022, 2.0);
}