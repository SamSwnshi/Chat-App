// eslint-disable-next-line no-unused-vars
import React from "react";
import {useAuthContext} from "../../context/AuthContext"
import useConversation from "../../store/useConversation";
import { extractTime } from "../../utlis/extractTime";
const MessageInside = ({message}) => {
  const { auth } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === auth._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? auth.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src={profilePic}
            alt="user avatar"
          />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>{message.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-white">{formattedTime}</div>
    </div>
  );
};

export default MessageInside;
