## வினாடி வினா 1 — Introduction to Predicate Logic

*இந்தத் தலைப்பின் பாடக் குறிப்புகள்: [Week 01](Week%2001/Week%2001%20-%20Study%20Guide.html)*

இவை அதிகாரபூர்வ CODL வினாடி வினா 1 — Introduction to Predicate Logic இன் **10 கேள்விகள்**.

**எப்படிப் பயன்படுத்துவது:** இது உண்மையான quiz போலவே செயல்படும். **Attempt quiz now** அழுத்தி, எல்லாக் கேள்விகளுக்கும் விடையளியுங்கள் (கேள்வி எண்களால் தாவலாம், மீண்டும் பார்க்க வேண்டியவற்றை ⚑ flag செய்யலாம்), பின்னர் **Finish attempt**, **Submit** அழுத்துங்கள். உங்கள் மதிப்பெண் கிடைக்கும்; ஒவ்வொரு கேள்விக்கும் உங்கள் விடை, சரியான விடை, **ஏன்** என்பது — தவறான தேர்வு ஏன் தவறு என்பதும் — காட்டப்படும். மீண்டும் முயல **Retake quiz** அழுத்துங்கள். பின்னர் எழுத்துத் தேர்வில் எழுதக்கூடிய முழு முறைக்கு கீழே உள்ள தீர்வுகளைத் திறவுங்கள்.

{{tool:gp-m01-official}}

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

## வினாடி வினா 2 — Sets and Set Operations

*இந்தத் தலைப்பின் பாடக் குறிப்புகள்: [Week 02](Week%2002/Week%2002%20-%20Study%20Guide.html)*

இவை அதிகாரபூர்வ CODL வினாடி வினா 2 — Sets and Set Operations இன் **10 கேள்விகள்**.

**எப்படிப் பயன்படுத்துவது:** இது உண்மையான quiz போலவே செயல்படும். **Attempt quiz now** அழுத்தி, எல்லாக் கேள்விகளுக்கும் விடையளியுங்கள் (கேள்வி எண்களால் தாவலாம், மீண்டும் பார்க்க வேண்டியவற்றை ⚑ flag செய்யலாம்), பின்னர் **Finish attempt**, **Submit** அழுத்துங்கள். உங்கள் மதிப்பெண் கிடைக்கும்; ஒவ்வொரு கேள்விக்கும் உங்கள் விடை, சரியான விடை, **ஏன்** என்பது — தவறான தேர்வு ஏன் தவறு என்பதும் — காட்டப்படும். மீண்டும் முயல **Retake quiz** அழுத்துங்கள். பின்னர் எழுத்துத் தேர்வில் எழுதக்கூடிய முழு முறைக்கு கீழே உள்ள தீர்வுகளைத் திறவுங்கள்.

{{tool:gp-m02-official}}

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

## வினாடி வினா 3 — Functions

*இந்தத் தலைப்பின் பாடக் குறிப்புகள்: [Week 03](Week%2003/Week%2003%20-%20Study%20Guide.html)*

இவை அதிகாரபூர்வ CODL வினாடி வினா 3 — Functions இன் **10 கேள்விகள்**.

**எப்படிப் பயன்படுத்துவது:** இது உண்மையான quiz போலவே செயல்படும். **Attempt quiz now** அழுத்தி, எல்லாக் கேள்விகளுக்கும் விடையளியுங்கள் (கேள்வி எண்களால் தாவலாம், மீண்டும் பார்க்க வேண்டியவற்றை ⚑ flag செய்யலாம்), பின்னர் **Finish attempt**, **Submit** அழுத்துங்கள். உங்கள் மதிப்பெண் கிடைக்கும்; ஒவ்வொரு கேள்விக்கும் உங்கள் விடை, சரியான விடை, **ஏன்** என்பது — தவறான தேர்வு ஏன் தவறு என்பதும் — காட்டப்படும். மீண்டும் முயல **Retake quiz** அழுத்துங்கள். பின்னர் எழுத்துத் தேர்வில் எழுதக்கூடிய முழு முறைக்கு கீழே உள்ள தீர்வுகளைத் திறவுங்கள்.

{{tool:gp-m03-official}}

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

## வினாடி வினா 4 — Sequences and Summations

*இந்தத் தலைப்பின் பாடக் குறிப்புகள்: [Week 04](Week%2004/Week%2004%20-%20Study%20Guide.html)*

இவை அதிகாரபூர்வ CODL வினாடி வினா 4 — Sequences and Summations இன் **10 கேள்விகள்**.

