function myFunction() {
  // Variables
  var input, filter, wrapper, a, i, txtValue;
  input = document.getElementById('site-search');
  filter = input.value.toUpperCase();
  wrapper = document.getElementsByClassName("gallery-wrapper");
  a = getElementsByTagName('a');


  for (i = 0; i < a.length; i++) {
      let txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
}