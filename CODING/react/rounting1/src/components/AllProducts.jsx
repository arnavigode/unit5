/** @format */

import { Link } from "react-router-dom";
import ProductContext from "../context/productContext";
import { useContext, useState, useEffect } from "react";

function AllProducts({ value }) {
	const a = useContext(ProductContext);

	useEffect(() => {
		change();
	}, []);
	function change(a, b, c) {
		value(a, b, c);
	}

	return (
		<div style={{ marginLeft: "0px" }}>
			<h1 style={{textAlign:"center"}}>All Products</h1>
			{a.map((e) => (
				<div key={e.id} style={{textAlign:"center"}}>
					<b style={{textAlign:"center", color:"green"}}>Name-</b>
					<br />
					{e.name}
					<div>
						<Link to={`/details/${e.id}`}>
							<button
							style={{background:"none", border:"none", borderBottom:"1px solid black", cursor:"pointer", float:"right", color:"brown", marginRight:"50px"}}
								onClick={() => {
									change(e.id, e.name, e.price);
								}}>
								More →
							</button>
						</Link>
						<br />
					</div>
					<br />
				</div>
			))}
		</div>
	);
}
export default AllProducts;
