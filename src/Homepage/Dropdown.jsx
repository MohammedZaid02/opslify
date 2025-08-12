import React from "react";
import "./Dropdown.css";

export default function Dropdown({ items }) {
  // Split items into two columns if more than 6
  const half = Math.ceil(items.length / 2);
  const firstColumn = items.slice(0, half);
  const secondColumn = items.slice(half);

  return (
    <div className="dropdown-panel">
      <div className="dropdown-column">
        {firstColumn.map((item, idx) => (
          <a href={item.href} key={idx} className="dropdown-link">
            {item.label}
          </a>
        ))}
      </div>
      <div className="dropdown-column">
        {secondColumn.map((item, idx) => (
          <a href={item.href} key={idx + half} className="dropdown-link">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

