import React, { useState } from 'react';

interface Option {
  label: string;
  text: string;
  points: number;
}

interface Question {
  text: string;
  options: Option[];
}

export const questions: Question[] = [
  {
    text: 'How do you feel about AI right now?',
    options: [
      { label: 'A', text: 'I think AI is overhyped, dangerous, or something I want to avoid.', points: 0 },
      { label: 'B', text: 'I am curious but have not done much with it beyond trying ChatGPT a few times.', points: 2 },
      { label: 'C', text: 'I use AI tools regularly and want to go deeper.', points: 3 },
      { label: 'D', text: 'I have a working AI system that I use daily for real work.', points: 4 },
    ],
  },
  {
    text: 'Have you ever used a terminal (command line)?',
    options: [
      { label: 'A', text: 'I do not know what that is.', points: 1 },
      { label: 'B', text: 'I have seen one but never used it myself.', points: 2 },
      { label: 'C', text: 'I have used it a few times (installing software, running commands).', points: 3 },
      { label: 'D', text: 'I am comfortable in the terminal and use it regularly.', points: 4 },
    ],
  },
  {
    text: 'Do you have a system for organizing your goals, projects, and relationships?',
    options: [
      { label: 'A', text: 'No, it is all in my head.', points: 2 },
      { label: 'B', text: 'I use notes apps, spreadsheets, or a CRM but nothing AI-connected.', points: 3 },
      { label: 'C', text: 'I have markdown files or a structured folder system that an AI tool can read.', points: 4 },
      { label: 'D', text: 'I have a Personal Agentic OS with a context lake, skill files, and daily brain dumps.', points: 5 },
    ],
  },
  {
    text: 'What is your relationship with AI tools like Claude Code, Cursor, or HERMES?',
    options: [
      { label: 'A', text: 'I have never heard of these.', points: 2 },
      { label: 'B', text: 'I have heard of them but never tried them.', points: 2 },
      { label: 'C', text: 'I have tried one but did not stick with it or could not get it set up.', points: 3 },
      { label: 'D', text: 'I use one of these daily with my own instruction files and context.', points: 5 },
    ],
  },
  {
    text: 'When someone tells you AI can help you with your work, what is your first reaction?',
    options: [
      { label: 'A', text: 'Skepticism or resistance. "That is not how I do things."', points: 0 },
      { label: 'B', text: 'Interest, but I do not know where to start.', points: 2 },
      { label: 'C', text: 'Excitement. I have been looking for the right way to set this up.', points: 3 },
      { label: 'D', text: '"I already do this. Show me what is next."', points: 4 },
    ],
  },
  {
    text: 'Are you willing to speak out loud to your computer (voice-to-text)?',
    options: [
      { label: 'A', text: 'Absolutely not. That feels weird.', points: 0 },
      { label: 'B', text: 'I would try it if someone showed me how.', points: 2 },
      { label: 'C', text: 'I already use voice notes or dictation sometimes.', points: 3 },
      { label: 'D', text: 'Voice-to-text is my primary input method.', points: 4 },
    ],
  },
  {
    text: 'Do you have a laptop you can bring that is less than 5 years old?',
    options: [
      { label: 'A', text: 'No, my computer is very old or I do not have one.', points: 0 },
      { label: 'B', text: 'Yes, but it is slow and I am not sure it can handle new software.', points: 1 },
      { label: 'C', text: 'Yes, it is reasonably modern and works fine.', points: 3 },
      { label: 'D', text: 'Yes, it is a recent machine with plenty of storage and RAM.', points: 3 },
    ],
  },
  {
    text: 'What do you want to get out of AI?',
    options: [
      { label: 'A', text: 'I do not want anything from AI. I am here because someone told me to be.', points: 0 },
      { label: 'B', text: 'I want to save time and automate repetitive tasks.', points: 2 },
      { label: 'C', text: 'I want an AI thinking partner that knows my full context and helps me make better decisions.', points: 3 },
      { label: 'D', text: 'I want to build systems that compound and get smarter every day I use them.', points: 3 },
    ],
  },
];

export interface Result {
  key: string;
  title: string;
  description: string;
  nextStep: string;
  link: { text: string; href: string };
}

export function getResult(score: number): Result {
  if (score <= 7) {
    return {
      key: 'not-ready',
      title: 'Not Ready Yet',
      description:
        'You are either resistant to AI or missing some of the baseline infrastructure to participate. That is okay. The workshop would frustrate you right now.',
      nextStep:
        'Come to an Applied AI Live event or watch someone use these tools for five minutes. Once you have had the encounter, everything clicks. When the curiosity hits, come back and retake this quiz.',
      link: { text: 'Read: Your Two Futures', href: '/docs/philosophy/your-two-futures' },
    };
  }
  if (score <= 16) {
    return {
      key: 'perfect-fit',
      title: 'Perfect Fit',
      description:
        'You are curious, open, and ready to build. You have enough technical comfort to follow instructions and enough motivation to push through the setup. This is exactly who the workshop is designed for.',
      nextStep:
        'Sign up for a Supersuit Up workshop. You will walk out with a working Personal Agentic OS on your laptop. Having an experienced practitioner in the room will save you hours.',
      link: { text: 'Go to: Supersuit Up Workshop', href: '/docs/workshops/supersuit-up' },
    };
  }
  if (score <= 23) {
    return {
      key: 'partial',
      title: 'Partially Onboarded',
      description:
        'You are already using AI tools and may have a loose system going. The workshop would fill gaps and formalize what you have, but you could also work through the written guide on your own.',
      nextStep:
        'If you want structure and in-person help, attend the workshop. If you prefer self-paced, the guide has everything you need. Make sure you have a USER.md, relationship files, and at least one skill file.',
      link: { text: 'Go to: Supersuit Up Workshop', href: '/docs/workshops/supersuit-up' },
    };
  }
  return {
    key: 'suited-up',
    title: 'Already Suited Up',
    description:
      'You have a working Personal Agentic OS. You do not need the workshop. You are the kind of person who should be helping run one.',
    nextStep:
      'If you want to help others suit up, read Training the Workshop and reach out on Discord. We need practitioners who can run these sessions in their cities.',
    link: { text: 'Read: Training the Workshop', href: '/docs/playbooks/practitioner/training-the-workshop' },
  };
}

