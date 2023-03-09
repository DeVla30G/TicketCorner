import React from "react";
import "../../style/Adminstyle/AdminSideBar.css"
//import { LineStyle, Timeline, PersonSharp, Event, Web } from "@material-ui/icons"
import {Nav} from "react-bootstrap";
//import { withStyles } from '@material-ui/core/styles';

export default function AdminSideBar() {
  return (
    <div className="AdminSideBar">
       <div className="sidebarWrapper">
         <div className="sidebarMenu">
           <h3 className="sidebarTitle">
             Dashboard
            </h3>
            <ul className="sidebarList">
              <li className="sidebartListItem">
              <Nav.Link href="/">Website</Nav.Link>
              </li>
              <li className="sidebartListItem">
                <Nav.Link href="/admin">Analytics</Nav.Link>
              </li>
            </ul>
              <h3 className="sidebarTitle">
                Management
              </h3>
            <ul className="sidebarList">
              <li className="sidebartListItem">
              <Nav.Link href="/admin/users">Users</Nav.Link>
              </li>
              <li className="sidebartListItem">
                <Nav.Link href="/admin/concerts">Events</Nav.Link>
              </li>
            </ul>
         </div>
       </div>
    </div>
  )
}