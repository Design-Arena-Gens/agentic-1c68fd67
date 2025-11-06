"use client";

import TTSButton from './TTSButton';

export type Phrase = {
  id: string;
  sq: string; // Albanian text
  en: string; // English translation
  cat: string; // category
};

export default function PhraseCard({ phrase }: { phrase: Phrase }) {
  return (
    <div className="card p-4 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-lg font-semibold">{phrase.sq}</p>
          <p className="text-gray-500 text-sm">{phrase.en}</p>
        </div>
        <TTSButton text={phrase.sq} />
      </div>
      <div className="text-xs text-gray-400">{phrase.cat}</div>
    </div>
  );
}
