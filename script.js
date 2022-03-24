function myFunction() {
  var input = document.getElementById("searchBar");
  var filter = input.value.toLowerCase();
  var nodes = document.getElementsByClassName('column');

  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].innerText.toLowerCase().includes(filter)) {
      nodes[i].style.display = "block";
    } else {
      nodes[i].style.display = "none";
    }
  }
}

