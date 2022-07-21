function Investimento() {
  const fazerCalculo = document.querySelector('#Calcular');
  const aporteInicial = document.querySelector('#aporte_inicial');
  const aporteMensal = document.querySelector('#aporte_mensal');
  const resultado = document.querySelector('#resultado');
  const anos = document.querySelector('#anosInvestir');

  function adicionarAnos() {
    let qtdAnos = [];
    for (let ano = 1; ano <= 10; ano++) {
      qtdAnos.push(ano);
    }
    qtdAnos.forEach((item, index) => {
      anos.innerHTML += `<option value="${item}">${item}</option>`;
    });
  }
  adicionarAnos();
  function investir(
    ValorInicial = 0,
    QueroAportar = 1000,
    anos = 5,
    taxaRendimento = 0.01,
  ) {
    let aporte = QueroAportar;
    let patrimonio = ValorInicial;

    tempo = anos * 12;
    let valorFinal = [];
    for (let meses = 0; meses < tempo; meses++) {
      patrimonio = patrimonio + aporte + patrimonio * taxaRendimento;
      valorFinal.push(patrimonio);
    }

    valorFinal.forEach((item, index) => {
      resultado.innerHTML += ` <tr>
        <th scope="row">${index + 1} º mês</th>
        <td>R$ ${item.toFixed(2)}</td>
              </tr>`;
    });
  }

  fazerCalculo.addEventListener('click', function () {
    resultado.innerHTML = '';
    if (
      Number.isNaN(Number.parseFloat(aporteInicial.value)) == false &&
      Number.isNaN(Number.parseFloat(aporteMensal.value)) == false
    ) {
      investir(
        Number.parseFloat(aporteInicial.value),
        Number.parseFloat(aporteMensal.value),
        Number.parseInt(anos.value),
      );
    } else {
      window.alert('Digite um valor numérico');
    }
  });
}
Investimento();
function switchTheme() {
  const tema = document.querySelector('#temaSwitch');
  const body = document.querySelector('html').dataset;
  tema.checked = false;
  body.theme = 'light';
  tema.addEventListener('click', function () {
    tema.checked ? (body.theme = 'dark') : (body.theme = 'light');
  });
}
switchTheme();
