---
title: Official Quizzes — Try First, Then See Why
lead: All 13 official CODL quizzes, one per topic. Answer each question first; a wrong pick explains why it is wrong. Worked answers are under each quiz.
sources: CODL Quiz 1–13 attempt reviews
---

## Quiz 1 — Introduction to Predicate Logic

*Notes for this topic: [Week 01](Week%2001/Week%2001%20-%20Study%20Guide.html)*

These are all **10 questions from the official CODL Quiz 1 — Introduction to Predicate Logic**.

**How to use it:** answer each question in the quiz box. If you choose a wrong option, it tells you **why that option is wrong** and gives a hint — try again until you get it. When you are right, it explains why. After the quiz, open the worked answers for the full method you can write in the written exam.

:::tool Do the quiz first — official Quiz 1
<div id="gp-m01-official" class="gp"><script type="application/json">{"accts": {}, "steps": [{"type": "choice", "q": "“There exists a unique integer n such that n + 5 = 0.” Which is the logical translation? (Z = all integers)", "think": "Look for the word “unique”. Which symbol means “exactly one”?", "opts": [{"t": "∀n ∈ Z (n + 5 = 0)", "why": "∀ means “for every n”. It says every integer satisfies n + 5 = 0, which is false and is not what the sentence says."}, {"t": "∃n ∈ Z (n + 5 = 0)", "why": "∃ only means “at least one”. It misses the word “unique”."}, {"t": "∃!n ∈ Z (n + 5 = 0)", "ok": true}, {"t": "None of the above", "why": "One of the options does match: there is a symbol for “exactly one”."}], "why": "∃! means “there exists exactly one”. Only n = −5 works, so the statement really is about one unique integer."}, {"type": "choice", "q": "P(x, y) is “x² + y² > 0”. Which of these is FALSE?", "think": "Put the numbers in and work out x² + y². When is it not bigger than 0?", "opts": [{"t": "P(−1, 2)", "why": "(−1)² + 2² = 1 + 4 = 5, and 5 > 0 is true."}, {"t": "P(1, −2)", "why": "1² + (−2)² = 1 + 4 = 5 > 0, true. Squares are never negative."}, {"t": "P(−8, −5)", "why": "64 + 25 = 89 > 0, true."}, {"t": "P(0, 0)", "ok": true}], "why": "0² + 0² = 0, and 0 > 0 is false. A sum of squares is only 0 when both numbers are 0."}, {"type": "choice", "q": "P(x) = “The test will be on x the 14th.” What is the universe of discourse for x?", "think": "Read the sentence with a value in place of x. What kind of word fits “on ___ the 14th”?", "opts": [{"t": "The set of all positive integers", "why": "“The test will be on 5 the 14th” makes no sense."}, {"t": "{Sunday, Monday, …, Saturday}", "ok": true}, {"t": "{January, February, …, December}", "why": "“On March the 14th” is how we say a date, but the sentence reads “on x the 14th” — like “on Monday the 14th”, so x is a day of the week."}, {"t": "{14}", "why": "14 is already in the sentence; x is a different thing."}], "why": "“The test will be on Monday the 14th” — x is a day of the week. The universe of discourse is the set of values x can take so the sentence makes sense."}, {"type": "choice", "q": "What is the negation of “∀x (x > 0)”?", "think": "Rule: flip the quantifier (∀ ↔ ∃) and negate what is inside. What is the opposite of “greater than 0”?", "opts": [{"t": "∄x (x > 0)", "why": "That says “no x is greater than 0”, which is much stronger than “not all x are greater than 0”."}, {"t": "∃x (x ≤ 0)", "ok": true}, {"t": "∀x (x ≤ 0)", "why": "You changed the inside but kept ∀. The quantifier must flip to ∃."}, {"t": "∃x (x > 0)", "why": "You flipped the quantifier but did not negate the inside."}], "why": "¬∀x P(x) ≡ ∃x ¬P(x). Flip ∀ to ∃, and the opposite of x > 0 is x ≤ 0 (it includes 0)."}, {"type": "choice", "q": "P(x, y, z) is “x > y ∧ y < z”. Which is TRUE?", "think": "∧ means AND, so both parts must be true. Check x > y first, then y < z.", "opts": [{"t": "P(1, 2, −1)", "why": "x > y: is 1 > 2? No, so it is already false."}, {"t": "P(2, 1, −1)", "why": "2 > 1 is true, but y < z means 1 < −1, which is false."}, {"t": "P(0, 0, 5)", "why": "x > y: 0 > 0 is false (equal is not greater)."}, {"t": "P(2, 1, 4)", "ok": true}], "why": "2 > 1 ✓ and 1 < 4 ✓ — both parts true, so the AND is true."}, {"type": "choice", "q": "Which is equivalent to “∀x ∈ {Monday, Tuesday, Wednesday, Thursday, Friday} P(x)”?", "think": "“For every day” means true on Monday AND Tuesday AND … Which connective is AND?", "opts": [{"t": "P(Monday) ∨ P(Tuesday) ∨ P(Wednesday) ∨ P(Thursday) ∨ P(Friday)", "why": "∨ (OR) only needs one day to be true — that is what ∃ means, not ∀."}, {"t": "P(Monday) ∧ P(Tuesday) ∧ P(Wednesday) ∧ P(Thursday) ∧ P(Friday)", "ok": true}, {"t": "P(Monday) ∨ P(Tuesday) ∧ P(Wednesday) ∧ P(Thursday) ∨ P(Friday)", "why": "A mix of ∨ and ∧ does not mean “every day”."}, {"t": "P(Monday) ∧ P(Tuesday) ∨ P(Wednesday) ∨ P(Thursday) ∧ P(Friday)", "why": "A mix of ∧ and ∨ does not mean “every day”."}], "why": "On a finite list, ∀ = AND of every case; ∃ = OR of every case."}, {"type": "choice", "q": "“The product of two negative real numbers is not negative.” Which translation is correct?", "think": "This is a general rule about every pair of negatives. General rule → which quantifier? “If … then …” → which connective?", "opts": [{"t": "∃x ∀y ((x < 0) ∧ (y < 0) ⇒ (xy > 0))", "why": "∃x says “there is some x”, but the rule is about every x."}, {"t": "∃x ∃y ((x < 0) ∧ (y < 0) ∧ (xy > 0))", "why": "This only says one such pair exists, not that it is always true."}, {"t": "∀x ∃y ((x < 0) ∧ (y < 0) ∧ (xy > 0))", "why": "This says every x is negative, which is false, and uses ∃ for y."}, {"t": "∀x ∀y ((x < 0) ∧ (y < 0) ⇒ (xy > 0))", "ok": true}], "why": "Every pair x, y → ∀x ∀y. “If both are negative then the product is positive” → ⇒. Pattern: ∀ goes with ⇒."}, {"type": "choice", "q": "“Some real numbers are rational.” Which translation is correct?", "think": "“Some” = ∃. “Some A are B” = there is an x that is A and B. Which connective?", "opts": [{"t": "∃x (Real(x) ∨ Rational(x))", "why": "∨ means “real OR rational” — the thing need not be both."}, {"t": "∀x (Real(x) ⇒ Rational(x))", "why": "This says ALL real numbers are rational, which is false (√2 is not)."}, {"t": "∃x (Real(x) ∧ Rational(x))", "ok": true}, {"t": "∃x (Rational(x) ⇒ Real(x))", "why": "∃ with ⇒ is almost always wrong: it is true for anything that is not rational, so it says nothing useful."}], "why": "“Some A are B” → ∃x (A(x) ∧ B(x)). Pattern: ∃ goes with ∧."}, {"type": "choice", "q": "What is a direct proof?", "think": "Direct = go straight from what you are given to what you must show.", "opts": [{"t": "Assume the hypothesis is true and use logical steps to show the conclusion is true", "ok": true}, {"t": "Assume the statement is false and look for a contradiction", "why": "That is proof by contradiction, not direct proof."}, {"t": "A proof that only uses number properties to show a statement is false", "why": "That is not a proof method; showing a statement is false is done with a counterexample."}, {"t": "A proof that always multiplies two values", "why": "Multiplication may appear in a proof but does not define one."}], "why": "Direct proof of p ⇒ q: assume p, reach q step by step."}, {"type": "choice", "q": "“None of my friends are perfect.” F(x): x is my friend, P(x): x is perfect. Which is correct?", "think": "“None of my friends are perfect” = “it is NOT true that there is a friend who is perfect”.", "opts": [{"t": "∃x (F(x) ∧ ¬P(x))", "why": "This only says SOME friend is not perfect — the others might be perfect."}, {"t": "∃x (¬F(x) ∧ P(x))", "why": "This talks about someone who is NOT my friend."}, {"t": "∃x (¬F(x) ∧ ¬P(x))", "why": "This talks about someone who is not my friend and not perfect."}, {"t": "¬∃x (F(x) ∧ P(x))", "ok": true}], "why": "¬∃x (F(x) ∧ P(x)): there is no x that is both my friend and perfect. Same as ∀x (F(x) ⇒ ¬P(x))."}], "end": "Now open the worked answers below and reread any question you missed."}</script></div>
:::

<details class="beginner-answer" markdown="1">
<summary>Show all worked answers — Quiz 1 (open after you finish the quiz)</summary>

**Q1.** Translate: “There exists a **unique** integer n such that n + 5 = 0.” (Z = all integers)

(a) ∀n∈Z (n+5=0) (b) ∃n∈Z (n+5=0) (c) ∃!n∈Z (n+5=0) (d) None of these

**✅ Answer: (c) ∃!n∈Z (n+5=0)**

- “There exists” = **∃**. “There exists a **unique** / exactly one” = **∃!**.
- Only n = −5 works, so it really is exactly one. (b) only says “at least one”, which misses the word *unique*.


**Q2.** P(x, y) is “x² + y² > 0”. Which is **false**?

(a) P(−1, 2) (b) P(1, −2) (c) P(−8, −5) (d) P(0, 0)

**✅ Answer: (d) P(0, 0)**

Put the numbers in and check:

- (a) 1 + 4 = 5 > 0 ✓ (b) 1 + 4 = 5 > 0 ✓ (c) 64 + 25 = 89 > 0 ✓
- (d) 0 + 0 = **0**, and 0 > 0 is **false**.

**Trick:** a square is never negative, so x² + y² is only 0 when both are 0.


**Q3.** P(x) = “The test will be on x the 14th.” What is the universe of discourse (the set x comes from)?

(i) positive integers (ii) {Sunday, …, Saturday} (iii) {January, …, December} (iv) {14}

**✅ Answer: (ii) {Sunday, Monday, …, Saturday}**

Read the sentence with a value in place of x: “The test will be on **Monday** the 14th” makes sense. So x is a **day of the week**.

**Rule:** the universe of discourse is *the set of things you can put in place of x so the sentence makes sense*.


**Q4.** Negation of “∀x (x > 0)”:

(a) ∄x (x>0) (b) ∃x (x ≤ 0) (c) ∀x (x ≤ 0) (d) ∃x (x>0)

**✅ Answer: (b) ∃x (x ≤ 0)**

**Negation rule (memorise):** ¬∀x P(x) ≡ ∃x ¬P(x) and ¬∃x P(x) ≡ ∀x ¬P(x).

1. Flip the quantifier: ∀ → ∃.
2. Negate the inside: “x > 0” → “x ≤ 0” (not “x < 0”: the opposite of *greater than* includes *equal*).


**Q5.** P(x, y, z) is “x > y ∧ y < z”. Which is **true**?

(i) P(1, 2, −1) (ii) P(2, 1, −1) (iii) P(0, 0, 5) (iv) P(2, 1, 4)

**✅ Answer: (iv) P(2, 1, 4)**

∧ (“and”) needs **both** parts true. Check x > y first, then y < z:

- (i) 1 > 2? ✗ (ii) 2 > 1 ✓ but 1 < −1? ✗ (iii) 0 > 0? ✗
- (iv) 2 > 1 ✓ and 1 < 4 ✓ → **true**.


**Q6.** Which is equivalent to “∀x∈{Monday, …, Friday} P(x)”?

(i) all joined by ∨ (ii) all joined by ∧ (iii)/(iv) a mix of ∧ and ∨

**✅ Answer: (ii) P(Monday) ∧ P(Tuesday) ∧ P(Wednesday) ∧ P(Thursday) ∧ P(Friday)**

On a finite list: **∀ = AND of every case** (true for Monday **and** Tuesday **and** …).
∃ = **OR** of every case (true for Monday **or** Tuesday **or** …).


**Q7.** “The product of two negative real numbers is not negative.”

(i) ∃x∀y(…⇒…) (ii) ∃x∃y(…∧…∧…) (iii) ∀x∃y(…∧…∧…) (iv) ∀x∀y((x<0) ∧ (y<0) ⇒ (xy>0))

**✅ Answer: (iv) ∀x ∀y ((x < 0) ∧ (y < 0) ⇒ (xy > 0))**

- “**the** product of two negatives” is a general rule about **every** pair → **∀x ∀y**.
- A rule of the form “if … then …” uses **⇒**: *if* x and y are negative *then* xy > 0.
- **Pattern:** ∀ goes with ⇒; ∃ goes with ∧.


**Q8.** “Some real numbers are rational.”

(i) ∃x(Real ∨ Rational) (ii) ∀x(Real ⇒ Rational) (iii) ∃x(Real(x) ∧ Rational(x)) (iv) ∃x(Rational ⇒ Real)

**✅ Answer: (iii) ∃x (Real(x) ∧ Rational(x))**

“**Some**” = ∃. “Some A are B” means there is an x that is A **and** B → ∃x (A(x) ∧ B(x)).
Do not use ⇒ with ∃: ∃x(Rational ⇒ Real) is true even for a non-rational thing, so it says almost nothing.


**Q9.** What is a **direct proof**?

**✅ Answer: (i) Assume the hypothesis is true and use logical steps to show the conclusion is true.**

- **Direct proof of p ⇒ q:** assume p, step by step reach q.
- (ii) describes **proof by contradiction** (assume the statement is false, reach a contradiction).


**Q10.** “None of my friends are perfect.” (F(x): x is my friend, P(x): x is perfect)

(i) ∃x(F ∧ ¬P) (ii) ∃x(¬F ∧ P) (iii) ∃x(¬F ∧ ¬P) (iv) ¬∃x(F(x) ∧ P(x))

**✅ Answer: (iv) ¬∃x (F(x) ∧ P(x))**

“None of my friends are perfect” = “It is **not** true that **there is** a friend who is perfect” → ¬∃x (F(x) ∧ P(x)).
Same meaning: ∀x (F(x) ⇒ ¬P(x)) (“every friend is not perfect”). (i) only says *some* friend is not perfect.


</details>

## Quiz 2 — Sets and Set Operations

*Notes for this topic: [Week 02](Week%2002/Week%2002%20-%20Study%20Guide.html)*

These are all **10 questions from the official CODL Quiz 2 — Sets and Set Operations**.

**How to use it:** answer each question in the quiz box. If you choose a wrong option, it tells you **why that option is wrong** and gives a hint — try again until you get it. When you are right, it explains why. After the quiz, open the worked answers for the full method you can write in the written exam.

