/** @format */

import ProductContext from "./productContext";
import { useState } from "react";
const json = require("../db.json");
const ProductState = (props) => {
	const [data, setData] = useState(json);
	return (
		<ProductContext.Provider value={data}>
			{props.children}
		</ProductContext.Provider>
	);
};
export default ProductState;
