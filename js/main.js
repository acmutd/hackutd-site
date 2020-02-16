/*
	Massively by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$nav = $('#nav'),
		$main = $('#main'),
		$navPanelToggle, $navPanel, $navPanelInner;

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	/**
	 * Applies parallax scrolling to an element's background image.
	 * @return {jQuery} jQuery object.
	 */
	$.fn._parallax = function(intensity) {

		var	$window = $(window),
			$this = $(this);

		if (this.length == 0 || intensity === 0)
			return $this;

		if (this.length > 1) {

			for (var i=0; i < this.length; i++)
				$(this[i])._parallax(intensity);

			return $this;

		}

		if (!intensity)
			intensity = 0.25;

		$this.each(function() {

			var $t = $(this), $bg = $('<div class="bg"></div>').appendTo($t), on, off;
			// console.log($bg.css("background-image"));
			// $bg.id = "background";
			// console.log(window.getComputedStyle(document.querySelector(".bg")));
			// document.querySelector(".bg").style = 'background-image: url("../../images/overlay.png"), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("../../images/bg.jpg");';
			// console.log(window.getComputedStyle(document.querySelector(".bg")));
			// console.log(document.getElementById("background"));
			// $bg.css({'background-image':'url("../../images/overlay.png"), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("../../images/bg.jpg");'});
			// $bg.backgroundImage('url("../../images/overlay.png"), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("../../images/bg.jpg");');
			// console.log($bg.css("background-image"));

			on = function() {

				$bg
					.removeClass('fixed')
					.css('transform', 'matrix(1,0,0,1,0,0)');

				$window
					.on('scroll._parallax', function() {

						var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);

						$bg.css('transform', 'matrix(1,0,0,1,0,' + (pos * intensity) + ')');
					

					});

			};

			off = function() {

				$bg
					.addClass('fixed')
					.css('transform', 'none');

				$window
					.off('scroll._parallax');

			};

			// Disable parallax on ..
				if (browser.name == 'ie'			// IE
				||	browser.name == 'edge'			// Edge
				||	window.devicePixelRatio > 1		// Retina/HiDPI (= poor performance)
				||	browser.mobile)					// Mobile devices
					off();

			// Enable everywhere else.
				else {

					breakpoints.on('>large', on);
					breakpoints.on('<=large', off);

				}

		});

		$window
			.off('load._parallax resize._parallax')
			.on('load._parallax resize._parallax', function() {
				$window.trigger('scroll');
			});

		return $(this);

	};

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

	// Background.
		$wrapper._parallax(0.925);

	// Nav Panel.

		// Toggle.
			$navPanelToggle = $(
				'<a href="#navPanel" id="navPanelToggle">Menu</a>'
			)
				.appendTo($wrapper);

			// Change toggle styling once we've scrolled past the header.
				$header.scrollex({
					bottom: '5vh',
					enter: function() {
						$navPanelToggle.removeClass('alt');
					},
					leave: function() {
						$navPanelToggle.addClass('alt');
					}
				});

		// Panel.
			$navPanel = $(
				'<div id="navPanel">' +
					'<nav>' +
					'</nav>' +
					'<a href="#navPanel" class="close"></a>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-navPanel-visible'
				});

			// Get inner.
				$navPanelInner = $navPanel.children('nav');

			// Move nav content on breakpoint change.
				var $navContent = $nav.children();

				breakpoints.on('>medium', function() {

					// NavPanel -> Nav.
						$navContent.appendTo($nav);

					// Flip icon classes.
						$nav.find('.icons, .icon')
							.removeClass('alt');

				});

				breakpoints.on('<=medium', function() {

					// Nav -> NavPanel.
						$navContent.appendTo($navPanelInner);

					// Flip icon classes.
						$navPanelInner.find('.icons, .icon')
							.addClass('alt');

				});

			// Hack: Disable transitions on WP.
				if (browser.os == 'wp'
				&&	browser.osVersion < 10)
					$navPanel
						.css('transition', 'none');

	// Intro.
		var $intro = $('#intro');

		if ($intro.length > 0) {

			// Hack: Fix flex min-height on IE.
				if (browser.name == 'ie') {
					$window.on('resize.ie-intro-fix', function() {

						var h = $intro.height();

						if (h > $window.height())
							$intro.css('height', 'auto');
						else
							$intro.css('height', h);

					}).trigger('resize.ie-intro-fix');
				}

			// Hide intro on scroll (> small).
				breakpoints.on('>small', function() {
					
					$main.unscrollex();
					

					$main.scrollex({
						mode: 'bottom',
						top: '25vh',
						bottom: '-50vh',
						enter: function() {
							$intro.addClass('hidden');
							breakpoints.on('>=xlarge',function() {
								document.querySelector(".bg").style = 'background-image: url("../../images/overlay.png"), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("../../images/bg_back.jpg");';
							});
							//only needs to be uncommented if the page gets manually resized, find alternative
							// breakpoints.on('<xlarge',function() {
							// 	document.querySelector(".bg").style = 'background-image: url("../../images/overlay.png"), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("../../images/bg_back.jpg");';
							// });
							// document.querySelector(".bg").style = 'background-image: url("../../images/overlay.png"), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("../../images/bg_back.jpg");';

						},
						leave: function() {
							$intro.removeClass('hidden');
							breakpoints.on('>=xlarge',function() {
								document.querySelector(".bg").style = 'background-image: url("../../images/overlay.png"), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("../../images/bg.jpg");';
							});
							//only needs to be uncommented if the page gets manually resized, find alternative
							// breakpoints.on('<xlarge',function() {
							// 	document.querySelector(".bg").style = 'background-image: url("../../images/overlay.png"), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("../../images/bg_back.jpg");';
							// });
							// document.querySelector(".bg").style = 'background-image: url("../../images/overlay.png"), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("../../images/bg.jpg");';
						}
					});

				});

			// Hide intro on scroll (<= small).
				breakpoints.on('<=small', function() {

					$main.unscrollex();

					$main.scrollex({
						mode: 'middle',
						top: '15vh',
						bottom: '-15vh',
						enter: function() {
							$intro.addClass('hidden');
						},
						leave: function() {
							$intro.removeClass('hidden');
						}
					});

			});

		}
		// code written by Harsha Srikara below

			//change ratio of contact images on smaller devices

				breakpoints.on('>large',function() {
					if(location.href.split("/").slice(-1)[0] === "") {
						document.querySelector(".bg").style = 'background-image: url("../../images/overlay.png"), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("../../images/bg.jpg");';
					}
					if(location.href.split("/").slice(-1)[0] === "index.html") {
						document.querySelector(".bg").style = 'background-image: url("../../images/overlay.png"), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("../../images/bg.jpg");';
					}
					let items = document.getElementsByClassName("team");
					for (let i = 0; i < items.length; i++) {
						items[i].classList.add("col-4");
						items[i].classList.remove("col-4-xxsmall");
						items[i].classList.remove("col-6");
					}
					document.getElementById("tictactoe").style.visibility = "visible";
					sidebyside();
				});
				breakpoints.on('large',function() {
					let items = document.getElementsByClassName("team");
					for (let i = 0; i < items.length; i++) {
						items[i].classList.add("col-6");
						items[i].classList.remove("col-4");
						items[i].classList.remove("col-4-xxsmall");
					}
					document.getElementById("tictactoe").style.visibility = "hidden";
					sidebyside();
				});
				breakpoints.on('medium',function() {
					let items = document.getElementsByClassName("team");
					for (let i = 0; i < items.length; i++) {
						items[i].classList.add("col-6");
						items[i].classList.remove("col-4");
						items[i].classList.remove("col-4-xxsmall");
					}
					document.getElementById("tictactoe").style.visibility = "hidden";
					topdown();
				});
				breakpoints.on('<=small',function() {
					let items = document.getElementsByClassName("team");
					for (let i = 0; i < items.length; i++) {
						items[i].classList.add("col-4-xxsmall");
						items[i].classList.remove("col-4");
						items[i].classList.remove("col-6");
					}
					document.getElementById("tictactoe").style.visibility = "hidden";
					topdown();
				});
			

			//TODO: make presentation slides have dynamic sizing



			
			/* some code goes here */ 

})(jQuery);

