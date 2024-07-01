// eslint-disable-next-line no-unused-vars
import React from "react";

const SideConversation = () => {
  return (
    <>
    
    <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img
            src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg"
            alt="user avatar"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex gap-2 justify-between">
          <p className="font-medium text-gray-200">Sameer</p>
          <span className="text-xl">🎶</span>
        </div>
      </div>
    </div>

    <div className="divider divider-warning my-1 py-1 px-2 h-1 "></div>
    </>
  );
};
// 😶‍🌫️😎🥷🧑‍🎓
export default SideConversation;
