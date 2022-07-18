var getIframeSrc = document.getElementById("iframePage");

function venomMovie() {
    getIframeSrc.setAttribute("src", "https://www.youtube.com/embed/CH8Ymu0MHi4");
    padre = document.getElementById("iconReproductor").parentNode;
    padre.removeChild(document.getElementById("iconReproductor"));
}

function loganMovie() {
    getIframeSrc.setAttribute("src", "https://www.youtube.com/embed/cDfHM5VItrk");
    padre = document.getElementById("iconReproductor").parentNode;
    padre.removeChild(document.getElementById("iconReproductor"));
}

function spiderMovie() {
    getIframeSrc.setAttribute("src", "https://www.youtube.com/embed/8e30wthZLTA");
    padre = document.getElementById("iconReproductor").parentNode;
    padre.removeChild(document.getElementById("iconReproductor"));
}