**எப்படிப் பயன்படுத்துவது:** இது உண்மையான quiz போலவே செயல்படும். **Attempt quiz now** அழுத்தி, எல்லாக் கேள்விகளுக்கும் விடையளியுங்கள் (கேள்வி எண்களால் தாவலாம், மீண்டும் பார்க்க வேண்டியவற்றை ⚑ flag செய்யலாம்), பின்னர் **Finish attempt**, **Submit** அழுத்துங்கள். உங்கள் மதிப்பெண் கிடைக்கும்; ஒவ்வொரு கேள்விக்கும் உங்கள் விடை, சரியான விடை, **ஏன்** என்பது — தவறான தேர்வு ஏன் தவறு என்பதும் — காட்டப்படும். மீண்டும் முயல **Retake quiz** அழுத்துங்கள். பின்னர் எழுத்துத் தேர்வில் எழுதக்கூடிய முழு முறைக்கு கீழே உள்ள தீர்வுகளைத் திறவுங்கள்.

{{tool:gp-m04-official}}

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

## வினாடி வினா 5 — Matrices

*இந்தத் தலைப்பின் பாடக் குறிப்புகள்: [Week 05](Week%2005/Week%2005%20-%20Study%20Guide.html)*

இவை அதிகாரபூர்வ CODL வினாடி வினா 5 — Matrices இன் **7 கேள்விகள்**.

**எப்படிப் பயன்படுத்துவது:** இது உண்மையான quiz போலவே செயல்படும். **Attempt quiz now** அழுத்தி, எல்லாக் கேள்விகளுக்கும் விடையளியுங்கள் (கேள்வி எண்களால் தாவலாம், மீண்டும் பார்க்க வேண்டியவற்றை ⚑ flag செய்யலாம்), பின்னர் **Finish attempt**, **Submit** அழுத்துங்கள். உங்கள் மதிப்பெண் கிடைக்கும்; ஒவ்வொரு கேள்விக்கும் உங்கள் விடை, சரியான விடை, **ஏன்** என்பது — தவறான தேர்வு ஏன் தவறு என்பதும் — காட்டப்படும். மீண்டும் முயல **Retake quiz** அழுத்துங்கள். பின்னர் எழுத்துத் தேர்வில் எழுதக்கூடிய முழு முறைக்கு கீழே உள்ள தீர்வுகளைத் திறவுங்கள்.

{{tool:gp-m05-official}}

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

## வினாடி வினா 6 — Number Theory and Cryptography

*இந்தத் தலைப்பின் பாடக் குறிப்புகள்: [Week 06](Week%2006/Week%2006%20-%20Study%20Guide.html)*

இவை அதிகாரபூர்வ CODL வினாடி வினா 6 — Number Theory and Cryptography இன் **8 கேள்விகள்**.

**எப்படிப் பயன்படுத்துவது:** இது உண்மையான quiz போலவே செயல்படும். **Attempt quiz now** அழுத்தி, எல்லாக் கேள்விகளுக்கும் விடையளியுங்கள் (கேள்வி எண்களால் தாவலாம், மீண்டும் பார்க்க வேண்டியவற்றை ⚑ flag செய்யலாம்), பின்னர் **Finish attempt**, **Submit** அழுத்துங்கள். உங்கள் மதிப்பெண் கிடைக்கும்; ஒவ்வொரு கேள்விக்கும் உங்கள் விடை, சரியான விடை, **ஏன்** என்பது — தவறான தேர்வு ஏன் தவறு என்பதும் — காட்டப்படும். மீண்டும் முயல **Retake quiz** அழுத்துங்கள். பின்னர் எழுத்துத் தேர்வில் எழுதக்கூடிய முழு முறைக்கு கீழே உள்ள தீர்வுகளைத் திறவுங்கள்.

{{tool:gp-m06-official}}

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

## வினாடி வினா 7 — Induction and Recursion

*இந்தத் தலைப்பின் பாடக் குறிப்புகள்: [Week 07](Week%2007/Week%2007%20-%20Study%20Guide.html)*

இவை அதிகாரபூர்வ CODL வினாடி வினா 7 — Induction and Recursion இன் **9 கேள்விகள்**.

