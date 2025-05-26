import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faTrophy, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import ChallengeSelection from './components/ChallengeSelection';
import ChallengeGeneration from './components/ChallengeGeneration';
import ChallengeWorkspace from './components/ChallengeWorkspace';
import ChallengeCompletion from './components/ChallengeCompletion';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('challengeSelection');
  const [difficulty, setDifficulty] = useState('');
  const [timer, setTimer] = useState('5:00');
  const [isPaused, setIsPaused] = useState(false);
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [stats, setStats] = useState({
    timeTaken: '0:00',
    linesOfCode: 0,
    difficulty: '',
    prize: 'Small Gift'
  });

  const handleSelectDifficulty = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
    setTimer(selectedDifficulty === 'easy' ? '5:00' : '10:00');
    setActiveSection('challengeGeneration');
  };

  const handleStartChallenge = () => {
    setActiveSection('challengeWorkspace');
  };

  const handlePauseTimer = () => {
    setIsPaused(!isPaused);
  };

  const handleEndChallenge = () => {
    setStats({
      timeTaken: timer,
      linesOfCode: 87, // Example value
      difficulty: difficulty,
      prize: difficulty === 'easy' ? 'Small Gift' : 'Big Prize'
    });
    setActiveSection('challengeCompletion');
  };

  const handleViewLeaderboard = () => {
    // Implement leaderboard view
  };

  const handleNewChallenge = () => {
    setActiveSection('challengeSelection');
    setDifficulty('');
    setTimer('5:00');
    setIsPaused(false);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 to-purple-900 min-h-screen text-white">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-30 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faRobot} className="text-3xl text-purple-400" />
            <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              AI-Dev Dash Challenge
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsLeaderboardOpen(true)}
              className="px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg flex items-center space-x-2 transition"
            >
              <FontAwesomeIcon icon={faTrophy} />
              <span className="hidden sm:inline">Leaderboard</span>
            </button>
            <button
              onClick={() => setIsInstructionsOpen(true)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg flex items-center space-x-2 transition"
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              <span className="hidden sm:inline">Instructions</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeSection === 'challengeSelection' && (
          <ChallengeSelection onSelectDifficulty={handleSelectDifficulty} />
        )}
        {activeSection === 'challengeGeneration' && (
          <ChallengeGeneration
            difficulty={difficulty}
            onStartChallenge={handleStartChallenge}
          />
        )}
        {activeSection === 'challengeWorkspace' && (
          <ChallengeWorkspace
            timer={timer}
            onPause={handlePauseTimer}
            onEnd={handleEndChallenge}
          />
        )}
        {activeSection === 'challengeCompletion' && (
          <ChallengeCompletion
            stats={stats}
            onViewLeaderboard={handleViewLeaderboard}
            onNewChallenge={handleNewChallenge}
          />
        )}
      </main>

      {/* Modals */}
      <Modal
        isOpen={isInstructionsOpen}
        onClose={() => setIsInstructionsOpen(false)}
        title="Challenge Instructions"
      >
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-2 text-purple-400">About the Challenge</h4>
            <p className="text-gray-300">
              The AI-Dev Dash Challenge is a timed coding competition where participants use AI-assisted tools to complete programming tasks within a limited timeframe.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-2 text-purple-400">How It Works</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>Choose between Easy (5 min) or Hard (10 min) difficulty</li>
              <li>Provide some information about yourself to generate a personalized challenge</li>
              <li>Use the AI assistant to help you complete the challenge</li>
              <li>Write your code in the provided editor</li>
              <li>Submit your solution before the timer runs out</li>
            </ol>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isLeaderboardOpen}
        onClose={() => setIsLeaderboardOpen(false)}
        title="Leaderboard"
      >
        <div className="space-y-4">
          <div className="bg-gray-800 rounded-lg p-4">
            <h4 className="text-lg font-medium mb-4">Top Performers</h4>
            <div className="space-y-2">
              {/* Example leaderboard entries */}
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-yellow-500 font-bold mr-3">1</span>
                  <span>John Doe</span>
                </div>
                <span className="text-gray-400">4:32</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-gray-400 font-bold mr-3">2</span>
                  <span>Jane Smith</span>
                </div>
                <span className="text-gray-400">4:45</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-amber-700 font-bold mr-3">3</span>
                  <span>Bob Johnson</span>
                </div>
                <span className="text-gray-400">4:58</span>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
