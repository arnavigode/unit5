/** @format */
import ProductContext from "../context/productContext";
import { useContext, useState } from "react";
function Detail({ data }) {
	const a = useContext(ProductContext);
	// console.log(data);
	return (
		<div>
			<b>About Product</b>
			<h2>{data.name}</h2>
			<h4>{data.price}</h4>
		</div>
	);
}
export default Detail;
