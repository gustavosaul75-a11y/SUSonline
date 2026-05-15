const firebaseConfig = {
  apiKey: "AIzaSyA7xLGaIO63AiKvyELp3jMysX0s6x1v6Rs",
  authDomain: "meusus-1ea7d.firebaseapp.com",
  projectId: "meusus-1ea7d",
  storageBucket: "meusus-1ea7d.firebasestorage.app",
  messagingSenderId: "905150675165",
  appId: "1:905150675165:web:6b96fabae4880a31228334",
  measurementId: "G-Y6NQFE8TLQ"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function salvarSolicitacao() {

  const nome =
    document.getElementById("nome").value;

  const cpf =
    document.getElementById("cpf").value;

  const nascimento =
    document.getElementById("nascimento").value;

  const telefone =
    document.getElementById("telefone").value;

  const especialidade =
    document.getElementById("especialidade").value;

  const unidade =
    document.getElementById("unidade").value;

  db.collection("solicitacoes").add({

    nome: nome,
    cpf: cpf,
    nascimento: nascimento,
    telefone: telefone,
    especialidade: especialidade,
    unidade: unidade,

    status: "pendente",

    criadoEm: new Date()

  })

  .then(() => {

    alert("Solicitação enviada com sucesso!");

  })

  .catch((erro) => {

    console.log(erro);

    alert("Erro ao enviar solicitação.");

  });

}
