const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],

    depositar: function(valor) {
            this.saldo += valor;
            this.historicos["tipo"] = "Depósito";
            this.historicos["valor"] = valor.toFixed(2);

        return `Depósito de R\$${valor} realizado para o cliente: ${this.nome}.`
    },

    sacar: function(valor) {
        if(valor > this.saldo) return `Saldo insuficiente para o saque de: ${this.nome}`;
        else { 
            this.saldo -= valor; 
            this.historicos["tipo"] = "Saque";
            this.historicos["valor"] = valor;

            return `Saque de R\$${valor} realizado para o cliente: ${this.nome}.`
        }
    },
}


console.log(contaBancaria.depositar(1000));
console.log(contaBancaria.sacar(50))
