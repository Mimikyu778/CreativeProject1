const clear = function() {
  document.getElementById("output").innerHTML = "";
}

const output = function(str) {
  let p = `<p>${str}</p>`;
  document.getElementById("output").innerHTML += p;
}

document.getElementById("run1").addEventListener("click", function(event) {
  clear();
  
});