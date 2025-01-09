import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Text, Section } from "@quarkly/widgets";
const defaultProps = {
	"padding": "36px 0 0 0",
	"quarkly-title": "HeroBlock",
	"md-padding": "16px 0 30px 0",
	"background": "--color-primary",
	"sm-min-height": 0
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 32px",
			"font": "--headline1",
			"flex": "1 1 0%",
			"align-self": "flex-start",
			"children": "OX1"
		}
	}
};

const MainNavigation = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
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
		<Text {...override("text")} />
		{children}
	</Section>;
};

Object.assign(MainNavigation, { ...Section,
	defaultProps,
	overrides
});
export default MainNavigation;