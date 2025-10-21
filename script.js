let player;

// Wait for page to fully load
document.addEventListener('DOMContentLoaded', function () {
  // Background color change on scroll
  inView('.slide').on('enter', el => {
    const bg = el.getAttribute('data-background');
    if (bg) {
      document.body.style.backgroundColor = bg;
    }
  });
});

// YouTube player setup
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: '6J1-eYBbspA',
    playerVars: {
      autoplay: 1,
      loop: 1,
      playlist: '6J1-eYBbspA',
      controls: 0,
      modestbranding: 1,
      showinfo: 0,
      rel: 0
    },
    events: {
      onReady: onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  event.target.setVolume(50);
  event.target.playVideo();
}
