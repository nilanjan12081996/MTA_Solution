import React, { useRef, useEffect, useState, Suspense } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

import { Button, Modal } from "flowbite-react";
import { AiOutlineSearch, BiSolidSend } from "../../assets/icons";
import { support02 } from "../../assets/images/images";

const Chats = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const initialBotMessage = {
      sender: "bot",
      text: "Hello",
      timestamp: new Date(),
    };
    setMessages([initialBotMessage]);
  }, []);
  return (
    <div className="">
      <div className="chat_top_section">
        <div className="flex justify-center items-center mb-4">
          <div className="border border-[#583a87] rounded-xl overflow-hidden relative w-2/12">
            <img src={support02} alt="support02" className="w-full" />
            <div className="bg-[#472386] text-center w-full h-[60px] absolute left-0 bottom-0">
              <div className="flex justify-center items-center h-full">
                <p className="text-base text-white font-medium px-4 font-SatoshiBold">
                  John Davis
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-7/12 mx-auto">
          <p className="text-white text-[18px] leading-[32px] font-SatoshiMedium text-center">
            John is shy and tsundere. John can seem aloof or mysterious to
            people who don’t take the time for John to open up to them.
          </p>
        </div>
      </div>
      <div className="chat_section w-8/12 mx-auto pt-20">
        <div
          id="style-3"
          className="chat_section pb-16 chat_body_section mb-0 px-0 overflow-y-scroll"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat_block_${
                msg.sender === "user" ? "two" : "one"
              } lg:w-5/12 mb-2 ${msg.sender === "user" ? "ml-auto" : ""}`}
              // ref={index === messages.length - 1 ? singleMessageRef : null}
            >
              {msg.sender === "user" ? (
                <>
                  <div className="flex justify-end">
                    <p className="text-[#5774ff] text-[10px] inline-block px-2 py-1 rounded">
                      {msg.sender === "user" ? "You" : "Name"}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-[#5774ff] text-[10px] inline-block px-2 py-1 rounded">
                    {msg.sender === "user" ? "You" : "Name"}
                  </p>
                </>
              )}
              {msg.sender === "user" ? (
                <>
                  <div className="border border-[#df003b] rounded-md p-4 relative chat_block_two_bg">
                    <p className="text-[#D2D2D2] text-sm leading-[20px] pb-2">
                      {msg.text}
                    </p>
                    <p className="text-white text-[10px] absolute right-4 bottom-2">
                      {/* {msg.timestamp.toLocaleTimeString()} */}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-[#170a2c] rounded-md p-4 relative">
                    <p className="text-[#D2D2D2] text-sm leading-[20px] pb-2">
                      {msg.text}
                    </p>
                    <p className="text-[#747474] text-[10px] absolute right-4 bottom-2">
                      {msg.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                  {/* <div className="flex items-center gap-1 mt-1">
                    <button
                      type="button"
                      onClick={() => handleVoice(msg.text)}
                      className="text-[#fe0042] text-xl hover:text-[#be1250]"
                    >
                      <BiPlayCircle />
                    </button>
                    <BsSoundwave className="text-white" />
                  </div> */}
                </>
              )}
            </div>
          ))}
          {/* <div ref={singleMessageRef}></div> */}
        </div>
        <div className="chat_footer_section w-full">
          <div className="flex items-center justify-center gap-4 px-4 bg-[#281e38] border border-[#573e7e] py-2 mt-4 rounded-xl">
            <div className="w-full chat_send_field">
              <input
                type="text"
                placeholder="Type your message"
                // value={inputMessage}
                //  onChange={(e) => setInputMessage(e.target.value)}
                className="w-full bg-transparent text-white outline-none"
                // onKeyDown={(e) => {
                //   if (e.key === "Enter") {
                //     e.preventDefault(); // Prevents new line in the input
                //     handleSendMessage();
                //   }
                // }}
              />
            </div>
            <div className="w-[40px]">
              <button
                // onClick={handleSendMessage}
                className="send_btn w-[40px] h-[40px] flex justify-center items-center text-2xl text-white rounded-full"
              >
                <BiSolidSend />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
