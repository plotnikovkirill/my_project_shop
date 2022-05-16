import React from "react";
import { SideMenuWrapper } from "./units";
import Item from "./Item";
import { NavLink } from "react-router-dom";
import { Home, ShoppingCart, Dashboard, Settings } from "@material-ui/icons";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const SideMenu = () => {
    return (
        <SideMenuWrapper>
            <div>
                <NavLink exact to={"/"}>
                    <Item icon={<Home />} text={"Главная"} />
                </NavLink>
                <NavLink exact to={"/clients"}>
                    <Item icon={<ShoppingCart />} text={"Заказы"} />
                </NavLink>
                <NavLink exact to={"/about"}>
                    <Item icon={<Dashboard />} text={"Товары"} />
                </NavLink>
                <NavLink exact to={"/create-order"}>
                    <Item icon={<AddCircleOutlineIcon />} text={"Товары"} />
                </NavLink>
            </div>
            <div>
                <Item icon={<Settings />} />
            </div>
        </SideMenuWrapper>
    );
};

export default SideMenu;
