import React from "react";
import "./Sidebar.css";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
//   import stats from ''
import StyleState from "../context/style";
import Navbar from "./Navbar";
import StyleContext from "../context/styleContext";
import { useContext, useState } from "react";

const Sidebar = () => {
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
    <StyleState id='body'>
    <div
    id='body'
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      
        
      
      <CDBSidebar backgroundColor="#fff" textColor="#333" id='body'>
        <CDBSidebarHeader
          prefix={
            <img
              style={{ width: "40px" }}
              class="rounded-circle"
              alt="20x20"
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
              data-holder-rendered="true"
            ></img>
          }
        >
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Sidebar
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content" id='body'>
          <CDBSidebarMenu id='body'>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Analytics
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/hero404"
              target="_blank"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="exclamation-circle">
                404 page
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
      <div className="container">
      <Navbar></Navbar>
      </div>
    </div>
    </StyleState>
  );
};

export default Sidebar;
