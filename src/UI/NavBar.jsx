import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import InstagramImage from "../assets/images/Instagram.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClapperboard,
  faCompass,
  faHouse,
  faMagnifyingGlass,
  faHeart,
  faSquarePlus,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectPhotos } from "../features/photos/photosSlice";

const Navbar = () => {
  const photos = useSelector(selectPhotos);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__links}>
        <NavLink to="*" className={styles.img}>
          <img src={InstagramImage} alt="Instagram" className={styles.logo} />
        </NavLink>
        <NavLink to="/">
          <FontAwesomeIcon icon={faHouse} />
          <p>Home</p>
        </NavLink>
        <NavLink>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <p>Search</p>
        </NavLink>
        <NavLink>
          <FontAwesomeIcon icon={faCompass} />
          <p>Explore</p>
        </NavLink>
        <NavLink>
          <FontAwesomeIcon icon={faClapperboard} />
          <p>Reels</p>
        </NavLink>
        <NavLink>
          <FontAwesomeIcon icon={faFacebookMessenger} />
          <p>Messages</p>
        </NavLink>
        <NavLink>
          <FontAwesomeIcon icon={faHeart} />
          <p>Notifications</p>
        </NavLink>
        <NavLink>
          <FontAwesomeIcon icon={faSquarePlus} />
          <p>Create</p>
        </NavLink>
        <NavLink>
          <Avatar sx={{ width: 22, height: 22 }} src={photos[5]?.url} />
          <p>Profile</p>
        </NavLink>
        <NavLink className={styles.toggler}>
          <FontAwesomeIcon icon={faBars} />
          <p>More</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
