import Client from "./srp/Client";
import Notify from "./srp/Notify";

const curso: string = "Design Patterns com Typescript!";

console.log(curso);

const cliente = new Client();
const notificacao = new Notify(cliente);

notificacao.sendEmail()
