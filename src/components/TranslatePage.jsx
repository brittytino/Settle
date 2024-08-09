import React, { useState } from 'react';

const LanguageTranslationPage = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [inputLanguage, setInputLanguage] = useState('auto');
  const [outputLanguage, setOutputLanguage] = useState('en');
  const [isTranslating, setIsTranslating] = useState(false);

  const languages = {
    auto: 'Detect Language',
    en: 'English',
    ta: 'Tamil',
    hi: 'Hindi',
    fr: 'French',
    si: 'Sinhala'
  };

  const handleTranslate = async () => {
    setIsTranslating(true);
    try {
      const response = await fetch(`https://api.mymemory.translated.net/get?q=${inputText}&langpair=${inputLanguage}|${outputLanguage}`);
      const data = await response.json();
      if (data.responseData.translatedText) {
        setOutputText(data.responseData.translatedText);
      } else {
        setOutputText('Translation failed.');
      }
    } catch (error) {
      setOutputText('Error during translation.');
    }
    setIsTranslating(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg p-8 flex">
        
        {/* Left side - Translation Form */}
        <div className="w-1/2 pr-8">
          <h1 className="text-3xl font-semibold text-center mb-6">Language Translation Services</h1>
          <p className="text-center text-gray-700 mb-8">
            Seamless Communication Across Borders. Our services help you overcome language barriers with ease.
          </p>

          <div className="grid grid-cols-1 gap-6 mb-8">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">Input Language</label>
              <select
                value={inputLanguage}
                onChange={(e) => setInputLanguage(e.target.value)}
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                {Object.entries(languages).map(([code, name]) => (
                  <option key={code} value={code}>
                    {name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">Output Language</label>
              <select
                value={outputLanguage}
                onChange={(e) => setOutputLanguage(e.target.value)}
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                {Object.entries(languages).map(([code, name]) => (
                  <option key={code} value={code}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-600">Input Text</label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full h-32 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>
          </div>

          <button
            onClick={handleTranslate}
            className="w-full bg-green-600 text-white py-2 rounded-md shadow-md hover:bg-green-700 transition duration-150"
            disabled={isTranslating}
          >
            {isTranslating ? 'Translating...' : 'Translate'}
          </button>

          {outputText && (
            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-2">Translated Text:</h2>
              <p className="bg-gray-100 p-4 rounded-md">{outputText}</p>
            </div>
          )}
        </div>

        {/* Right side - Additional Information */}
        <div className="w-1/2 pl-8 border-l border-gray-300">
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-center mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Real-Time Translation: Instantly translate text and speech to communicate effectively in your new community.</li>
              <li>Multilingual Support: Access support in multiple languages to ensure you receive the help you need, no matter where you're from.</li>
              <li>Integrated Learning Tools: Improve your language skills with interactive lessons and practice exercises.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-xl font-semibold text-center mb-4">How It Works</h2>
            <ol className="list-decimal list-inside text-gray-700">
              <li>Select Your Language: Choose from a wide range of languages supported by our platform.</li>
              <li>Translate Text or Speech: Use our intuitive interface to translate written text or spoken words instantly.</li>
              <li>Practice and Learn: Engage with language learning tools to build your proficiency over time.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-center mb-4">Why It Matters</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Enhanced Communication: Overcome language barriers and build connections with your new community.</li>
              <li>Access Services Efficiently: Navigate essential services, legal resources, and job opportunities with ease.</li>
              <li>Build Confidence: Gain the skills and support needed to thrive in your new environment.</li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default LanguageTranslationPage;
