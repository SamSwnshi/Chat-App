// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoIosSend } from "react-icons/io";
const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-hidden text-white"
          placeholder="Send a message"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3 text-xl"
        >
          <IoIosSend />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
