document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  document.getElementById('submit', function() {
    alert('Your information was sent, Thank you!')
  })