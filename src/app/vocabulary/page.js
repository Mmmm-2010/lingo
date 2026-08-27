"use client";

import { useState } from "react";
import Link from "next/link";

const words = [
  {
    word: "Inevitable",
    pronunciation: "/ɪnˈevɪtəbl/",
    meaning: "Muqarrar, oldini olib bo‘lmaydigan",
    example: "Change is inevitable.",
    level: "B2",
  },
  {
    word: "Efficient",
    pronunciation: "/ɪˈfɪʃənt/",
    meaning: "Samarali, unumli",
    example: "This method is very efficient.",
    level: "B1",
  },
  {
    word: "Significant",
    pronunciation: "/sɪɡˈnɪfɪkənt/",
    meaning: "Muhim, sezilarli",
    example: "There has been a significant change.",
    level: "B2",
  },
  {
    word: "Acquire",
    pronunciation: "/əˈkwaɪər/",
    meaning: "O‘zlashtirmoq, egallamoq",
    example: "You can acquire new skills through practice.",
    level: "B2",
  },
  {
    word: "Enhance",
    pronunciation: "/ɪnˈhɑːns/",
    meaning: "Yaxshilamoq, kuchaytirmoq",
    example: "Reading can enhance your vocabulary.",
    level: "B2",
  },
];

export default function Vocabulary() {
  const [currentWord, setCurrentWord] = useState(0);
  const [saved, setSaved] = useState([]);

  const word = words[currentWord];

  function saveWord() {
    if (!saved.includes(word.word)) {
      setSaved([...saved, word.word]);
    }
  }

  function nextWord() {
    setCurrentWord((currentWord + 1) % words.length);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="flex items-center justify-between">
          <Link
            href="/dashboard"
            className="text-slate-400 transition hover:text-white"
          >
            ← Dashboard
          </Link>

          <div className="rounded-full bg-slate-900 px-4 py-2 text-sm">
            📚 {saved.length} saved
          </div>
        </div>

        {/* Title */}
        <div className="mt-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Vocabulary
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Build your word power.
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Learn useful words and save the ones you want to practice later.
          </p>
        </div>

        {/* Word Card */}
        <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

          {/* Level + Progress */}
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
              {word.level}
            </span>

            <span className="text-sm text-slate-500">
              {currentWord + 1} / {words.length}
            </span>
          </div>

          {/* Word */}
          <div className="py-12 text-center">
            <h2 className="text-5xl font-bold">
              {word.word}
            </h2>

            <p className="mt-4 text-slate-500">
              {word.pronunciation}
            </p>

            <p className="mt-8 text-xl text-blue-400">
              {word.meaning}
            </p>
          </div>

          {/* Example */}
          <div className="rounded-2xl bg-slate-800 p-5">
            <p className="text-sm text-slate-500">
              Example
            </p>

            <p className="mt-2 text-lg">
              “{word.example}”
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <button
              type="button"
              onClick={saveWord}
              className={`rounded-full py-3.5 font-semibold transition ${
                saved.includes(word.word)
                  ? "bg-green-500/10 text-green-400"
                  : "bg-blue-500 hover:bg-blue-400"
              }`}
            >
              {saved.includes(word.word)
                ? "✓ Saved"
                : "+ Save Word"}
            </button>

            <button
              type="button"onClick={nextWord}
              className="rounded-full border border-slate-700 py-3.5 font-semibold transition hover:bg-slate-800"
            >
              Next Word →
            </button>
          </div>
        </div>

        {/* Saved Words */}
        {saved.length > 0 && (
          <div className="mx-auto mt-10 max-w-2xl">
            <h2 className="text-xl font-bold">
              Your saved words
            </h2>

            <div className="mt-4 flex flex-wrap gap-3">
              {saved.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}