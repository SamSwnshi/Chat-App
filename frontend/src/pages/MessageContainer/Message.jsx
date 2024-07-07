// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import MessageInside from "./MessageInside";
import useMessage from "../../hooks/useMessage";
import MessageSkeleton from "../Skeletons/MessageSkeletons";
import useListenMessage from "../../hooks/useListenMessage";

const Message = () => {
  const { messages, loading } = useMessage();
  useListenMessage();
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <MessageInside message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center text-white">Send Message to start a conversation</p>
      )}
    </div>
  );
};

export default Message;
