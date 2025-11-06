"use client";

import { useEffect, useMemo, useState } from 'react';

export type TTSButtonProps = {
  text: string;
  rate?: number; // 0.5 - 2
  pitch?: number; // 0 - 2
};

export default function TTSButton({ text, rate = 1, pitch = 1 }: TTSButtonProps) {
  const [supported, setSupported] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const has = typeof window.speechSynthesis !== 'undefined' && typeof window.SpeechSynthesisUtterance !== 'undefined';
    setSupported(has);
    if (!has) return;

    const updateVoices = () => setVoices(window.speechSynthesis.getVoices());
    updateVoices();
    window.speechSynthesis.addEventListener('voiceschanged', updateVoices);
    return () => window.speechSynthesis.removeEventListener('voiceschanged', updateVoices);
  }, []);

  const sqVoice = useMemo(() => {
    return voices.find(v => v.lang.toLowerCase().startsWith('sq')) || null;
  }, [voices]);

  const handleSpeak = () => {
    if (!supported) return;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.rate = rate;
      u.pitch = pitch;
      if (sqVoice) u.voice = sqVoice;
      u.lang = sqVoice?.lang || 'sq-AL';
      u.onstart = () => setSpeaking(true);
      u.onend = () => setSpeaking(false);
      u.onerror = () => setSpeaking(false);
      window.speechSynthesis.speak(u);
    } catch {
      setSpeaking(false);
    }
  };

  if (!supported) {
    return (
      <button className="btn btn-primary opacity-60 cursor-not-allowed" aria-disabled>
        ?? Nuk mb?shtetet
      </button>
    );
  }

  return (
    <button className="btn btn-primary" onClick={handleSpeak}>
      {speaking ? '?? Ndalo' : '?? D?gjo'}
    </button>
  );
}
