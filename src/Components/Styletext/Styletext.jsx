import React from 'react';
import './Styletext.css';

//importing typewriter-effect
import Typewriter from "typewriter-effect";


function Styletext() {
	return (
		<div className="App">
			<Typewriter
				onInit={(typewriter) => {
					typewriter
						.typeString("Together we are stronger")
						.pause(5000)
						.start()
						
						
						
				}}
			/>
		</div>
	);
}

export default Styletext;