:::tool Do the quiz first — official Quiz 2
<div id="gp-m02-official" class="gp"><script type="application/json">{"accts": {}, "steps": [{"type": "choice", "q": "Which set is described by { x : x < 6, x is a whole number }?", "think": "Whole numbers start at 0. Natural numbers start at 1. No negatives in either.", "opts": [{"t": "{…, −3, −2, −1, 0, 1, 2, 3, 4, 5}", "why": "Whole numbers have no negatives — that would be the integers."}, {"t": "{1, 2, 3, 4, 5}", "why": "This misses 0. Whole numbers start at 0 (natural numbers start at 1)."}, {"t": "{0, 1, 2, 3, 4, 5}", "ok": true}], "why": "Whole numbers 0, 1, 2, … and less than 6 → {0, 1, 2, 3, 4, 5}."}, {"type": "choice", "q": "Which set is equal to {1, 4, 9, 16}?", "think": "List the squares: 1² = 1, 2² = 4, … Which rule gives exactly these four and nothing else?", "opts": [{"t": "{the set of square numbers}", "why": "All square numbers go on forever: 25, 36, … are included too."}, {"t": "{x : x² < 20, x is a natural number} (the squares x² below 20)", "ok": true}, {"t": "{x : x² < 25, x is a whole number}", "why": "Whole numbers include 0, so 0 would also be in the set."}], "why": "Natural numbers start at 1: 1, 4, 9, 16 are below 20; 25 is not. Exactly {1, 4, 9, 16}."}, {"type": "choice", "q": "A = people in your class, B = people in your class who wear glasses. What is A ∩ B?", "think": "∩ means in A AND in B — the overlap.", "opts": [{"t": "The people in your class who wear glasses", "ok": true}, {"t": "All the people in your class", "why": "That is A ∪ B (everyone together)."}, {"t": "The people in your class who do not wear glasses", "why": "That is A \\ B (in A but not in B)."}], "why": "Everyone in B is already in A, so the overlap is just B: the class members who wear glasses."}, {"type": "choice", "q": "Same A and B. What is A ∪ B?", "think": "∪ means in A OR in B (or both) — put everyone together.", "opts": [{"t": "The people in your class who wear glasses", "why": "That is A ∩ B (the overlap)."}, {"t": "All the people in your class", "ok": true}, {"t": "The people in your class who do not wear glasses", "why": "That is A \\ B."}], "why": "B is inside A, so joining them gives the whole class, A."}, {"type": "choice", "q": "Same A and B. What is A \\ B?", "think": "A \\ B means in A but NOT in B.", "opts": [{"t": "The people in your class who wear glasses", "why": "That is A ∩ B."}, {"t": "All the people in your class", "why": "That is A ∪ B."}, {"t": "The people in your class who do not wear glasses", "ok": true}], "why": "Take the class (A) and remove everyone who wears glasses (B)."}, {"type": "choice", "q": "80 students; 60 play rugby, 35 play tennis; everyone plays at least one. How many play BOTH (the overlap)?", "think": "Use |R ∪ T| = |R| + |T| − |R ∩ T|. The union is all 80 students.", "opts": [{"t": "80", "why": "80 is the whole class (the union), not the overlap."}, {"t": "95", "why": "95 = 60 + 35 counts the “both” students twice. Subtract the 80 students."}, {"t": "15", "ok": true}], "why": "80 = 60 + 35 − both → both = 95 − 80 = 15."}, {"type": "choice", "q": "Same class. How many play rugby ONLY?", "think": "Rugby only = all rugby players − those who play both.", "opts": [{"t": "80", "why": "That is the whole class."}, {"t": "45", "ok": true}, {"t": "60", "why": "60 is all rugby players, including the 15 who also play tennis."}], "why": "60 − 15 = 45. Check: 45 + 15 + 20 (tennis only) = 80 ✓."}, {"type": "choice", "q": "Which statement is true?", "think": "∈ is for one element. ⊆ is for a set inside a set. The empty set ∅ is a subset of every set.", "opts": [{"t": "{2, 4} ∈ {2, 4, 6}", "why": "{2, 4} is a set, not one of the elements 2, 4, 6. It should be ⊆, not ∈."}, {"t": "∅ ⊆ {2, 4, 6}", "ok": true}, {"t": "4 ⊂ {2, 4, 6}", "why": "4 is a number, not a set, so it cannot be a subset. Correct: 4 ∈ {2, 4, 6}."}], "why": "The empty set is a subset of every set."}, {"type": "choice", "q": "A = {1, 2, 3}. How many subsets have exactly two elements?", "think": "List them: pick 2 of the 3 numbers.", "opts": [{"t": "3", "ok": true}, {"t": "4", "why": "List them carefully: {1,2}, {1,3}, {2,3} — there is no fourth."}, {"t": "5", "why": "There are only 3 ways to choose 2 from 3."}], "why": "{1,2}, {1,3}, {2,3} → 3 = C(3, 2)."}, {"type": "choice", "q": "Two sets are called disjoint if their ______ is the empty set.", "think": "Disjoint = they share nothing.", "opts": [{"t": "Difference", "why": "A \\ B is empty when A is inside B — that is not “disjoint”."}, {"t": "Intersection", "ok": true}, {"t": "Union", "why": "The union is empty only when both sets are empty."}], "why": "Disjoint means no common elements: A ∩ B = ∅."}], "end": "Now open the worked answers below and reread any question you missed."}</script></div>
:::

<details class="beginner-answer" markdown="1">
<summary>Show all worked answers — Quiz 2 (open after you finish the quiz)</summary>

**Q1.** Which set is { x : x < 6, x is a whole number }?

(a) {…, −2, −1, 0, 1, …, 5} (b) {1, 2, 3, 4, 5} (c) {0, 1, 2, 3, 4, 5}

**✅ Answer: (c) {0, 1, 2, 3, 4, 5}**

- **Whole numbers** start at **0**: 0, 1, 2, 3, … (no negatives).
- **Natural numbers** start at **1**: 1, 2, 3, …
- “x < 6” stops at 5, so the set is {0, 1, 2, 3, 4, 5}.


**Q2.** Which set equals {1, 4, 9, 16}?

(a) {square numbers} (b) { x² : x² < 20, x natural } … written as {x : x² < 20, x is a natural number} (c) {x : x² < 25, x is a whole number}

**✅ Answer: (b) the squares x² below 20 with x a natural number**

List them: 1² = 1, 2² = 4, 3² = 9, 4² = 16, 5² = 25 (too big, stop). That gives exactly {1, 4, 9, 16}.

- (a) “all square numbers” goes on forever (25, 36, …).
- (c) whole numbers include 0, so 0 would be in the set as well.


**Q3.** A = people in your class, B = people in your class who wear glasses. What is **A ∩ B**?

**✅ Answer: the people in your class who wear glasses**

**∩ (intersection) = in A AND in B** — the overlap. Everyone in B is already in A, so the overlap is just B.


**Q4.** Same A and B. What is **A ∪ B**?

**✅ Answer: all the people in your class**

**∪ (union) = in A OR in B (or both)** — put everyone together. B is inside A, so the union is just A.


**Q5.** Same A and B. What is **A \ B** (A minus B)?

**✅ Answer: the people in your class who do not wear glasses**

**A \ B (difference) = in A but NOT in B.** Take the class and remove everyone who wears glasses.


**Q6.** 80 students; 60 play rugby, 35 play tennis; everyone plays at least one. How many are in the **overlap** (both)?

(a) 80 (b) 95 (c) 15

**✅ Answer: (c) 15**

**Formula (memorise):** |R ∪ T| = |R| + |T| − |R ∩ T|
80 = 60 + 35 − both → both = 95 − 80 = **15**.
Why: adding 60 + 35 counts the “both” people twice, so the extra 15 is the overlap.


**Q7.** Same class. How many play **rugby only** (the left part of the rugby circle)?

(a) 80 (b) 45 (c) 60

**✅ Answer: (b) 45**

Rugby only = all rugby − both = 60 − 15 = **45**.
(Check: tennis only = 35 − 15 = 20, and 45 + 15 + 20 = 80 ✓.)


**Q8.** Which is true?

(a) {2, 4} ∈ {2, 4, 6} (b) ∅ ⊆ {2, 4, 6} (c) 4 ⊂ {2, 4, 6}

**✅ Answer: (b) ∅ ⊆ {2, 4, 6}**

- **∈ (“is an element of”)** is for a single member: 4 ∈ {2, 4, 6} ✓. {2, 4} is a set, not a member, so (a) is false (it should be ⊆).
- **⊆ / ⊂ (“is a subset of”)** is for a set inside a set. 4 is a number, not a set, so (c) is false.
- **The empty set ∅ is a subset of every set.** So (b) is true.


**Q9.** A = {1, 2, 3}. How many subsets have exactly **two** elements?

(a) 3 (b) 4 (c) 5

**✅ Answer: (a) 3**

List them: {1, 2}, {1, 3}, {2, 3} → **3**.
Formula: choose 2 from 3 = C(3, 2) = 3. (All subsets of a 3-element set: 2³ = 8.)


**Q10.** Two sets are **disjoint** if their ______ is the empty set.

**✅ Answer: intersection**

Disjoint = **no common elements** → A ∩ B = ∅. Example: {1, 2} and {3, 4}.


</details>

## Quiz 3 — Functions

*Notes for this topic: [Week 03](Week%2003/Week%2003%20-%20Study%20Guide.html)*

These are all **10 questions from the official CODL Quiz 3 — Functions**.

**How to use it:** answer each question in the quiz box. If you choose a wrong option, it tells you **why that option is wrong** and gives a hint — try again until you get it. When you are right, it explains why. After the quiz, open the worked answers for the full method you can write in the written exam.

:::tool Do the quiz first — official Quiz 3
<div id="gp-m03-official" class="gp"><script type="application/json">{"accts": {}, "steps": [{"type": "choice", "q": "A function is ______ if and only if f(a) = f(b) implies a = b for all a and b in the domain.", "think": "“Equal outputs force equal inputs” means no two different inputs share an output.", "opts": [{"t": "Many-to-many", "why": "Not a function type — a function sends each input to one output."}, {"t": "One-to-one", "ok": true}, {"t": "Many-to-one", "why": "Many-to-one allows different inputs to share an output — the opposite of this rule."}, {"t": "One-to-many", "why": "One input with many outputs is not a function at all."}], "why": "One-to-one (injective): different inputs always give different outputs."}, {"type": "choice", "q": "Which f : Z × Z → Z is NOT onto?", "think": "Onto: every integer must come out for some input. Can each formula give −1?", "opts": [{"t": "f(a, b) = a + b", "why": "Any integer n: take a = n, b = 0. So it is onto."}, {"t": "f(a, b) = a", "why": "Any integer n: take a = n. Onto."}, {"t": "f(a, b) = |b|", "ok": true}, {"t": "f(a, b) = a − b", "why": "Any integer n: take a = n, b = 0. Onto."}], "why": "|b| is never negative, so −1, −2, … are never outputs → not onto."}, {"type": "choice", "q": "f(x) = 2x + 1 and g(x) = 3x + 4. The composition f ∘ g is:", "think": "f ∘ g means f(g(x)): put g(x) inside f.", "opts": [{"t": "6x + 9", "ok": true}, {"t": "6x + 7", "why": "That is g ∘ f = g(f(x)) = 3(2x + 1) + 4. The order is reversed."}, {"t": "6x + 6", "why": "Check the arithmetic: 2(3x + 4) + 1 = 6x + 8 + 1."}, {"t": "6x + 8", "why": "You forgot the + 1 from f."}], "why": "f(g(x)) = 2(3x + 4) + 1 = 6x + 9."}, {"type": "choice", "q": "The inverse of f(x) = x³ + 2 is:", "think": "Write y = x³ + 2 and solve for x: first remove the + 2, then undo the cube.", "opts": [{"t": "f⁻¹(y) = (y − 2)^(1/2)", "why": "A square root undoes a square, but here x is cubed."}, {"t": "f⁻¹(y) = (y − 2)^(1/3)", "ok": true}, {"t": "f⁻¹(y) = y^(1/3)", "why": "You must subtract 2 first."}, {"t": "f⁻¹(y) = y − 2", "why": "You removed the + 2 but did not undo the cube."}], "why": "y − 2 = x³ → x = ∛(y − 2). Check: f(2) = 10 and ∛(10 − 2) = 2 ✓."}, {"type": "choice", "q": "A graph starts at x = −4 with a closed dot ● and ends at x = 3 with an open circle ○. What is the domain?", "think": "● = included → square bracket. ○ = not included → round bracket.", "opts": [{"t": "[−4, 3]", "why": "The open circle at 3 means 3 is NOT included, so it needs a round bracket."}, {"t": "(−4, 3)", "why": "The closed dot at −4 means −4 IS included, so it needs a square bracket."}, {"t": "(−4, 3]", "why": "Both brackets are the wrong way round."}, {"t": "[−4, 3)", "ok": true}], "why": "Include −4 (●) and exclude 3 (○): [−4, 3)."}, {"type": "choice", "q": "A graph starts with a closed dot at height y = 2 and then goes down forever (arrow). What is the range?", "think": "Range = the y-values covered, bottom to top. Infinity always gets a round bracket.", "opts": [{"t": "[−4, ∞)", "why": "−4 is an x-value from the graph; the range is about y."}, {"t": "(−∞, 2]", "ok": true}, {"t": "[2, ∞)", "why": "The graph goes DOWN from 2, not up."}, {"t": "(−∞, ∞)", "why": "The graph never goes above 2."}], "why": "Highest y is 2 (included) and it goes down forever: (−∞, 2]."}, {"type": "choice", "q": "180 g of candies, 6 g each. As candies are eaten, the mass left is plotted against the number of candies left. Range (as given in the quiz)?", "think": "How many candies are there at the start? 180 ÷ 6.", "opts": [{"t": "All real numbers", "why": "You cannot have half a candy or a negative number."}, {"t": "{0, 1, 2, …, 30}", "ok": true}, {"t": "{0, 6, 12, …, 180}", "why": "These are the masses. The quiz treats the candy count as the range."}, {"t": "{0, 1, 2, 3, 4, 5, 6}", "why": "6 is the mass of one candy, not the number of candies."}], "why": "180 ÷ 6 = 30 candies, counting down 30, 29, …, 0. The quiz marks {0, 1, …, 30}."}, {"type": "choice", "q": "Which relation is NOT a function: (a) 7 maps to 2 and to 9; (b) and (c) every x maps to 5; (d) 3 → 11, 4 → 15?", "think": "Function rule: every input has exactly ONE output.", "opts": [{"t": "(a)", "ok": true}, {"t": "(b)", "why": "Many inputs going to the same output (all → 5) is allowed."}, {"t": "(c)", "why": "Same as (b): all → 5 is still one output per input."}, {"t": "(d)", "why": "Each input has one output."}], "why": "In (a) the input 7 has two outputs (2 and 9), so it is not a function."}, {"type": "choice", "q": "What is the domain of f(x) = x⁻¹ so it is defined everywhere on the domain?", "think": "x⁻¹ = 1/x. Which number can you never divide by?", "opts": [{"t": "(2, ∞)", "why": "Numbers like 1 or −5 also work, so this is too small."}, {"t": "[0, ∞)", "why": "This includes 0, and 1/0 is undefined. It also leaves out the negatives."}, {"t": "(−∞, ∞) − {0}", "ok": true}], "why": "Every real number except 0."}, {"type": "choice", "q": "If f(x) = 2x, what is the range?", "think": "Can you get any output y? Try x = y/2.", "opts": [{"t": "(0, ∞)", "why": "Negative x gives negative outputs, e.g. f(−1) = −2."}, {"t": "(−∞, ∞) − {0}", "why": "f(0) = 0, so 0 is an output."}, {"t": "(−∞, ∞)", "ok": true}], "why": "Any y comes from x = y/2, so the range is all real numbers."}], "end": "Now open the worked answers below and reread any question you missed."}</script></div>
:::

