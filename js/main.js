player = new Clappr.Player({
  source: "http://103.127.93.82:8234/tf_tv2/video.m3u8?token=TheftTheftTheftTheftTheftTheftTheftTheft",
  mimeType: "application/x-mpegURL",
  autoPlay: true,
  height: "400",
  width: "100%",
  plugins: {
    core: [LevelSelector]
  },
  parentId: "#vid"
});
