// Mixing jQuery and Node.js code in the same file? Yes please!

$(function(){

    // Display some statistics about this computer, using node's os module.

    var fs = require('fs');
    var i;

    fs.readdir('/', {encoding: 'UTF-8'}, function(err, files) {
      for (i = 0; i < files.length; i++) {
        $('#fileList').append('<li>' + files[i] + '</li>');
      }
    });

});