<details class="beginner-answer" markdown="1">
<summary>Show all worked answers — Quiz 3 (open after you finish the quiz)</summary>

**Q1.** A function is ______ if and only if f(a) = f(b) implies a = b for all a, b in the domain.

(a) many-to-many (b) one-to-one (c) many-to-one (d) one-to-many

**✅ Answer: (b) one-to-one (injective)**

“If the outputs are equal, the inputs must be equal” = **no two different inputs share an output** = **one-to-one**.

- **One-to-one (injective):** different inputs → different outputs.
- **Onto (surjective):** every value in the codomain is hit by some input.
- **Bijection:** both one-to-one and onto.


**Q2.** Which f : Z × Z → Z is **not onto**?

(a) a + b (b) a (c) |b| (d) a − b

**✅ Answer: (c) f(a, b) = |b|**

Onto means **every integer** (…, −2, −1, 0, 1, 2, …) can come out.

- |b| (absolute value) is **never negative**, so −1 can never be an output → **not onto**.
- a + b, a, a − b can each give any integer (e.g. a + b = n with a = n, b = 0).


**Q3.** f(x) = 2x + 1, g(x) = 3x + 4. The composition of f and g (f ∘ g) is:

(a) 6x + 9 (b) 6x + 7 (c) 6x + 6 (d) 6x + 8

**✅ Answer: (a) 6x + 9**

**(f ∘ g)(x) = f(g(x))**: do g first, then put the result into f.

1. g(x) = 3x + 4
2. f(3x + 4) = 2(3x + 4) + 1 = 6x + 8 + 1 = **6x + 9**

Careful: g ∘ f = g(f(x)) = 3(2x + 1) + 4 = 6x + 7 — that is option (b), the trap.


**Q4.** The inverse of f(x) = x³ + 2 is:

(a) (y − 2)^(1/2) (b) (y − 2)^(1/3) (c) y^(1/3) (d) y − 2

**✅ Answer: (b) f⁻¹(y) = (y − 2)^(1/3) = ∛(y − 2)**

**Method for an inverse (3 steps):**

1. Write y = x³ + 2.
2. Solve for x: subtract 2 → y − 2 = x³; take the cube root → x = ∛(y − 2).
3. So f⁻¹(y) = (y − 2)^(1/3).

Check: f(2) = 8 + 2 = 10, and ∛(10 − 2) = ∛8 = 2 ✓.


**Q5.** From the graph (closed dot at x = −4, open circle at x = 3), find the **domain**.

(a) [−4, 3] (b) (−4, 3) (c) (−4, 3] (d) [−4, 3)

**✅ Answer: (d) [−4, 3)**

- **Domain = all x-values the graph covers** (read left → right).
- **Closed dot ● = included → square bracket [ ]. Open circle ○ = not included → round bracket ( ).**
- Starts at −4 with ● → “[−4”. Ends at 3 with ○ → “3)”. So [−4, 3).


**Q6.** From the graph (starts with a closed dot at height y = 2, then goes down forever with an arrow), find the **range**.

(a) [−4, ∞) (b) (−∞, 2] (c) [2, ∞) (d) (−∞, ∞)

**✅ Answer: (b) (−∞, 2]**

