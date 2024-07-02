import react from "react";
import "../header/header.scss";
import Search from "../../../assets/icons/search.svg";
import ProfileImage from "../../../assets/images/profileImage.jpg";
import NotificationIcon from "../../../assets/icons/notificationIcon.svg";
export default function HeaderSeller() {
  return (
    <div>
      <div className="header-main">
        <div className="header-elements">
          <div className="search-bar-header">
            <input type="search" placeholder="Search" />
            <div className="search-icon">
              <img src={Search} alt="search-icon" />
            </div>
          </div>
          <img src={NotificationIcon} alt="notification-icon"  className="notification-svg"/>
          <div className="profile-header">
            <div className="profile-image">
              <img src={ProfileImage} alt="profile-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
