import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import AddProduct from "../AddProduct/AddProduct";
import DashBoard from "../DahBoard/DashBoard";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import MyOrder from "../MyOrder/MyOrder";
import Pay from "../Pay/Pay";
import Review from "../Review/Review";
import "./Dashboard.css";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { admin, user, logOut } = useAuth();

  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="plat">
      <Toolbar />

      <div className="dash-menu">
        {/* <FontAwesomeIcon icon={faHome} /> */}

        <NavLink
          sx={{ mb: 2 }}
          to={`/home`}
          style={(isActive) => ({
            color: isActive ? "#ffb800" : "white",
          })}
        >
          Home
        </NavLink>

        {/* <FontAwesomeIcon icon={faUser} /> */}
        {admin && (
          <NavLink
            to={`${url}/makeAdmin`}
            style={(isActive) => ({
              color: isActive ? "#ffb800" : "white",
            })}
          >
            Make Admin
          </NavLink>
        )}

        {admin && (
          <NavLink
            to={`${url}/manageAllOrders`}
            style={(isActive) => ({
              color: isActive ? "#ffb800" : "white",
            })}
          >
            Manage All Orders
          </NavLink>
        )}
        {admin && (
          <NavLink
            to={`${url}/manageProducts`}
            style={(isActive) => ({
              color: isActive ? "#ffb800" : "white",
            })}
          >
            Manage Products
          </NavLink>
        )}

        {admin && (
          <NavLink
            to={`${url}/addProduct`}
            style={(isActive) => ({
              color: isActive ? "#ffb800" : "white",
            })}
          >
            Add Product
          </NavLink>
        )}

        {!admin && (
          <NavLink
            to={`${url}/myOrder`}
            style={(isActive) => ({
              color: isActive ? "#ffb800" : "white",
            })}
          >
            {/* <FontAwesomeIcon icon={faUser} /> */}
            My Order
          </NavLink>
        )}

        {!admin && (
          <NavLink
            to={`${url}/review`}
            style={(isActive) => ({
              color: isActive ? "#ffb800" : "white",
            })}
          >
            Review
          </NavLink>
        )}

        {!admin && (
          <NavLink
            to={`${url}/pay`}
            style={(isActive) => ({
              color: isActive ? "#ffb800" : "white",
            })}
          >
            Pay
          </NavLink>
        )}
        <br />

        <NavLink to="/">
          <button className="custom-btn" onClick={logOut}>
            log out
          </button>
        </NavLink>
      </div>
      <br />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className="appBar"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography className="dashText" variant="p" noWrap component="div">
            Name: {user.displayName} <br />
            Email: {user.email}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashBoard></DashBoard>
          </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          <Route path={`${path}/myOrder`}>
            <MyOrder></MyOrder>
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
          <AdminRoute path={`${path}/manageAllOrders`}>
            <ManageAllOrders></ManageAllOrders>
          </AdminRoute>
          <Route path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