//function to switch modal to side by side view (large screen)
function sidebyside() {
	//minimize image
	let modalImg = document.getElementsByClassName("modalImg");
	for(i = 0;i<modalImg.length;i++) {
		modalImg[i].style = 'width: 50%;';
	}

	let modalMainDiv = document.getElementsByClassName("modalMainDiv");
	for(i = 0;i<modalMainDiv.length;i++) {
		modalMainDiv[i].style = 'float: right; padding-right: 2%; width: 45%; padding-top: 1%;';
	}

	let modalH3 = document.getElementsByClassName("modalH3");
	for(i = 0;i<modalH3.length;i++) {
		modalH3[i].style = 'float: right;';
	}

	let modalInnerDiv = document.getElementsByClassName("modalInnerDiv");
	for(i = 0;i<modalInnerDiv.length;i++) {
		modalInnerDiv[i].style = '';
	}

	let modalP = document.getElementsByClassName("modalP");
	for(i = 0;i<modalP.length;i++) {
		modalP[i].style = '';
	}
}

//function to switch modal to top down view (small screen)
function topdown() {
	//maximize image
	let modalImg = document.getElementsByClassName("modalImg");
	for(i = 0;i<modalImg.length;i++) {
		modalImg[i].style = 'width: 100%;';
	}

	let modalMainDiv = document.getElementsByClassName("modalMainDiv");
	for(i = 0;i<modalMainDiv.length;i++) {
		modalMainDiv[i].style = '';
	}

	let modalH3 = document.getElementsByClassName("modalH3");
	for(i = 0;i<modalH3.length;i++) {
		modalH3[i].style = 'float: left; display: block;';
	}

	let modalInnerDiv = document.getElementsByClassName("modalInnerDiv");
	for(i = 0;i<modalInnerDiv.length;i++) {
		modalInnerDiv[i].style = 'float: right; display: block;';
	}

	let modalP = document.getElementsByClassName("modalP");
	for(i = 0;i<modalP.length;i++) {
		modalP[i].style = 'display: inline-block;';
	}
}

