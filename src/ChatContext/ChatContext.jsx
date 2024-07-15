import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch chat list
    axios.get('https://devapi.beyondchats.com/api/get_all_chats?page=1')
      .then(response => {
        setChats(response.data.data.data);
      })
      .catch(error => {
        console.error("Error fetching chats:", error);
      });
  }, []);

  const fetchMessages = (chatId) => {
    axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`)
      .then(response => {
        setMessages(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching messages:", error);
      });
  };

  const selectChat = (chat) => {
    setSelectedChat(chat);
    fetchMessages(chat.id);
  };

  return (
    <ChatContext.Provider value={{ chats, selectedChat, selectChat, messages }}>
      {children}
    </ChatContext.Provider>
  );
};



