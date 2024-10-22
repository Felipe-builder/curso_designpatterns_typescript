import IVehicleCar from "./IvehicleCar";

export default class Car implements IVehicleCar {

  constructor(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
  ) {
    this.configure(color, year, engine, seats, doors)
  }

  startVehicle(): void {
    console.log('Ligando os motores')
  }
  configure(color: string, year: number, engine: number, seats: number, doors: number): void {
    console.log(
      `Criando um carro:
        Cor: ${color},
        Ano: ${year},
        Motor: ${engine} potência, 
        Assentos: ${seats}, 
        Portas: ${doors}`
    )
    this.startVehicle();
  }

}