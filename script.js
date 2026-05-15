const etapas = document.querySelectorAll(".etapa");
function irPara(n) {
  etapas.forEach((e) => {
    e.classList.remove("ativa");
  });

  const proximaEtapa = document.getElementById("etapa-" + n);
  proximaEtapa.classList.add("ativa");
}

function confirmar() {
  const nome = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value;
  const data = document.getElementById("data").value;
  const horario = document.getElementById("horario").value;
  const especialidade = document.getElementById("especialidade").value;

  document.getElementById("resumo").innerHTML =
    "Nome: " + nome + "<br>" +
    "CPF: " + cpf + "<br>" +
    "Especialidade: " + especialidade + "<br>" +
    "Data: " + data + "<br>" +
    "Horário: " + horario;
}

function irPara(n) {
  etapas.forEach((e) => {
    e.classList.remove("ativa");
  });

  document.getElementById("etapa-" + n).classList.add("ativa");

  if (n === 4) {
    confirmar();
  }
}

function voltarInicio() {
  etapas.forEach((e) => {
    e.classList.remove("ativa");
  });

  document.getElementById("etapa-1").classList.add("ativa");
}
