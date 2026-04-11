/**
 * ReadinessQuiz scoring tests
 * Run with: npx tsx src/components/__tests__/ReadinessQuiz.test.ts
 */
import { getResult, questions } from '../ReadinessQuiz';

let passed = 0;
let failed = 0;

function assert(name: string, condition: boolean) {
  if (condition) { passed++; }
  else { failed++; console.error('  FAIL:', name); }
}

// Structure
assert('8 questions', questions.length === 8);
assert('every question has 4 options', questions.every(q => q.options.length === 4));
assert('labels are A-D', questions.every(q => q.options.map(o => o.label).join('') === 'ABCD'));
assert('all points non-negative', questions.every(q => q.options.every(o => o.points >= 0)));

// Score range
const max = questions.reduce((s, q) => s + Math.max(...q.options.map(o => o.points)), 0);
assert('max score is 32', max === 32);

const min = questions.reduce((s, q) => s + Math.min(...q.options.map(o => o.points)), 0);
assert('min score is 5', min === 5);

// Boundary tests
assert('score 0 = not-ready', getResult(0).key === 'not-ready');
assert('score 7 = not-ready', getResult(7).key === 'not-ready');
assert('score 8 = perfect-fit', getResult(8).key === 'perfect-fit');
assert('score 16 = perfect-fit', getResult(16).key === 'perfect-fit');
assert('score 17 = partial', getResult(17).key === 'partial');
assert('score 23 = partial', getResult(23).key === 'partial');
assert('score 24 = suited-up', getResult(24).key === 'suited-up');
assert('score 32 = suited-up', getResult(32).key === 'suited-up');

// Persona tests
const allA = questions.reduce((s, q) => s + q.options[0].points, 0);
assert(`all-A (${allA}) = not-ready`, getResult(allA).key === 'not-ready');

const allD = questions.reduce((s, q) => s + q.options[3].points, 0);
assert(`all-D (${allD}) = suited-up`, getResult(allD).key === 'suited-up');

const allB = questions.reduce((s, q) => s + q.options[1].points, 0);
assert(`all-B (${allB}) = perfect-fit`, getResult(allB).key === 'perfect-fit');

const allC = questions.reduce((s, q) => s + q.options[2].points, 0);
assert(`all-C (${allC}) = suited-up`, getResult(allC).key === 'suited-up');

// Result structure
for (const score of [0, 10, 20, 30]) {
  const r = getResult(score);
  assert(`result ${score} has valid link`, r.link.href.startsWith('/docs/'));
  assert(`result ${score} has title`, r.title.length > 0);
}

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
