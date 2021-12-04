import StyleContext from "../context/styleContext";
import { useContext, useState } from "react";
function Navbar() {
	const a = useContext(StyleContext);
	var [count, setCount] = useState(true);
	function theme() {
		if (count === true) {
			document.getElementById("body").style.backgroundColor = a.dark;
			document.getElementById("text").style.color = a.light;
		} else {
			document.getElementById("body").style.backgroundColor = a.light;
			document.getElementById("text").style.color = a.dark;
		}
		setCount((count = !count));
		// console.log(count);
	}

	return (
		<div id='body'>
			<div
				style={{
					width: "100%",
					height: "100px",
				}}>
				<h1 id='text'>Themes</h1>
				<button
					style={{ marginLeft: "20px" }}
					onClick={() => {
						theme();
					}}>
					Dark
				</button>
				<button
					style={{ marginLeft: "20px" }}
					onClick={() => {
						theme();
					}}>
                     Light
				</button>
			</div>
		</div>
	);
}
export default Navbar;   