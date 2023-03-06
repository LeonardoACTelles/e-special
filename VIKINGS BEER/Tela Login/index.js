window.addEventListener('load', function() { 
function login() {
    const username = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    .then(response => response.json())
    .then(data => {
      document.cookie = `token=${data.token}`;
      window.location.href = "/dashboard"; 
    })
    .catch(error => {
      console.error(error);
      alert("Erro ao fazer login. Verifique suas credenciais e tente novamente.");
    });
  }

})