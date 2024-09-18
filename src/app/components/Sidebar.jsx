import React from 'react';
import './sidebar.scss';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Next Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
        <Link href="/" className="bg-purple-300">
          <li className="bg-purple-300">
            <span>Dashboard</span>
          </li>
        </Link>
        </ul>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Sidebar;
