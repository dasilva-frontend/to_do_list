const saudacao = document.getElementById("saudacao");

const exibirSaudacao = () => {
  const data = new Date();
  const horario = data.getHours();
  const titulo =
    horario < 12 && horario > 0
      ? "Good morning!"
      : horario >= 12 && horario < 18
        ? "Good afternoon!"
        : "Good evening!";

  saudacao.innerText = titulo;
};
exibirSaudacao();


addEventListener("click",(e) => {
  const dataPage = e.target.getAttribute("data-page");
  window.location.href = dataPage;
});


