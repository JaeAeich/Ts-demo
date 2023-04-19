import './App.css'
import {
	provideFASTDesignSystem,
} from "@microsoft/fast-components";
import { provideReactWrapper } from "@microsoft/fast-react-wrapper";
import React from "react";

import  'jae-fast-element'
import { MyListComponent,MyDesignTokenComponent } from 'jae-fast-element';
const { wrap } = provideReactWrapper(React, provideFASTDesignSystem());  


declare global {
	interface HTMLElementTagNameMap {
		"my-design-token-component": MyDesignTokenComponent;
	}
}


export const FastCard = wrap(MyListComponent);
export const FastDesignToken = wrap(MyDesignTokenComponent);
function App() {
  return (
		<div className="App">
			<my-design-token-component jsonData='{"colors-color-primary":"teal","colors-color-secondary":"yellow"}'></my-design-token-component>
			{/* using wrapper */}
			<FastDesignToken
				sentence="I am different as I was passed different styles :o"
			></FastDesignToken>
		</div>
	);
}

export default App
