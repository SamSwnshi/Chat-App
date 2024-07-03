// eslint-disable-next-line no-unused-vars
import React from "react";
import SideConversation from "./SideConversation";
import { getRandomEmojis } from "../../utlis/emojis";
import useGetConversations from "../../hooks/useGetConversations";
const Conversation = () => {
  const { loading, conversations } = useGetConversations();
  console.log(conversations);

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <SideConversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmojis()}
          lastIdx={idx === conversation.length - 1}
        />
      ))}

      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
};

export default Conversation;
