import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faGift } from '@fortawesome/free-solid-svg-icons';

function ChallengeCompletion({ stats, onViewLeaderboard, onNewChallenge }) {
  return (
    <section className="mb-12 bg-gray-800 bg-opacity-50 rounded-xl p-8 text-center backdrop-blur-sm border border-gray-700">
      <div className="max-w-2xl mx-auto">
        <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <FontAwesomeIcon icon={faCheck} className="text-4xl" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Challenge Completed!</h2>
        <p className="text-xl text-gray-300 mb-8">Congratulations on finishing your AI-Dev Dash Challenge!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Your Stats</h3>
            <ul className="space-y-2 text-left">
              <li className="flex justify-between">
                <span className="text-gray-400">Time Taken:</span>
                <span className="font-medium">{stats.timeTaken}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Lines of Code:</span>
                <span className="font-medium">{stats.linesOfCode}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Difficulty:</span>
                <span className="font-medium">{stats.difficulty}</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Your Prize</h3>
            <div className="flex items-center justify-center h-full">
              <div className="floating-notification bg-gradient-to-br from-yellow-500 to-amber-600 p-4 rounded-lg shadow-lg w-full">
                <FontAwesomeIcon icon={faGift} className="text-2xl mb-2" />
                <p className="font-medium">{stats.prize}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center space-x-4">
          <button
            onClick={onViewLeaderboard}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
          >
            View Leaderboard
          </button>
          <button
            onClick={onNewChallenge}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition"
          >
            New Challenge
          </button>
        </div>
      </div>
    </section>
  );
}

export default ChallengeCompletion;