var x;

function show_hide() {
  if (x == 1) {
    document.getElementById("programs-grid-page2").style.opacity = 0;
    window.setTimeout(a, 250);
  } else {
    document.getElementById("programs-grid-page1").style.opacity = 0;
    window.setTimeout(c, 250);
  }
}

function a() {
  document.getElementById("programs-grid-page2").style.display = "none";
  document.getElementById("programs-grid-page1").style.display = "grid";
  window.setTimeout(b, 250);
}

function b() {
  document.getElementById("programs-grid-page1").style.opacity = 1;
  x = 0;
}

function c() {
  document.getElementById("programs-grid-page1").style.display = "none";
  document.getElementById("programs-grid-page2").style.display = "grid";
  window.setTimeout(d, 250);
}

function d() {
  document.getElementById("programs-grid-page2").style.opacity = 1;
  x = 1;
}
