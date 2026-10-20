
// Create an iterator to iteratet through this obj
let playlist = {
  name: "Coding Mix",
  songs: ["Song A", "Song B", "Song C", "Song D"]
};
// should log each song, not name or songs

playlist[Symbol.iterator] = function() {
  return this.songs[Symbol.iterator]();
}

for (let song of playlist) {
  console.log( song )
};