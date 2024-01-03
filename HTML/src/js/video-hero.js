/**
 * @name video-banner
 * @function handle youtube video banner
 */

$(function(){
  var $youtubeElm = $('#youtube');
  // Initial youtube config
  $youtubeElm.YTPlayer({
    videoId: 'iB_9BlFuHqA',
    width: 1080,
    repeat: true,
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      origin: 'http://localhost:9001'
    }
  });
});

/******** END Video banner ********/