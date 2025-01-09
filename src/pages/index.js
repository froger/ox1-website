import React from "react";
import theme from "theme";
import { Theme, Link, Text, Span, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Ox1 - Tecnologia a seriço da democracia
			</title>
			<meta name={"description"} content={"Ox1 traz competências únicas em participação digital e presencial, oferecendo ferramentas que tornam processos mais transparentes e acessíveis, fortalecendo a disseminação da participação social."} />
			<meta property={"og:title"} content={"Ox1 - Tecnologia a serviço da democracia, conectando cidadãos e instituições para transformar participação social."} />
			<meta property={"og:description"} content={"Ox1 traz competências únicas em participação digital e presencial, oferecendo ferramentas que tornam processos mais transparentes e acessíveis, fortalecendo a disseminação da participação social."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/677f0d16e778710018d66478/images/blob.svg?v=2025-01-09T00:51:43.520Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/677f0d16e778710018d66478/images/blob.svg?v=2025-01-09T00:51:43.520Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/677f0d16e778710018d66478/images/blob.svg?v=2025-01-09T00:51:43.520Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/677f0d16e778710018d66478/images/blob.svg?v=2025-01-09T00:51:43.520Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/677f0d16e778710018d66478/images/blob.svg?v=2025-01-09T00:51:43.520Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/677f0d16e778710018d66478/images/blob.svg?v=2025-01-09T00:51:43.520Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/677f0d16e778710018d66478/images/blob.svg?v=2025-01-09T00:51:43.520Z"} />
			<meta name={"msapplication-TileColor"} content={"#232323"} />
		</Helmet>
		<Section padding="36px 0 60px 0" quarkly-title="HeroBlock" md-padding="16px 0 30px 0" height="110vh">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-border-color="LightGray"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				flex="1 1 0%"
				text-align="center"
				align-self="center"
			>
				<Text
					font="--headline1"
					color="--light"
					margin="0 0px 0px 0px"
					lg-font="normal 700 50px/1.2 --fontFamily-googleAlegreyaSans, sans-serif"
					md-font="normal 700 40px/1.2 --fontFamily-googleAlegreyaSans, sans-serif"
					md-margin="0px 0px 24px 0px"
				>
					Ox1
				</Text>
				<Text
					text-align="center"
					lg-font="normal 600 16px/1.5 &quot;Varta&quot;, sans-serif"
					lg-margin="80px 0px 0px 0px"
					md-margin="0px 0px 0px 0px"
					margin="18px 0px 0px 0px"
					color="--light"
					font="--lead"
				>
					tecnologia a serviço da{" "}
					<Span
						color="--green"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						democracia
					</Span>
				</Text>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6166a2b829a0a1001e6ca5fb"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});