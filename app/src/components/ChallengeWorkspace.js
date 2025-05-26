import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faPause, faStop, faPaperPlane, faCode, faTerminal, faSave } from '@fortawesome/free-solid-svg-icons';

function ChallengeWorkspace({ timer, onPause, onEnd }) {
  const [aiMessage, setAiMessage] = useState('');
  const [code, setCode] = useState('// Start coding here...');

  const handleSendMessage = () => {
    // Handle sending message to AI
    setAiMessage('');
  };

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Challenge Workspace</h2>
          <p className="text-gray-300">Your current challenge title</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative w-12 h-12">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                className="text-gray-700"
                d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                strokeWidth="3"
                strokeDasharray="100, 100"
              />
              <path
                className="text-green-500 progress-ring__circle"
                strokeLinecap="round"
                d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                strokeWidth="3"
                strokeDasharray="0, 100"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-bold text-sm">{timer}</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={onPause}
              className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faPause} />
            </button>
            <button
              onClick={onEnd}
              className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faStop} />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Assistant */}
        <div className="bg-gray-900 bg-opacity-60 rounded-lg p-4">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center mr-3">
              <FontAwesomeIcon icon={faRobot} />
            </div>
            <h3 className="font-medium text-lg">AI Assistant</h3>
          </div>
          
          <div className="h-96 overflow-y-auto mb-4 space-y-3">
            <div className="bg-gray-800 p-3 rounded-lg">
              <p>Welcome to your AI-assisted coding challenge! I'm here to help you complete your task.</p>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <input
              type="text"
              value={aiMessage}
              onChange={(e) => setAiMessage(e.target.value)}
              placeholder="Ask the AI for help..."
              className="flex-1 bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              onClick={handleSendMessage}
              className="w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>

        {/* Code Editor */}
        <div className="bg-gray-900 bg-opacity-60 rounded-lg p-4 col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-lg flex items-center">
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              Code Editor
            </h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm flex items-center space-x-1">
                <FontAwesomeIcon icon={faTerminal} />
                <span>Run Code</span>
              </button>
              <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm flex items-center space-x-1">
                <FontAwesomeIcon icon={faSave} />
                <span>Save</span>
              </button>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="flex bg-gray-900 px-4 py-2 border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-sm text-gray-400">index.js</div>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-96 bg-gray-800 p-4 font-mono text-sm focus:outline-none resize-none"
              spellCheck="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChallengeWorkspace;