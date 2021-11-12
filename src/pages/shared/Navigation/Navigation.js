import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="navigation">
      <div>
        <h1 className="nav-logo">
          {" "}
          {/* <img width="50" src={logo} alt="" /> */}
          ROAD-PADEL
        </h1>
      </div>
      <input type="checkbox" id="toggle-menu" />
      <div className="nav-item">
        <NavLink to="/home"
         style={isActive => ({
          color: isActive ? "#ffb800" : "white"
        })}
        >Home</NavLink>
        <NavLink to="/allProducts"
        style={isActive => ({
          color: isActive ? "#ffb800" : "white"
        })}
        >Products</NavLink>

        {user?.email&& <NavLink to="/dashboard"
        style={isActive => ({
          color: isActive ? "#ffb800" : "white"
        })}
        >Dashboard</NavLink>}
        
        {user?.email&&<NavLink  className="login" to="#">
           {user.displayName}
          </NavLink>}


        {user?.email ? (
          <NavLink onClick={logOut} className="login" to="/login">
            Logout
          </NavLink>
        ) : (
          <NavLink className="login" to="/login">
            Login
          </NavLink>
        )}
      </div>
      <label htmlFor="toggle-menu" className="toggle">
        <FontAwesomeIcon icon={faBars} />
      </label>
    </div>
  );
};

export default Navigation;
