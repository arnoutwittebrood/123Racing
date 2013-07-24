$(document).ready(function() {
/*
$('#mainContainer').transition({
    y: 768
}, 0, 'ease-in');
*/
	$('#logoKlein').click(function() {
		$('#mainContainer').transition({
			y: 0
		}, 1000, 'ease-in');
	});
	$('#tapappapa').click(function() {
		$('#mainContainer').transition({
			y: -769
		}, 1000, 'ease-in');
	});
	var clickCount = 0;
	
	
	$('.finish').click(function() {
		$('#mainContainer').transition({
			y: '-=768px'
		}, 1000, 'ease-in');
	});
	
	/*
$('#carOne').hammer().on("tap", function() {
		$(this).transition({
			y: 364
		}, 5000, 'ease-in').transition({
			rotate: '-90deg'
		}).transition({
			x: 691
		}, 6000, 'linear').transition({
			rotate: '0deg'
		}).transition({
			y: 618
		}, 4000, 'linear', function() {
			alert("yo");
		});
		scoreDing();
	});
*/

$('#carOne').hammer().on("tap", function() {
		$(this).transition({
			y: 578
		}, 5000, 'ease-in');
		scoreDing();
});

$('#carTwo').hammer().on("tap", function() {
		$(this).transition({
			x: '+=675px'
		}, 5000, 'linear')
		.transition({
			rotate: '+=90deg',
		})
		.transition({
			y: '+=265px'
		}, 3000, 'linear')
		
		.transition({
			rotate: '+=90deg'
		})
		.transition({
			x: '-=675px'
		}, 4000, 'linear')
		.transition({
			rotate: '-=90deg'
		})
		.transition({
			y: '+=310px'
		}, 3000, 'linear')
		.transition({
			rotate: '-=90deg'
		})
		.transition({
			x: '+=690px'
		}, 5000, 'linear')
		scoreDing();
});
	
$('#carThree').hammer().on("tap", function() {
		$(this).transition({
			x: '+=707px'
		}, 5500, 'linear')
		.transition({
			rotate: '+=90deg',
		})
		.transition({
			y: '+=220px'
		}, 3000, 'linear')
		
		.transition({
			rotate: '+=90deg'
		})
		.transition({
			x: '-=565px'
		}, 4000, 'linear')
		.transition({
			rotate: '-=90deg'
		})
		.transition({
			y: '+=100px'
		}, 1000, 'linear')
		.transition({
			rotate: '-=90deg'
		})
		.transition({
			x: '+=565px'
		}, 5000, 'linear')
		.transition({
			rotate: '+=90deg',
		})		
		.transition({
			y: '+=250px'
		}, 2000, 'linear')
.transition({
			rotate: '+=90deg'
		})
		.transition({
			x: '-=713px'
		}, 5500, 'linear')
		scoreDing();
});

$('#carFour').hammer().on("tap", function() {
		$(this).transition({
			y: '+=265px'
		}, 3000, 'linear')
		.transition({
			rotate: '-=90deg',
		})
		.transition({
			x: '+=600px'
		}, 4000, 'linear')
		.transition({
			rotate: '-=90deg'
		})
		.transition({
			y: '-=265px'
		}, 3000, 'linear')
		.transition({
			rotate: '-=180deg'
		})
		.transition({
			y: '+=572px'
		}, 5500, 'linear')
		scoreDing();
});


$('#carFive').hammer().on("tap", function() {
		$(this).transition({
			x: '-=676px'
		}, 4000, 'linear')
		.transition({
			rotate: '-=90deg',
		})
		.transition({
			y: '+=230px'
		}, 3000, 'linear')
			.transition({
			rotate: '-=90deg',
		})
		.transition({
			x: '+=676px'
		}, 4000, 'linear')
		.transition({
			rotate: '+=90deg',
		})
		.transition({
			y: '+=343px'
		}, 3000, 'linear')
			.transition({
			rotate: '+=90deg',
		})		
	.transition({
			x: '-=650px'
		}, 4000, 'linear')
		scoreDing();
});


$('#carSix').hammer().on("tap", function() {
		$(this).transition({
			y: '+=580px'
		}, 4000, 'linear')
		.transition({
			rotate: '-=90deg',
		})
		.transition({
			x: '+=580px'
		}, 4000, 'linear')
		.transition({
			rotate: '-=90deg',
		})
		.transition({
			y: '-=343px'
		}, 3000, 'linear')
				.transition({
			rotate: '-=90deg',
		})
		.transition({
			x: '-=512px'
		}, 4000, 'linear')
		scoreDing();
});

$('#carSeven').hammer().on("tap", function() {
		$(this).transition({
			x: '+=368px'
		}, 4000, 'linear')
		.transition({
			rotate: '+=90deg',
		})
		.transition({
			y: '+=290px'
		}, 2000, 'linear')
		scoreDing();
});

$('#carEight').hammer().on("tap", function() {
		$(this).transition({
			x: '+=710px'
		}, 4000, 'linear')
		.transition({
			rotate: '+=90deg',
		})
		.transition({
			y: '+=290px'
		}, 3000, 'linear')
		.transition({
			rotate: '+=90deg',
		})
		
		.transition({
			x: '-=713px'
		}, 4000, 'linear')
		.transition({
			rotate: '-=90deg',
		})
		.transition({
			y: '+=290px'
		}, 3000, 'linear')
		.transition({
			rotate: '-=90deg',
		})
		
		.transition({
			x: '+=711px'
		}, 4000, 'linear')

		scoreDing();
});


$('#carNine').hammer().on("tap", function() {
		$(this).transition({
			x: '-=512px'
		}, 4000, 'linear')
		.transition({
			rotate: '+=90deg',
		})
		.transition({
			y: '-=339px'
		}, 2000, 'linear')
		.transition({
			rotate: '+=90deg',
		})
		.transition({
			x: '+=583px'
		}, 4000, 'linear')
		.transition({
			rotate: '+=90deg',
		})
		.transition({
			y: '+=574px'
		}, 4000, 'linear')
		scoreDing();
});

$('#carTen').hammer().on("tap", function() {
		$(this).transition({
			x: '+=578px'
		}, 4000, 'linear')
		.transition({
			rotate: '-=90deg',
		})
		.transition({
			y: '-=576px'
		}, 4000, 'linear')
		.transition({
			rotate: '-=90deg',
		})
		.transition({
			x: '-=581px'
		}, 4000, 'linear')
		.transition({
			rotate: '-=90deg',
		})
		.transition({
			y: '+=576px'
		}, 4000, 'linear')
		scoreDing();
});

	function scoreDing() {
		clickCount++;
		$('#score').html(clickCount);
	}
	$('#airMap').click(function() {
		$('#mainContainer').transition({
			y: -768
		}, 1000, 'ease-in');
	});
	$('#groundMap').click(function() {
		$('#mainContainer').transition({
			y: -1536
		}, 1000, 'ease-in');
	});
	$('#waterMap').click(function() {
		$('#mainContainer').transition({
			y: -2304
		}, 1000, 'ease-in');
	});
	$('#vliegtuig').click(function() {
		$('#vliegtuig').transition({
			x: 1400
		}, 10000, 'linear').transition({
			y: 840
		}).transition({
			x: -1400
		}).transition({
			y: 0
		}).transition({
			x: 0
		});
		return;
	});
	$('#vogel').click(function() {
		$('#vogel').transition({
			x: -600
		}).transition({
			y: -140
		}).transition({
			x: 0
		}).transition({
			y: 0
		});
	});
	$('#wolk1').click(function() {
		$(this).transition({
			scale: 0.8
		})
		$(this).transition({
			scale: 1,
			delay: 200
		});
	});
	$('#zonnestralen').hide();
	$('#zon').click(function() {
		$('#zonnestralen').fadeIn('slow');
		$('#zonnestralen').transition({
			rotate: '180deg'
		}, 1000, 'ease-in').transition({
			rotate: '0deg'
		}, 1000, 'ease-out');
		$('#zonnestralen').fadeOut('slow');
	});
	$('#wolk3').click(function() {
		$(this).transition({
			scale: 0
		})
		$(this).transition({
			scale: 1,
			delay: 200
		});
	});
	$('#ballon').click(function() {
		$(this).transition({
			scale: 1.5
		}).transition({
			scale: 1
		}).transition({
			y: -680
		}, 5000, 'ease-in').transition({
			x: 1400
		}).transition({
			y: 900
		}).transition({
			x: 0
		}).transition({
			y: 0
		});
	});
	$('#ballon2').click(function() {
		$(this).transition({
			scale: 1.5
		}).transition({
			scale: 1
		}).transition({
			y: -680
		}, 5000, 'ease-in').transition({
			x: 1400
		}).transition({
			y: 900
		}).transition({
			x: 0
		}).transition({
			y: 0
		});
	});
	$('#ballon3').click(function() {
		$(this).transition({
			scale: 1.5
		}).transition({
			scale: 1
		}).transition({
			y: -680
		}, 5000, 'ease-in').transition({
			x: 400
		}).transition({
			y: 900
		}).transition({
			x: 0
		}).transition({
			y: 0
		});
	});
	$('#wolk2').transition({
		x: 1500
	}, 50000, 'linear').transition({
		x: 0
	}, 50000, 'linear');
	$('#wolk2').click(function() {
		$('#wolk2').transition({
			x: 1500
		}, 50000, 'linear').transition({
			x: 0
		}, 50000, 'linear');
	});
	$('#ventje1, #pet1').click(function() {
		$('#pet1').transition({
			y: -120
		}, 500, 'ease').transition({
			y: 0
		});
	});
	$('#ventje2, #pet2').click(function() {
		$('#pet2').transition({
			y: -80
		}, 500, 'ease').transition({
			y: 0
		});
	});
	$('#ventje3, #pet3').click(function() {
		$('#pet3').transition({
			y: -140
		}, 500, 'ease').transition({
			y: 0
		});
	});
	$('#pet4').click(function() {
		$('#pet4').transition({
			y: -90
		}, 500, 'ease').transition({
			y: 0
		});
	});
	$('#heli').click(function() {
		$('#heli').transition({
			y: -480
		}).transition({
			x: 400
		}).transition({
			y: 0
		}).transition({
			x: 0
		});
	});
	$('#trein').click(function() {
		$('#trein').transition({
			x: -1600
		}, 4000, 'ease-in').transition({
			y: -1400
		}).transition({
			x: 1600
		}).transition({
			y: 0
		}).transition({
			x: 0
		});
	});
	$('#auto').click(function() {
		$('#auto').effect("shake");
		$(this).transition({
			x: -1600
		}, 5000, 'ease-in').transition({
			y: 400
		}).transition({
			x: 1600
		}).transition({
			y: 0
		}).transition({
			x: 0
		});
	});
	$('#bus').click(function() {
		$('#bus').effect("shake");
		$(this).transition({
			x: -1600
		}, 3000, 'ease-in').transition({
			y: 400
		}).transition({
			x: 1600
		}).transition({
			y: 0
		}).transition({
			x: 0
		});
	});
	$('#auto2').click(function() {
		$('#auto2').effect("shake");
		$(this).transition({
			x: 1600
		}, 4000, 'ease-in').transition({
			y: 400
		}).transition({
			x: -1600
		}).transition({
			y: 0
		}).transition({
			x: 0
		});
	});
	$('#kruin1').click(function() {
		$(this).transition({
			scale: 1.5
		}).transition({
			scale: 1
		});
	});
	$('#kruin2').click(function() {
		$(this).transition({
			scale: 2
		}).transition({
			scale: 1
		});
	});
	$('#kruin3').click(function() {
		$(this).transition({
			scale: 1.7
		}).transition({
			scale: 1
		});
	});
	$('#aarde-ballon-1, #aarde-vent-1').click(function() {
		$('#aarde-ballon-1').transition({
			scale: 1.5
		}).transition({
			scale: 1
		}).transition({
			y: -680
		}, 5000, 'ease-in').transition({
			x: 1400
		}).transition({
			y: 900
		}).transition({
			x: 0
		}).transition({
			y: 0
		});
	});
	$('#aarde-ballon-2, #aarde-vent-2').click(function() {
		$('#aarde-ballon-2').transition({
			scale: 1.5
		}).transition({
			scale: 1
		}).transition({
			y: -680
		}, 4000, 'ease-in').transition({
			x: 1400
		}).transition({
			y: 900
		}).transition({
			x: 0
		}).transition({
			y: 0
		});
	});
	$('#aarde-ballon-3, #aarde-vent-3').click(function() {
		$('#aarde-ballon-3').transition({
			scale: 1.5
		}).transition({
			scale: 1
		}).transition({
			y: -680
		}, 7000, 'ease-in').transition({
			x: 1400
		}).transition({
			y: 900
		}).transition({
			x: 0
		}).transition({
			y: 0
		});
	});
	$('#aarde-ballon-4, #aarde-vent-4').click(function() {
		$('#aarde-ballon-4').transition({
			scale: 1.5
		}).transition({
			scale: 1
		}).transition({
			y: -680
		}, 8000, 'ease-in').transition({
			x: 1400
		}).transition({
			y: 900
		}).transition({
			x: 0
		}).transition({
			y: 0
		});
	});
	$('#aarde-ballon-5, #aarde-vent-5').click(function() {
		$('#aarde-ballon-5').transition({
			scale: 1.5
		}).transition({
			scale: 1
		}).transition({
			y: -680
		}, 5000, 'ease-in').transition({
			x: 1400
		}).transition({
			y: 900
		}).transition({
			x: 0
		}).transition({
			y: 0
		});
	});
	$('#aarde-ballon-6, #aarde-vent-6').click(function() {
		$('#aarde-ballon-6').transition({
			scale: 1.5
		}).transition({
			scale: 1
		}).transition({
			y: -680
		}, 4000, 'ease-in').transition({
			x: 1400
		}).transition({
			y: 900
		}).transition({
			x: 0
		}).transition({
			y: 0
		});
	});
	$('#aarde-ballon-7, #aarde-vent-6').click(function() {
		$('#aarde-ballon-7').transition({
			scale: 1.5
		}).transition({
			scale: 1
		}).transition({
			y: -680
		}, 4000, 'ease-in').transition({
			x: 1400
		}).transition({
			y: 900
		}).transition({
			x: 0
		}).transition({
			y: 0
		});
	}); /* 	lucht */
	$('p.colourBubble.red').hide();
	$('p.colourBubble.blue').hide();
	$('p.colourBubble.green').hide();
	$('p.colourBubble.orange').hide();
	$('p.colourBubble.gray').hide();
	$('#callColours .colour').each(function() {
		$(this).bind('click', function() {
			thisColour = $(this);
			if (thisColour.data('colour') == 'red') {
				$('p.colourBubble.red').fadeIn('slow');
				$('p.colourBubble.red').delay(2000).fadeOut("slow");
			} else if (thisColour.data('colour') == 'gray') {
				$('p.colourBubble.gray').fadeIn('slow');
				$('p.colourBubble.gray').delay(2000).fadeOut("slow");
			} else if (thisColour.data('colour') == 'green') {
				$('p.colourBubble.green').fadeIn('slow');
				$('p.colourBubble.green').delay(2000).fadeOut("slow");
			} else if (thisColour.data('colour') == 'orange') {
				$('p.colourBubble.orange').fadeIn('slow');
				$('p.colourBubble.orange').delay(2000).fadeOut("slow");
			} else if (thisColour.data('colour') == 'blue') {
				$('p.colourBubble.blue').fadeIn('slow');
				$('p.colourBubble.blue').delay(2000).fadeOut("slow");
			};
		});
	}); /* aarde */
	$('p.colourBubble.black').hide();
	$('p.colourBubble.brown').hide();
	$('p.colourBubble.greenDark').hide();
	$('p.colourBubble.orange').hide();
	$('p.colourBubble.gray').hide();
	$('#aarde-callColours .colour').each(function() {
		$(this).bind('click', function() {
			thisColour = $(this);
			if (thisColour.data('colour') == 'black') {
				$('p.colourBubble.black').fadeIn('slow');
				$('p.colourBubble.black').delay(2000).fadeOut("slow");
			} else if (thisColour.data('colour') == 'brown') {
				$('p.colourBubble.brown').fadeIn('slow');
				$('p.colourBubble.brown').delay(2000).fadeOut("slow");
			} else if (thisColour.data('colour') == 'greenDark') {
				$('p.colourBubble.greenDark').fadeIn('slow');
				$('p.colourBubble.greenDark').delay(2000).fadeOut("slow");
			} else if (thisColour.data('colour') == 'orange') {
				$('p.colourBubble.orange').fadeIn('slow');
				$('p.colourBubble.orange').delay(2000).fadeOut("slow");
			} else if (thisColour.data('colour') == 'blue') {
				$('p.colourBubble.blue').fadeIn('slow');
				$('p.colourBubble.blue').delay(2000).fadeOut("slow");
			};
		});
	});
	//    ruimte
	$('p.colourBubble.ruimteBlue').hide();
	$('p.colourBubble.ruimteRed').hide();
	$('p.colourBubble.ruimteOrange').hide();
	$('#ruimte-callColours .colour').each(function() {
		$(this).bind('click', function() {
			thisColour = $(this);
			if (thisColour.data('colour') == 'red') {
				$('p.colourBubble.ruimteRed').fadeIn('slow');
				$('p.colourBubble.ruimteRed').delay(2000).fadeOut("slow");
			} else if (thisColour.data('colour') == 'orange') {
				$('p.colourBubble.ruimteOrange').fadeIn('slow');
				$('p.colourBubble.ruimteOrange').delay(2000).fadeOut("slow");
			} else if (thisColour.data('colour') == 'blue') {
				$('p.colourBubble.ruimteBlue').fadeIn('slow');
				$('p.colourBubble.ruimteBlue').delay(2000).fadeOut("slow");
			};
		});
	});
	//    water
	$('p.colourBubble.waterBlack').hide();
	$('p.colourBubble.waterOrange').hide();
	$('p.colourBubble.waterRed').hide();
	$('#water-callColours .colour').each(function() {
		$(this).bind('click', function() {
			thisColour = $(this);
			if (thisColour.data('colour') == 'red') {
				$('p.colourBubble.waterRed').fadeIn('slow');
				$('p.colourBubble.waterRed').delay(2000).fadeOut("slow");
			} else if (thisColour.data('colour') == 'orange') {
				$('p.colourBubble.waterOrange').fadeIn('slow');
				$('p.colourBubble.waterOrange').delay(2000).fadeOut("slow");
			} else if (thisColour.data('colour') == 'black') {
				$('p.colourBubble.waterBlack').fadeIn('slow');
				$('p.colourBubble.waterBlack').delay(2000).fadeOut("slow");
			};
		});
	}); /* 	ramen */
	$('.raam').each(function() {
		$(this).bind('click', function() {
			$(this).toggleClass('raamUit');
		});
	}); /* 	navigatie */
	/* 	ramen */
	$('.worldNav').each(function() {
		$(this).bind('click', function() {
			$(".worldNav").not(this).removeClass('worldNavActive');
			$(this).addClass('worldNavActive');
		});
	}); /* ruimte */
	$('#astronout1').click(function() {
		var numRand = Math.floor(Math.random() * 55) + parseFloat(-55);
		$(this).transition({
			rotate: -numRand
		}).transition({
			scale: 1
		}).transition({
			y: -1000
		}, 5000, 'ease-in').transition({
			x: 2400
		}).transition({
			y: 900
		}).transition({
			rotate: '0deg'
		}).transition({
			x: 0
		}).transition({
			y: 0
		});
	});
	$('#raket').click(function() {
		var numRand = Math.floor(Math.random() * 55) + parseFloat(-55);
		$(this).transition({
			rotate: -numRand
		}).transition({
			scale: 1
		}).transition({
			y: -1000
		}, 2000, 'ease-in').transition({
			x: 2400
		}).transition({
			y: 900
		}).transition({
			rotate: '0deg'
		}).transition({
			x: 0
		}).transition({
			y: 0
		});
	});
	$('#astronout2').click(function() {
		var numRand = Math.floor(Math.random() * 55) + parseFloat(-65);
		$(this).transition({
			rotate: numRand
		}).transition({
			scale: 1
		}).transition({
			y: -1000
		}, 5000, 'ease-in').transition({
			x: 2400
		}).transition({
			y: 900
		}).transition({
			rotate: '0deg'
		}).transition({
			x: 0
		}).transition({
			y: 0
		});
	});
	$('#astronout3').click(function() {
		var numRand = Math.floor(Math.random() * 75) + parseFloat(-55);
		$(this).transition({
			rotate: numRand
		}).transition({
			scale: 1
		}).transition({
			y: -1000
		}, 5000, 'ease-in').transition({
			x: 2400
		}).transition({
			y: 900
		}).transition({
			rotate: '0deg'
		}).transition({
			x: 0
		}).transition({
			y: 0
		});
	});
	$('#komeet').click(function() {
		$('#komeet').transition({
			x: 1600
		}, 4000, 'ease-in').transition({
			y: 1400
		}).transition({
			x: -1600
		}).transition({
			y: 0
		}).transition({
			x: 0
		});
		return;
	});
	$('#ster1').click(function() {
		$('#ster1').transition({
			scale: 1.5
		}).transition({
			scale: 1
		}).transition({
			rotate: '180deg'
		}, 1000, 'ease-in').transition({
			rotate: '0deg'
		}, 1000, 'ease-out');
		$('#ster1').fadeOut('slow');
		$('#ster1').fadeIn('slow');
	});
	$('#spaceship').each(function() {
		$(this).bind('click', function() {
			var numRandX = Math.floor(Math.random() * -1024) + parseFloat(1024);
			var numRandY = Math.floor(Math.random() * -768) + parseFloat(768);
			$('#spaceship').transition({
				x: numRandX
			}).transition({
				y: numRandY
			}).transition({
				x: 0
			}).transition({
				y: 0
			}); /* alert(numRandX + ' en ' + numRandY); */
		});
	});
	$('#ster2').click(function() {
		$('#ster2').transition({
			scale: 1.5
		}).transition({
			scale: 1
		}).transition({
			rotate: '180deg'
		}, 1000, 'ease-in').transition({
			rotate: '0deg'
		}, 1000, 'ease-out');
		$('#ster2').fadeOut('slow');
		$('#ster2').fadeIn('slow');
	});
	$('#ster3').click(function() {
		$('#ster3').transition({
			scale: 1.5
		}).transition({
			scale: 1
		}).transition({
			rotate: '180deg'
		}, 1000, 'ease-in').transition({
			rotate: '0deg'
		}, 1000, 'ease-out');
		$('#ster3').fadeOut('slow');
		$('#ster3').fadeIn('slow');
	});
	$('#ster4').click(function() {
		$('#ster4').transition({
			scale: 1.5
		}).transition({
			scale: 1
		}).transition({
			rotate: '180deg'
		}, 1000, 'ease-in').transition({
			rotate: '0deg'
		}, 1000, 'ease-out');
		$('#ster4').fadeOut('slow');
		$('#ster4').fadeIn('slow');
	});
	$('#ster5').click(function() {
		$('#ster5').transition({
			scale: 1.5
		}).transition({
			scale: 1
		}).transition({
			rotate: '180deg'
		}, 1000, 'ease-in').transition({
			rotate: '0deg'
		}, 1000, 'ease-out');
		$('#ster5').fadeOut('slow');
		$('#ster5').fadeIn('slow');
	});
	$('.vis').each(function() {
		$(this).bind('click', function() {
			var numRand = Math.floor(Math.random() * 6000) + parseFloat(1000);
			$(this).transition({
				x: 1600
			}, numRand, 'ease-in').transition({
				y: 1200
			}).transition({
				x: -1600
			}).transition({
				y: 0
			}).transition({
				x: 0
			});
		});
	});
	$('#wrak').click(function() {
		$('#wrak').transition({
			rotate: '8deg'
		}, 1000, 'ease-in').transition({
			rotate: '0deg'
		}, 1000, 'ease-out');
	});
	$('#monster').click(function() {
		$('#monster').transition({
			scale: 1.1
		}).transition({
			scale: 1
		}).transition({
			y: -30
		}, 3000, 'ease-in').transition({
			y: 0
		}, 4000, 'ease-in');
	});
	$('#duiker').click(function() {
		$('#duiker').transition({
			scale: 0.8,
			opacity: '0.6'
		}).transition({
			y: -800
		}, 3000, 'ease-in').transition({
			y: 0
		}, 5000, 'ease-in').transition({
			scale: 1,
			opacity: '1'
		});
	});
	$('#duikboot').click(function() {
		$('#torpedo').effect("shake");
		$('#torpedo').transition({
			x: -1600
		}, 5000, 'ease-in').transition({
			y: 400
		}).transition({
			x: 1600
		}).transition({
			y: 0
		}).transition({
			x: 0
		});
		return;
	}); /* eind ruimte	 */
	/* eind jquery */
});