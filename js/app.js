function myFunction() {
// Variables
var input, filter, wrapper, a, i, txtValue;
input = document.getElementById('site-search');
filter = input.value.toUpperCase();
wrapper = document.getElementsByClassName("gallery-wrapper");
a = document.querySelectorAll('.gallery-wrapper a');

// Loop through each title attribute on search and hide unsearched content
for (i = 0; i < a.length; i++) {
    let txtValue = a[i].getAttribute('title');
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
}

// Lightbox Settings

lightbox.option({
  'resizeDuration': 400,
  'wrapAround': true,
  'albumLabel': ""
});