c2 = document.getElementById("c");
c = c2.getContext("2d");
c2.style.setProperty("--scale", window.innerHeight / 1000 > window.innerWidth / 1000 ? window.innerWidth / 1000 : window.innerHeight / 1000);

