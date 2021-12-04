/** @format */

import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import ProductState from "./context/product";
import Detail from "./components/Detail";
import ProductContext from "./context/productContext";
import { useContext, useState } from "react";
function App() {
	const [store, setStore] = useState({ id: "", name: "", price: "" });
	function sto(a, b, c) {
		setStore({ id: a, name: b, price: c });
	}

	return (
		<div>
			<ProductState>
				<Routes>
					<Route path='/' element={<Home></Home>}></Route>
					<Route
						path='/allProducts'
						element={<AllProducts value={sto}></AllProducts>}></Route>
					<Route
						path={`/details/${store.id}`}
						element={<Detail data={store}></Detail>}></Route>
				</Routes>
			</ProductState>
		</div>
	);
}

export default App;
