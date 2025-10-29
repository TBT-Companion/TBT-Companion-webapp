import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const TextMessage = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend?.(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="relative overflow-auto items-center min-w-fill h-[55px] bg-white gap-3 px-[22px] py-3 rounded-[80px] border border-[#C5C5C7]">
      <div className="flex justify-end items-center">
        <input
          type="text"
          placeholder="Enter Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 pr-14 bg-transparent outline-none border-none text-[18px] font-normal leading-normal tracking-[-0.72px] text-black placeholder:text-[#C5C5C7]"
          style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif' }}
        />

        <button
          onClick={handleSend}
          className="flex justify-end items-center h-12 absolute border-0 bg-transparent cursor-pointer"
        >
          <div className="flex flex-col justify-center items-center w-10 rounded-full bg-[#BA0C2F] hover:bg-[#A00B29] transition-colors">
            <div className="flex justify-center items-center h-10 self-stretch">
              <ArrowRight className="send-icon" size={24} color="white" strokeWidth={2} />
            </div>
          </div>
        </button>
      </div>
      
    </div>
  );
};

export default TextMessage;
