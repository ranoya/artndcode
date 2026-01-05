let makeindice = [];
let indicename = [];

let menuopen = false;
let firsttime = true;

posicoesatuaisdivs = [];
posicoesatuaisspans = [];

function menu(quanto) {
  alldivs = document.getElementsByTagName("div");
  allspans = document.getElementsByClassName("bloco");

  if (firsttime) {
    for (let k = 0; k < alldivs.length; k++) {
      alldivs[k].style.transition =
        "margin-left " + (0.2 + Math.random() * 0.8) + "s ease-out";

      if (alldivs[k].style.marginLeft == "") {
        alldivs[k].style.marginLeft = 0;
      }

      posicoesatuaisdivs[k] = window
        .getComputedStyle(alldivs[k])
        .getPropertyValue("margin-left");
    }

    for (let k = 0; k < allspans.length; k++) {
      allspans[k].style.transition =
        "margin-left " + (0.2 + Math.random() * 0.8) + "s ease-out";

      posicoesatuaisspans[k] = window
        .getComputedStyle(allspans[k])
        .getPropertyValue("margin-left");
      allspans[k].style.marginLeft = posicoesatuaisspans[k];
    }

    firsttime = false;
  }

  if (!menuopen) {
    for (let k = 0; k < alldivs.length; k++) {
      alldivs[k].style.marginLeft =
        quanto + Number(posicoesatuaisdivs[k].replace(/px$/, "")) + "px";
    }

    for (let k = 0; k < allspans.length; k++) {
      allspans[k].style.marginLeft =
        quanto + Number(posicoesatuaisspans[k].replace(/px$/, "")) + "px";
    }

    document.getElementById("botaonavegacao").style.transform = "rotate(0deg)";
    menuopen = true;
  } else {
    for (let k = 0; k < alldivs.length; k++) {
      alldivs[k].style.marginLeft = posicoesatuaisdivs[k];
    }

    for (let k = 0; k < allspans.length; k++) {
      allspans[k].style.marginLeft = posicoesatuaisspans[k];
    }

    document.getElementById("botaonavegacao").style.transform =
      "rotate(-180deg)";
    menuopen = false;
  }
}

function trocamarcadores() {
  var ultimo = 0;

  for (marcadores = 0; marcadores < makeindice.length; marcadores++) {
    document.getElementById("anc" + marcadores).className = "indices";
    spY = document
      .getElementById("pointer" + marcadores)
      .getBoundingClientRect().top;
    if (spY < 100) {
      ultimo = marcadores;
    }
  }

  document.getElementById("anc" + ultimo).className = "indices ligado";
}

function barrafotos() {
  let w =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (w > 750) {
    document.getElementById("barcolor").style.height = "30px";
    document.getElementById("barcolor2").style.height = "30px";
    document.getElementById("barcolor2").style.top = "30px";
  } else {
    document.getElementById("barcolor").style.height = "25px";
    document.getElementById("barcolor2").style.height = "25px";
    document.getElementById("barcolor2").style.top = "25px";
  }

  if (document.body.getBoundingClientRect().top < -50) {
    if (w > 750) {
      document.getElementById("barcolor").style.width = "40px";
      document.getElementById("barcolor2").style.width = "40px";
    } else {
      document.getElementById("barcolor").style.width = "30px";
      document.getElementById("barcolor2").style.width = "30px";
    }
  }

  if (document.body.getBoundingClientRect().top >= -50) {
    //document.getElementById('barcolor').style.width = "calc(100% - 40px)";
    //document.getElementById('barcolor2').style.width = "calc(100% - 40px)";
    document.getElementById("barcolor").style.width = "calc(100% - 201px)";
    document.getElementById("barcolor2").style.width = "calc(100% - 201px)";
    document.getElementById("mobileadvise").style.right = "-150%";
  }
}

// FUNÇÃO URL GET
// urlGet('xpto'); www.site.com/?xpto=teste
// let data = $_GET['xpto']; www.site.com/?xpto=teste

urlGet = function (name) {
  var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
    window.location.href
  );
  if (results == null) {
    return null;
  } else {
    return results[1] || 0;
  }
};

$_GET = [];
(function () {
  corte = window.location.href.toString().indexOf("?");
  if (corte > 0) {
    argumento = window.location.href.toString().substring(corte + 1);
    argumentos = argumento.split("&");
    for (arg in argumentos) {
      let argCorte = argumentos[arg].indexOf("=");
      $_GET[argumentos[arg].substring(0, argCorte)] = argumentos[arg].substring(
        argCorte + 1
      );
    }
  }
})();

let mudou = false;
let oquemudou = "";

if ($_GET["bgcolor"]) {
  document.documentElement.style.setProperty(
    "--cor-invert",
    "#" + $_GET["bgcolor"]
  );
  mudou = true;
  oquemudou += "bgcolor=" + $_GET["bgcolor"] + "&";
}

if ($_GET["fcolor"]) {
  document.documentElement.style.setProperty(
    "--cor-base",
    "#" + $_GET["fcolor"]
  );
  mudou = true;
  oquemudou += "fcolor=" + $_GET["fcolor"] + "&";
}

if ($_GET["highlight"]) {
  document.documentElement.style.setProperty(
    "--cor-highlight",
    "#" + $_GET["highlight"]
  );
  document.documentElement.style.setProperty(
    "--hamburger-on",
    "#" + $_GET["highlight"]
  );
  mudou = true;
  oquemudou += "highlight=" + $_GET["highlight"] + "&";
}

if ($_GET["midcolor"]) {
  document.documentElement.style.setProperty(
    "--cor-mid",
    "#" + $_GET["midcolor"]
  );
  document.documentElement.style.setProperty(
    "--cor-lighter",
    "#" + $_GET["midcolor"] + "99"
  );
  document.documentElement.style.setProperty(
    "--hamburger-off",
    "#" + $_GET["midcolor"]
  );
  mudou = true;
  oquemudou += "midcolor=" + $_GET["midcolor"] + "&";
}

if (mudou) {
  document.getElementById("com").href = "../SerieComportamentais/?" + oquemudou;
  document.getElementById("aut").href = "../SerieAutomatos/?" + oquemudou;
  document.getElementById("per").href = "../SeriePerformaticos/?" + oquemudou;
  document.getElementById("sob").href = "../Sobre/?" + oquemudou;
}

document.addEventListener("DOMContentLoaded", function (e) {
  if ($_GET["contentonly"]) {
    document.getElementById("botaonavegacao").style.display = "none";
  }

  let blocoindices = document.body.querySelectorAll(".indice");
  let constroiindices = "";
  for (k = 0; k < blocoindices.length; k++) {
    blocoindices[k].id = "pointer" + k;
    makeindice[k] = blocoindices[k].name;
    indicename[k] = blocoindices[k].textContent;
    blocoindices[k].style.display = "block";
    blocoindices[k].style.overflow = "hidden";
    blocoindices[k].style.height = 0;
    constroiindices +=
      "<a id='anc" +
      k +
      "' href='#" +
      makeindice[k] +
      "'>" +
      indicename[k] +
      "</a><br>";
  }

  document.getElementById("indices").innerHTML = constroiindices;
  document.getElementById("anc0").className = "indices ligado";

  document.addEventListener("scroll", trocamarcadores);
  window.addEventListener("resize", barrafotos);
  document.addEventListener("scroll", barrafotos);
});
