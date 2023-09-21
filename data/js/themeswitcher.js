var piss = document.createElement("style");
piss.id = "piss";
document.querySelector("head").appendChild(piss);

piss.innerText = getComputedStyle(document.querySelector("html")).getPropertyValue("--theme").replaceAll(/\\?"|\\?'/g, "");

MSPFA.slide.push(() => {
  var theme = getComputedStyle(document.querySelector("html")).getPropertyValue("--theme").replaceAll(/\\?"|\\?'/g, "");
  if (piss.innerText != theme) {
    piss.innerText = theme;
  };
});