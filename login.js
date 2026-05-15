function fazerLogin(){

  const email =
    document.getElementById("email").value;

  const senha =
    document.getElementById("senha").value;

  firebase.auth()
  .signInWithEmailAndPassword(email, senha)

  .then(() => {

    if(email === "usuario@gmail.com"){

      window.location.href =
        "usuario.html";

    }

    else if(email === "intermediario@gmail.com"){

      window.location.href =
        "intermediario.html";

    }

    else if(email === "executor@gmail.com"){

      window.location.href =
        "executor.html";

    }

  })

  .catch((erro) => {

    alert("Email ou senha inválidos.");

    console.log(erro);

  });

}
