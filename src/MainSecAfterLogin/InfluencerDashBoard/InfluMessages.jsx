import React, { useState } from 'react';
import { Plus, Bell, Users, Search, Send, Camera, FileText, MessageCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const MessagesPage = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messageText, setMessageText] = useState('');

  const initialConversations = [
    {
      id: 1,
      name: "Brand Manager - Nike",
      avatar: "N",
      lastMessage: "Great! Let's finalize the contract details...",
      time: "10:30 AM",
      unread: 2,
      dealStatus: "pending",
      messages: [
        { id: 1, sender: "Nike", message: "Hi! We'd love to collaborate with you on our new campaign. Are you interested?", time: "9:15 AM", type: "text" },
        { id: 2, sender: "You", message: "Hi! Yes, I'm very interested. Could you share more details about the campaign?", time: "9:20 AM", type: "text" },
        { id: 3, sender: "Nike", message: "Sure! It's for our new Air Max collection. We're looking for Instagram posts and stories.", time: "9:25 AM", type: "text" },
        { id: 4, sender: "Nike", message: "The compensation would be $3,000 plus free products. What do you think?", time: "9:30 AM", type: "text" },
        { id: 5, sender: "You", message: "That sounds great! I'd love to move forward with this.", time: "10:15 AM", type: "text" },
        { id: 6, sender: "Nike", message: "Great! Let's finalize the contract details...", time: "10:30 AM", type: "text" }
      ]
    },
    {
      id: 2,
      name: "Fashion Nova Team",
      avatar: "F",
      lastMessage: "Payment has been processed successfully!",
      time: "Yesterday",
      unread: 0,
      dealStatus: "approved",
      messages: [
        { id: 1, sender: "Fashion Nova", message: "Hi Sarah! We loved your recent posts. Would you like to collaborate?", time: "2 days ago", type: "text" },
        { id: 2, sender: "You", message: "Yes! I'd be interested. What did you have in mind?", time: "2 days ago", type: "text" },
        { id: 3, sender: "Fashion Nova", message: "We're launching a new summer collection. Here's the brief:", time: "2 days ago", type: "text" },
        { id: 4, sender: "Fashion Nova", message: "campaign-brief.pdf", time: "2 days ago", type: "document" },
        { id: 5, sender: "You", message: "Perfect! I've completed the posts. Here are the final images:", time: "Yesterday", type: "text" },
        { id: 6, sender: "You", message: "summer-collection-post1.jpg", time: "Yesterday", type: "image" },
        { id: 7, sender: "Fashion Nova", message: "Amazing work! Payment has been processed successfully!", time: "Yesterday", type: "text" }
      ]
    }
  ];

  const [conversations, setConversations] = useState(initialConversations);

  const getDealStatusColor = (status) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'declined': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleSendMessage = () => {
    if (messageText.trim() && selectedConversation) {
      const newMessage = {
        id: selectedConversation.messages.length + 1,
        sender: "You",
        message: messageText,
        time: "Just now",
        type: "text"
      };

      const updatedConversations = conversations.map(conv =>
        conv.id === selectedConversation.id
          ? {
              ...conv,
              lastMessage: messageText,
              time: "Just now",
              messages: [...conv.messages, newMessage]
            }
          : conv
      );

      setConversations(updatedConversations);
      setSelectedConversation(updatedConversations.find(c => c.id === selectedConversation.id));
      setMessageText('');
      toast.success("Message sent successfully!");
    }
  };

  const handleApproveDeal = () => {
    if (selectedConversation) {
      const updatedConversations = conversations.map(conv =>
        conv.id === selectedConversation.id
          ? { ...conv, dealStatus: 'approved' }
          : conv
      );
      setConversations(updatedConversations);
      setSelectedConversation(updatedConversations.find(c => c.id === selectedConversation.id));
      toast.success(`Deal approved with ${selectedConversation.name}!`);
    }
  };

  const handleDeclineDeal = () => {
    if (selectedConversation) {
      const updatedConversations = conversations.map(conv =>
        conv.id === selectedConversation.id
          ? { ...conv, dealStatus: 'declined' }
          : conv
      );
      setConversations(updatedConversations);
      setSelectedConversation(updatedConversations.find(c => c.id === selectedConversation.id));
      toast.error(`Deal declined with ${selectedConversation.name}.`);
    }
  };

  const handleMarkAllRead = () => {
    const updatedConversations = conversations.map(conv => ({ ...conv, unread: 0 }));
    setConversations(updatedConversations);
    toast.success("All messages marked as read!");
  };

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg">
            <Plus className="w-4 h-4 mr-2" /> New Message
          </button>
          <button
            onClick={handleMarkAllRead}
            className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg"
          >
            <Bell className="w-4 h-4 mr-2" /> Mark All Read
          </button>
          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg">
            <Users className="w-4 h-4 mr-2" /> Brand Contacts
          </button>
          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg">
            <Search className="w-4 h-4 mr-2" /> Search Messages
          </button>
        </div>
      </div>

      {/* Chat Layout */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 h-[600px] flex">
        {/* Conversations List */}
        <div className="w-1/3 border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Messages</h3>
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversations.map(conversation => (
              <div
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation)}
                className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                  selectedConversation?.id === conversation.id ? 'bg-blue-50 border-blue-200' : ''
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-medium">
                    {conversation.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-gray-900 truncate">{conversation.name}</h4>
                      <div className="flex flex-col items-end space-y-1">
                        <span className="text-xs text-gray-500">{conversation.time}</span>
                        {conversation.unread > 0 && (
                          <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                            {conversation.unread}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 truncate mt-1">{conversation.lastMessage}</p>
                    <div className="mt-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${getDealStatusColor(conversation.dealStatus)}`}>
                        Deal {conversation.dealStatus}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col">
          {selectedConversation ? (
            <>
              {/* Header */}
              <div className="p-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-medium">
                    {selectedConversation.avatar}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{selectedConversation.name}</h4>
                    <span className={`px-2 py-1 text-xs rounded-full ${getDealStatusColor(selectedConversation.dealStatus)}`}>
                      Deal {selectedConversation.dealStatus}
                    </span>
                  </div>
                </div>
                {selectedConversation.dealStatus === 'pending' && (
                  <div className="flex space-x-2">
                    <button onClick={handleApproveDeal} className="bg-green-500 text-white px-3 py-1 rounded text-sm">
                      Approve Deal
                    </button>
                    <button onClick={handleDeclineDeal} className="bg-red-500 text-white px-3 py-1 rounded text-sm">
                      Decline Deal
                    </button>
                  </div>
                )}
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {selectedConversation.messages.map(message => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-900'
                      }`}
                    >
                      {message.type === 'document' && (
                        <div className="flex items-center space-x-2 mb-1">
                          <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">PDF</span>
                          </div>
                          <span className="text-sm font-medium">{message.message}</span>
                        </div>
                      )}
                      {message.type === 'image' && (
                        <div className="flex items-center space-x-2 mb-1">
                          <Camera className="w-4 h-4" />
                          <span className="text-sm font-medium">{message.message}</span>
                        </div>
                      )}
                      {message.type === 'text' && <p className="text-sm">{message.message}</p>}
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === 'You' ? 'text-blue-100' : 'text-gray-500'
                        }`}
                      >
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-end space-x-2">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      placeholder="Type your message..."
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-20 focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
                      <button className="p-1 text-gray-400 hover:text-gray-600" title="Attach Image">
                        <Camera className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-600" title="Attach Document">
                        <FileText className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={handleSendMessage}
                    disabled={!messageText.trim()}
                    className={`p-2 rounded-lg ${
                      messageText.trim() ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p className="text-lg font-medium">Select a conversation</p>
                <p className="text-sm">Choose a conversation from the list to start chatting</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
