function myFunction() {
  // Variables
  var input, filter, gallery, a, i, txtValue;
  input = document.getElementById('site-search);
  filter = input.value.toUpperCase();
  gallery = document.getElementsByClassName("gallery-wrapper");
  a = a.getElementsByTagName('a');

  for (i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}