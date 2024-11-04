class Heroi {
	constructor(nome, idade, tipo) {
		this.nome = nome;
		this.idade = idade;
		this.tipo = tipo;
	}

	atacar() {
		let ataque;

		switch (this.tipo.toLowerCase()) {
			case "mago":
				ataque = "magia";
				break;
			case "guerreiro":
				ataque = "espada";
				break;
			case "monge":
				ataque = "artes marciais";
				break;
			case "ninja":
				ataque = "shuriken";
				break;
			default:
				ataque = "um ataque misterioso";
		}

		console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
	}
}

let mago = new Heroi("Harry", 20, "Mago");
let guerreiro = new Heroi("Tanjiro", 18, "Guerreiro");
let monge = new Heroi("Yuito", 25, "Monge");
let ninja = new Heroi("Naruto", 16, "Ninja");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
