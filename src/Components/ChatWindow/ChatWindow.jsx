import { useContext } from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ChatContext } from '../../ChatContext/ChatContext';

const ChatWindow = ({ onBack }) => {
  const { selectedChat, messages } = useContext(ChatContext);

  if (!selectedChat) {
    return <div className="flex-1 p-4"></div>;
  }

  return (
    <div className="flex-1 p-4 overflow-y-auto">
      <div className="flex items-center mb-4">
        {onBack && (
          <IconButton onClick={onBack} className="mr-2">
            <ArrowBackIcon />
          </IconButton>
        )}
        <h2 className="text-xl font-bold">
          Chat with {selectedChat.creator.name || selectedChat.creator.email}
        </h2>
      </div>
      <div className="space-y-4">
        {messages.map(message => (
          <div key={message.id} className={`p-4 rounded-lg ${message.sender_id === selectedChat.created_by ? 'bg-blue-100 text-right' : 'bg-gray-100'}`}>
            <div className="font-bold">{message.sender.name}</div>
            <div className="mt-2">{message.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatWindow;