**எப்படிப் பயன்படுத்துவது:** இது உண்மையான quiz போலவே செயல்படும். **Attempt quiz now** அழுத்தி, எல்லாக் கேள்விகளுக்கும் விடையளியுங்கள் (கேள்வி எண்களால் தாவலாம், மீண்டும் பார்க்க வேண்டியவற்றை ⚑ flag செய்யலாம்), பின்னர் **Finish attempt**, **Submit** அழுத்துங்கள். உங்கள் மதிப்பெண் கிடைக்கும்; ஒவ்வொரு கேள்விக்கும் உங்கள் விடை, சரியான விடை, **ஏன்** என்பது — தவறான தேர்வு ஏன் தவறு என்பதும் — காட்டப்படும். மீண்டும் முயல **Retake quiz** அழுத்துங்கள். பின்னர் எழுத்துத் தேர்வில் எழுதக்கூடிய முழு முறைக்கு கீழே உள்ள தீர்வுகளைத் திறவுங்கள்.

{{tool:gp-m07-official}}

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

## வினாடி வினா 8 — Basics of Counting

*இந்தத் தலைப்பின் பாடக் குறிப்புகள்: [Week 08](Week%2008/Week%2008%20-%20Study%20Guide.html)*

இவை அதிகாரபூர்வ CODL வினாடி வினா 8 — Basics of Counting இன் **7 கேள்விகள்**.

**எப்படிப் பயன்படுத்துவது:** இது உண்மையான quiz போலவே செயல்படும். **Attempt quiz now** அழுத்தி, எல்லாக் கேள்விகளுக்கும் விடையளியுங்கள் (கேள்வி எண்களால் தாவலாம், மீண்டும் பார்க்க வேண்டியவற்றை ⚑ flag செய்யலாம்), பின்னர் **Finish attempt**, **Submit** அழுத்துங்கள். உங்கள் மதிப்பெண் கிடைக்கும்; ஒவ்வொரு கேள்விக்கும் உங்கள் விடை, சரியான விடை, **ஏன்** என்பது — தவறான தேர்வு ஏன் தவறு என்பதும் — காட்டப்படும். மீண்டும் முயல **Retake quiz** அழுத்துங்கள். பின்னர் எழுத்துத் தேர்வில் எழுதக்கூடிய முழு முறைக்கு கீழே உள்ள தீர்வுகளைத் திறவுங்கள்.

{{tool:gp-m08-official}}

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

## வினாடி வினா 9 — Relations and Their Properties

*இந்தத் தலைப்பின் பாடக் குறிப்புகள்: [Week 09](Week%2009/Week%2009%20-%20Study%20Guide.html)*

இவை அதிகாரபூர்வ CODL வினாடி வினா 9 — Relations and Their Properties இன் **7 கேள்விகள்**.

**எப்படிப் பயன்படுத்துவது:** இது உண்மையான quiz போலவே செயல்படும். **Attempt quiz now** அழுத்தி, எல்லாக் கேள்விகளுக்கும் விடையளியுங்கள் (கேள்வி எண்களால் தாவலாம், மீண்டும் பார்க்க வேண்டியவற்றை ⚑ flag செய்யலாம்), பின்னர் **Finish attempt**, **Submit** அழுத்துங்கள். உங்கள் மதிப்பெண் கிடைக்கும்; ஒவ்வொரு கேள்விக்கும் உங்கள் விடை, சரியான விடை, **ஏன்** என்பது — தவறான தேர்வு ஏன் தவறு என்பதும் — காட்டப்படும். மீண்டும் முயல **Retake quiz** அழுத்துங்கள். பின்னர் எழுத்துத் தேர்வில் எழுதக்கூடிய முழு முறைக்கு கீழே உள்ள தீர்வுகளைத் திறவுங்கள்.

{{tool:gp-m09-official}}

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

## வினாடி வினா 10 — n-ary Relations

*இந்தத் தலைப்பின் பாடக் குறிப்புகள்: [Week 10](Week%2010/Week%2010%20-%20Study%20Guide.html)*

இவை அதிகாரபூர்வ CODL வினாடி வினா 10 — n-ary Relations இன் **8 கேள்விகள்**.

**எப்படிப் பயன்படுத்துவது:** இது உண்மையான quiz போலவே செயல்படும். **Attempt quiz now** அழுத்தி, எல்லாக் கேள்விகளுக்கும் விடையளியுங்கள் (கேள்வி எண்களால் தாவலாம், மீண்டும் பார்க்க வேண்டியவற்றை ⚑ flag செய்யலாம்), பின்னர் **Finish attempt**, **Submit** அழுத்துங்கள். உங்கள் மதிப்பெண் கிடைக்கும்; ஒவ்வொரு கேள்விக்கும் உங்கள் விடை, சரியான விடை, **ஏன்** என்பது — தவறான தேர்வு ஏன் தவறு என்பதும் — காட்டப்படும். மீண்டும் முயல **Retake quiz** அழுத்துங்கள். பின்னர் எழுத்துத் தேர்வில் எழுதக்கூடிய முழு முறைக்கு கீழே உள்ள தீர்வுகளைத் திறவுங்கள்.

