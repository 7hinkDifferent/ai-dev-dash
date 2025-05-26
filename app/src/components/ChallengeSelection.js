import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faFire, faCheckCircle, faGift, faPlay } from '@fortawesome/free-solid-svg-icons';

function ChallengeSelection({ onSelectDifficulty }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Choose Your Challenge</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Easy Challenge */}
        <div className="challenge-card bg-gradient-to-br from-green-900 to-emerald-800 rounded-xl p-6 shadow-xl border border-emerald-400 border-opacity-30">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center mr-4">
              <FontAwesomeIcon icon={faSeedling} className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold">Easy Mode</h3>
          </div>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-300 mt-1 mr-2" />
              <span>5 minute time limit</span>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-300 mt-1 mr-2" />
              <span>Step-by-step guidance</span>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-300 mt-1 mr-2" />
              <span>Simple frontend only</span>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-300 mt-1 mr-2" />
              <span>Perfect for beginners</span>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faGift} className="text-emerald-300 mt-1 mr-2" />
              <span>Small prize upon completion</span>
            </li>
          </ul>
          <button 
            onClick={() => onSelectDifficulty('easy')}
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-medium transition flex items-center justify-center space-x-2"
          >
            <FontAwesomeIcon icon={faPlay} />
            <span>Start Easy Challenge</span>
          </button>
        </div>

        {/* Hard Challenge */}
        <div className="challenge-card bg-gradient-to-br from-red-900 to-rose-800 rounded-xl p-6 shadow-xl border border-rose-400 border-opacity-30">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center mr-4">
              <FontAwesomeIcon icon={faFire} className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold">Hard Mode</h3>
          </div>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-rose-300 mt-1 mr-2" />
              <span>10 minute time limit</span>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-rose-300 mt-1 mr-2" />
              <span>No step-by-step guidance</span>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-rose-300 mt-1 mr-2" />
              <span>May require backend/database</span>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-rose-300 mt-1 mr-2" />
              <span>For experienced developers</span>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon icon={faGift} className="text-rose-300 mt-1 mr-2" />
              <span>Big prize upon completion</span>
            </li>
          </ul>
          <button 
            onClick={() => onSelectDifficulty('hard')}
            className="w-full py-3 bg-rose-600 hover:bg-rose-700 rounded-lg font-medium transition flex items-center justify-center space-x-2"
          >
            <FontAwesomeIcon icon={faPlay} />
            <span>Start Hard Challenge</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ChallengeSelection;