import React from "react";
import theme from "theme";
import { Theme, Link, Span, Strong, Text, Section, Box, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Formspree } from "@quarkly/components";
import * as Components from "components";
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
		<Components.MainNavigation />
		<Section
			padding="36px 0 128px 0"
			quarkly-title="HeroBlock"
			md-padding="16px 0 30px 0"
			background="--color-primary"
			min-height="55vh"
			sm-min-height="42vh"
		>
			<Override
				slot="SectionContent"
				flex-direction="column"
				md-flex-wrap="wrap"
				display="flex"
				flex-wrap="no-wrap"
				align-items="center"
				justify-content="center"
				flex="1 1 0%"
			/>
			<Text margin="0px 0 0px 0" font="--lead" min-width="310px" max-width="50%">
				<Span
					font-weight="normal"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					Para uma participação coletiva, democratica
				</Span>
				{" "}
				<Strong
					font="900 32px/48px &quot;Inter&quot;, sans-serif"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					que faz sentido
				</Strong>
			</Text>
		</Section>
		<Section
			padding="36px 0 36px 0"
			quarkly-title="HeroBlock"
			md-padding="16px 0 30px 0"
			background="--color-lightD1"
			justify-content="center"
			align-items="flex-start"
			flex-direction="row"
			width="100%"
		>
			<Override
				slot="SectionContent"
				flex-direction="column"
				md-flex-wrap="wrap"
				display="block"
				flex-wrap="no-wrap"
				align-items="center"
				justify-content="center"
				flex="0 1 auto"
				margin="0 0 0px 0"
				align-self="auto"
				min-width="310px"
				overflow="visible"
				max-width="50%"
			/>
			<Text font="--base" display="block" width="100%">
				Ox1 é uma empresa portuguesa que fornece apoio tecnológico e humano aos coletivos. Centrada na participação cidadã, nossa mágica mistura escuta, criatividade e experimentação.{" "}
				<br />
				<br />
				💖 Amamos navegar nesse universo complexo e acolhedor.
			</Text>
		</Section>
		<Section
			padding="36px 0 128px 0"
			quarkly-title="HeroBlock"
			md-padding="16px 0 30px 0"
			background="--color-lightD1"
			justify-content="center"
			align-items="flex-start"
			min-height="100vh"
		>
			<Override
				slot="SectionContent"
				flex-direction="column"
				md-flex-wrap="wrap"
				display="flex"
				flex-wrap="no-wrap"
				align-items="center"
				justify-content="flex-start"
				flex="1 1 0%"
				min-width="310px"
				margin="0px 0 0px 0"
				max-width="50%"
			/>
			<Text margin="0px 0 32px 0" font="--headline2" align-self="flex-start">
				Nossas propostas
			</Text>
			<Box
				min-width="100%"
				min-height="100px"
				overflow="visible"
				display="flex"
				flex-direction="row"
				flex-wrap="no-wrap"
				align-items="stretch"
				justify-content="flex-start"
				quarkly-title="ProposalBox"
				width="100%"
				margin="16px 0px 16px 0px"
				background="--color-secondary"
				flex="1 1 0%"
				sm-display="flex"
				sm-flex-direction="column"
				sm-flex-wrap="no-wrap"
			>
				<Box
					min-width="128px"
					background="url(https://uploads.quarkly.io/677f0d16e778710018d66478/images/2025-01-09_10-51_1.png?v=2025-01-09T10:52:05.710Z) top/cover scroll"
					flex="1 1 0%"
					display="flex"
					justify-content="center"
					align-items="center"
					padding="0px 35% 0px 0px"
				/>
				<Box
					min-width="100px"
					min-height="100px"
					padding="8px 8px 16px 16px"
					display="flex"
					flex-direction="column"
					flex-wrap="no-wrap"
					grid-row-gap="8px"
				>
					<Text margin="0px 0px 0px 0px" font="normal 700 24px/1.5 --fontFamily-googleInconsolata">
						ASSOCIAÇÕES E COLETIVOS
					</Text>
					<Text margin="0px 0px 0px 0px" font="21px --fontFamily-googleInconsolata">
						Organize e sistematize seus coletivos com plataformas livres e open-source, inspirando-se em práticas modernas de autogestão e movimentos cidadãos.
					</Text>
				</Box>
			</Box>
			<Box
				min-width="100%"
				min-height="100px"
				overflow="visible"
				display="flex"
				flex-direction="row"
				flex-wrap="no-wrap"
				align-items="stretch"
				justify-content="flex-start"
				quarkly-title="ProposalBox"
				width="100%"
				margin="16px 0px 16px 0px"
				background="--color-secondary"
				flex="1 1 0%"
				sm-display="flex"
				sm-flex-direction="column"
				sm-flex-wrap="no-wrap"
			>
				<Box
					min-width="128px"
					background="url(https://uploads.quarkly.io/677f0d16e778710018d66478/images/2025-01-09_10-51_1.png?v=2025-01-09T10:52:05.710Z) top/cover scroll"
					flex="1 1 0%"
					display="flex"
					justify-content="center"
					align-items="center"
					padding="0px 35% 0px 0px"
				/>
				<Box
					min-width="100px"
					min-height="100px"
					padding="8px 8px 16px 16px"
					display="flex"
					flex-direction="column"
					flex-wrap="no-wrap"
					grid-row-gap="8px"
				>
					<Text margin="0px 0px 0px 0px" font="normal 700 24px/1.5 --fontFamily-googleInconsolata">
						CÂMARAS
					</Text>
					<Text margin="0px 0px 0px 0px" font="21px --fontFamily-googleInconsolata">
						Fomente uma cultura participativa, incluindo a população nas decisões.
						<br />
						<br />
						Ofereça ferramentas essenciais para ativar o potencial cidadão e associativo.
					</Text>
				</Box>
			</Box>
			<Box
				min-width="100%"
				min-height="100px"
				overflow="visible"
				display="flex"
				flex-direction="row"
				flex-wrap="no-wrap"
				align-items="stretch"
				justify-content="flex-start"
				quarkly-title="ProposalBox"
				width="100%"
				margin="16px 0px 16px 0px"
				background="--color-secondary"
				flex="1 1 0%"
				sm-display="flex"
				sm-flex-direction="column"
				sm-flex-wrap="no-wrap"
			>
				<Box
					min-width="128px"
					background="url(https://uploads.quarkly.io/677f0d16e778710018d66478/images/2025-01-09_10-51_1.png?v=2025-01-09T10:52:05.710Z) top/cover scroll"
					flex="1 1 0%"
					display="flex"
					justify-content="center"
					align-items="center"
					padding="0px 35% 0px 0px"
				/>
				<Box
					min-width="100px"
					min-height="100px"
					padding="8px 8px 16px 16px"
					display="flex"
					flex-direction="column"
					flex-wrap="no-wrap"
					grid-row-gap="8px"
				>
					<Text margin="0px 0px 0px 0px" font="normal 700 24px/1.5 --fontFamily-googleInconsolata">
						FACILITADORES
					</Text>
					<Text margin="0px 0px 0px 0px" font="21px --fontFamily-googleInconsolata">
						Adapte seu modelo de negócio para incluir um aspecto digital.{" "}
						<br />
						<br />
						Crie padrões para processos participativos e inove suas metodologias.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section background="--color-green" color="--dark" padding="64px 0 64px 0">
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="50%" lg-width="100%">
					<Box>
						<Text
							font="--headline2"
							color="--grey"
							letter-spacing="1px"
							text-transform="uppercase"
							margin="0"
						>
							💌
						</Text>
						<Text font="--lead" max-width="500px" margin="10px 0 0 0">
							Use este formulário para mandar um e-mail para{" "}
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								<Link
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									user-select="auto"
									pointer-events="auto"
									href="mailto:ola@ox1.pt"
								>
									ola@ox1.pt
								</Link>
							</Strong>
						</Text>
					</Box>
				</Box>
				<Box width="50%" padding="8px 8px 8px 8px" lg-width="100%">
					<Box>
						<Formspree endpoint="xeqpgrlv">
							<Box
								gap="16px"
								display="grid"
								flex-direction="row"
								flex-wrap="wrap"
								grid-template-columns="repeat(2, 1fr)"
								grid-gap="16px"
							>
								<Box sm-width="100%" display="flex" flex-direction="column">
									<Text font="--base" margin="0 0 4px 0">
										E-mail
									</Text>
									<Input width="100%" type="email" name="email" />
								</Box>
								<Box display="flex" flex-direction="column" grid-column="1 / span 2">
									<Text font="--base" margin="0 0 4px 0">
										Sua messagem
									</Text>
									<Input as="textarea" rows="4" width="100%" name="message" />
								</Box>
								<Box display="flex" flex-direction="column" align-items="flex-start" grid-column="1 / span 2">
									<Button
										background="--color-primary"
										padding="13px 32px 13px 32px"
										font="normal 400 18px/1.5 --fontFamily-googleInter"
										border-radius="4px"
										color="--darkL1"
									>
										ENVIAR
									</Button>
								</Box>
							</Box>
						</Formspree>
					</Box>
				</Box>
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