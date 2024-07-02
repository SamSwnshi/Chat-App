// eslint-disable-next-line no-unused-vars
import React from "react";

const MessageInside = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg"
            alt="user avatar"
          />
        </div>
      </div>
      <div className="chat-bubble text-white">I hate you!</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-white">12:42</div>
    </div>
  );
};

export default MessageInside;
