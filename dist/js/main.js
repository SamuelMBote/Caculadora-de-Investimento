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
      let tr = document.createElement('tr');
      let th = document.createElement('th');
      let td = document.createElement('td');
      th.setAttribute('scope', 'row');
      th.innerText = index + 1;
      td.innerText = `R$ ${item.toFixed(2)}`;

      tr.innerHTML = th.outerHTML + td.outerHTML;
      resultado.innerHTML += tr.outerHTML;
    });
  }

  fazerCalculo.addEventListener('click', function () {
    if (resultado.innerHTML != '') {
      resultado.innerHTML = '';
    }
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
  const nomeTema = document.querySelector('#nomeTema');
  const body = document.querySelector('html').dataset;

  tema.checked = false;
  body.theme = 'light';
  tema.addEventListener('click', function () {
    let iElement = document.createElement('i');
    iElement.classList.add('bi');
    if (tema.checked) {
      body.theme = 'dark';
      iElement.classList.add('bi-moon-stars-fill');
      nomeTema.innerHTML = iElement.outerHTML;
    } else {
      body.theme = 'light';
      iElement.classList.add('bi-brightness-high');
      nomeTema.innerHTML = iElement.outerHTML;
    }
  });
}
switchTheme();