{{tool:gp-m10-official}}

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

## வினாடி வினா 11 — Graphs and Graph Models

*இந்தத் தலைப்பின் பாடக் குறிப்புகள்: [Week 11](Week%2011/Week%2011%20-%20Study%20Guide.html)*

இவை அதிகாரபூர்வ CODL வினாடி வினா 11 — Graphs and Graph Models இன் **8 கேள்விகள்**.

**எப்படிப் பயன்படுத்துவது:** இது உண்மையான quiz போலவே செயல்படும். **Attempt quiz now** அழுத்தி, எல்லாக் கேள்விகளுக்கும் விடையளியுங்கள் (கேள்வி எண்களால் தாவலாம், மீண்டும் பார்க்க வேண்டியவற்றை ⚑ flag செய்யலாம்), பின்னர் **Finish attempt**, **Submit** அழுத்துங்கள். உங்கள் மதிப்பெண் கிடைக்கும்; ஒவ்வொரு கேள்விக்கும் உங்கள் விடை, சரியான விடை, **ஏன்** என்பது — தவறான தேர்வு ஏன் தவறு என்பதும் — காட்டப்படும். மீண்டும் முயல **Retake quiz** அழுத்துங்கள். பின்னர் எழுத்துத் தேர்வில் எழுதக்கூடிய முழு முறைக்கு கீழே உள்ள தீர்வுகளைத் திறவுங்கள்.

{{tool:gp-m11-official}}

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

## வினாடி வினா 12 — Trees and Applications of Trees

*இந்தத் தலைப்பின் பாடக் குறிப்புகள்: [Week 12](Week%2012/Week%2012%20-%20Study%20Guide.html)*

இவை அதிகாரபூர்வ CODL வினாடி வினா 12 — Trees and Applications of Trees இன் **7 கேள்விகள்**.

**எப்படிப் பயன்படுத்துவது:** இது உண்மையான quiz போலவே செயல்படும். **Attempt quiz now** அழுத்தி, எல்லாக் கேள்விகளுக்கும் விடையளியுங்கள் (கேள்வி எண்களால் தாவலாம், மீண்டும் பார்க்க வேண்டியவற்றை ⚑ flag செய்யலாம்), பின்னர் **Finish attempt**, **Submit** அழுத்துங்கள். உங்கள் மதிப்பெண் கிடைக்கும்; ஒவ்வொரு கேள்விக்கும் உங்கள் விடை, சரியான விடை, **ஏன்** என்பது — தவறான தேர்வு ஏன் தவறு என்பதும் — காட்டப்படும். மீண்டும் முயல **Retake quiz** அழுத்துங்கள். பின்னர் எழுத்துத் தேர்வில் எழுதக்கூடிய முழு முறைக்கு கீழே உள்ள தீர்வுகளைத் திறவுங்கள்.

{{tool:gp-m12-official}}

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

## வினாடி வினா 13 — Decision Trees, Tree Traversals and Spanning Trees

*இந்தத் தலைப்பின் பாடக் குறிப்புகள்: [Week 13](Week%2013/Week%2013%20-%20Study%20Guide.html)*

இவை அதிகாரபூர்வ CODL வினாடி வினா 13 — Decision Trees, Tree Traversals and Spanning Trees இன் **8 கேள்விகள்**.

**எப்படிப் பயன்படுத்துவது:** இது உண்மையான quiz போலவே செயல்படும். **Attempt quiz now** அழுத்தி, எல்லாக் கேள்விகளுக்கும் விடையளியுங்கள் (கேள்வி எண்களால் தாவலாம், மீண்டும் பார்க்க வேண்டியவற்றை ⚑ flag செய்யலாம்), பின்னர் **Finish attempt**, **Submit** அழுத்துங்கள். உங்கள் மதிப்பெண் கிடைக்கும்; ஒவ்வொரு கேள்விக்கும் உங்கள் விடை, சரியான விடை, **ஏன்** என்பது — தவறான தேர்வு ஏன் தவறு என்பதும் — காட்டப்படும். மீண்டும் முயல **Retake quiz** அழுத்துங்கள். பின்னர் எழுத்துத் தேர்வில் எழுதக்கூடிய முழு முறைக்கு கீழே உள்ள தீர்வுகளைத் திறவுங்கள்.

{{tool:gp-m13-official}}

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
