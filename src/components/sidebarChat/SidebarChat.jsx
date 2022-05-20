import React, { useState, useEffect } from "react";
import "./sidebarChat.css";
import { Avatar } from "@material-ui/core";
import db from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const collectionRef = collection(db, "rooms");
const createChat = async () => {
  const roomName = prompt("Please enter name for chat");

  if (roomName) {
    // do some clever database stuff .....
    await addDoc(collectionRef, { name: roomName });
  }
};
const SidebarChat = ({ addNewChat, name, id }) => {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/micah/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>last message ...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="sidebarChat">
      <div onClick={createChat} className="sidebarChat__info">
        <h2>Add new chat</h2>
      </div>
    </div>
  );
};
export default SidebarChat;
