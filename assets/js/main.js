function Investimento() {
  const fazerCalculo = document.querySelector('#Calcular');
  const aporteInicial = document.querySelector('#aporte_inicial');
  const resultado = document.querySelector('#resultado');

  function investir(QueroAportar = 1000, anos = 5, taxaRendimento = 0.01) {
    let aporte = QueroAportar;
    let patrimonio = 0;

    tempo = anos * 12;
    let valorFinal = [];
    for (let meses = 0; meses < tempo; meses++) {
      patrimonio = patrimonio + aporte + patrimonio * taxaRendimento;
      valorFinal.push(patrimonio);
    }
    valorFinal.forEach((item) => {
      document.write(`<li>${item}</li>`);
    });
  }

  fazerCalculo.addEventListener('click', function () {
    if (Number.isNaN(Number.parseFloat(aporteInicial.value)) == false) {
      investir(Number.parseFloat(aporteInicial.value));
    } else {
      window.alert('Digite um valor numérico');
    }
  });
}
Investimento();
