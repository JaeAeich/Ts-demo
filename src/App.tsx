import './App.css'
import React from "react";
import "jae-fast-element";
//wrapper
import { provideFASTDesignSystem } from "@microsoft/fast-components";
import { provideReactWrapper } from "@microsoft/fast-react-wrapper";
import { MyListComponent,MyDesignTokenComponent } from 'jae-fast-element';
const { wrap } = provideReactWrapper(React, provideFASTDesignSystem());  
export const FastCard = wrap(MyListComponent);
export const FastDesignToken = wrap(MyDesignTokenComponent);

//@ts-ignore
const compo = (
	<my-design-token-component jsonData='{"colors-color-primary":"red","colors-color-secondary":"yellow"}'></my-design-token-component>
);

function App() {
	return (
		<div className="App">
			{compo}
			{/* using wrapper */}
			<FastDesignToken sentence="I am different as I was passed different styles :o"></FastDesignToken>
		</div>
	);
}

export default App
