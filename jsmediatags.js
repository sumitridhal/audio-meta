// Simple API - will fetch all tags
var jsmediatags = require("jsmediatags");

jsmediatags.read("./song.mp3", {
  onSuccess: function(tag) {
    console.log(tag);
  },
  onError: function(error) {
    console.log(':(', error.type, error.info);
  }
});
