window.addEventListener("load", function () {
  var progressBar = document.querySelector("progress");

  function updateProgressBar() {
    var scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrollTop = document.documentElement.scrollTop;
    var progress = (scrollTop / scrollHeight) * 100;
    progressBar.value = progress;
  }

  window.addEventListener("scroll", updateProgressBar);

  // Actualizar la barra de progreso al hacer clic en el enlace "Seguir"
  var seguirLink = document.querySelector(
    ".button-container a[href='doscaras.html']"
  );
  seguirLink.addEventListener("click", function (event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    var targetElement = document.documentElement;
    var targetOffset = targetElement.scrollHeight;
    window.scrollTo({
      top: targetOffset,
      behavior: "smooth",
    });
    setTimeout(function () {
      updateProgressBar();
    }, 500); // Esperar 500ms antes de actualizar la barra de progreso
  });
});

window.addEventListener("scroll", function () {
  const progressBar = document.getElementById("progress-bar");
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  progressBar.value = progress;
});

window.addEventListener("scroll", function () {
  const progressBar = document.getElementById("progress-bar");
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  progressBar.value = progress;
});
