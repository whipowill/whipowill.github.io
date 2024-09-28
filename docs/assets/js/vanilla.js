document.addEventListener('DOMContentLoaded', function() {
  // Select all elements with the class 'post'
  var postElements = document.getElementsByClassName('post');

  // Iterate through each 'post' element
  for (var i = 0; i < postElements.length; i++) {
    var links = postElements[i].getElementsByTagName('a');

    // Iterate through each link within the current 'post' element
    for (var j = 0; j < links.length; j++) {
      var link = links[j];
      // Check if the link is external
      if (link.hostname !== window.location.hostname) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
    }
  }
});
