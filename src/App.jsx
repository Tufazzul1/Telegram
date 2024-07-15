import { useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import { ChatProvider } from './ChatContext/ChatContext';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import ChatWindow from './Components/ChatWindow/ChatWindow';

const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [showSidebar, setShowSidebar] = useState(true);

  const handleChatSelect = () => {
    if (isMobile) {
      setShowSidebar(false);
    }
  };

  const handleBackToSidebar = () => {
    setShowSidebar(true);
  };

  return (
    <ChatProvider>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-1">
          {isMobile ? (
            showSidebar ? (
              <Sidebar onChatSelect={handleChatSelect} />
            ) : (
              <ChatWindow onBack={handleBackToSidebar} />
            )
          ) : (
            <>
              <Sidebar />
              <ChatWindow />
            </>
          )}
        </div>
      </div>
    </ChatProvider>
  );
};

export default App;


