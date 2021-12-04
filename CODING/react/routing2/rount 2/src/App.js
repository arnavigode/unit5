/** @format */

import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import ProductState from "./context/product";
import ProductContext from "./context/productContext";
import { useContext, useState } from "react";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Services from "./components/Services";
function App() {
	return (
		<div className='App'>
			
			<ProductState>
				<Routes>
					<Route path='/' element={<Home></Home>}></Route>
				</Routes>
				<Routes>
					<Route path='/about' element={<About></About>}></Route>
				</Routes>
				<Routes>
					<Route path='/contact' element={<Contact></Contact>}></Route>
				</Routes>
				<Routes>
					<Route path='/login' element={<Login></Login>}></Route>
				</Routes>
				<Routes>
					<Route path='/services' element={<Services></Services>}></Route>
				</Routes>
			</ProductState>
			<div>
				<Link to='/'>
					<button>Home</button>
				</Link>
				<Link to='/about'>
					<button>About</button>
				</Link>
				<Link to='/contact'>
					<button>Contact</button>
				</Link>
				<Link to='/login'>
					<button>Login</button>
				</Link>
				<Link to='/services'>
					<button>Services</button>
				</Link>
			</div>
		</div>
	);
}

export default App;
