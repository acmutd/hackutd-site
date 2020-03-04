/*
	Massively by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {
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

        breakpoints.on('>=large',function() {
			document.getElementById("background").src="./svg/desktop.svg";
			document.getElementById("board-grid-container").style.gridTemplateRows="15% auto 36%";
			document.getElementById("logo").style.width="50%";
			document.getElementById("logo").style.left="12vw";
			document.getElementById("qa-grid-container").style.gridTemplateRows="auto auto auto auto auto";
			let questions = document.getElementsByClassName("faq-q");
			for(i=0;i<questions.length;i++) {
				questions[i].style.fontSize="2vw";
			}
			let answers = document.getElementsByClassName("faq-a");
			for(i=0;i<answers.length;i++) {
				answers[i].style.fontSize="1.5vw";
			}
			document.getElementById("faq-grid-container").style.gridTemplateRows="6% auto 7%";
			document.getElementById("faq-grid-container").style.left="1vw";
			document.getElementById("faq-grid-container").style.marginLeft="0";
        });
        breakpoints.on('<=medium',function() {
			document.getElementById("background").src="./svg/mobile.svg";
			document.getElementById("board-grid-container").style.gridTemplateRows="auto auto 55%";
			document.getElementById("logo").style.width="90%";
			document.getElementById("logo").style.left="2vw";
			document.getElementById("qa-grid-container").style.gridTemplateRows="auto auto auto auto auto auto auto auto 10vw";
			let questions = document.getElementsByClassName("faq-q");
			for(i=0;i<questions.length;i++) {
				questions[i].style.fontSize="4vw";
			}
			let answers = document.getElementsByClassName("faq-a");
			for(i=0;i<answers.length;i++) {
				answers[i].style.fontSize="3vw";
			}
			document.getElementById("faq-grid-container").style.gridTemplateRows="0% auto 0%";
			document.getElementById("faq-grid-container").style.marginLeft="2vw";
        });
			
})(jQuery);