const carro = {
    ligado: false, 
    velocidade: 0,

    ligar: function() {
        return this.ligado ? console.log("Este carro está ligado") : this.ligado = true;  
    },

    desligar: function() {
        return this.ligado === false ? console.log("Este carro está desligado") : this.ligado = false;
    },

    acelerar: function() {
        return this.ligado === false ? console.log("Não é possível acelerar com o carro desligado") : this.velocidade += 10;
    },

    desacelerar: function() {
        return this.ligado === false ? console.log("Não é possível desacelerar um carro desligado") : this.velocidade -= 10;
    },


    
};

carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();