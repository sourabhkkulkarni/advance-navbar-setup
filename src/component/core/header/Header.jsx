import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/tailwind-light/theme.css";
import "./Header.scss";

import { Typography } from "@mui/material";

//import { select } from 'd3-selection';
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { navItems } from './navbarConfig';
import Close from "@mui/icons-material/Close";
import { getParent } from "../../../utils/Constant";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/Notifications";

// import logo from './verizon_logo.jpg';

const SubMenu = ({ data, onClose, level }) => {
  const [selectedMenuIndex, setSeletedMEnuIndex] = useState(null);
  const [submenuLevel, setSubmenuLevel] = useState(level ? level + 1 : 1);
  const [leftPosition, setLeftPosition] = useState(level ? 310 : 0);
  const [hightlight, setHightlight] = useState(true);
  const [activeMenu, setActiveMenu] = useState();
  const location = useLocation();

  useEffect(() => {
    let _activeLoc;
    if (location.state?.tab) {
      _activeLoc = location.state.tab;
    } else {
      _activeLoc = location.pathname;
    }
    setActiveMenu(_activeLoc);
  }, [location]);

  useEffect(() => {
    if (!level) {
      setSeletedMEnuIndex(null);
      setHightlight(true);
    }
  }, [data]);

  const onClickHanlder = (index, item) => {
    if (index === selectedMenuIndex) {
      setSeletedMEnuIndex(null);
      setHightlight(true);
    } else {
      setSeletedMEnuIndex(index);
      setHightlight(false);
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        left: leftPosition + "px",
        top: 0,
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
      
      </div>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, color: "#fff" }}>
        {data?.submenu?.map((item, index) => {
          return (
            <SubMenuItem
              itemIndex={index}
              item={item}
              hightlight={hightlight && !selectedMenuIndex}
              level={submenuLevel}
              selected={
                selectedMenuIndex === index ||
                activeMenu === item.menuRouteTitle
              }
              onClose={onClose}
              onClick={onClickHanlder}
            />
          );
        })}
      </ul>
    </div>
  );
};

const SubMenuItem = ({
  item,
  itemIndex,
  selected,
  onClose,
  onClick,
  level,
  hightlight,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [openSubmenuIndex, setOpenMenuIndex] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const onClickHanlder = (e) => {
    e.stopPropagation();
    !item.url && onClick(itemIndex, item);
  };

  return (
    <li
      key={itemIndex}
      style={{
        listStyleType: "none",
        backgroundColor:
          isHovered || selected ? "rgba(0, 0, 0, 0.02)" : "transparent",
      }}
      onClick={onClickHanlder}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      
        <Link
          to={item.url}
          state={item.tabData ? item.tabData : {}}
          onClick={onClose}
          className={`submenu-item ${isHovered || selected ? " hovered" : ""} ${
            hightlight ? " hightlight" : ""
          }`}
        >
          <span>{item.title}</span>
        </Link>
      
    </li>
  );
};

const NavItem = ({
  title,
  submenu,
  url,
  isSelected,
  isHovered,
  location,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [parentTitle, SetParentTitle] = useState();

  useEffect(() => {
    const parent = getParent(navItems, location.pathname);
    SetParentTitle(parent);
  }, [location]);

  return (
    <div className="main-menu-item">
      <span
        className={`${
          parentTitle === title ? "selected" : isHovered ? "hovered" : ""
        }`}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {title}
      </span>
      {url && <Link to={url}></Link>}
    </div>
  );
};

const Header = () => {
  const [selectedMenuItemIndex, setSelectedMenuItemIndex] = useState(null);
  const [hoveredMenuItemIndex, setHoveredMenuItemIndex] = useState(null);
  const [selectedSubmenuItemIndex, setSelectedSubmenuItemIndex] =
    useState(null);
  const [activeMenu, setActiveMenu] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.state?.tab) {
      setActiveMenu(location.state.tab);
    } else {
      setActiveMenu(location.pathname);
    }
  }, [location]);

  const handleMenuClick = (index) => {
    setSelectedMenuItemIndex(index);
    setSelectedSubmenuItemIndex(null);
  };

  const handleSubmenuClick = (index) => {
    setSelectedSubmenuItemIndex(index);
  };

  const handleSubmenuClose = () => {
    setSelectedMenuItemIndex(null);
    setSelectedSubmenuItemIndex(null);
  };

  const handleMenuItemHover = (index) => {
    setHoveredMenuItemIndex(index);
  };

  const handleMenuItemMouseLeave = () => {
    setHoveredMenuItemIndex(null);
  };

  return (
    <div className="menu-wrapper">
      <div className="main-menu-container">
        <div style={{ display: "flex", alignItems: "center", flexGrow: "1" }}>
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <div>
              <Typography
                variant="subtitle1"
                noWrap
                sx={{
                  lineHeight: "16px",
                  fontSize: "12px",
                  color: "common.white",
                  minWidth: "13.2rem",
                  cursor: "pointer",
                  fontFamily: "VerizonNHGeTX",
                  marginLeft: "20px",
                }}
                ml={2}
                onClick={() => navigate("/")}
              >
                {"TEST"}
              </Typography>
              <Typography
                variant="subtitle1"
                noWrap
                sx={{
                  lineHeight: "36px",
                  fontSize: "32px",
                  color: "common.white",
                  minWidth: "13.2rem",
                  cursor: "pointer",
                  fontFamily: "VerizonNHGeDS",
                }}
                ml={2}
                onClick={() => navigate("/")}
              >
                {"TEST2"}
              </Typography>
            </div>
          </div>
          <span style={{ fontSize: "1rem", marginLeft: "4rem", flexGrow: "1" }}>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
              }}
            >
              {navItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleMenuClick(index)}
                  style={{ position: "relative" }}
                >
                  <NavItem
                    title={item.title}
                    submenu={item.submenu}
                    url={item.url}
                    location={location}
                    isSelected={selectedMenuItemIndex === index}
                    isHovered={hoveredMenuItemIndex === index}
                    onClick={() => handleMenuClick(index)}
                    onMouseEnter={() => handleMenuItemHover(index)}
                    onMouseLeave={handleMenuItemMouseLeave}
                  />
                </li>
              ))}
            </ul>
          </span>
          <div>
            <ul className={"mb-0"}>
              <li className="menu-items sign-out">
                <a href="https://login.verizon.com/onesso/logout.jsp">
                  Log Out
                </a>
                <NotificationsNoneOutlinedIcon
                  data-testid="notification"
                  sx={{ color: "common.white" }}
                />
              </li>
            </ul>
          </div>
        </div>
        {navItems[selectedMenuItemIndex]?.submenu && (
          <div className="submenu-content-wrapper">
            <Close
              onClick={handleSubmenuClose}
              sx={{
                fontSize: "32px",
                position: "absolute",
                right: "40px",
                top: "-56px",
                cursor: "pointer",
              }}
            />
            <div
              style={{
                minWidth: "90%",
                maxWidth: "90%",
                margin: "24px auto",
                position: "relative",
              }}
            >
              <SubMenu
                data={navItems[selectedMenuItemIndex]}
                onClose={handleSubmenuClose}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
