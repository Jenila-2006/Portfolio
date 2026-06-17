import React, { useState, useEffect } from 'react';

interface TypingTextProps {
  phrases: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
}

export default function TypingText({
  phrases,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetween = 2000,
}: TypingTextProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const phrase = phrases[currentPhraseIndex];

    if (isDeleting) {
      // Deleting character
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, deleteSpeed);
    } else {
      // Typing character
      timer = setTimeout(() => {
        setCurrentText(phrase.slice(0, currentText.length + 1));
      }, typeSpeed);
    }

    // Handle end of typing or deleting
    if (!isDeleting && currentText === phrase) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetween);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typeSpeed, deleteSpeed, delayBetween]);

  return (
    <span className="inline-block min-h-[36px] font-mono font-medium text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-aqua-blue via-crystal-cyan to-[#ffffff] border-r-2 border-aqua-blue pr-1 animate-[pulse_1s_infinite]">
      {currentText}
    </span>
  );
}
