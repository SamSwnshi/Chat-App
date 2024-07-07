import  { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useCoversation from "../store/useConversation";
import notificationSound  from "../assets/sound/knock_knock.mp3"
const useListenMessage = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useCoversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      const sound = new Audio(notificationSound)
      sound.play()
      setMessages([...messages, newMessage]);
    });
    return () => socket?.off("newMessage");
  }, [socket, setMessages,messages]);
};

export default useListenMessage;
