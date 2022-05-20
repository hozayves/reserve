import React, { useState, useEffect } from "react";
import "./sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SidebarChat from "../sidebarChat/SidebarChat";
import db from "../../firebase";
import { collection, onSnapshot, doc } from "firebase/firestore";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  const [rooms, setRooms] = useState([]);
  const RoomCollectionRef = collection(db, "rooms");
  useEffect(() => {
    const unsubscribe = onSnapshot(RoomCollectionRef, (snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      )
    );
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__header">
          <Avatar src="/static/images/avatar/1.jpg" />
          <div className="sidebar__headerRight">
            <IconButton>
              <DonutLargeIcon />
            </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="sidebar__search">
          <div className="sidebar__searchContainer">
            <SearchOutlinedIcon />
            <input type="text" placeholder="Search or start new chat" />
          </div>
        </div>
        <div className="sidebar__chat">
          <SidebarChat addNewChat />
          {rooms.map((room) => (
            <SidebarChat key={room.id} id={room.id} name={room.data.name} />
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Sidebar;