// trigger code to display 
function displayCodeSnippet(codeSnippet,tag) {
	if(document.getElementById(tag).innerHTML === "Hide") {
		document.getElementById(codeSnippet).style.display = "none";
		document.getElementById(tag).innerHTML = "Show";
		document.getElementById(tag).classList.remove("primary");
	}
	else {
		document.getElementById(codeSnippet).style.display = "initial";
		document.getElementById(tag).innerHTML = "Hide";
		document.getElementById(tag).classList.add("primary");
	}
}

//tic tac toe driver code
function activateTicTacToeMode() {
	document.getElementById("meetOurTeam").innerHTML = "Tic Tac Toe Mode Activated";
}

function tictactoe(imgID) {
	if(document.getElementById("meetOurTeam").innerHTML.includes("Tic Tac Toe Mode Activated")) {
		let value = document.getElementById("tictactoeValue").innerHTML;
		if(value === "Circle") {
			if(document.getElementById(imgID).src.includes("circle")) {

			}
			else if(document.getElementById(imgID).src.includes("cross")) {

			}
			else {
				document.getElementById("tictactoeValue").innerHTML = "Cross";
				document.getElementById(imgID).src = "images/circle.png";
			}
		}
		else {
			if(document.getElementById(imgID).src.includes("circle")) {

			}
			else if(document.getElementById(imgID).src.includes("cross")) {

			}
			else {
				document.getElementById("tictactoeValue").innerHTML = "Circle";
				document.getElementById(imgID).src = "images/cross.png";
			}
		}
		validateTicTacToe();
	}
}

function validateTicTacToe() {
	checkThree("ifrit", "shivani", "aashish");
	checkThree("gautam", "sanjeev", "sivam");
	checkThree("vamika", "sanjana", "anirudh");
	checkThree("ifrit", "gautam", "vamika");
	checkThree("shivani", "sanjeev", "sanjana");
	checkThree("aashish", "sivam", "anirudh");
	checkThree("ifrit", "sanjeev", "anirudh");
	checkThree("aashish", "sanjeev", "vamika");
	checkAll();
}

