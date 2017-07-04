var ffmetadata = require("ffmetadata");

// Read song.mp3 metadata
ffmetadata.read("./song.mp3", function(err, data) {
    console.log(data);
});