- **Range = all y-values the graph covers** (read bottom → top).
- Highest point: y = 2 with a closed dot → included → “2]”.
- The arrow keeps going down forever → “(−∞”. Infinity always takes a round bracket.


**Q7.** 180 g of candies, 6 g each. As each candy is eaten, the mass left is plotted against the **number of candies left**. Range of this relation (as given in the quiz)?

(a) all real numbers (b) {0, 1, 2, …, 30} (c) {0, 6, 12, …, 180} (d) {0, 1, …, 6}

**✅ Answer given by the quiz: (b) {0, 1, 2, …, 30}**

Number of candies at the start: 180 ÷ 6 = **30**. As they are eaten the count goes 30, 29, …, 0, so the possible candy counts are {0, 1, …, 30}.
Note: the masses would be {0, 6, 12, …, 180}. The quiz treats the candy count as the range, so remember **(b)** for this question.


**Q8.** Which arrow diagram is **not a function**?

**✅ Answer: (a) — the input 7 has two arrows (to 2 and to 9)**

**Function rule: every input has exactly ONE output.**

- In (a), 7 → 2 and 7 → 9: one input, two outputs → **not a function**.
- Many inputs going to the same output (like all → 5 in (b) and (c)) is **allowed**.


**Q9.** Domain of f(x) = x⁻¹ (that is, 1/x) so it is defined everywhere?

(a) (2, ∞) (b) [0, ∞) (c) (−∞, ∞) − {0}

**✅ Answer: (c) all real numbers except 0**

x⁻¹ = 1/x, and **you cannot divide by 0**. Every other real number is fine, so remove only 0.


**Q10.** Range of f(x) = 2x?

(a) (0, ∞) (b) (−∞, ∞) − {0} (c) (−∞, ∞)

**✅ Answer: (c) (−∞, ∞) — all real numbers**

To get any output y, use x = y/2: f(y/2) = y. So every real number (including 0, from x = 0) is an output.


</details>

## Quiz 4 — Sequences and Summations

*Notes for this topic: [Week 04](Week%2004/Week%2004%20-%20Study%20Guide.html)*

These are all **10 questions from the official CODL Quiz 4 — Sequences and Summations**.

**How to use it:** answer each question in the quiz box. If you choose a wrong option, it tells you **why that option is wrong** and gives a hint — try again until you get it. When you are right, it explains why. After the quiz, open the worked answers for the full method you can write in the written exam.

:::tool Do the quiz first — official Quiz 4
<div id="gp-m04-official" class="gp"><script type="application/json">{"accts": {}, "steps": [{"type": "choice", "q": "Fifth term of the sequence a(n) = 2n + 3?", "think": "Fifth term → put n = 5.", "opts": [{"t": "13", "ok": true}, {"t": "−7", "why": "Check the signs: 2(5) + 3 has no subtraction."}, {"t": "−13", "why": "Nothing is negative here: 2 × 5 + 3."}, {"t": "7", "why": "7 is a(2). Put n = 5."}], "why": "a(5) = 2(5) + 3 = 13."}, {"type": "choice", "q": "Sum of the infinite series 1 + 1/3 + 1/3² + …", "think": "Geometric: a = 1, r = 1/3. Infinite sum S = a / (1 − r).", "opts": [{"t": "3/2", "ok": true}, {"t": "4/3", "why": "That is only 1 + 1/3, the first two terms."}, {"t": "10/9", "why": "Too small — even the first three terms already make 13/9."}, {"t": "2", "why": "2 would be the sum when r = 1/2, not 1/3."}], "why": "S = 1 / (1 − 1/3) = 1 / (2/3) = 3/2."}, {"type": "choice", "q": "Sum of the first six terms of 1 + 7 + 13 + …", "think": "Arithmetic: add 6 each time. List six terms and add, or use Sₙ = n/2 (2a + (n − 1)d).", "opts": [{"t": "12", "why": "That is not even past the third term (13)."}, {"t": "48", "why": "Check your list: 1, 7, 13, 19, 25, 31."}, {"t": "96", "ok": true}, {"t": "24", "why": "Six terms add to much more: 31 is the sixth term alone."}], "why": "1 + 7 + 13 + 19 + 25 + 31 = 96 = 6/2 × (2 + 30)."}, {"type": "choice", "q": "An infinite geometric series has a sum only if the common ratio r satisfies:", "think": "The terms must get smaller and smaller towards 0. What happens if r = 1?", "opts": [{"t": "−1 ≤ r ≤ 1", "why": "With r = 1 the series 1 + 1 + 1 + … grows forever, so the ends must be excluded."}, {"t": "−1 < r < 1", "ok": true}, {"t": "r < −1 or r > 1", "why": "Then the terms grow bigger, so there is no sum."}, {"t": "r ≤ −1 or r ≥ 1", "why": "Then the terms do not shrink, so there is no sum."}], "why": "|r| < 1, i.e. −1 < r < 1 (strict)."}, {"type": "choice", "q": "A simple formula for 1, 7, 25, 79, 241, 727, …", "think": "Test each option with n = 1, 2, 3. The first term must be 1.", "opts": [{"t": "3ⁿ⁺¹ − 2", "why": "n = 1 gives 9 − 2 = 7, but the first term is 1."}, {"t": "3ⁿ − 2", "ok": true}, {"t": "(−3)ⁿ + 4", "why": "n = 1 gives −3 + 4 = 1 ✓ but n = 2 gives 9 + 4 = 13, not 7."}, {"t": "n² − 2", "why": "n = 1 gives −1, not 1."}], "why": "3¹ − 2 = 1, 3² − 2 = 7, 3³ − 2 = 25, 3⁴ − 2 = 79 ✓."}, {"type": "choice", "q": "Value of Σ (k = 50 to 100) k²?", "think": "Use 1² + … + n² = n(n + 1)(2n + 1)/6. Sum from 50 = (1 to 100) − (1 to 49).", "opts": [{"t": "297,925", "ok": true}, {"t": "297,900", "why": "Close — recheck 49 × 50 × 99 / 6 = 40,425."}, {"t": "338,350", "why": "That is the sum from 1 to 100. You still need to subtract 1² … 49²."}, {"t": "290,025", "why": "You probably subtracted up to 50 instead of 49 — 50² must stay in."}], "why": "338,350 − 40,425 = 297,925."}, {"type": "choice", "q": "Which sequence is arithmetic with common difference 3?", "think": "Arithmetic = a + dn form, with no n². The number in front of n is d.", "opts": [{"t": "aₙ = 2n² + 3n", "why": "It has n², so the gaps between terms change."}, {"t": "aₙ = 5 + 3n", "ok": true}, {"t": "aₙ = 3n² + 3n", "why": "It has n², so it is not arithmetic."}, {"t": "aₙ = 2n² + 3", "why": "It has n², so it is not arithmetic."}], "why": "5 + 3n → 8, 11, 14, …: add 3 each time."}, {"type": "choice", "q": "Which sequence is geometric with common ratio 3?", "think": "Geometric = a × rⁿ⁻¹ (n is in the power).", "opts": [{"t": "gₙ = 3n² + 3n", "why": "n is not in a power, so the ratio is not constant."}, {"t": "gₙ = 2n² + 3", "why": "Not of the form a × rⁿ⁻¹."}, {"t": "gₙ = 6(3ⁿ⁻¹)", "ok": true}, {"t": "gₙ = 2n² + 3n", "why": "Not of the form a × rⁿ⁻¹."}], "why": "6, 18, 54, …: multiply by 3 each time."}, {"type": "choice", "q": "2¹ + 2² + 2³ + … + 2ⁿ = ?", "think": "Geometric sum Sₙ = a(rⁿ − 1)/(r − 1) with a = 2, r = 2. Or test n = 2: 2 + 4 = 6.", "opts": [{"t": "2(2ⁿ − 1)", "ok": true}, {"t": "2(2ⁿ⁻¹ − 1)", "why": "Test n = 2: 2(2 − 1) = 2, but 2 + 4 = 6."}, {"t": "2(2ⁿ⁺¹ − 1)", "why": "Test n = 2: 2(8 − 1) = 14, but 2 + 4 = 6."}, {"t": "None of the above", "why": "One option does match — test n = 2."}], "why": "Sₙ = 2(2ⁿ − 1)/(2 − 1) = 2(2ⁿ − 1). n = 2: 2(3) = 6 ✓."}, {"type": "choice", "q": "Third term of aₙ = (−1)ⁿ(n − 7)?", "think": "Put n = 3. (−1) to an odd power is −1. Negative × negative = positive.", "opts": [{"t": "8", "why": "3 − 7 = −4, not ±8."}, {"t": "4", "ok": true}, {"t": "−4", "why": "You forgot the (−1)³ = −1 factor: (−1) × (−4) = +4."}], "why": "(−1)³ × (3 − 7) = (−1) × (−4) = 4."}], "end": "Now open the worked answers below and reread any question you missed."}</script></div>
:::

<details class="beginner-answer" markdown="1">
<summary>Show all worked answers — Quiz 4 (open after you finish the quiz)</summary>

**Q1.** Fifth term of a(n) = 2n + 3?

(a) 13 (b) −7 (c) −13 (d) 7

**✅ Answer: (a) 13**

“Fifth term” means put **n = 5**: a(5) = 2(5) + 3 = 10 + 3 = **13**.


**Q2.** Sum of the infinite series 1 + 1/3 + 1/3² + …

(a) 3/2 (b) 4/3 (c) 10/9 (d) 2

**✅ Answer: (a) 3/2**

It is **geometric**: each term is the one before × 1/3.

- First term a = 1, common ratio r = 1/3.
- **Infinite geometric sum: S = a / (1 − r)** (only when −1 < r < 1).
- S = 1 / (1 − 1/3) = 1 / (2/3) = **3/2**.


**Q3.** Sum of the first six terms of 1 + 7 + 13 + …

(a) 12 (b) 48 (c) 96 (d) 24

**✅ Answer: (c) 96**

It is **arithmetic**: add 6 each time (a = 1, d = 6).

- Quick way: list them: 1 + 7 + 13 + 19 + 25 + 31 = **96**.
- Formula: **Sₙ = n/2 × (2a + (n − 1)d)** = 6/2 × (2 + 5×6) = 3 × 32 = **96**.


**Q4.** An infinite geometric series has a sum only if the common ratio r satisfies:

(a) −1 ≤ r ≤ 1 (b) −1 < r < 1 (c) r < −1 or r > 1 (d) r ≤ −1 or r ≥ 1

**✅ Answer: (b) −1 < r < 1 (that is, |r| < 1)**

The terms must shrink towards 0. If r = 1 the terms stay the same (1 + 1 + 1 + … grows forever), so the ends are **not** included — strict “<”.


**Q5.** A simple formula for 1, 7, 25, 79, 241, 727, …

(a) 3ⁿ⁺¹ − 2 (b) 3ⁿ − 2 (c) (−3)ⁿ + 4 (d) n² − 2

**✅ Answer: (b) aₙ = 3ⁿ − 2**

**Fast method: test each option with n = 1, 2, 3.**

- (b) n = 1: 3 − 2 = 1 ✓, n = 2: 9 − 2 = 7 ✓, n = 3: 27 − 2 = 25 ✓, n = 4: 81 − 2 = 79 ✓.
- (a) n = 1: 9 − 2 = 7 ✗ (the first term must be 1).
Hint you can spot: the terms are close to powers of 3 (3, 9, 27, 81) minus 2.


**Q6.** Value of Σ (k = 50 to 100) k²

(a) 297,925 (b) 297,900 (c) 338,350 (d) 290,025

**✅ Answer: (a) 297,925**

**Formula: 1² + 2² + … + n² = n(n + 1)(2n + 1) / 6.**
A sum that starts at 50 = (sum from 1 to 100) − (sum from 1 to **49**).

- 1 to 100: 100 × 101 × 201 / 6 = 338,350
- 1 to 49: 49 × 50 × 99 / 6 = 40,425
- 338,350 − 40,425 = **297,925**

Trap: (c) 338,350 is the sum from 1 to 100. Subtract up to **49**, not 50, because 50² must stay in.


**Q7.** Which sequence is arithmetic with common difference 3?

(a) 2n² + 3n (b) 5 + 3n (c) 3n² + 3n (d) 2n² + 3

**✅ Answer: (b) aₙ = 5 + 3n**

**Arithmetic = a straight-line formula a + dn (no n²).** The number in front of n is the common difference.
5 + 3n → 8, 11, 14, … (add 3 each time) ✓. Anything with n² is not arithmetic.


**Q8.** Which sequence is geometric with common ratio 3?

(a) 3n² + 3n (b) 2n² + 3 (c) 6(3ⁿ⁻¹) (d) 2n² + 3n

**✅ Answer: (c) gₙ = 6(3ⁿ⁻¹)**

**Geometric = a × rⁿ⁻¹** (n in the power). Here a = 6, r = 3 → 6, 18, 54, … (× 3 each time) ✓.


**Q9.** 2¹ + 2² + 2³ + … + 2ⁿ =

(a) 2(2ⁿ − 1) (b) 2(2ⁿ⁻¹ − 1) (c) 2(2ⁿ⁺¹ − 1) (d) none

**✅ Answer: (a) 2(2ⁿ − 1)**

**Finite geometric sum: Sₙ = a(rⁿ − 1)/(r − 1).** Here a = 2, r = 2:
Sₙ = 2(2ⁿ − 1)/(2 − 1) = **2(2ⁿ − 1)**.
Check with n = 2: 2 + 4 = 6, and 2(4 − 1) = 6 ✓.


**Q10.** Third term of aₙ = (−1)ⁿ(n − 7)

(a) 8 (b) 4 (c) 8 (d) −4

**✅ Answer: (b) 4**

Put n = 3: (−1)³ × (3 − 7) = (−1) × (−4) = **4**.
Remember: (−1) to an **odd** power = −1, to an **even** power = +1; and negative × negative = positive.


</details>

## Quiz 5 — Matrices

*Notes for this topic: [Week 05](Week%2005/Week%2005%20-%20Study%20Guide.html)*

These are all **7 questions from the official CODL Quiz 5 — Matrices**.

**How to use it:** answer each question in the quiz box. If you choose a wrong option, it tells you **why that option is wrong** and gives a hint — try again until you get it. When you are right, it explains why. After the quiz, open the worked answers for the full method you can write in the written exam.

:::tool Do the quiz first — official Quiz 5
<div id="gp-m05-official" class="gp"><script type="application/json">{"accts": {}, "steps": [{"type": "choice", "q": "A and B are matrices of the same order. True or false: AB = BA.", "think": "Is matrix multiplication commutative? Try two small matrices in your head.", "opts": [{"t": "True", "why": "Matrix multiplication is not commutative — usually AB ≠ BA."}, {"t": "False", "ok": true}], "why": "Order matters in matrix multiplication; in general AB ≠ BA."}, {"type": "choice", "q": "For a matrix A, (Aᵀ)ᵀ equals:", "think": "Transpose swaps rows and columns. What happens if you swap twice?", "opts": [{"t": "None of the mentioned", "why": "One option is right — swapping twice gets you back to the start."}, {"t": "Aᵀ", "why": "That is after one transpose, not two."}, {"t": "Can't say", "why": "It is always the same answer."}, {"t": "A", "ok": true}], "why": "Swapping rows and columns twice returns the original matrix."}, {"type": "choice", "q": "A and B are symmetric. AB = BA if and only if:", "think": "Use (AB)ᵀ = BᵀAᵀ, and for symmetric matrices Aᵀ = A, Bᵀ = B.", "opts": [{"t": "AB is a null matrix", "why": "AB = BA can happen with non-zero AB."}, {"t": "AB is an anti-symmetric matrix", "why": "Anti-symmetric means (AB)ᵀ = −AB; that is not the condition."}, {"t": "AB is a symmetric matrix", "ok": true}, {"t": "None of the mentioned", "why": "One option is the exact condition."}], "why": "(AB)ᵀ = BᵀAᵀ = BA. So AB is symmetric exactly when BA = AB."}, {"type": "choice", "q": "An n × n matrix with 1 on the diagonal (Aᵢᵢ = 1) and 0 elsewhere (Aᵢⱼ = 0, i ≠ j) is called:", "think": "It acts like the number 1 in multiplication.", "opts": [{"t": "Null matrix", "why": "A null (zero) matrix has 0 everywhere, including the diagonal."}, {"t": "Singular matrix", "why": "Singular means determinant 0; the identity has determinant 1."}, {"t": "Identity matrix", "ok": true}, {"t": "None of the above", "why": "This matrix has a standard name."}], "why": "Identity matrix I: AI = IA = A."}, {"type": "choice", "q": "A symmetric matrix is one in which:", "think": "Symmetric = a mirror image across the main diagonal.", "opts": [{"t": "All diagonal elements are 1", "why": "That describes part of the identity matrix, not symmetry."}, {"t": "All diagonal elements are zero", "why": "That is a property of skew-symmetric matrices, not the definition of symmetric."}, {"t": "A = Aᵀ", "ok": true}, {"t": "A = −Aᵀ", "why": "That is skew- (anti-) symmetric."}], "why": "Symmetric: A equals its transpose (aᵢⱼ = aⱼᵢ)."}, {"type": "choice", "q": "A matrix with many rows and one column is called:", "think": "Name it after the single thing it has one of.", "opts": [{"t": "Column matrix", "ok": true}, {"t": "Row matrix", "why": "A row matrix has one row and many columns."}, {"t": "Diagonal matrix", "why": "Diagonal matrices are square with zeros off the diagonal."}, {"t": "None of the mentioned", "why": "It has a standard name."}], "why": "n × 1 = column matrix; 1 × n = row matrix."}, {"type": "choice", "q": "Two matrices can be added if:", "think": "Addition is entry by entry, so every entry needs a partner.", "opts": [{"t": "Rows of the first = columns of the second", "why": "That is the rule for multiplication (columns of A = rows of B), not addition."}, {"t": "Both rows and columns of the two matrices are the same", "ok": true}, {"t": "Only the rows are the same", "why": "The columns must also match, or some entries have no partner."}, {"t": "Only the columns are the same", "why": "The rows must also match."}], "why": "Same order (same rows AND same columns), then add entry by entry."}], "end": "Now open the worked answers below and reread any question you missed."}</script></div>
:::

<details class="beginner-answer" markdown="1">
<summary>Show all worked answers — Quiz 5 (open after you finish the quiz)</summary>

**Q1.** A and B are matrices of the same order. True or false: AB = BA?

**✅ Answer: False**

Matrix multiplication is **not commutative** — order matters. In general AB ≠ BA.
Tiny example: A = [[1, 1], [0, 0]], B = [[1, 0], [1, 0]] → AB = [[2, 0], [0, 0]] but BA = [[1, 1], [1, 1]].


**Q2.** (Aᵀ)ᵀ equals:

(a) none (b) Aᵀ (c) can't say (d) A

**✅ Answer: (d) A**

**Transpose = swap rows and columns.** Doing it twice swaps them back, so you get A again.


**Q3.** A and B are symmetric. Then AB = BA if and only if:

(a) AB is a null matrix (b) AB is anti-symmetric (c) AB is symmetric (d) none

**✅ Answer: (c) AB is symmetric**

Why: (AB)ᵀ = BᵀAᵀ = BA (because Aᵀ = A and Bᵀ = B).
So AB is symmetric ((AB)ᵀ = AB) exactly when BA = AB.
**Rule to remember: (AB)ᵀ = BᵀAᵀ** — the order reverses.


**Q4.** An n × n matrix with Aᵢᵢ = 1 (diagonal) and Aᵢⱼ = 0 for i ≠ j is called:

(a) null (b) singular (c) identity (d) none

**✅ Answer: (c) identity matrix (I)**

1s on the main diagonal, 0s everywhere else. AI = IA = A, just like × 1 for numbers.

- **Null (zero) matrix:** every entry is 0.
- **Singular matrix:** determinant = 0 (no inverse).


**Q5.** A symmetric matrix is one in which:

(a) all diagonal elements are 1 (b) all diagonal elements are 0 (c) A = Aᵀ (d) A = −Aᵀ

**✅ Answer: (c) A = Aᵀ**

Symmetric = equal to its own transpose (mirror image across the main diagonal: aᵢⱼ = aⱼᵢ).
A = −Aᵀ is **skew- (anti-) symmetric**.


**Q6.** A matrix with many rows and one column is a:

(a) column matrix (b) row matrix (c) diagonal matrix (d) none

**✅ Answer: (a) column matrix**

One **column** (n × 1) = column matrix. One **row** (1 × n) = row matrix.


**Q7.** Two matrices can be **added** if:

(a) rows of the first = columns of the second (b) both rows and columns are the same (c) rows same (d) columns same

**✅ Answer: (b) both have the same number of rows and the same number of columns**

**Addition:** same size (same order), add entry by entry.
**Multiplication A × B:** columns of A = rows of B — that is option (a), the trap.


</details>

## Quiz 6 — Number Theory and Cryptography

*Notes for this topic: [Week 06](Week%2006/Week%2006%20-%20Study%20Guide.html)*

These are all **8 questions from the official CODL Quiz 6 — Number Theory and Cryptography**.

**How to use it:** answer each question in the quiz box. If you choose a wrong option, it tells you **why that option is wrong** and gives a hint — try again until you get it. When you are right, it explains why. After the quiz, open the worked answers for the full method you can write in the written exam.

:::tool Do the quiz first — official Quiz 6
<div id="gp-m06-official" class="gp"><script type="application/json">{"accts": {}, "steps": [{"type": "choice", "q": "a, b, c are integers. Which statement is INCORRECT?", "think": "Three of these are standard divisibility rules. One is simply false about integers.", "opts": [{"t": "If a|b and b|c, then a|c", "why": "True: e.g. 2|4 and 4|12 ⇒ 2|12."}, {"t": "If a|b, then a|bc for all integers c", "why": "True: e.g. 3|6 ⇒ 3|30."}, {"t": "a + b + c is not an integer", "ok": true}, {"t": "If a|b and a|c, then a|(b + c)", "why": "True: e.g. 5|10 and 5|15 ⇒ 5|25."}], "why": "Adding integers always gives an integer, so this statement is false."}, {"type": "choice", "q": "The quotient and remainder when 34 is divided by 5 are:", "think": "Write 34 = 5 × q + r with 0 ≤ r < 5.", "opts": [{"t": "6 and 4", "ok": true}, {"t": "6 and 5", "why": "A remainder must be smaller than 5. Also 5 × 6 + 5 = 35."}, {"t": "3 and 4", "why": "5 × 3 + 4 = 19, not 34."}, {"t": "4 and 6", "why": "Order is quotient then remainder, and 6 is too big for a remainder."}], "why": "34 = 5 × 6 + 4 → quotient 6, remainder 4."}, {"type": "choice", "q": "True or false: a is congruent to b modulo m if m divides a + b.", "think": "Congruent mod m = same remainder. Is that about the sum or the difference?", "opts": [{"t": "True", "why": "The definition uses the difference a − b, not the sum."}, {"t": "False", "ok": true}], "why": "a ≡ b (mod m) ⇔ m | (a − b)."}, {"type": "choice", "q": "Which statement is INCORRECT?", "think": "For each, subtract the two numbers and check if m divides the difference.", "opts": [{"t": "2 ≡ 37 mod 5", "why": "37 − 2 = 35, and 5 divides 35. Correct."}, {"t": "4 ≡ 29 mod 5", "why": "29 − 4 = 25, and 5 divides 25. Correct."}, {"t": "7 ≡ 62 mod 9", "ok": true}, {"t": "2 ≡ 42 mod 4", "why": "42 − 2 = 40, and 4 divides 40. Correct."}], "why": "62 − 7 = 55, and 9 does not divide 55 (9 × 6 = 54)."}, {"type": "choice", "q": "True or false: a prime is a natural number greater than 1 that cannot be written as the product of two smaller natural numbers.", "think": "Think of 7 (prime) and 6 = 2 × 3 (not prime).", "opts": [{"t": "False", "why": "This is exactly the definition of a prime."}, {"t": "True", "ok": true}], "why": "That is the definition. 1 is not prime; 2 is the only even prime."}, {"type": "choice", "q": "Which set contains only prime numbers?", "think": "Test each number: try dividing by 2, 3, 5, 7.", "opts": [{"t": "{13, 29, 41}", "ok": true}, {"t": "{55, 37, 99}", "why": "55 = 5 × 11 and 99 = 9 × 11 are not prime."}, {"t": "{32, 45, 16}", "why": "32 and 16 are even; 45 = 5 × 9. None are prime."}, {"t": "{7, 89, 17}", "why": "These ARE all prime too — but the quiz key accepts {13, 29, 41} only."}], "why": "13, 29, 41 are all prime. (The quiz also has {7, 89, 17}, which is all prime as well — the key only marks {13, 29, 41}.)"}, {"type": "choice", "q": "Encrypt CART with Caesar's cipher.", "think": "Caesar's cipher shifts every letter 3 places forward: A → D, B → E, …", "opts": [{"t": "PBQR", "why": "That is not a shift of 3: C + 3 = F."}, {"t": "FDUW", "ok": true}, {"t": "LIJT", "why": "C + 3 = F, not L."}, {"t": "SKNW", "why": "C + 3 = F, not S."}], "why": "C → F, A → D, R → U, T → W = FDUW."}, {"type": "choice", "q": "Decrypt ERRN with Caesar's cipher.", "think": "Decrypt = shift every letter 3 places back.", "opts": [{"t": "BOOK", "ok": true}, {"t": "ROOM", "why": "E − 3 = B, not R."}, {"t": "KEEN", "why": "E − 3 = B, not K."}, {"t": "REEL", "why": "E − 3 = B, not R."}], "why": "E → B, R → O, R → O, N → K = BOOK."}], "end": "Now open the worked answers below and reread any question you missed."}</script></div>
:::

<details class="beginner-answer" markdown="1">
<summary>Show all worked answers — Quiz 6 (open after you finish the quiz)</summary>

**Q1.** a, b, c are integers. Which statement is **incorrect**?

(a) If a|b and b|c, then a|c. (b) If a|b, then a|bc for all integers c. (c) a + b + c is not an integer. (d) If a|b and a|c, then a|(b + c).

**✅ Answer: (c) “a + b + c is not an integer”**

Adding integers always gives an integer, so (c) is wrong. The others are the three **divisibility rules** to memorise (a|b means “a divides b”, b = a × something):

- a|b and b|c ⇒ a|c (e.g. 2|4, 4|12 ⇒ 2|12)
- a|b ⇒ a|bc (e.g. 3|6 ⇒ 3|6×5)
- a|b and a|c ⇒ a|(b + c) (e.g. 5|10, 5|15 ⇒ 5|25)


**Q2.** Quotient and remainder when 34 is divided by 5?

(a) 6 and 4 (b) 6 and 5 (c) 3 and 4 (d) 4 and 6

**✅ Answer: (a) quotient 6, remainder 4**

34 = 5 × **6** + **4**. (Write a = d × q + r with 0 ≤ r < d.) The remainder must be smaller than 5, so (b) is impossible.
In notation: 34 div 5 = 6, 34 mod 5 = 4.


**Q3.** True or false: “a is congruent to b modulo m if m divides **a + b**.”

**✅ Answer: False**

Correct definition: **a ≡ b (mod m) if m divides a − b** (the **difference**), i.e. a and b leave the same remainder when divided by m.


**Q4.** Which is **incorrect**?

(a) 2 ≡ 37 mod 5 (b) 4 ≡ 29 mod 5 (c) 7 ≡ 62 mod 9 (d) 2 ≡ 42 mod 4

**✅ Answer: (c) 7 ≡ 62 mod 9**

**Test: subtract, then check if m divides the difference.**

- (a) 37 − 2 = 35, 5 | 35 ✓ (b) 29 − 4 = 25, 5 | 25 ✓ (d) 42 − 2 = 40, 4 | 40 ✓
- (c) 62 − 7 = 55, and 9 does **not** divide 55 (9 × 6 = 54) → incorrect.


**Q5.** True or false: a prime is a natural number greater than 1 that cannot be written as the product of two smaller natural numbers.

**✅ Answer: True**

That is the definition. Equivalently: its only positive divisors are 1 and itself. 1 is **not** prime; 2 is the only even prime.


**Q6.** Which set contains only primes?

(a) {13, 29, 41} (b) {55, 37, 99} (c) {32, 45, 16} (d) {7, 89, 17}

**✅ Answer marked by the quiz: (a) {13, 29, 41}**

- (b) 55 = 5 × 11 and 99 = 9 × 11 → not prime. (c) all even or divisible by 5 → not prime.
- (a) 13, 29, 41 are all prime ✓.
- Note: (d) 7, 89, 17 are **also** all prime, so the question has two correct sets. The quiz accepted (a).

**How to test if n is prime:** try dividing by the primes 2, 3, 5, 7, … up to √n. If none divides it, n is prime. (89: √89 ≈ 9.4; 2, 3, 5, 7 don't divide 89 → prime.)


**Q7.** Encrypt **CART** with Caesar's cipher.

(a) PBQR (b) FDUW (c) LIJT (d) SKNW

**✅ Answer: (b) FDUW**

**Caesar cipher: shift every letter 3 forward.** f(p) = (p + 3) mod 26, with A = 0, …, Z = 25.
C → F, A → D, R → U, T → W → **FDUW**. (After Z, wrap round: X → A, Y → B, Z → C.)


**Q8.** Decrypt **ERRN** with Caesar's cipher.

(a) BOOK (b) ROOM (c) KEEN (d) REEL

**✅ Answer: (a) BOOK**

**Decrypt = shift 3 back.** f⁻¹(c) = (c − 3) mod 26.
E → B, R → O, R → O, N → K → **BOOK**.


</details>

## Quiz 7 — Induction and Recursion

*Notes for this topic: [Week 07](Week%2007/Week%2007%20-%20Study%20Guide.html)*

These are all **9 questions from the official CODL Quiz 7 — Induction and Recursion**.

**How to use it:** answer each question in the quiz box. If you choose a wrong option, it tells you **why that option is wrong** and gives a hint — try again until you get it. When you are right, it explains why. After the quiz, open the worked answers for the full method you can write in the written exam.

:::tool Do the quiz first — official Quiz 7
<div id="gp-m07-official" class="gp"><script type="application/json">{"accts": {}, "steps": [{"type": "choice", "q": "True or false: mathematical induction can be used to prove a property is true for all positive integers.", "think": "What kind of statement is induction designed for?", "opts": [{"t": "False", "why": "That is exactly what induction is used for."}, {"t": "True", "ok": true}], "why": "Induction proves “P(n) for every n ≥ 1” (or from some starting number)."}, {"type": "choice", "q": "Which statement is INCORRECT?", "think": "How many steps does an induction proof have?", "opts": [{"t": "The inductive hypothesis is not used in the basis step", "why": "True: the basis step just checks P(1) directly."}, {"t": "An induction proof has three parts: basis step, inductive step and conclusive step", "ok": true}, {"t": "Induction can prove n³ − n is divisible by 3 for every positive n", "why": "True: this is a standard induction example."}, {"t": "In the basis step we show the statement is true for the smallest integer in the statement", "why": "True: that is what the basis step does."}], "why": "There are two steps — basis and inductive. There is no “conclusive step”."}, {"type": "choice", "q": "P(n): 1² + 2² + … + n² = n(n + 1)(2n + 1)/6. What is P(1)?", "think": "Replace every n with 1, on both sides.", "opts": [{"t": "0² = 0(0 + 1)(0 + 1)/6", "why": "That uses n = 0, and the statement starts at n = 1."}, {"t": "n = 1", "why": "That is just the value of n, not the statement P(1)."}, {"t": "1² + 2² + … + n² = n(n + 1)(2n + 1)/6", "why": "That is the general P(n); n has not been replaced."}, {"t": "1² = 1(1 + 1)(2 + 1)/6", "ok": true}], "why": "Both sides equal 1, so P(1) is true — the basis step."}, {"type": "choice", "q": "In the inductive step, assuming P(k) is true, what must be shown?", "think": "Dominoes: if one falls, the next one falls.", "opts": [{"t": "P(1) holds", "why": "P(1) is shown in the basis step."}, {"t": "P(k − 1) holds", "why": "We go forwards, to the next case."}, {"t": "The general formula holds", "why": "That is what the whole proof concludes, not the inductive step."}, {"t": "P(k + 1) holds", "ok": true}], "why": "Assume P(k), prove P(k + 1)."}, {"type": "choice", "q": "To prove the inductive step for this statement, what do you need (as marked by the quiz)?", "think": "The quiz treats the proof as a whole chain starting from the basis step.", "opts": [{"t": "Both the inductive hypothesis and the result obtained in the basis step", "ok": true}, {"t": "Only the result obtained in the basis step", "why": "The inductive step cannot work without assuming P(k)."}, {"t": "Only the inductive hypothesis", "why": "The quiz key also counts the basis-step result."}, {"t": "None of the above", "why": "The quiz key marks one of the options."}], "why": "The quiz key: both. The inductive step uses P(k); the basis step starts the chain."}, {"type": "choice", "q": "How many times do we need to use the inductive hypothesis in the inductive step?", "think": "You replace the P(k) part once, then simplify.", "opts": [{"t": "It is not needed", "why": "Without it you cannot connect P(k) to P(k + 1)."}, {"t": "Twice", "why": "Once is enough."}, {"t": "Only once", "ok": true}, {"t": "None of the above", "why": "One option is right."}], "why": "Use it once: substitute the P(k) formula, then simplify to P(k + 1)."}, {"type": "choice", "q": "True or false: the well-ordering property states that every non-empty set of non-negative integers has a least element.", "think": "Can you always find a smallest number in any non-empty set from {0, 1, 2, …}?", "opts": [{"t": "False", "why": "This is exactly the well-ordering property."}, {"t": "True", "ok": true}], "why": "Every non-empty set of non-negative integers has a smallest member."}, {"type": "choice", "q": "aₙ = 4ⁿ for n = 0, 1, 2, … can be defined recursively by:", "think": "Starting value a₀ = 4⁰. Each power of 4 is the previous one × 4. The rule must start at n = 0.", "opts": [{"t": "a₀ = 1; aₙ₊₁ = 4n·aₙ for n = 0, 1, 2, …", "why": "Multiplying by 4n is wrong: with n = 0 it gives a₁ = 0."}, {"t": "a₀ = 1; aₙ₊₁ = 4aₙ for n = 1, 2, 3, …", "why": "Starting the rule at n = 1 never defines a₁."}, {"t": "a₀ = 1; aₙ₊₁ = 4aₙ for n = 0, 1, 2, …", "ok": true}, {"t": "None of the above", "why": "One option is correct."}], "why": "a₀ = 1 and multiply by 4 each time: 1, 4, 16, 64, …"}, {"type": "choice", "q": "f(0) = 1 and f(n + 1) = 2f(n) + 7 for n = 0, 1, 2, … What is f(1)?", "think": "Put n = 0 into the rule.", "opts": [{"t": "6", "why": "2 × 1 + 7 is not 6."}, {"t": "9", "ok": true}, {"t": "7", "why": "You forgot the 2f(0) part: 2 × 1 = 2."}, {"t": "10", "why": "Check: 2 × 1 + 7 = 9."}], "why": "f(1) = 2f(0) + 7 = 2 + 7 = 9."}], "end": "Now open the worked answers below and reread any question you missed."}</script></div>
:::

<details class="beginner-answer" markdown="1">
<summary>Show all worked answers — Quiz 7 (open after you finish the quiz)</summary>

**Q1.** True or false: mathematical induction can prove that a property is true for **all positive integers**.

**✅ Answer: True**

That is exactly what induction is for: statements of the form “P(n) is true for every n ≥ 1” (or every n ≥ some starting number).


**Q2.** Which statement is **incorrect**?

(a) The inductive hypothesis is not used in the basis step. (b) An induction proof has three parts: basis step, inductive step and **conclusive step**. (c) Induction can prove n³ − n is divisible by 3 for every positive n. (d) In the basis step we show the statement is true for the smallest integer in the statement.

**✅ Answer: (b) — there is no “conclusive step”**

An induction proof has **two** steps:

1. **Basis step:** show P(1) is true (or P(smallest n)).
2. **Inductive step:** assume P(k) is true (the **inductive hypothesis**) and show P(k + 1) is true.

Then you conclude P(n) is true for all n — that is the conclusion, not a separate step.


**Q3.** P(n): 1² + 2² + … + n² = n(n + 1)(2n + 1)/6 for n > 0. What is **P(1)**?

(a) 0² = 0(0+1)(0+1)/6 (b) n = 1 (c) the general formula (d) 1² = 1(1+1)(2+1)/6

**✅ Answer: (d) 1² = 1(1 + 1)(2 + 1)/6**

Replace **every n with 1**. The left side stops at the 1st term (1²); the right side becomes 1 × 2 × 3 / 6 = 1. Both sides equal 1 ✓ — that is the basis step.


**Q4.** In the inductive step, assuming P(k) is true, what must be shown?

(a) P(1) (b) P(k − 1) (c) the general formula (d) P(k + 1)

**✅ Answer: (d) P(k + 1) holds**

**Assume P(k), prove P(k + 1).** Like dominoes: if any one falls (k), the next one falls too (k + 1).


**Q5.** For this proof, what do you need in order to prove the inductive step?

(a) both the inductive hypothesis and the basis-step result (b) only the basis-step result (c) only the inductive hypothesis (d) none

**✅ Answer given by the quiz: (a) both**

The inductive step itself uses the **inductive hypothesis** P(k). The basis step is what lets the chain start at n = 1, so the quiz treats both as needed to complete the proof. Remember **(a)** for this question.


**Q6.** How many times do we need to use the inductive hypothesis in the inductive step?

(a) not needed (b) twice (c) only once (d) none

**✅ Answer: (c) only once**

You use it once: replace the part that equals P(k) (for example 1² + … + k²) with its formula, then simplify to get the P(k + 1) formula.


**Q7.** True or false: the **well-ordering property** says every non-empty set of non-negative integers has a least element.

**✅ Answer: True**

Any non-empty set of numbers from {0, 1, 2, …} has a smallest member. (This is why induction works.)


**Q8.** aₙ = 4ⁿ for n = 0, 1, 2, … can be defined recursively by:

(a) a₀ = 1; aₙ₊₁ = 4n·aₙ (b) a₀ = 1; aₙ₊₁ = 4aₙ for n = 1, 2, … (c) a₀ = 1; aₙ₊₁ = 4aₙ for n = 0, 1, 2, … (d) none

**✅ Answer: (c) a₀ = 1; aₙ₊₁ = 4aₙ for n = 0, 1, 2, …**

A recursive definition needs two parts:

1. **Starting value:** a₀ = 4⁰ = 1.
2. **Rule to get the next term from the previous one:** each power of 4 is the previous × 4 → aₙ₊₁ = 4aₙ.

(b) starts the rule at n = 1, so a₁ would never be defined. (a) multiplies by 4n, which is wrong.


**Q9.** f(0) = 1 and f(n + 1) = 2f(n) + 7. Find f(1).

(a) 6 (b) 9 (c) 7 (d) 10

**✅ Answer: (b) 9**

Put n = 0 into the rule: f(1) = 2f(0) + 7 = 2(1) + 7 = **9**.
Next would be f(2) = 2(9) + 7 = 25 — always use the value you just found.


</details>

## Quiz 8 — Basics of Counting

*Notes for this topic: [Week 08](Week%2008/Week%2008%20-%20Study%20Guide.html)*

These are all **7 questions from the official CODL Quiz 8 — Basics of Counting**.

**How to use it:** answer each question in the quiz box. If you choose a wrong option, it tells you **why that option is wrong** and gives a hint — try again until you get it. When you are right, it explains why. After the quiz, open the worked answers for the full method you can write in the written exam.

:::tool Do the quiz first — official Quiz 8
<div id="gp-m08-official" class="gp"><script type="application/json">{"accts": {}, "steps": [{"type": "choice", "q": "Mary chooses ONE skirt from 3 red skirts and 4 blue skirts. How many choices?", "think": "One skirt that is red OR blue. OR → add; AND → multiply.", "opts": [{"t": "19", "why": "No rule gives 19 here."}, {"t": "7", "ok": true}, {"t": "None of the above", "why": "One option is right."}, {"t": "12", "why": "12 = 3 × 4 is for choosing one red AND one blue. She picks only one skirt."}], "why": "Red or blue → add: 3 + 4 = 7."}, {"type": "choice", "q": "A library has 50 history, 95 fantasy and 30 science books. How many combinations (one of each type)?", "think": "One history AND one fantasy AND one science → multiply.", "opts": [{"t": "14,500", "why": "Check the multiplication: 50 × 95 = 4,750, then × 30."}, {"t": "142,500", "ok": true}, {"t": "15,000", "why": "Recalculate: 50 × 95 × 30."}, {"t": "Unknown", "why": "It can be counted with the product rule."}], "why": "50 × 95 × 30 = 142,500."}, {"type": "choice", "q": "A box has three pairs of socks: red, blue, white. Taking socks without looking, how many must you take to be SURE of a matching pair?", "think": "Pigeonhole: think of the worst luck — one of each colour first.", "opts": [{"t": "4", "ok": true}, {"t": "Insufficient data", "why": "The pigeonhole principle answers it."}, {"t": "14", "why": "Far too many — there are only 6 socks."}, {"t": "7", "why": "There are only 6 socks, and you need fewer than that."}], "why": "Worst case 3 socks of 3 colours; the 4th must match. Boxes + 1 = 4."}, {"type": "choice", "q": "How many students do you need to guarantee at least 2 have the same first two initials?", "think": "Count the possible pairs of initials (AA … ZZ), then use pigeonhole: boxes + 1.", "opts": [{"t": "666", "why": "The number of initial pairs is 26 × 26 = 676."}, {"t": "Unknown", "why": "Pigeonhole gives an exact number."}, {"t": "676", "why": "676 students could all be different. You need one more."}, {"t": "677", "ok": true}], "why": "26 × 26 = 676 pairs; 676 + 1 = 677 guarantees a repeat."}, {"type": "choice", "q": "Lisa arranges 5 different ornaments in a line. How many ways?", "think": "Arranging all n different items in order = n!.", "opts": [{"t": "60", "why": "60 = 5 × 4 × 3 only fills three places."}, {"t": "120", "ok": true}, {"t": "15", "why": "15 is not a count of arrangements here."}, {"t": "720", "why": "720 = 6!, but there are only 5 ornaments."}], "why": "5! = 5 × 4 × 3 × 2 × 1 = 120."}, {"type": "choice", "q": "How many permutations of 2 letters from ABCD?", "think": "Permutation = order matters (AB ≠ BA). P(n, r) = n × (n − 1) × … (r numbers).", "opts": [{"t": "9", "why": "Not a rule for this case."}, {"t": "6", "why": "6 = C(4, 2) — that is when order does NOT matter."}, {"t": "15", "why": "Not a rule for this case."}, {"t": "12", "ok": true}], "why": "P(4, 2) = 4 × 3 = 12."}, {"type": "choice", "q": "How many distinct triangles can be formed from 10 points, no 3 on a straight line?", "think": "A triangle = choose 3 points. Does order matter for a triangle?", "opts": [{"t": "57", "why": "Not a rule for this case."}, {"t": "604,800", "why": "That counts ordered choices of many points — far too many."}, {"t": "120", "ok": true}, {"t": "30", "why": "30 = 10 × 3, not a counting rule."}], "why": "Order does not matter → C(10, 3) = 720 / 6 = 120."}], "end": "Now open the worked answers below and reread any question you missed."}</script></div>
:::

<details class="beginner-answer" markdown="1">
<summary>Show all worked answers — Quiz 8 (open after you finish the quiz)</summary>

**Two rules decide most counting questions:**

- **OR (choose one thing from group A *or* group B) → ADD** (sum rule).
- **AND (one from A *and* one from B *and* …) → MULTIPLY** (product rule).

**Q1.** Mary chooses **one** skirt from 3 red skirts and 4 blue skirts. How many choices?

(a) 19 (b) 7 (c) none (d) 12

**✅ Answer: (b) 7**

One skirt that is red **or** blue → **add**: 3 + 4 = **7**. (12 = 3 × 4 would be choosing one red **and** one blue.)


**Q2.** The library has 50 history, 95 fantasy and 30 science books. How many combinations (one of each type)?

(a) 14,500 (b) 142,500 (c) 15,000 (d) unknown

**✅ Answer: (b) 142,500**

One history **and** one fantasy **and** one science → **multiply**: 50 × 95 × 30 = 4,750 × 30 = **142,500**.


**Q3.** A box holds three pairs of socks: red, blue, white. Taking socks without looking, how many must you take to be **sure** of a matching pair?

(a) 4 (b) insufficient data (c) 14 (d) 7

**✅ Answer: (a) 4**

**Pigeonhole principle:** with 3 colours (3 “boxes”), the worst case is one sock of each colour = 3 socks with no pair. The **next** sock must match one of them → 3 + 1 = **4**.
Rule: boxes + 1 guarantees two in the same box.


**Q4.** How many students guarantee that **at least 2** share the same first two initials?

(a) 666 (b) unknown (c) 676 (d) 677

**✅ Answer: (d) 677**

Number of different pairs of initials (the “boxes”) = 26 × 26 = **676** (AA, AB, …, ZZ).
Pigeonhole: 676 students could all be different; **676 + 1 = 677** guarantees a repeat. (676 is the trap.)


**Q5.** Lisa arranges 5 different ornaments in a line. How many ways?

(a) 60 (b) 120 (c) 15 (d) 720

**✅ Answer: (b) 120**

Arranging **all** n different things in a line = **n!** = 5 × 4 × 3 × 2 × 1 = **120**.
(5 choices for 1st place, 4 left for 2nd, … multiply.)


**Q6.** How many permutations of **2** letters from ABCD?

(a) 9 (b) 6 (c) 15 (d) 12

**✅ Answer: (d) 12**

**Permutation = order matters** (AB ≠ BA). P(n, r) = n! / (n − r)!
P(4, 2) = 4 × 3 = **12**: AB, AC, AD, BA, BC, BD, CA, CB, CD, DA, DB, DC.
(6 = C(4, 2) would be if order did **not** matter.)


**Q7.** How many triangles from 10 points, no 3 on a straight line?

(a) 57 (b) 604,800 (c) 120 (d) 30

**✅ Answer: (c) 120**

A triangle = choose any **3** points; order doesn't matter → **combination**.
C(n, r) = n! / (r!(n − r)!) → C(10, 3) = (10 × 9 × 8) / (3 × 2 × 1) = 720 / 6 = **120**.

**Permutation or combination?** Ask: “If I swap two of the chosen items, is it a different result?” Yes → permutation (order matters). No (same team, same triangle) → combination.


</details>

## Quiz 9 — Relations and Their Properties

*Notes for this topic: [Week 09](Week%2009/Week%2009%20-%20Study%20Guide.html)*

These are all **7 questions from the official CODL Quiz 9 — Relations and Their Properties**.

**How to use it:** answer each question in the quiz box. If you choose a wrong option, it tells you **why that option is wrong** and gives a hint — try again until you get it. When you are right, it explains why. After the quiz, open the worked answers for the full method you can write in the written exam.

:::tool Do the quiz first — official Quiz 9
<div id="gp-m09-official" class="gp"><script type="application/json">{"accts": {}, "steps": [{"type": "choice", "q": "A binary relation from A to B is a subset of:", "think": "A relation is a set of ordered pairs (a, b). Which set contains all such pairs?", "opts": [{"t": "A − B", "why": "That is a set of elements, not pairs."}, {"t": "A ∪ B", "why": "That is a set of elements, not pairs."}, {"t": "A ∩ B", "why": "That is a set of elements, not pairs."}, {"t": "A × B", "ok": true}], "why": "A × B = all ordered pairs (a, b). A relation picks some of them."}, {"type": "choice", "q": "A = {1, 2, 3, 4}, B = {x, y, z}. Which is NOT a relation from A to B?", "think": "Every pair must be (element of A, element of B) — number first, letter second.", "opts": [{"t": "{(3, x), (4, x)}", "why": "Both pairs are (number, letter) — fine."}, {"t": "{(1, x), (2, y), (4, z)}", "why": "All pairs are (number, letter) — fine."}, {"t": "{(1, x), (1, y), (1, z), (4, z)}", "why": "An element of A may appear many times — fine."}, {"t": "{(2, y), (3, z), (y, 4)}", "ok": true}], "why": "(y, 4) is backwards: letter first, number second, so it is not in A × B."}, {"type": "choice", "q": "Which relation contains the pair (1, 2)?", "think": "Put a = 1, b = 2 into each rule.", "opts": [{"t": "{(a, b) | a = b}", "why": "1 = 2 is false."}, {"t": "{(a, b) | a ≤ b}", "ok": true}, {"t": "{(a, b) | a > b}", "why": "1 > 2 is false."}, {"t": "{(a, b) | a = b or a = −b}", "why": "1 = 2 and 1 = −2 are both false."}], "why": "1 ≤ 2 is true."}, {"type": "choice", "q": "True or false: R on A is reflexive if (a, a) ∈ R for every a ∈ A.", "think": "Reflexive = every element is related to itself.", "opts": [{"t": "True", "ok": true}, {"t": "False", "why": "This is exactly the definition of reflexive."}], "why": "Reflexive: (a, a) for every a."}, {"type": "choice", "q": "Which relation on {1, 3, 5} is reflexive?", "think": "Check for all three of (1,1), (3,3), (5,5).", "opts": [{"t": "{(1,1), (1,5), (5,3)}", "why": "Missing (3,3) and (5,5)."}, {"t": "{(1,1), (1,3), (3,1), (3,3)}", "why": "Missing (5,5)."}, {"t": "{(1,3), (1,5), (3,1), (3,3), (5,3), (5,5)}", "why": "Missing (1,1)."}, {"t": "{(1,1), (1,5), (3,1), (3,3), (5,5)}", "ok": true}], "why": "It has (1,1), (3,3) and (5,5). Extra pairs are allowed."}, {"type": "choice", "q": "R = {(a, b) | a < b} on the natural numbers. Which is true?", "think": "Test: if a < b and b < c, is a < c? And if a < b, is b < a?", "opts": [{"t": "R is transitive", "ok": true}, {"t": "R is symmetric", "why": "1 < 2 is true but 2 < 1 is false, so not symmetric."}, {"t": "None of the above", "why": "One property does hold."}, {"t": "R is neither symmetric nor transitive", "why": "It is transitive: a < b and b < c give a < c."}], "why": "a < b and b < c ⇒ a < c, so R is transitive (but not symmetric or reflexive)."}, {"type": "choice", "q": "Which relation on {1, 2, 3, 4} is an equivalence relation?", "think": "Equivalence = Reflexive + Symmetric + Transitive. First check (1,1), (2,2), (3,3), (4,4).", "opts": [{"t": "{(2,4), (4,2)}", "why": "Not reflexive: (1,1), (2,2), … are missing."}, {"t": "{(1,1), (1,2), (2,1), (2,2), (3,3), (4,4)}", "ok": true}, {"t": "{(2,2), (2,3), (2,4), (3,2), (3,3), (3,4)}", "why": "Not reflexive (no (1,1)), and (2,4) has no (4,2), so not symmetric."}], "why": "All (a,a) present, (1,2) with (2,1), and transitive — an equivalence relation."}], "end": "Now open the worked answers below and reread any question you missed."}</script></div>
:::

<details class="beginner-answer" markdown="1">
<summary>Show all worked answers — Quiz 9 (open after you finish the quiz)</summary>

**Q1.** A binary relation from A to B is a subset of:

(a) A − B (b) A ∪ B (c) A ∩ B (d) A × B

**✅ Answer: (d) A × B**

A × B (Cartesian product) = **all ordered pairs (a, b)** with a from A and b from B. A relation just picks some of those pairs.


**Q2.** A = {1, 2, 3, 4}, B = {x, y, z}. Which is **not** a relation from A to B?

(a) {(3, x), (4, x)} (b) {(1, x), (2, y), (4, z)} (c) {(1, x), (1, y), (1, z), (4, z)} (d) {(2, y), (3, z), (y, 4)}

**✅ Answer: (d) — the pair (y, 4) is backwards**

In a relation **from A to B**, every pair must be **(something from A, something from B)**.
(y, 4) has a letter first and a number second, so it is not in A × B.
One element of A may appear many times (option c is fine).


**Q3.** Which relation (on integers) contains the pair (1, 2)?

(a) a = b (b) a ≤ b (c) a > b (d) a = b or a = −b

**✅ Answer: (b) {(a, b) | a ≤ b}**

Put a = 1, b = 2 into each rule: 1 = 2 ✗; **1 ≤ 2 ✓**; 1 > 2 ✗; 1 = ±2 ✗.


**Q4.** True or false: R on A is **reflexive** if (a, a) ∈ R for every a ∈ A.

**✅ Answer: True**

**The four properties (memorise):**

- **Reflexive:** every element is related to itself — (a, a) for **every** a.
- **Symmetric:** if (a, b) is in, then (b, a) is in.
- **Antisymmetric:** (a, b) and (b, a) both in only when a = b.
- **Transitive:** if (a, b) and (b, c) are in, then (a, c) is in.


**Q5.** Which relation on {1, 3, 5} is **reflexive**?

(a) {(1,1), (1,5), (5,3)} (b) {(1,1), (1,3), (3,1), (3,3)} (c) {(1,3), (1,5), (3,1), (3,3), (5,3), (5,5)} (d) {(1,1), (1,5), (3,1), (3,3), (5,5)}

**✅ Answer: (d)**

**Checklist:** reflexive needs **all** of (1,1), (3,3), (5,5).

- (a) missing (3,3), (5,5) (b) missing (5,5) (c) missing (1,1)
- (d) has (1,1), (3,3), (5,5) ✓ (extra pairs are allowed).


**Q6.** R = {(a, b) | a < b} on the natural numbers. Which is true?

(a) R is transitive (b) R is symmetric (c) none (d) neither symmetric nor transitive

**✅ Answer: (a) R is transitive**

- **Transitive?** If a < b and b < c then a < c ✓.
- **Symmetric?** 1 < 2 is true but 2 < 1 is false ✗.
- (Also not reflexive: 1 < 1 is false.)


**Q7.** Which relation on {1, 2, 3, 4} is an **equivalence relation**?

(a) {(2,4), (4,2)} (b) {(1,1), (1,2), (2,1), (2,2), (3,3), (4,4)} (c) {(2,2), (2,3), (2,4), (3,2), (3,3), (3,4)}

**✅ Answer: (b)**

**Equivalence relation = Reflexive + Symmetric + Transitive (R-S-T).**

- (b) Reflexive: (1,1), (2,2), (3,3), (4,4) all there ✓. Symmetric: (1,2) and (2,1) ✓. Transitive: (1,2),(2,1) → (1,1) ✓ and (2,1),(1,2) → (2,2) ✓.
- (a) not reflexive (no (1,1)). (c) not reflexive (no (1,1)) and not symmetric ((2,4) without (4,2)).


</details>

## Quiz 10 — n-ary Relations

*Notes for this topic: [Week 10](Week%2010/Week%2010%20-%20Study%20Guide.html)*

These are all **8 questions from the official CODL Quiz 10 — n-ary Relations**.

**How to use it:** answer each question in the quiz box. If you choose a wrong option, it tells you **why that option is wrong** and gives a hint — try again until you get it. When you are right, it explains why. After the quiz, open the worked answers for the full method you can write in the written exam.

:::tool Do the quiz first — official Quiz 10
<div id="gp-m10-official" class="gp"><script type="application/json">{"accts": {}, "steps": [{"type": "choice", "q": "A 3-ary relation on sets A, B and C is a subset of:", "think": "An n-ary relation is a set of n-tuples. A 3-tuple is (a, b, c).", "opts": [{"t": "A ∩ B ∩ C", "why": "That is a set of elements, not 3-tuples."}, {"t": "A × B × C", "ok": true}, {"t": "A × C", "why": "That only gives pairs, not 3-tuples."}, {"t": "A ∪ B ∪ C", "why": "That is a set of elements, not 3-tuples."}], "why": "All 3-tuples (a, b, c) form A × B × C."}, {"type": "choice", "q": "Which is an n-ary relation?", "think": "An n-ary relation links several values together in one tuple.", "opts": [{"t": "Employee name, number, salary and contact number", "why": "This is one — but so are the others."}, {"t": "All of the above", "ok": true}, {"t": "School name, address, number of teachers and number of students", "why": "This is one — but so are the others."}, {"t": "Five integers in an arithmetic progression with difference 5", "why": "This is one — but so are the others."}], "why": "Each option groups several values into one tuple, so all are n-ary relations."}, {"type": "choice", "q": "R = {(a, b, c, d) | a, b, c, d positive integers, abcd = 6}. The domains are all ____ and the degree is ____.", "think": "Domain = where each value comes from. Degree = how many entries in each tuple.", "opts": [{"t": "the set of positive integers, 4", "ok": true}, {"t": "the letters {a, b, c, d}, 4", "why": "a, b, c, d are variable names; their values are numbers."}, {"t": "none of the above", "why": "One option is right."}, {"t": "the set of integers, 4", "why": "The question says positive integers."}], "why": "Values are positive integers; each tuple has 4 entries → degree 4."}, {"type": "choice", "q": "Which statement is INCORRECT?", "think": "Do database records usually have just 2 fields?", "opts": [{"t": "A relational database consists of records which are n-tuples made of fields", "why": "True."}, {"t": "A database of records is represented as a binary relation in the relational model", "ok": true}, {"t": "The fields are the entries of the n-tuples", "why": "True."}, {"t": "The relational model is based on the concept of a relation", "why": "True."}], "why": "Records have many fields, so a database is an n-ary relation, not binary."}, {"type": "choice", "q": "True or false: relations used to represent databases are also called tables.", "think": "Picture a database: rows and columns.", "opts": [{"t": "False", "why": "Relation = table is standard vocabulary."}, {"t": "True", "ok": true}], "why": "Relation = table, tuple = row/record, field = column."}, {"type": "choice", "q": "A domain whose value uniquely determines the n-tuple is called:", "think": "Think of a Student ID.", "opts": [{"t": "a primary key", "ok": true}, {"t": "an extension", "why": "Extension = the current rows in the table."}, {"t": "an intension", "why": "Intension = the table structure (name and fields)."}, {"t": "a composite key", "why": "A composite key uses SEVERAL fields together, not one domain."}], "why": "A primary key identifies each record uniquely."}, {"type": "choice", "q": "The extension of a relational database is:", "think": "Extension = what is in the table right now.", "opts": [{"t": "another term for a primary key", "why": "No — a primary key is a field."}, {"t": "none of the above", "why": "One option is right."}, {"t": "the current collection of n-tuples in a relation", "ok": true}, {"t": "the more permanent part of a database", "why": "That is the intension (the structure)."}], "why": "Extension = the current rows; it changes as data is added or deleted."}, {"type": "choice", "q": "Which is NOT an operation on n-ary relations?", "think": "The operations are selection, projection and join.", "opts": [{"t": "the projection operator", "why": "Projection (keep some columns) is an operation."}, {"t": "the join operator", "why": "Join (combine tables) is an operation."}, {"t": "the selection operator", "why": "Selection (keep some rows) is an operation."}, {"t": "the multiplication operator", "ok": true}], "why": "There is no multiplication operator on relations."}], "end": "Now open the worked answers below and reread any question you missed."}</script></div>
:::

<details class="beginner-answer" markdown="1">
<summary>Show all worked answers — Quiz 10 (open after you finish the quiz)</summary>

**Q1.** A 3-ary relation on sets A, B, C is a subset of:

(a) A ∩ B ∩ C (b) A × B × C (c) A × C (d) A ∪ B ∪ C

**✅ Answer: (b) A × B × C**

An **n-ary relation** is a set of **n-tuples**. With 3 sets, each tuple is (a, b, c) → a subset of A × B × C. (Binary = 2-tuples = subset of A × B.)


**Q2.** Which is an n-ary relation?

(a) employee name, number, salary, contact number (c) school name, address, number of teachers, number of students (d) five integers in an arithmetic progression with difference 5 (b) all of the above

**✅ Answer: all of the above**

Each one links **several values together in one tuple** (4 values, 4 values, 5 values) → each is an n-ary relation. A row in a database table is exactly this.


**Q3.** R = {(a, b, c, d) | a, b, c, d positive integers with abcd = 6}. The domains are all ____ and the degree is ____.

(a) positive integers, 4 (b) the letters {a, b, c, d}, 4 (c) none (d) the integers, 4

**✅ Answer: (a) the set of positive integers, 4**

- **Domain** = the set each position's values come from → positive integers (as the question says).
- **Degree** = how many items in each tuple → (a, b, c, d) has **4**. Example tuple: (1, 2, 3, 1).


**Q4.** Which is **incorrect**?

(a) A relational database consists of records which are n-tuples made of fields. (b) A database of records is a **binary** relation in the relational model. (c) Fields are the entries of the n-tuples. (d) The relational model is based on relations.

**✅ Answer: (b)**

Records usually have **many** fields (name, ID, major, GPA …), so a database is an **n-ary** relation, not binary (2 fields only).


**Q5.** True or false: relations used to represent databases are also called **tables**.

**✅ Answer: True**

**Vocabulary match:** relation = **table**, n-tuple = **record / row**, field = **column**.


**Q6.** A domain whose value uniquely determines the n-tuple is called:

(a) a primary key (b) an extension (c) an intension (d) a composite key

**✅ Answer: (a) a primary key**

- **Primary key:** one field that identifies each record uniquely (e.g. Student ID).
- **Composite key:** **several** fields together identify the record.


**Q7.** The **extension** of a relational database is:

(a) another word for primary key (b) none (c) the current collection of n-tuples in a relation (d) the more permanent part of a database

**✅ Answer: (c) the current collection of n-tuples**

- **Extension** = the actual rows **right now** (it changes as data is added or deleted).
- **Intension** = the permanent part: the table's **name and its fields** (the structure). Option (d) describes intension.


**Q8.** Which is **not** an operation on n-ary relations?

(a) projection (b) join (c) selection (d) multiplication

**✅ Answer: (d) the multiplication operator**

The operations are:

- **Selection** σ: keep the **rows** that meet a condition.
- **Projection** P: keep only some **columns** (and drop repeated rows).
- **Join** J: combine two tables on matching fields.
There is no “multiplication operator”.


</details>

## Quiz 11 — Graphs and Graph Models

*Notes for this topic: [Week 11](Week%2011/Week%2011%20-%20Study%20Guide.html)*

These are all **8 questions from the official CODL Quiz 11 — Graphs and Graph Models**.

**How to use it:** answer each question in the quiz box. If you choose a wrong option, it tells you **why that option is wrong** and gives a hint — try again until you get it. When you are right, it explains why. After the quiz, open the worked answers for the full method you can write in the written exam.

:::tool Do the quiz first — official Quiz 11
<div id="gp-m11-official" class="gp"><script type="application/json">{"accts": {}, "steps": [{"type": "choice", "q": "Which graph has each edge joining two different vertices and no two edges joining the same pair of vertices?", "think": "No loops and no repeated edges.", "opts": [{"t": "Simple graph", "ok": true}, {"t": "Regular graph", "why": "Regular means every vertex has the same degree — a different idea."}, {"t": "Pseudo graph", "why": "Pseudographs allow loops and multiple edges."}, {"t": "Directed graph", "why": "Directed graphs have arrows; the question is about loops and repeats."}], "why": "No loops + no multiple edges = simple graph."}, {"type": "choice", "q": "A graph with both directed and undirected edges is called:", "think": "It mixes arrows and plain lines.", "opts": [{"t": "Directed multigraph", "why": "All edges in a directed multigraph are directed."}, {"t": "Mixed graph", "ok": true}, {"t": "Directed graph", "why": "All edges are directed."}, {"t": "Simple directed graph", "why": "All edges are directed."}], "why": "Mixed graph = some directed, some undirected edges."}, {"type": "choice", "q": "People who can influence the thinking of others are modelled by an ______.", "think": "The direction matters: a influences b.", "opts": [{"t": "Roadmap graph", "why": "Roadmaps model roads between places."}, {"t": "Acquaintanceship graph", "why": "That shows who knows whom (undirected), not influence."}, {"t": "The web graph", "why": "That models links between web pages."}, {"t": "Influence graph", "ok": true}], "why": "Influence graph: a directed edge a → b means a influences b."}, {"type": "choice", "q": "Cities are vertices, with an edge if there is an interstate highway between them. Which graph?", "think": "Only whether a highway exists matters (yes/no), and roads go both ways.", "opts": [{"t": "Multi graph", "why": "A multigraph counts several edges per pair; here we only record whether one exists."}, {"t": "Simple graph", "ok": true}, {"t": "Directed graph", "why": "Highways go both ways, so no direction."}, {"t": "Pseudo graph", "why": "No city has a highway to itself (no loops)."}], "why": "Undirected, at most one edge per pair, no loops → simple graph."}, {"type": "choice", "q": "A round-robin tournament can be modelled using a ______ (as marked by the quiz).", "think": "Follow the quiz key here; the textbook uses a different model.", "opts": [{"t": "Directed graph", "why": "The textbook uses this (a → b means a beat b), but the quiz key marks multigraph."}, {"t": "Mixed graph", "why": "Not the quiz's answer."}, {"t": "Multi graph", "ok": true}, {"t": "Simple graph", "why": "Not the quiz's answer."}], "why": "The quiz key marks multigraph. In the textbook, a tournament is a directed graph."}, {"type": "choice", "q": "Which property does a simple graph NOT need to have?", "think": "A simple graph only forbids loops and multiple edges.", "opts": [{"t": "No loops or multiple edges", "why": "A simple graph must have this."}, {"t": "Must be unweighted", "why": "The quiz does not count this as the missing property."}, {"t": "Must be connected", "ok": true}, {"t": "All of the above", "why": "No loops/multiple edges is required, so not all."}], "why": "A simple graph can be in separate pieces — it need not be connected."}, {"type": "choice", "q": "Which is true (as marked by the quiz)?", "think": "Follow the quiz key, but remember: logically every edge needs two endpoints.", "opts": [{"t": "A graph may contain no edges and no vertices", "why": "Not the quiz's answer."}, {"t": "A graph may contain no edges and many vertices", "why": "Logically this IS true (an empty graph), but the quiz key marks a different option."}, {"t": "None of the mentioned", "why": "Not the quiz's answer."}, {"t": "A graph may contain many edges and no vertices", "ok": true}], "why": "The quiz key marks this — but in reality an edge cannot exist without vertices. For a written answer, say a graph can have vertices and no edges."}, {"type": "choice", "q": "G has v vertices, e edges, is connected and has no cycles. Which is true?", "think": "Connected + no cycles = a tree. How many edges does a tree with v vertices have?", "opts": [{"t": "v = e", "why": "A tree has one fewer edge than vertices."}, {"t": "None of the mentioned", "why": "One option is the tree rule."}, {"t": "v + 1 = e", "why": "Backwards — edges are fewer than vertices."}, {"t": "v = e + 1", "ok": true}], "why": "A tree has v − 1 edges → v = e + 1. E.g. A–B–C: 3 vertices, 2 edges."}], "end": "Now open the worked answers below and reread any question you missed."}</script></div>
:::

<details class="beginner-answer" markdown="1">
<summary>Show all worked answers — Quiz 11 (open after you finish the quiz)</summary>

**Graph types in one table (memorise):**

| Type | Loops (edge from a vertex to itself)? | Several edges between the same 2 vertices? | Edge direction |
|---|---|---|---|
| **Simple graph** | No | No | Undirected |
| **Multigraph** | No | **Yes** | Undirected |
| **Pseudograph** | **Yes** | Yes | Undirected |
| **Directed graph** | Yes | No (one per direction) | **Directed** |
| **Mixed graph** | Yes | Yes | **Both** directed and undirected |

**Q1.** Which graph has each edge joining two **different** vertices and **no two edges** joining the same pair?

(a) simple (b) regular (c) pseudograph (d) directed

**✅ Answer: (a) simple graph**

“Two different vertices” = no loops; “no two edges on the same pair” = no multiple edges → **simple graph**.
(Regular = every vertex has the same degree — a different idea.)


**Q2.** A graph with both directed and undirected edges is a:

(a) directed multigraph (b) mixed graph (c) directed graph (d) simple directed graph

**✅ Answer: (b) mixed graph**

Mixed = a **mix** of arrows and plain lines.


**Q3.** People who can influence the thinking of others are modelled by an ______.

(a) roadmap graph (b) acquaintanceship graph (c) web graph (d) influence graph

**✅ Answer: (d) influence graph**

**Influence graph:** a directed edge a → b means “a influences b” (direction matters).
**Acquaintanceship graph:** an undirected edge means two people know each other.


**Q4.** A highway system: cities are vertices, with an edge if there is an interstate highway between them. Which graph?

(a) multigraph (b) simple graph (c) directed graph (d) pseudograph

**✅ Answer: (b) simple graph**

The question only asks **whether** a highway exists between two cities (yes/no), not how many, and roads go both ways → undirected, at most one edge per pair → **simple graph**.
(If it counted *each* highway separately it would be a multigraph.)


**Q5.** A round-robin tournament can be modelled using a ______.

(a) directed graph (b) mixed graph (c) multigraph (d) simple graph

**✅ Answer marked by the quiz: (c) multigraph**

The quiz accepted **multigraph**. Note: the Rosen textbook models a round-robin tournament as a **directed graph** (an edge a → b means team a beat team b). For this MCQ, pick the quiz's answer; in a written answer, explain the model you use.


**Q6.** Which property does a simple graph **not** need to have?

(a) no loops or multiple edges (b) must be unweighted (c) must be connected (d) all of the above

**✅ Answer: (c) must be connected**

A simple graph only forbids loops and multiple edges. It can be in several separate pieces (disconnected) and still be simple.


**Q7.** Which is true?

(a) no edges and no vertices (b) no edges and many vertices (c) none (d) many edges and no vertices

**✅ Answer marked by the quiz: (d) — but be careful**

The quiz key marks (d). Logically, though, **an edge must join two vertices**, so a graph cannot have edges without vertices. The statement that is really true is **(b)**: a graph can have vertices and **no** edges (an *empty* or *null* graph).
For the MCQ, remember the quiz marked (d); for a written answer, use the correct reasoning: every edge needs endpoints.


**Q8.** G has v vertices and e edges, is **connected** and has **no cycles**. Which is true?

(a) v = e (b) none (c) v + 1 = e (d) v = e + 1

**✅ Answer: (d) v = e + 1**

“Connected with no cycles” is the definition of a **tree**. **A tree with v vertices has exactly v − 1 edges**, so e = v − 1 → v = e + 1.
Check: 3 vertices in a line A–B–C have 2 edges ✓.


</details>

## Quiz 12 — Trees and Applications of Trees

*Notes for this topic: [Week 12](Week%2012/Week%2012%20-%20Study%20Guide.html)*

These are all **7 questions from the official CODL Quiz 12 — Trees and Applications of Trees**.

**How to use it:** answer each question in the quiz box. If you choose a wrong option, it tells you **why that option is wrong** and gives a hint — try again until you get it. When you are right, it explains why. After the quiz, open the worked answers for the full method you can write in the written exam.

:::tool Do the quiz first — official Quiz 12
<div id="gp-m12-official" class="gp"><script type="application/json">{"accts": {}, "steps": [{"type": "choice", "q": "Binary trees can have how many children?", "think": "Binary = at most two.", "opts": [{"t": "0 or 1", "why": "Binary trees allow 2 children too."}, {"t": "0 or 1 or 2", "ok": true}, {"t": "2", "why": "Leaves have 0 children, and some nodes have just 1."}, {"t": "Any number", "why": "That is a general tree, not a binary tree."}], "why": "Each node has 0, 1 or 2 children."}, {"type": "choice", "q": "A tree with root 10, left child 16, right child 12 is an example of a:", "think": "Check the BST rule: left child smaller than the parent.", "opts": [{"t": "Binary tree", "ok": true}, {"t": "Binary search tree", "why": "In a BST the left child must be smaller, but 16 > 10."}, {"t": "Fibonacci tree", "why": "A Fibonacci tree has a specific recursive shape; this is just a binary tree."}, {"t": "AVL tree", "why": "AVL trees are balanced BSTs, and this is not a BST."}], "why": "At most 2 children per node → binary tree (not a BST)."}, {"type": "choice", "q": "The number of external nodes (leaves) in a full binary tree with n internal nodes is:", "think": "Try a root with 2 children: 1 internal node, how many leaves?", "opts": [{"t": "2n + 1", "why": "That is the TOTAL number of nodes, not the leaves."}, {"t": "2n", "why": "Test n = 1: there are 2 leaves... but test n = 2: 3 leaves, not 4."}, {"t": "n + 1", "ok": true}, {"t": "n", "why": "Test n = 1: there are 2 leaves, not 1."}], "why": "Full binary tree: leaves = internal nodes + 1."}, {"type": "choice", "q": "Which is FALSE about a binary search tree?", "think": "BST rule: left < node < right, at every node. Check each statement.", "opts": [{"t": "The left and right subtrees are also binary search trees", "why": "True — the rule holds at every node."}, {"t": "The right child is always greater than its parent", "why": "True for a BST."}, {"t": "The left child is always smaller than its parent", "why": "True for a BST."}, {"t": "None of the above", "ok": true}], "why": "All three statements are true, so none is false."}, {"type": "choice", "q": "What are the conditions for an optimal binary search tree, and its advantage?", "think": "Optimal = most-searched keys near the root. What must you know, and must the tree stay fixed?", "opts": [{"t": "The tree is not modified and you know how often the keys are accessed; it improves the lookup cost", "ok": true}, {"t": "You know the frequency of access of the keys; it improves the lookup time", "why": "Incomplete — the tree must also stay unmodified."}, {"t": "The tree can be modified and you know the number of elements; it improves deletion time", "why": "The tree must NOT be modified, and the benefit is lookup, not deletion."}, {"t": "None of the mentioned", "why": "One option is right."}], "why": "Fixed tree + known access frequencies → lowest average lookup cost."}, {"type": "choice", "q": "What is a complete binary tree?", "think": "Every level full except maybe the last, which fills from one side.", "opts": [{"t": "Completely filled except possibly the bottom level, which is filled from left to right", "ok": true}, {"t": "None of the mentioned", "why": "One option is the definition."}, {"t": "Completely filled except possibly the bottom level, which is filled from right to left", "why": "The last level fills from LEFT to right."}, {"t": "Each node has exactly zero or two children", "why": "That is a FULL binary tree."}], "why": "Complete: all levels full, last level filled left to right without gaps."}, {"type": "choice", "q": "Which is NOT an advantage/use of trees?", "think": "Which of these is done with a stack (last in, first out)?", "opts": [{"t": "Undo/Redo operations in a notepad", "ok": true}, {"t": "Hierarchical structure", "why": "Trees are ideal for hierarchies (folders, org charts)."}, {"t": "Faster search", "why": "BSTs give fast search."}, {"t": "Router algorithms", "why": "Routing uses trees (e.g. spanning trees)."}], "why": "Undo/redo uses a stack, not a tree."}], "end": "Now open the worked answers below and reread any question you missed."}</script></div>
:::

<details class="beginner-answer" markdown="1">
<summary>Show all worked answers — Quiz 12 (open after you finish the quiz)</summary>

**Q1.** In a binary tree, how many children can a node have?

(a) 0 or 1 (b) 0, 1 or 2 (c) 2 (d) any number

**✅ Answer: (b) 0, 1 or 2**

**Binary = at most 2** children (a left child and a right child). A leaf has 0.


**Q2.** The tree with root 10, left child 16 and right child 12 is an example of a:

(a) binary tree (b) binary search tree (c) Fibonacci tree (d) AVL tree

**✅ Answer: (a) binary tree**

Each node has at most 2 children → binary tree. It is **not** a binary search tree: in a BST the left child must be **smaller** than the parent, but 16 > 10.


**Q3.** Number of external nodes (leaves) in a full binary tree with n internal nodes?

(a) 2n + 1 (b) 2n (c) n + 1 (d) n

**✅ Answer: (c) n + 1**

**Full binary tree** = every internal node has exactly 2 children. Then **leaves = internal nodes + 1**.
Check: a root with 2 children → 1 internal, 2 leaves ✓. (Total nodes = 2n + 1, which is the trap in (a).)


**Q4.** Which is **false** about a binary search tree?

(a) left and right subtrees are also BSTs (b) the right child is always greater than its parent (c) the left child is always smaller than its parent (d) none of the above

**✅ Answer: (d) none of the above — (a), (b) and (c) are all true**

**BST rule:** everything in the **left** subtree < the node < everything in the **right** subtree, and this holds at every node.


**Q5.** Conditions for an **optimal binary search tree**, and its advantage?

**✅ Answer: the tree is not modified, and you know how often each key is accessed — it improves (lowers) the lookup cost**

An optimal BST puts the **most frequently searched keys near the root**, so the average search is shortest. That only works if the keys and their access frequencies are known and the tree stays fixed.


**Q6.** What is a **complete** binary tree?

**✅ Answer: every level is full except possibly the bottom level, which is filled from left to right**

- **Complete:** all levels full, last level filled **left to right** with no gaps.
- **Full:** every node has **0 or 2** children (option (d) describes a full tree, not a complete one).


**Q7.** Which is **not** an advantage/use of trees?

(a) undo/redo in a notepad (b) hierarchical structure (c) faster search (d) router algorithms

**✅ Answer: (a) undo/redo operations**

Undo/redo is done with a **stack** (last in, first out), not a tree. Trees are good for hierarchies (folders, organisation charts), fast searching (BSTs) and routing.


</details>

## Quiz 13 — Decision Trees, Tree Traversals and Spanning Trees

*Notes for this topic: [Week 13](Week%2013/Week%2013%20-%20Study%20Guide.html)*

These are all **8 questions from the official CODL Quiz 13 — Decision Trees, Tree Traversals and Spanning Trees**.

**How to use it:** answer each question in the quiz box. If you choose a wrong option, it tells you **why that option is wrong** and gives a hint — try again until you get it. When you are right, it explains why. After the quiz, open the worked answers for the full method you can write in the written exam.

:::tool Do the quiz first — official Quiz 13
<div id="gp-m13-official" class="gp"><script type="application/json">{"accts": {}, "steps": [{"type": "choice", "q": "True or false: in post-order traversal of a binary tree, the right subtree is traversed before visiting the root.", "think": "Post-order = Left, Right, Root.", "opts": [{"t": "Insufficient information", "why": "The order is fixed by the definition."}, {"t": "True", "ok": true}, {"t": "None of the above", "why": "It is a true/false fact."}, {"t": "False", "why": "In post-order the root comes last, after the right subtree."}], "why": "Left → Right → Root, so the right subtree comes before the root."}, {"type": "choice", "q": "A binary tree's post-order is O P Q R S T. Which could be its pre-order?", "think": "Post-order ends with the root (T). Build the tree for an option and check its post-order.", "opts": [{"t": "T Q R S O P", "why": "Q's children would be R and S… its post-order would not end with O P Q R S T."}, {"t": "T Q O P S R", "ok": true}, {"t": "T O Q R P S", "why": "This tree's post-order does not match O P Q R S T."}, {"t": "T Q O S P R", "why": "This tree's post-order does not match O P Q R S T."}], "why": "Tree: T → Q (O, P) and S (R). Post-order: O P Q R S T ✓."}, {"type": "choice", "q": "A rooted tree where each internal vertex is a decision, with a subtree for each possible outcome, is a ______.", "think": "The name says it.", "opts": [{"t": "Binary search tree", "why": "A BST stores keys in order."}, {"t": "Decision tree", "ok": true}, {"t": "Rooted tree", "why": "Too general — every decision tree is rooted, but the name asked for is more specific."}, {"t": "Spanning tree", "why": "A spanning tree covers all vertices of a graph."}], "why": "Decision tree: internal node = decision, branch = outcome."}, {"type": "choice", "q": "For a decision tree to be a valuable tool, which decision-making condition must exist?", "think": "You need known outcomes with probabilities.", "opts": [{"t": "Certainty", "why": "With certainty you already know the result — no tree needed."}, {"t": "All of the above", "why": "Only one condition is right."}, {"t": "Uncertainty", "why": "Under total uncertainty there are no probabilities to use."}, {"t": "Risk", "ok": true}], "why": "Under risk, outcomes have probabilities, so expected values can be compared."}, {"type": "choice", "q": "A subgraph of a simple graph G that is a tree containing every vertex of G is called:", "think": "It “spans” all the vertices.", "opts": [{"t": "Binary search tree", "why": "A BST is about ordered keys."}, {"t": "Cartesian tree", "why": "A Cartesian tree is built from a sequence of numbers."}, {"t": "Spanning tree", "ok": true}, {"t": "AVL tree", "why": "An AVL tree is a balanced BST."}], "why": "Spanning tree: all vertices, no cycles, n − 1 edges."}, {"type": "choice", "q": "A BST's pre-order is 30, 20, 10, 15, 25, 23, 39, 35, 42. What is its post-order?", "think": "Build the BST by inserting the numbers in pre-order order, then read Left, Right, Root.", "opts": [{"t": "15, 20, 10, 23, 25, 42, 35, 39, 30", "why": "20 cannot come before 10: 10 is in 20's left subtree, which is read first."}, {"t": "15, 10, 25, 23, 20, 42, 35, 39, 30", "why": "23 is 25's left child, so 23 comes before 25."}, {"t": "10, 20, 15, 23, 25, 35, 42, 39, 30", "why": "15 is 10's child, so 15 comes before 10."}, {"t": "15, 10, 23, 25, 20, 35, 42, 39, 30", "ok": true}], "why": "Tree: 30 → 20 (10 → 15, 25 → 23) and 39 (35, 42). Post-order: 15, 10, 23, 25, 20, 35, 42, 39, 30."}, {"type": "choice", "q": "In a decision tree diagram, decision nodes are drawn as:", "think": "Decision = square, chance = circle, end = triangle.", "opts": [{"t": "Triangles", "why": "Triangles are end nodes."}, {"t": "Disks", "why": "Not the standard symbol for a decision."}, {"t": "Squares", "ok": true}, {"t": "Circles", "why": "Circles are chance (probability) nodes."}], "why": "Decision node = square."}, {"type": "choice", "q": "Which are advantages of decision trees?", "think": "Look at all the listed advantages — are they all real?", "opts": [{"t": "White box model (the result can be explained)", "why": "This is an advantage — but so are the others."}, {"t": "All of the mentioned", "ok": true}, {"t": "Worst, best and expected values can be found for different scenarios", "why": "This is an advantage — but so are the others."}, {"t": "Possible scenarios can be added", "why": "This is an advantage — but so are the others."}], "why": "All are advantages: easy to explain, compare outcomes, and extend."}], "end": "Now open the worked answers below and reread any question you missed."}</script></div>
:::

<details class="beginner-answer" markdown="1">
<summary>Show all worked answers — Quiz 13 (open after you finish the quiz)</summary>

**The three traversals — say the root's position:**

- **Pre-order:** **Root**, Left, Right (root first)
- **In-order:** Left, **Root**, Right (root in the middle; on a BST this gives the numbers in sorted order)
- **Post-order:** Left, Right, **Root** (root last)

**Q1.** True or false: in post-order traversal the right subtree is traversed before visiting the root.

**✅ Answer: True**

Post-order = Left → Right → **Root**. The root is visited last, so the right subtree comes before it.


**Q2.** A binary tree's post-order is O P Q R S T. Which could be its pre-order?

(a) T Q R S O P (b) T Q O P S R (c) T O Q R P S (d) T Q O S P R

**✅ Answer: (b) T Q O P S R**

1. Post-order ends with the root → **T** is the root (all options start with T ✓).
2. Try (b): T's children are Q and S; Q's children are O and P; S's child is R.
3. Post-order of that tree: O, P, Q (left subtree), R, S (right subtree), T (root) = **O P Q R S T** ✓.


**Q3.** A rooted tree where each internal vertex is a decision, with a subtree for each possible outcome, is a ______.

(a) binary search tree (b) decision tree (c) rooted tree (d) spanning tree

**✅ Answer: (b) decision tree**

Each internal node = a question/decision; each branch = one possible outcome; leaves = final results.


**Q4.** For a decision tree to be a valuable tool, which decision-making condition must exist?

(a) certainty (b) all of the above (c) uncertainty (d) risk

**✅ Answer: (d) risk**

Decision trees are used under **risk**: the possible outcomes are known and you can attach **probabilities** to them, so you can compare expected values. (Under certainty you don't need a tree; under total uncertainty you have no probabilities.)


**Q5.** A subgraph of a simple graph G that is a tree and contains **every vertex** of G is called a:

(a) binary search tree (b) Cartesian tree (c) spanning tree (d) AVL tree

**✅ Answer: (c) spanning tree**

**Spanning tree = touches (“spans”) all vertices, with no cycles.** If G has n vertices, a spanning tree has exactly n − 1 edges.


**Q6.** Pre-order of a BST is 30, 20, 10, 15, 25, 23, 39, 35, 42. What is its **post-order**?

**✅ Answer: 15, 10, 23, 25, 20, 35, 42, 39, 30**

**Step 1 — build the BST by inserting the pre-order numbers in order** (smaller → go left, bigger → go right):

```
            30
          /    \
        20      39
       /  \    /  \
     10   25  35   42
       \  /
       15 23
```

**Step 2 — read it Left, Right, Root:**

- Left of 30: under 20 → left part 10's subtree: 15, 10; right part 25's subtree: 23, 25; then 20.
- Right of 30: 35, 42, then 39.
- Root last: 30.

Result: **15, 10, 23, 25, 20, 35, 42, 39, 30**.


**Q7.** In a decision tree diagram, **decision** nodes are drawn as:

(a) triangles (b) disks (c) squares (d) circles

**✅ Answer: (c) squares**

Decision node = **square** ■; chance (probability) node = **circle** ●; end node = triangle ▲.


**Q8.** Which are advantages of decision trees?

(a) white-box model (the result can be explained) (c) worst, best and expected values can be found for different scenarios (d) new scenarios can be added (b) all of the mentioned

**✅ Answer: all of the mentioned**

Decision trees are easy to read and explain (white box), show best/worst/expected outcomes, and new branches (scenarios) can be added easily.


</details>
