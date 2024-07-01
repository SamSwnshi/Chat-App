// eslint-disable-next-line no-unused-vars
import React from "react";
import SideConversation from "./SideConversation";

const Conversation = () => {
  return (
    <div className="py-2 flex flex-col overflow-auto">
      <SideConversation />
      <SideConversation />
      <SideConversation />
      <SideConversation />

      <SideConversation />
    </div>
  );
};

export default Conversation;
