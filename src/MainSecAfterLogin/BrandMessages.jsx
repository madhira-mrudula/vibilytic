import React, { useEffect, useState } from 'react';
import Aos from 'aos';
const mockMessages = [
  {
    id: 1,
    name: 'Sarah Johnson',
    profile: 'https://randomuser.me/api/portraits/women/44.jpg',
    lastMessage: 'Looking forward to the campaign!',
    messages: [
      { fromBrand: true, text: 'Hi Sarah! Are you available for the summer shoot?' },
      { fromBrand: false, text: 'Yes, I’d love to collaborate!' },
      { fromBrand: true, text: 'Great! I’ll send the brief soon.' },
    ],
  },
  {
    id: 2,
    name: 'Daniel Lee',
    profile: 'https://randomuser.me/api/portraits/men/85.jpg',
    lastMessage: 'Let me know your thoughts!',
    messages: [
      { fromBrand: false, text: 'Hey! I sent over some content drafts.' },
      { fromBrand: true, text: 'Looks amazing. Let’s schedule the post.' },
    ],
  },
];


const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');
useEffect(()=>{
Aos.init(
  {
        Duration:800,
        easing:"ease-in-out",
        once:false
   }
)
},[])
  const handleSend = () => {
    if (newMessage.trim() && selectedChat) {
      const updated = mockMessages.map((msg) => {
        if (msg.id === selectedChat.id) {
          return {
            ...msg,
            messages: [...msg.messages, { fromBrand: true, text: newMessage }],
            lastMessage: newMessage,
          };
        }
        return msg;
      });
      selectedChat.messages.push({ fromBrand: true, text: newMessage });
      setNewMessage('');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Inbox Panel */}
      <div className="bg-white p-4 rounded-xl shadow-md md:col-span-1 h-[500px] overflow-y-auto" data-aos="fade-right">
        <h2 className="text-xl font-bold mb-4">💬 Messages</h2>
        <p className="text-gray-600 mb-4 text-sm">All influencer conversations in one place.</p>
        {mockMessages.map((msg) => (
          <div
            key={msg.id}
            onClick={() => setSelectedChat(msg)}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${
              selectedChat?.id === msg.id
                ? 'bg-indigo-100 text-indigo-700'
                : 'hover:bg-gray-100 text-gray-800'
            }`}
          >
            <img
              src={msg.profile}
              alt={msg.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h4 className="font-medium">{msg.name}</h4>
              <p className="text-sm truncate">{msg.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Area */}
      <div className="bg-white p-4 rounded-xl shadow-md md:col-span-2 h-[500px] flex flex-col"data-aos="fade-left">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="flex items-center gap-3 border-b pb-3 mb-3">
              <img
                src={selectedChat.profile}
                alt={selectedChat.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <h3 className="font-semibold text-lg">{selectedChat.name}</h3>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto pr-2 space-y-2">
              {selectedChat.messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[75%] px-4 py-2 rounded-lg text-sm ${
                    msg.fromBrand
                      ? 'ml-auto bg-indigo-100 text-indigo-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="pt-3 border-t mt-3 flex gap-2">
              <input
                type="text"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:outline-none"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button
                onClick={handleSend}
                className="bg-indigo-600 text-white px-4 rounded-md hover:bg-indigo-700"
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center h-full text-gray-400">
            <p>Select a conversation to start messaging.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;