function checkThree(idOne, idTwo, idThree) {
	if(document.getElementById(idOne).src === document.getElementById(idTwo).src) {
		if(document.getElementById(idTwo).src === document.getElementById(idThree).src) {
			if(document.getElementById(idOne).src.includes("circle.png")) {
				document.getElementById("meetOurTeam").innerHTML = "Circle Wins!<a id='reset' onclick='resetImages();return false;' style='display: none; float: right;' class='icon solid fa-lg fa-undo'><span class='label'>Reset</span></a>";
				document.getElementById(idOne).src = "images/circlePurple.png";
				document.getElementById(idTwo).src = "images/circlePurple.png";
				document.getElementById(idThree).src = "images/circlePurple.png";

				document.getElementById("reset").style.display = "initial";
			}
			else {
				document.getElementById("meetOurTeam").innerHTML = "Cross Wins!<a id='reset' onclick='resetImages();return false;' style='display: none; float: right;' class='icon solid fa-lg fa-undo'><span class='label'>Reset</span></a>";
				document.getElementById(idOne).src = "images/crossPurple.png";
				document.getElementById(idTwo).src = "images/crossPurple.png";
				document.getElementById(idThree).src = "images/crossPurple.png";

				document.getElementById("reset").style.display = "initial";
			}
		}
	}
}

function checkAll() {
	let status = true;
	let boxes = document.getElementsByClassName("img");
	for(i = 0;i<boxes.length;i++) {
		status = status && (boxes[i].src.includes("circle") || boxes[i].src.includes("cross"));
	}
	if(status === true) {
		document.getElementById("meetOurTeam").innerHTML = "Game Over!<a id='reset' onclick='resetImages();return false;' style='display: none; float: right;' class='icon solid fa-lg fa-undo'><span class='label'>Reset</span></a>";
		document.getElementById("reset").style.display = "initial";
	}
}

function resetImages() {
	document.getElementById("ifrit").src = "images/profiles/ifrit.jpg";
	document.getElementById("shivani").src = "images/profiles/shivani.jpeg";
	document.getElementById("aashish").src = "images/profiles/aashish.jpeg";
	document.getElementById("gautam").src = "images/profiles/gautam.jpg";
	document.getElementById("sanjeev").src = "images/profiles/sanjeev.jpeg";
	document.getElementById("sivam").src = "images/profiles/sivam.jpg";
	document.getElementById("vamika").src = "images/profiles/vamika.jpeg";
	document.getElementById("sanjana").src = "images/profiles/sanjana.jpg";
	document.getElementById("anirudh").src = "images/profiles/anirudh.jpeg";

	document.getElementById("meetOurTeam").innerHTML = "Meet Our Team<a id='tictactoe' onclick='activateTicTacToeMode();' style='float: right;' class='icon solid fa-lg fa-user-secret'><span class='label'>GitHub</span></a>";
	
}

function fadedBackground() {
	document.querySelector(".bg").style = 'background-image: url("../../images/overlay.png"), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("../../images/bg.jpg");';
}

function onModalClick(modalName) {
	if(document.getElementById("reset").style.display != "initial") { //this if statement needs to get itself figured out
		document.getElementById(modalName).style.display = "block";
	}
}

function onCloseClick(modalName) {
	document.getElementById(modalName).style.display = "none";
}

window.onclick = function(event) {
	if (event.target == this.document.getElementById("ifritModal") || event.target == this.document.getElementById("shivaniModal") || event.target == this.document.getElementById("aashishModal") ||event.target == this.document.getElementById("gautamModal") ||event.target == this.document.getElementById("sanjeevModal") ||event.target == this.document.getElementById("sivamModal") ||event.target == this.document.getElementById("vamikaModal") ||event.target == this.document.getElementById("sanjanaModal") ||event.target == this.document.getElementById("anirudhModal")) {
	  this.document.getElementById("ifritModal").style.display = "none";
	  this.document.getElementById("shivaniModal").style.display = "none";
	  this.document.getElementById("aashishModal").style.display = "none";
	  this.document.getElementById("gautamModal").style.display = "none";
	  this.document.getElementById("sanjeevModal").style.display = "none";
	  this.document.getElementById("sivamModal").style.display = "none";
	  this.document.getElementById("vamikaModal").style.display = "none";
	  this.document.getElementById("sanjanaModal").style.display = "none";
	  this.document.getElementById("anirudhModal").style.display = "none";
	}
  }