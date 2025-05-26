import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faLightbulb, faSyncAlt, faMagic, faRocket } from '@fortawesome/free-solid-svg-icons';

function ChallengeGeneration({ difficulty, onStartChallenge }) {
  const [nickname, setNickname] = useState('');
  const [department, setDepartment] = useState('');
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [challengeGenerated, setChallengeGenerated] = useState(false);

  const interests = ['Web Dev', 'AI/ML', 'Mobile', 'Games', 'Data'];

  const toggleInterest = (interest) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleGenerateChallenge = () => {
    setChallengeGenerated(true);
  };

  return (
    <section className="mb-12 bg-gray-800 bg-opacity-50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Challenge Generator</h2>
        <div className="flex items-center space-x-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficulty === 'easy' ? 'bg-emerald-600' : 'bg-rose-600'}`}>
            {difficulty === 'easy' ? 'Easy Mode' : 'Hard Mode'}
          </span>
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-600">
            {difficulty === 'easy' ? '5:00' : '10:00'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Info */}
        <div className="bg-gray-900 bg-opacity-60 rounded-lg p-4">
          <h3 className="font-medium mb-3 text-lg flex items-center">
            <FontAwesomeIcon icon={faUserCircle} className="mr-2 text-blue-400" />
            About You
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Nickname</label>
              <input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="Enter your nickname"
                className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Department</label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select your department</option>
                <option>Computer Science</option>
                <option>Engineering</option>
                <option>Design</option>
                <option>Business</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Interests</label>
              <div className="flex flex-wrap gap-2">
                {interests.map(interest => (
                  <span
                    key={interest}
                    onClick={() => toggleInterest(interest)}
                    className={`px-2 py-1 rounded-full text-xs cursor-pointer ${selectedInterests.includes(interest) ? 'bg-blue-600' : 'bg-blue-900'} hover:bg-blue-700`}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Challenge Details */}
        <div className="bg-gray-900 bg-opacity-60 rounded-lg p-4 col-span-2">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-lg flex items-center">
              <FontAwesomeIcon icon={faLightbulb} className="mr-2 text-yellow-400" />
              Your Challenge
            </h3>
            {challengeGenerated && (
              <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm flex items-center space-x-1">
                <FontAwesomeIcon icon={faSyncAlt} />
                <span>Regenerate</span>
              </button>
            )}
          </div>

          <div className="bg-gray-800 p-4 rounded-lg mb-4 min-h-32">
            {challengeGenerated ? (
              <p>Your personalized challenge description will appear here...</p>
            ) : (
              <p className="text-gray-300">Click "Generate Challenge" to get your personalized challenge based on your information.</p>
            )}
          </div>

          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <button
                onClick={handleGenerateChallenge}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center space-x-2"
              >
                <FontAwesomeIcon icon={faMagic} />
                <span>Generate Challenge</span>
              </button>
            </div>
            {challengeGenerated && (
              <button
                onClick={onStartChallenge}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg flex items-center space-x-2"
              >
                <FontAwesomeIcon icon={faRocket} />
                <span>Start Challenge</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChallengeGeneration;