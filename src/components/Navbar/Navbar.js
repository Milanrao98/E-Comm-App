import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { getUser, logout } from "../../redux/reducers/authReducer";

//Icons..
import HomeIcon from "../../assets/home.png";
import OrdersIcon from "../../assets/basket.png";
import SignIn from "../../assets/Log in.png";
import LogoutIcon from "../../assets/Log Out.png";
import Cart from "../../assets/cart.png";

const Navbar = () => {
  const dispatch = useDispatch();

  const user = useSelector(getUser);
  const isAuthenticated = user;

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to logout from app
  const onLogoutHandler = () => {
    scrollTop();
    dispatch(logout());
  };

  return (
    <nav
      className="navbar"
      style={{
        justifyContent: "space-evenly",
        boxShadow: "rgb(17 17 26 / 5%) 0px 15px 20px",
      }}
    >
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={scrollTop}>
          Busy Buy
        </NavLink>

        <ul className="nav-menu" onClick={scrollTop}>
          <li className="nav-item active">
            <NavLink
              activeclassname="active-links"
              to="/"
              className="nav-links"
              exact="true"
            >
              <span>
                <img
                  className="icon_styles"
                  src={HomeIcon}
                  alt="Home Icon"
                />
              </span>{" "}
              Home
            </NavLink>
          </li>

          {isAuthenticated && (
            <>
              <li className="nav-item active">
                <NavLink
                  activeclassname="active-links"
                  to="/myorders"
                  className="nav-links"
                >
                  <span>
                    <img
                      className="icon_styles"
                      src={OrdersIcon}
                      alt="Orders Icon"
                    />
                  </span>{" "}
                  My orders
                </NavLink>
              </li>

              <li className="nav-item active">
                <NavLink
                  activeclassname="active-links"
                  to="/cart"
                  className="nav-links"
                >
                  <span>
                    <img
                      className="icon_styles"
                      src={Cart}
                      alt="Cart Icon"
                    />
                  </span>{" "}
                  Cart
                </NavLink>
              </li>
            </>
          )}

          <li className="nav-item active">
            {isAuthenticated ? (
              <NavLink
                to="/"
                onClick={onLogoutHandler}
                activeclassname="active-links"
                className="nav-links"
              >
                <span>
                  <img
                    className="icon_styles"
                    src={LogoutIcon}
                    alt="Logout Icon"
                  />
                </span>
                Logout
              </NavLink>
            ) : (
              <NavLink
                activeclassname="active-links"
                to="/signin"
                className="nav-links"
              >
                <span>
                  <img
                    className="icon_styles"
                    src={SignIn}
                    alt="Sign In Icon"
                  />
                </span>
                SignIn
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
