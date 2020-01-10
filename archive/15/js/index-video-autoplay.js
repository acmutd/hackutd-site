$(document).ready(function(){
	var onMobile = false;
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { onMobile = true; }
	if( ( onMobile === false ) ) {
	
		// Hide these elements first
		$("#show-mobile").css('display', 'none');

		// Fullscreen video
		$(".player").mb_YTPlayer({
			mute: true, // (boolean) mute the audio.
			ratio: "4/3", // "4/3" or "16/9" (string) to set the aspect ratio of the movie.
			quality: "default", // "default" or "small", "medium", "large", "hd720", "hd1080", "highres".
			opacity: 0.5, // 0 to 1 (number) define the opacity of the video.
			containment: "body", // (string) the CSS selector of the DOM element where you want the video background; if not specified it takes the "body"; if set to "self" the player will be instanced on that element.
			optimizeDisplay: true, // (boolean) will fit the video size into the window size optimizing the view.
			loop: true, // (boolean) true or false, loops the movie once ended.
			vol: 0, // 1 to 100 (number) set the volume level of the video.
			startAt: 4, // (number) set the seconds the video should start at.
			stopAt: 0, // (number) set the seconds the video should stop at. If 0 is ignored.
			autoPlay: true, // (boolean) true or false, play the video once ready.
			showYTLogo: false, // (boolean) show or hide the YT logo and the link to the original video URL.
			showControls: false, // (boolean) show or hide the controls bar at the bottom of the page.
			addRaster: true // (boolean) show or hide a raster image over the video.
		});

	} else {

		// The fullscreen video is replaced with another screen on mobile devices
		$("#hide-mobile").css('display', 'none');
		$("#show-mobile").css('display', 'block');

	}
});