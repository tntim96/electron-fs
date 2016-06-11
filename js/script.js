// Mixing jQuery and Node.js code in the same file? Yes please!

$(function(){

    // Display some statistics about this computer, using node's os module.

    var fs = require('fs');
    var path = require('path');

    function listDir(dir) {
      dir = path.normalize(dir);
      var sep = (dir === '/') ? '' : '/';
      var i;

      $('#currDir').html(dir);
      console.log('Listing contents of ' + dir);
      $('#dirList').html('');
      if (dir !== '/') {
        $('#dirList').append('<li class="dir">..</li>');
      }
      console.log('Reading ' + dir);
      fs.readdir(dir, {encoding: 'UTF-8'}, function(err, files) {
        for (i = 0; i < files.length; i++) {
          var fClass = fs.lstatSync(dir + sep + files[i]).isDirectory() ? 'dir' : 'file';
          $('#dirList').append('<li class="' + fClass + '">' + files[i] + '</li>');
        }
        $('#dirList li.dir').click(function() {
          console.log('Clicked ' + $(this).html());
          listDir(dir + sep + $(this).html());
        });
      });
    }
    listDir('/');
});
