const ID3Writer = require('browser-id3-writer');
const fs = require('fs');

const songBuffer = fs.readFileSync('song.mp3');

const coverBuffer = fs.readFileSync('items.png');

const writer = new ID3Writer(songBuffer);
writer.setFrame('TIT2', 'Home')
  .setFrame('TPE1', ['Eminem', '50 Cent'])
  .setFrame('TALB', 'Friday Night Lights')
  .setFrame('TYER', 2004)
  .setFrame('APIC', {
    type: 3,
    data: coverBuffer,
    description: 'Super picture'
  })

writer.addTag();

const taggedSongBuffer = Buffer.from(writer.arrayBuffer);
fs.writeFileSync('song_with_tags.mp3', taggedSongBuffer);
