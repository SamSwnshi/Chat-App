// eslint-disable-next-line no-unused-vars
import React from "react";
import useConversation from "../../store/useConversation";

const SideConversation = ({ conversation, emoji, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-orange-700 rounded p-2 py-1 cursor-pointer
        ${isSelected ? "bg-orange-900" : ""}
      `}
      onClick={()=>setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-2 justify-between">
            <p className="font-medium text-gray-200">{conversation.fullname}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && (
        <div className="divider divider-warning my-1 py-1 px-2 h-1 " />
      )}
    </>
  );
};
// 😶‍🌫️😎🥷🧑‍🎓
export default SideConversation;
