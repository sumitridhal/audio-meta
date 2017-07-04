var audioMetaData = require('audio-metadata'),
    fs = require('fs')

var file = fs.readFileSync('song.mp3');
var metadata = audioMetaData.id3v2(file);

console.log(metadata);
