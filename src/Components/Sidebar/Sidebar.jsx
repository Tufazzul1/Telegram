import { useContext } from 'react';
import { ChatContext } from '../../ChatContext/ChatContext';

const Sidebar = ({ onChatSelect }) => {
  const { chats, selectChat } = useContext(ChatContext);

  const handleChatClick = (chat) => {
    selectChat(chat);
    if (onChatSelect) {
      onChatSelect();
    }
  };

  return (
    <div className="w-full sm:w-1/4 h-full border-r border-gray-300 p-4 overflow-y-auto">
      {chats.map(chat => (
        <div
          key={chat.id}
          className="p-4 mb-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
          onClick={() => handleChatClick(chat)}
        >
          <div className="font-bold">{chat.creator.name || chat.creator.email}</div>
          <div className="text-sm text-gray-500">{chat.msg_count} messages</div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;





