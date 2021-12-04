/** @format */

import { Link } from "react-router-dom";

function Home() {
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Home Page</h1>
			<Link to='allProducts'>
				<button style={{ marginLeft: "47%" }}>All Products</button>
			</Link>
		</div>
	);
}
export default Home;
