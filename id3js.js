var id3 = require('id3js');

id3({ file: './song.mp3', type: id3.OPEN_LOCAL }, function(err, tags) {
    console.log(tags.v2)
});
