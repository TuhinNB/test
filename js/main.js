player = new Clappr.Player({
  source: "https://tv.bdflix.xyz/Tsports/tracks-v1a1/mono.m3u8",
  mimeType: "application/x-mpegURL",
  autoPlay: true,
  height: "400",
  width: "100%",
  plugins: {
    core: [LevelSelector]
  },
  parentId: "#vid"
});
