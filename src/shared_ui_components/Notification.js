import React from "react";
import { images } from "../constants";

export default function Notification({ count }) {
  return (
    <span className="notification">
      <span className="notificationCount subtitle">{count}</span>
      <img src={images.notification} alt="notification" />
    </span>
  );
}
