"use client";

import { useState } from "react";
import Link from "next/link";

const lessons = [
  {
    title: "At the Coffee Shop",
    level: "B1",
    question: "What does the customer order?",
    audioText:
      "Hi, I'd like a medium cappuccino, please. And could I also have a chocolate cookie?",
    options: [
      "A large tea and a sandwich",
      "A medium cappuccino and a cookie",
      "A small coffee and a cake",
      "A cappuccino and a sandwich",
    ],
    correct: 1,
  },
  {
    title: "At the Airport",
    level: "B1",
    question: "Where is the passenger going?",
    audioText:
      "Good morning. Here's my passport. I'm flying to London on the nine-thirty flight.",
    options: ["Paris", "New York", "London", "Dubai"],
    correct: 2,
  },
  {
    title: "Making Plans",
    level: "B2",
    question: "When will they meet?",
    audioText:
      "Are you free tomorrow afternoon? How about meeting at three o'clock?",
    options: [
      "Tomorrow at 1 PM",
      "Tomorrow at 3 PM",
      "Today at 3 PM",
      "Tomorrow at 5 PM",
    ],
    correct: 1,
  },
];

export default function Listening() {
  const [lessonIndex, setLessonIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const lesson = lessons[lessonIndex];

  function playAudio() {
    if (typeof window === "undefined") return;

    if (!("speechSynthesis" in window)) {
      alert("Your browser does not support text-to-speech.");
      return;
    }

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(lesson.audioText);

    speech.lang = "en-US";
    speech.rate = 0.9;
    speech.pitch = 1;
    speech.volume = 1;

    speech.onstart = () => {
      setIsPlaying(true);
    };

    speech.onend = () => {
      setIsPlaying(false);
    };

    speech.onerror = () => {
      setIsPlaying(false);
    };

    window.speechSynthesis.speak(speech);
  }

  function handleAnswer(index) {
    if (selected !== null) return;

    setSelected(index);

    if (index === lesson.correct) {
      setScore((prevScore) => prevScore + 1);
    }
  }

  function nextLesson() {
    if (typeof window !== "undefined") {
      window.speechSynthesis?.cancel();
    }

    setIsPlaying(false);

    if (lessonIndex === lessons.length - 1) {
      setFinished(true);
      return;
    }

    setLessonIndex((prevIndex) => prevIndex + 1);
    setSelected(null);
  }

  function restartLesson() {
    if (typeof window !== "undefined") {
      window.speechSynthesis?.cancel();
    }

    setLessonIndex(0);
    setSelected(null);
    setFinished(false);
    setScore(0);
    setIsPlaying(false);
  }

  if (finished) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
        <div className="w-full max-w-xl rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center shadow-2xl">
          <div className="text-6xl">🎧</div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Listening complete
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Great job!
          </h1>

          <p className="mt-4 text-slate-400">
            You completed today&apos;s listening practice.
          </p>

          <div className="mx-auto mt-8 flex h-32 w-32 items-center justify-center rounded-full border-8 border-blue-500">
            <div>
              <p className="text-3xl font-bold">
                {score}/{lessons.length}
              </p>

              <p className="text-xs text-slate-400">
                score
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={restartLesson}
              className="rounded-full border border-slate-700 px-7 py-3.5 font-semibold text-slate-200 transition hover:bg-slate-800"
            >
              Try Again
            </button>

            <Link
              href="/dashboard"
              className="rounded-full bg-blue-500 px-7 py-3.5 font-semibold transition hover:bg-blue-400"
            >
              Back to Dashboard →
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const progress = ((lessonIndex + 1) / lessons.length) * 100;

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="flex items-center justify-between">
          <Link
            href="/dashboard"
            className="text-slate-400 transition hover:text-white"
          >
            ← Dashboard
          </Link>

          <p className="text-sm text-slate-500">
            {lessonIndex + 1} / {lessons.length}
          </p>
        </div>

        {/* Progress */}
        <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-blue-500 transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        {/* Lesson Title */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400">
              {lesson.level}
            </span>

            <span className="text-sm text-slate-500">
              Listening
            </span>
          </div>

          <h1 className="mt-4 text-4xl font-bold">
            {lesson.title}
          </h1>

          <p className="mt-3 text-slate-400">
            Listen carefully and choose the correct answer.
          </p>
        </div>

        {/* Audio Card */}
        <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center shadow-xl">
          <button
            type="button"
            onClick={playAudio}
            aria-label="Play audio"
            className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-500 text-4xl transition hover:scale-105 hover:bg-blue-400 active:scale-95"
          >
            {isPlaying ? "🔊" : "▶️"}
          </button>

          <h2 className="mt-6 text-xl font-semibold">
            {isPlaying
              ? "Playing audio..."
              : "Listen to the audio"}
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            You can listen as many times as you need.
          </p>

          <button
            type="button"
            onClick={playAudio}
            className="mt-5 rounded-full border border-slate-700 px-5 py-2 text-sm text-slate-300 transition hover:bg-slate-800"
          >
            ▶️ Play again
          </button>
        </div>

        {/* Question */}
        <div className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Question
          </p>

          <h2 className="mt-3 text-2xl font-bold leading-9">
            {lesson.question}
          </h2>
        </div>

        {/* Options */}
        <div className="mt-6 space-y-4">
          {lesson.options.map((option, index) => {
            const isSelected = selected === index;
            const isCorrect = index === lesson.correct;

            let style =
              "border-slate-800 bg-slate-900 hover:border-slate-600";

            if (selected !== null) {
              if (isCorrect) {
                style =
                  "border-green-500 bg-green-500/10";
              } else if (isSelected) {
                style =
                  "border-red-500 bg-red-500/10";
              } else {
                style =
                  "border-slate-800 bg-slate-900 opacity-60";
              }
            }

            return (
              <button
                key={option}
                type="button"
                onClick={() => handleAnswer(index)}
                disabled={selected !== null}
                className={`w-full rounded-2xl border p-5 text-left transition ${style}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-medium">
                    {option}
                  </span>

                  {selected !== null && isCorrect && (
                    <span className="text-xl text-green-400">
                      ✓
                    </span>
                  )}

                  {isSelected && !isCorrect && (
                    <span className="text-xl text-red-400">
                      ✕
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {selected !== null && (
          <div
            className={`mt-6 rounded-2xl border p-6 ${
              selected === lesson.correct
                ? "border-green-500/30 bg-green-500/10"
                : "border-orange-500/30 bg-orange-500/10"
            }`}
          >
            <p className="font-semibold">
              {selected === lesson.correct
                ? "✅ Correct!"
                : "💡 Not quite!"}
            </p>

            <p className="mt-2 leading-7 text-slate-300">
              {selected === lesson.correct
                ? "Great listening! You understood the audio correctly."
                : `The correct answer is "${lesson.options[lesson.correct]}".`}
            </p>
          </div>
        )}

        {/* Next */}
        {selected !== null && (
          <button
            type="button"
            onClick={nextLesson}
            className="mt-6 w-full rounded-full bg-blue-500 py-4 font-semibold transition hover:bg-blue-400"
          >
            {lessonIndex === lessons.length - 1
              ? "Finish Listening 🎉"
              : "Next Lesson →"}
          </button>
        )}
      </div>
    </main>
  );
}
