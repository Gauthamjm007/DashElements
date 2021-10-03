import React from "react";

export default function NavList({ routes }) {
  return (
    <ul className="listInline navListWrapper">
      {routes?.map((item) => {
        return (
          <li
            className={`listInlineItem navListItem heading4 ${
              item.status ? "active" : ""
            }`}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
}