export default function ReadinessQuiz(): React.ReactElement {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
  const [scores, setScores] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const isLast = currentQ === questions.length - 1;
  const q = questions[currentQ];
  const totalScore = scores.reduce((sum, s) => sum + s, 0);
  const result = getResult(totalScore);

  function handleSelect(label: string) {
    setSelectedLabel(label);
  }

  function handleNext() {
    if (selectedLabel === null) return;
    const opt = q.options.find((o) => o.label === selectedLabel);
    if (!opt) return;

    const newScores = [...scores, opt.points];
    setScores(newScores);

    if (isLast) {
      setFinished(true);
    } else {
      setCurrentQ(currentQ + 1);
      setSelectedLabel(null);
    }
  }

  function handleRestart() {
    setCurrentQ(0);
    setSelectedLabel(null);
    setScores([]);
    setFinished(false);
  }

  if (finished) {
    return (
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <div
          style={{
            padding: '32px 36px',
            borderRadius: 14,
            border: '2px solid var(--ifm-color-primary)',
            background: 'var(--ifm-background-surface-color)',
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: 4 }} data-testid="result-title">
            {result.title}
          </h2>
          <p style={{ color: 'var(--ifm-color-emphasis-600)', marginBottom: 20, fontSize: '0.9rem' }}>
            Score: {totalScore} / 32
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>{result.description}</p>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            <strong>Your next step:</strong> {result.nextStep}
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 20, flexWrap: 'wrap' }}>
            <a
              href={result.link.href}
              style={{
                display: 'inline-block',
                padding: '10px 24px',
                borderRadius: 8,
                background: 'var(--ifm-color-primary)',
                color: '#fff',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              {result.link.text} &rarr;
            </a>
            <button
              onClick={handleRestart}
              style={{
                padding: '10px 24px',
                borderRadius: 8,
                border: '1px solid var(--ifm-color-emphasis-400)',
                background: 'transparent',
                color: 'var(--ifm-color-emphasis-700)',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 640, margin: '0 auto' }}>
      {/* Progress bar */}
      <div style={{ marginBottom: 24 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 8,
            fontSize: '0.85rem',
            color: 'var(--ifm-color-emphasis-600)',
          }}
        >
          <span>Question {currentQ + 1} of {questions.length}</span>
        </div>
        <div
          style={{
            height: 6,
            borderRadius: 3,
            background: 'var(--ifm-color-emphasis-200)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${((currentQ + 1) / questions.length) * 100}%`,
              background: 'var(--ifm-color-primary)',
              borderRadius: 3,
              transition: 'width 0.3s ease',
            }}
          />
        </div>
      </div>

      {/* Question card */}
      <div
        style={{
          padding: '28px 32px',
          borderRadius: 14,
          border: '1px solid var(--ifm-color-emphasis-300)',
          background: 'var(--ifm-background-surface-color)',
          marginBottom: 24,
        }}
      >
        <p style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: 20 }} data-testid="question-text">
          {q.text}
        </p>
        {q.options.map((opt) => {
          const isSelected = selectedLabel === opt.label;
          return (
            <label
              key={opt.label}
              data-testid={`option-${opt.label}`}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12,
                padding: '12px 16px',
                marginBottom: 8,
                borderRadius: 10,
                cursor: 'pointer',
                border: isSelected
                  ? '2px solid var(--ifm-color-primary)'
                  : '2px solid var(--ifm-color-emphasis-200)',
                background: isSelected
                  ? 'var(--ifm-color-primary-lightest)'
                  : 'transparent',
                transition: 'all 0.15s',
              }}
              onClick={() => handleSelect(opt.label)}
            >
              <input
                type="radio"
                name={`q${currentQ}`}
                checked={isSelected}
                onChange={() => handleSelect(opt.label)}
                style={{ marginTop: 3, accentColor: 'var(--ifm-color-primary)' }}
              />
              <span style={{ lineHeight: 1.5 }}>
                <strong>({opt.label})</strong> {opt.text}
              </span>
            </label>
          );
        })}
      </div>

      {/* Next button */}
      <div style={{ textAlign: 'center' }}>
        <button
          onClick={handleNext}
          disabled={selectedLabel === null}
          data-testid="next-button"
          style={{
            padding: '14px 48px',
            fontSize: '1.1rem',
            fontWeight: 700,
            borderRadius: 10,
            border: 'none',
            cursor: selectedLabel !== null ? 'pointer' : 'not-allowed',
            background: selectedLabel !== null
              ? 'var(--ifm-color-primary)'
              : 'var(--ifm-color-emphasis-300)',
            color: selectedLabel !== null ? '#fff' : 'var(--ifm-color-emphasis-600)',
            transition: 'all 0.2s',
          }}
        >
          {isLast ? 'See My Result' : 'Next'}
        </button>
      </div>
    </div>
  );
}
