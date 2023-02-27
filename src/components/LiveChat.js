import ChatMessage from "./ChatMessage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div className="w-[450px] h-[700px] ml-2 p-3 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
          {chatMessages &&
            chatMessages.map((chat, idx) => (
              <ChatMessage name={chat.name} message={chat.message} key={idx} />
            ))}
        </div>
        <form
          className="w-[60%] my-2 mx-auto  p-2  flex gap-2 justify-center  rounded-lg"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: "Vinyas S",
                message: liveMessage,
              })
            );
            setLiveMessage("");
          }}
        >
          <input
            type="text"
            className="p-1 rounded-sm outline outline-2 outline-gray-600 w-[460px]"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <button className="border border-black px-3 py-2 rounded-lg text-white font-normal bg-gray-500">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;