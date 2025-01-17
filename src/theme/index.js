export default {
	"defaultWidth": 1280,
	"breakpoints": {
		"sm": [
			{
				"type": "max-width",
				"value": 576
			}
		],
		"md": [
			{
				"type": "max-width",
				"value": "768"
			}
		],
		"lg": [
			{
				"type": "max-width",
				"value": 992
			}
		]
	},
	"color": {
		"dark": "#2f2d33",
		"darkL1": "#0E1317",
		"darkL2": "#191E22",
		"grey": "#868686",
		"greyD1": "#637897",
		"greyD2": "#586D8E",
		"light": "#ffffff",
		"lightD1": "#F7FBFF",
		"lightD2": "#E4E8EC",
		"green": "#BAF2E9",
		"primary": "#f5c83f",
		"secondary": "#81C3D7",
		"orange": "#FF7C22",
		"red": "#DE350B",
		"purple": "#FD6DF9",
		"indigo": "#9B6CFC",
		"primary30": "rgba(245, 200, 63, 0.3)"
	},
	"fontFamily": {
		"sans": "-apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
		"sansHeavy": "Impact, Haettenschweiler, 'Franklin Gothic Bold', Charcoal, 'Helvetica Inserat', 'Bitstream Vera Sans Bold', 'Arial Black', sans-serif",
		"sansHelvetica": "Frutiger, 'Frutiger Linotype', Univers, Calibri, 'Gill Sans', 'Gill Sans MT', 'Myriad Pro', Myriad, 'DejaVu Sans Condensed', 'Liberation Sans', 'Nimbus Sans L', Tahoma, Geneva, 'Helvetica Neue', Helvetica, Arial, sans-serif",
		"sansVerdana": "Corbel, 'Lucida Grande', 'Lucida Sans Unicode', 'DejaVu Sans', 'Bitstream Vera Sans', 'Liberation Sans', Verdana, 'Verdana Ref', sans-serif",
		"sansTrebuchet": "'Segoe UI', Candara, 'Bitstream Vera Sans', 'DejaVu Sans', 'Trebuchet MS', Verdana, 'Verdana Ref', sans-serif",
		"mono": "Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier, monospace",
		"serifTimes": "Cambria, 'Hoefler Text', Utopia, 'Liberation Serif', 'Nimbus Roman No9 L Regular', Times, 'Times New Roman', serif",
		"serifGeorgia": "Constantia, 'Lucida Bright', Lucidabright, 'Lucida Serif', Lucida, 'DejaVu Serif', 'Bitstream Vera Serif', 'Liberation Serif', Georgia, serif",
		"serifGaramond": "'Palatino Linotype', Palatino, Palladio, 'URW Palladio L', 'Book Antiqua', Baskerville, 'Bookman Old Style', 'Bitstream Charter', 'Nimbus Roman No9 L', Garamond, 'Apple Garamond', 'ITC Garamond Narrow', 'New Century Schoolbook', 'Century Schoolbook', 'Century Schoolbook L', Georgia, serif",
		"googleInter": "\"Inter\", sans-serif",
		"googleInconsolata": "\"Inconsolata\", monospace",
		"googleNanumGothicCoding": "\"Nanum Gothic Coding\", cursive"
	},
	"font": {
		"headline1": "normal 600 36px/1.3 --fontFamily-googleInconsolata",
		"headline2": "normal 900 24px/1.6 --fontFamily-googleInter",
		"headline3": "normal 500 48px/1.2 --fontFamily-googleAlegreyaSans",
		"base": "normal 400 18px/1.5 --fontFamily-googleVarta",
		"lead": "normal 600 28px/1.5 --fontFamily-googleInter",
		"headline4": "700 32px/1.2 --fontFamily-googleAlegreyaSans",
		"headline5": "700 24px/1.5 --fontFamily-googleAlegreyaSans"
	},
	"boxShadow": {
		"m": "0 4px 5px -1px rgba(0, 0, 0, 0.1)",
		"l": "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
		"xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
		"xxl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
	},
	"background": {
		"primaryGradient": "linear-gradient(180deg, --color-primary, transparent) no-repeat 0 0",
		"secondaryGradient": "linear-gradient(180deg, --color-secondary, transparent) no-repeat 0 0"
	},
	"transform": {
		"rotate90": "rotate(90deg)",
		"rotate180": "rotate(180deg)",
		"flipX": "scaleX(-1)",
		"flipY": "scaleY(-1)"
	},
	"transition": {
		"opacityOut": "opacity --transitionDuration-normal --transitionTimingFunction-easeOut",
		"transformOut": "transform --transitionDuration-normal --transitionTimingFunction-easeOut",
		"transformInOut": "transform --transitionDuration-normal --transitionTimingFunction-easeInOut"
	},
	"transitionTimingFunction": {
		"easeIn": "cubic-bezier(0.4, 0, 1, 1)",
		"easeOut": "cubic-bezier(0, 0, 0.2, 1)",
		"easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
		"sharp": "cubic-bezier(0.4, 0, 0.6, 1)"
	},
	"transitionDuration": {
		"fastest": "0.1s",
		"fast": "0.2s",
		"normal": "0.3s"
	},
	"filter": {
		"grayscale": "grayscale(100%)",
		"invert": "invert(100%)",
		"blur": "blur(10px)"
	},
	"animation": {},
	"keyframes": {
		"fadeIn": [
			{
				"key": "from",
				"props": [
					{
						"opacity": 0
					}
				]
			},
			{
				"key": "to",
				"props": [
					{
						"opacity": 1
					}
				]
			}
		],
		"fadeOut": [
			{
				"key": "from",
				"props": [
					{
						"opacity": 1
					}
				]
			},
			{
				"key": "to",
				"props": [
					{
						"opacity": 0
					}
				]
			}
		]
	},
	"components": {
		"section": {
			"maxWidth": {
				"default": "1280px"
			},
			"minWidth": {
				"default": "300px"
			},
			"width": {
				"default": "90%"
			}
		},
		"stack": {
			"gap": {
				"default": "32px",
				"small": "16px"
			}
		}
	},
	"fonts": {
		"Inter": {
			"family": "Inter",
			"type": "google-fonts",
			"meta": {
				"category": "sans-serif",
				"variants": [
					"100",
					"200",
					"300",
					"regular",
					"500",
					"600",
					"700",
					"800",
					"900",
					"100italic",
					"200italic",
					"300italic",
					"italic",
					"500italic",
					"600italic",
					"700italic",
					"800italic",
					"900italic"
				]
			}
		},
		"Inconsolata": {
			"family": "Inconsolata",
			"type": "google-fonts",
			"meta": {
				"category": "monospace",
				"variants": [
					"200",
					"300",
					"regular",
					"500",
					"600",
					"700",
					"800",
					"900"
				]
			}
		},
		"Nanum Gothic Coding": {
			"family": "Nanum Gothic Coding",
			"type": "google-fonts",
			"meta": {
				"category": "handwriting",
				"variants": [
					"regular",
					"700"
				]
			}
		}
	},
	"version": 29
}