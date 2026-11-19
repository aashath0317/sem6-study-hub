---
title: One-Shot Revision — All 13 Weeks in 5 Hours
lead: Every week on one page — the formulas, the proof templates that come back every year, and the worked numbers. Read top to bottom, tick each card, and finish with the self-test.
sources: Weeks 01–13 study guides; Past papers (Jan 2023, Jul 2023, Oct 2019, model questions)
---

**எப்படிப் படிப்பது:** ஒவ்வொரு card-உம் ஒரு வாரம். முதலில் **தமிழ் சுருக்கத்தைப்** படியுங்கள். பிறகு **formulas, templates-ஐ** ஒரு தாளில் எழுதிப் பாருங்கள். Maths-ஐ **படித்தால் மட்டும் போதாது, எழுதிப் பார்க்க வேண்டும்.** ⭐ குறியிட்டவை ஒவ்வொரு ஆண்டும் exam-இல் வருபவை.

## 5-hour plan & what comes every year

**Exam:** 3 hours, 100 marks, closed book, non-programmable calculator. 2023-இல் 4 questions × 25 marks, **எல்லாவற்றுக்கும்** பதில் எழுத வேண்டும்.

| நேரம் | என்ன படிப்பது | Cards |
|---|---|---|
| 0:00 – 0:50 | Logic, sets, functions | Weeks 01–03 |
| 0:50 – 1:30 | Sequences, matrices | Weeks 04–05 |
| 1:30 – 2:10 | ⭐ Number theory (every paper) | Week 06 |
| 2:10 – 2:25 | ☕ **Break** | |
| 2:25 – 3:10 | Induction, counting | Weeks 07–08 |
| 3:10 – 3:40 | ⭐ Relations (equivalence proof) | Weeks 09–10 |
| 3:40 – 4:30 | ⭐ Graphs and trees | Weeks 11–13 |
| 4:30 – 5:00 | **Self-test** + write the 5 ⭐ templates once from memory | |

**⭐ Past-paper frequency (from the Past Papers page):**

| Topic | Jan 23 | Jul 23 | 2019 | Model | Week |
|---|---|---|---|---|---|
| Truth values of quantified statements | ✔ | ✔ | ✔ | | 1 |
| **Injective / surjective proofs** | ✔ | ✔ | ✔ | ✔ | 3 |
| **Equivalence relation proof** | ✔ | ✔ | ✔ | | 9 |
| **Divisibility (7 ∣ 4n ⇒ 7 ∣ n)** | ✔ | ✔ | ✔ | ✔ | 6 |
| **Congruence / mod** | ✔ | ✔ | ✔ | ✔ | 6 |
| Caesar cipher (YARD / CHVW) | ✔ | ✔ | | | 6 |
| Venn diagram, 3 sets | ✔ | ✔ | | | 2 |
| **Sequences / series** | ✔ | ✔ | ✔ | ✔ | 4 |
| Matrices (inverse, PᵀP) | ✔ | ✔ | | | 5 |
| Induction | | ✔ | ✔ | | 7 |
| Counting | | | ✔ | ✔ | 8 |
| Two vertices of equal degree | ✔ | ✔ | | | 11 |
| Degree sequences: draw or explain | ✔ | ✔ | | | 11 |
| **Graph model of a real problem** | ✔ | ✔ | ✔ | ✔ | 11 |

## Week 01 — Predicate Logic, Quantifiers & Direct Proofs

**தமிழ் சுருக்கம்:** **Proposition** என்பது True அல்லது False என்று சொல்லக்கூடிய ஒரு கூற்று. **Predicate P(x)** என்பது x-க்கு மதிப்பு கொடுத்த பிறகுதான் True/False ஆகும் கூற்று. உதாரணம்: "x > 3". இதில் P(4) True, P(2) False.

**Quantifiers:**

- **∀** = "எல்லா x-க்கும்". இதைப் பொய்யாக்க **ஒரு counterexample** போதும்.
- **∃** = "ஏதாவது ஒரு x-க்கு". இதை உண்மையாக்க **ஒரு witness** போதும்.

| Symbol | Meaning | True when |
|---|---|---|
| ∀x P(x) | For every x | No counterexample exists |
| ∃x P(x) | For at least one x | One witness exists |
| ∃!x P(x) | Exactly one x | One and only one witness |

**Negation (must know):**

- ¬∀x P(x) ≡ ∃x ¬P(x)
- ¬∃x P(x) ≡ ∀x ¬P(x)

∀ மற்றும் ∃ இடம் மாறும், பிறகு P மறுக்கப்படும்.

**Conditional:** p ⇒ q is false **only** when p is T and q is F.

**Translating English into logic:**

1. Rewrite the sentence.
2. Choose the variable.
3. Write the predicate.

"But" means ∧.

**⭐ Truth-value question (every year):** for example (∀x)(∃y)(x + y = x) over the integers is **True**. Whatever x is, choose y = 0.

- **Order matters.** ∀x∃y lets y depend on x. ∃y∀x needs one y that works for every x.

**Direct proof:**

- Assume P, then derive Q.
- Write even numbers as **2k** and odd numbers as **2k + 1**.

:::exam
**Template: "The sum of two odd integers is even."**

> Let a = 2k + 1 and b = 2l + 1 for integers k, l. Then a + b = 2k + 2l + 2 = 2(k + l + 1). Since k + l + 1 is an integer, a + b is even. ∎
:::

## Week 02 — Sets & Set Operations

**தமிழ் சுருக்கம்:** **Set** என்பது வரிசையில்லாத ஒரு தொகுப்பு. அதில் ஒரே உறுப்பு மீண்டும் வந்தாலும் ஒருமுறைதான் எண்ணப்படும். ⊆ (subset), ⊂ (proper subset, அதாவது சமமாக இருக்கக்கூடாது) இரண்டையும் கவனமாகப் பிரித்துப் பாருங்கள். ∅ எல்லா sets-க்கும் subset ஆகும்.

| Symbol | Meaning |
|---|---|
| A ∪ B | In A **or** B |
| A ∩ B | In A **and** B |
| Aᶜ | Not in A |
| A − B | In A but not in B |
| Disjoint | A ∩ B = ∅ |
| A = B | A ⊆ B **and** B ⊆ A |
| Subsets of an n-set | **2ⁿ** |

**Number systems:** ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ

**De Morgan's laws:**

- (A ∪ B)ᶜ = Aᶜ ∩ Bᶜ
- (A ∩ B)ᶜ = Aᶜ ∪ Bᶜ

**Other laws:** commutative, associative, distributive.

**⭐ Inclusion–exclusion (3-set Venn questions):**

- n(A ∪ B) = n(A) + n(B) − n(A ∩ B)
- n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A∩B) − n(A∩C) − n(B∩C) + n(A∩B∩C)

:::tip Venn diagram order
Fill the regions **from the centre outwards**:

1. A∩B∩C first.
2. Then the "only two sets" regions: pair minus centre.
3. Then the "only one set" regions.
4. Finally, the outside region: total minus the union.
:::

## Week 03 — Functions

**தமிழ் சுருக்கம்:** **Function** என்பது A-இன் ஒவ்வொரு உறுப்பையும் B-இன் **சரியாக ஒரு** உறுப்புக்கு அனுப்பும் விதி. மூன்று சொற்களைப் பிரித்துத் தெரிந்துகொள்ளுங்கள்:

- **Domain:** inputs.
- **Codomain:** அனுமதிக்கப்பட்ட outputs.
- **Range:** உண்மையில் வரும் outputs.

| Term | Meaning | Test |
|---|---|---|
| **One-to-one (injective)** | Different inputs give different outputs | f(a) = f(b) ⇒ a = b |
| **Onto (surjective)** | Every b in the codomain is hit | For each y, find an x with f(x) = y |
| **Bijection** | One-to-one **and** onto | Only bijections have an inverse |

**Key examples:**

- f(x) = x² on ℤ is **not one-to-one**, because f(1) = f(−1).
- Its range is {0, 1, 4, 9, …}, so it is **not onto ℤ**.

**Domain rules:**

- Inside a √ must be ≥ 0.
- A denominator must be ≠ 0.

**Inverse:** f(x) = 3x − 5 gives f⁻¹(y) = (y + 5)/3.

- f⁻¹ "undoes" f.
- f⁻¹ ≠ 1/f.

**Composition:** (f∘g)(x) = f(g(x)).

- **g is applied first.**
- In general f∘g ≠ g∘f.

:::exam
**⭐ Template: prove f : ℝ → ℝ, f(x) = 3x − 5 is a bijection (asked every year).**

> *One-to-one:* Suppose f(a) = f(b). Then 3a − 5 = 3b − 5, so 3a = 3b and a = b. Hence f is one-to-one.
> *Onto:* Let y ∈ ℝ. Take x = (y + 5)/3 ∈ ℝ. Then f(x) = 3·(y + 5)/3 − 5 = y. Hence f is onto.
> So f is a bijection, with inverse f⁻¹(y) = (y + 5)/3. ∎

**To disprove**, one counterexample is enough. For example, f(x) = x² is not one-to-one on ℤ since f(1) = f(−1) = 1 but 1 ≠ −1.
:::

## Week 04 — Sequences & Summations

**தமிழ் சுருக்கம்:**

- **Arithmetic sequence:** ஒவ்வொரு முறையும் **d கூட்டு**.
- **Geometric sequence:** ஒவ்வொரு முறையும் **r-ஆல் பெருக்கு**.

Σ ஒரு linear operator. அதனால் கூட்டுத்தொகையைப் **பிரிக்கலாம்**, constant-ஐ **வெளியே எடுக்கலாம்**.

| Formula | Value |
|---|---|
| Arithmetic term | aₙ = a + (n − 1)d |
| Geometric term | aₙ = a·rⁿ⁻¹ (starting from a₁ = a) |
| Σ<sub>j=0</sub><sup>n</sup> a·rʲ | (a·rⁿ⁺¹ − a)/(r − 1), r ≠ 1; if r = 1 it is (n + 1)a |
| Infinite geometric | a/(1 − r), only when \|r\| < 1 |
| Σk (k = 1..n) | n(n + 1)/2 |
| Σk² | n(n + 1)(2n + 1)/6 |
| Σk³ | n²(n + 1)²/4 |
| Σ from m to n | Σ<sub>1</sub><sup>n</sup> − Σ<sub>1</sub><sup>m−1</sup> |

**Double sum:** work out the **inner** sum first.

**Telescoping:** Σ[f(k) − f(k − 1)] = f(n) − f(0).

- Example: split 1/((i + 1)(i + 2)) = 1/(i + 1) − 1/(i + 2).
- Most of the terms then cancel.

:::tip Exam method for a Σ question

1. Split the sum into separate Σ terms.
2. Take the constants out.
3. Use the table formulas.
4. Substitute n.
5. Simplify.

Show every line: marks are given for the method.
:::

## Week 05 — Matrices

**தமிழ் சுருக்கம்:** ஒரு **m × n** matrix-இல் **rows × columns** இருக்கும். இரண்டு matrices-ஐக் கூட்ட, அவை **ஒரே அளவாக** இருக்க வேண்டும். பெருக்கலுக்கு **உள் எண்கள் பொருந்த வேண்டும்**: (m×k)(k×n) = m×n. பொதுவாக **AB ≠ BA**.

| Concept | Rule |
|---|---|
| Product entry | cᵢⱼ = (row i of A) · (column j of B) |
| Identity | IA = AI = A |
| Powers | A⁰ = I |
| Transpose | Swap rows and columns; (AB)ᵗ = BᵗAᵗ |
| Symmetric | A = Aᵗ |
| 0–1 matrices | **Join** = entrywise OR; **meet** = entrywise AND |
| Algorithm 1 (n × n) | n³ multiplications, n²(n − 1) additions |

**2 × 2 inverse:** if A = [[m: a b; c d]] and ad − bc ≠ 0, then A⁻¹ = (1/(ad − bc)) · [[m: d −b; −c a]]

**3 × 3 inverse, step by step:**

1. Find **det A**. It must be ≠ 0.
2. Find the **cofactors** using the sign pattern [[m: + − +; − + −; + − +]].
3. **adj A** = the transpose of the cofactor matrix.
4. **A⁻¹ = (1/det A) · adj A**.
5. **Check:** A·A⁻¹ = I.

**PᵀP questions (July 2023):**

1. Transpose P first.
2. Then multiply, row by column.
3. The result is always **symmetric**. Use this to check your answer.

## Week 06 — ⭐ Number Theory & Cryptography

**தமிழ் சுருக்கம்:** **a ∣ b** என்றால் **b = a × (ஏதாவது integer)**. ஒவ்வொரு divisibility proof-உம் இந்த ஒரு வரியில்தான் தொடங்குகிறது. இந்த week **ஒவ்வொரு paper-இலும்** வருகிறது.

| Concept | Rule |
|---|---|
| a ∣ b | b = ac for some integer c (a ≠ 0) |
| Theorem 1 | a∣b, a∣c ⇒ a∣(b + c) · a∣b ⇒ a∣bc · a∣b, b∣c ⇒ a∣c |
| Corollary | a∣b, a∣c ⇒ a∣(mb + nc) |
| Division algorithm | a = dq + r, 0 ≤ r < d. **r is never negative**: −23 = 5(−5) + 2 |
| a ≡ b (mod m) | m ∣ (a − b), i.e. a and b leave the same remainder |
| Theorem 4 | Congruences can be added and multiplied |
| Prime | > 1, with only the factors 1 and itself |
| FTA | Every n > 1 has a unique prime factorisation: 748 = 2² × 11 × 17 |
| Euclid | There are infinitely many primes |

:::exam
**⭐ Template: "If 7 ∣ 4n then 7 ∣ n" (both 2023 papers).**

> Suppose 7 | 4n, so 4n = 7k for some integer k. Then n = 8n − 7n = 2(4n) − 7n = 2(7k) − 7n = 7(2k − n). Since 2k − n is an integer, 7 | n. ∎

The trick is 2 × 4 = 8 = 7 + 1, so you can write n = 8n − 7n.

**Template: proof by cases (e.g. n² mod 3).**

> By the division algorithm, n = 3q + r with r ∈ {0, 1, 2}. Then check each case:
>
> - r = 0: n² = 9q², which is ≡ 0 (mod 3).
> - r = 1: n² = 9q² + 6q + 1, which is ≡ 1 (mod 3).
> - r = 2: n² = 9q² + 12q + 4, which is ≡ 1 (mod 3).
>
> In every case n² ≡ 0 or 1 (mod 3). ∎
:::

**⭐ Caesar cipher (same example as the lecture):**

- Number the letters A = 0, …, Z = 25.
- **Encrypt:** f(p) = (p + 3) mod 26.
- **Decrypt:** f⁻¹(p) = (p − 3) mod 26.

| Word | Numbers | After the shift | Answer |
|---|---|---|---|
| YARD (encrypt) | 24, 0, 17, 3 | +3 → 27→1, 3, 20, 6 | **BDUG** |
| CHVW (decrypt) | 2, 7, 21, 22 | −3 → −1→25, 4, 18, 19 | **ZEST** |

Wrap-around rule:

- Encrypt gives ≥ 26 → subtract 26.
- Decrypt gives a negative → add 26.

## Week 07 — Induction & Recursion

**தமிழ் சுருக்கம்:** **Domino** மாதிரி யோசியுங்கள். முதல் domino விழுகிறது (**basis**). ஒவ்வொரு domino-வும் அடுத்ததைத் தள்ளுகிறது (**inductive step**). அதனால் எல்லா dominoes-உம் விழுகின்றன. **Assume செய்வது P(k)-ஐ மட்டுமே. P(k + 1)-ஐ நிரூபிக்க வேண்டும்.**

| Proof type | Trick |
|---|---|
| Sum | Add the next term to both sides of P(k) |
| Divisibility | Regroup as (hypothesis part) + m·(integer) |
| Inequality | Add to both sides, then use a bound such as 1 ≤ 2ᵏ |

:::exam
**⭐ Template: 1 + 2 + ⋯ + n = n(n + 1)/2.**

> Let P(n): 1 + 2 + ⋯ + n = n(n + 1)/2.
> *Basis:* P(1): 1 = 1·2/2. True.
> *Inductive step:* Assume P(k): 1 + ⋯ + k = k(k + 1)/2 (inductive hypothesis). Then 1 + ⋯ + k + (k + 1) = k(k + 1)/2 + (k + 1) = (k + 1)(k + 2)/2, which is P(k + 1).
> By the principle of mathematical induction, P(n) holds for all n ≥ 1. ∎

**Divisibility example, 3 ∣ (n³ − n):**

(k + 1)³ − (k + 1) = (k³ − k) + 3(k² + k)

The first bracket is divisible by 3 by the hypothesis, and the second is 3 times an integer.
:::

**Well-ordering:** every non-empty set of non-negative integers has a least element. This is equivalent to induction.

**Recursion = basis + recursive rule:**

- f(0) = 3, f(n + 1) = 2f(n) + 3 → **9, 21, 45, 93**
- Factorial: F(0) = 1, F(n + 1) = (n + 1)F(n)
- Fibonacci: f₀ = 0, f₁ = 1, fₙ = fₙ₋₁ + fₙ₋₂ → 0, 1, 1, 2, 3, 5, 8
- "Give a recursive definition of aₙ = 4n − 2" → a₁ = 2, aₙ₊₁ = aₙ + 4

## Week 08 — Counting

**தமிழ் சுருக்கம்:**

- **AND** (ஒன்றன் பின் ஒன்றாகப் படிகள்) என்றால் **பெருக்கு**.
- **OR** (தனித்தனி cases) என்றால் **கூட்டு**.
- **வரிசை முக்கியம்** என்றால் **P**, முக்கியமில்லை என்றால் **C**.

| Question type | Formula | Example |
|---|---|---|
| Sequence of steps | n₁ × n₂ | 3 shirts × 2 pants = 6 |
| Disjoint cases | n₁ + n₂ | 37 + 83 = 120 |
| Overlap | \|A∪B\| = \|A\| + \|B\| − \|A∩B\| | |
| Functions m-set → n-set | nᵐ | 5³ = 125 |
| One-to-one m → n | n(n − 1)⋯(n − m + 1) | 5·4·3 = 60 |
| Order matters, no repeats | ⁿPᵣ = n!/(n − r)! | ¹⁰P₃ = 720 |
| Order matters, repeats allowed | nʳ | 10⁴ PINs |
| Order doesn't matter | ⁿCᵣ = n!/(r!(n − r)!) | ¹⁰C₂ = 45 |
| Identical letters | n!/(n₁!n₂!⋯) | BANANA = 60; ABRACADABRA = 83,160 |
| Onto m → n | nᵐ − C(n,1)(n−1)ᵐ + C(n,2)(n−2)ᵐ − ⋯ | 4 onto 3 = 36 |

**"At least" questions:** use the complement, or add up the cases.

- 6 boys + 4 girls, choose 4 with at least 1 boy: C(10, 4) − C(4, 4) = 210 − 1 = **209**.
- 7 men + 6 women, choose 5 with at least 3 men: 525 + 210 + 21 = **756**.

**Overcounting trap:** don't pick "1 boy first, then any 3 others". That gives 6 × C(9, 3) = 504, which is **wrong**.

## Week 09 — ⭐ Relations

**தமிழ் சுருக்கம்:** **Relation** என்பது ordered pairs-இன் ஒரு set: A × B-இன் subset. A-இன் மேல் உள்ள relation-க்கு மூன்று பண்புகளைச் சோதிக்கிறோம். **மூன்றும் இருந்தால் அது equivalence relation.**

| Property | Definition | How to check |
|---|---|---|
| Reflexive | (a, a) ∈ R for **every** a ∈ A | A loop on every element, including elements that never appear in R |
| Symmetric | (a, b) ⇒ (b, a) | Every pair has its reverse |
| Transitive | (a, b), (b, c) ⇒ (a, c) | Every 2-step path has a shortcut |

**Quick examples:**

| Relation | Equivalence? | Reason |
|---|---|---|
| ≤, <, divides | ✗ | Not symmetric |
| Friends | ✗ | Not transitive |
| "Same ___ as" (hometown, birthday, remainder) | ✓ | All three properties hold |

To show a property **fails**, give **one counterexample pair**.

:::exam
**⭐ Template: a R b ⇔ 7 ∣ (a − b) on ℤ is an equivalence relation.**

> *Reflexive:* a − a = 0 = 7·0, so a R a.
> *Symmetric:* If a R b then a − b = 7k, so b − a = 7(−k) and b R a.
> *Transitive:* If a − b = 7k and b − c = 7l, then a − c = 7(k + l), so a R c.
> Hence R is an equivalence relation. ∎

For a property that fails, write: "(1, 2) ∈ R and (2, 3) ∈ R but (1, 3) ∉ R, so R is not transitive."
:::

## Week 10 — n-ary Relations & Databases

**தமிழ் சுருக்கம்:** ஒரு database table என்பது ஒரு **n-ary relation**.

- ஒவ்வொரு **row** = ஒரு tuple (record).
- ஒவ்வொரு **column** = ஒரு field (attribute).
- **Degree** = columns-இன் எண்ணிக்கை.

| Term | Meaning |
|---|---|
| n-ary relation | Subset of A₁ × ⋯ × Aₙ; the Aᵢ are its domains; n is its degree |
| Primary key | A field that uniquely identifies every tuple, in **every** possible extension (index number: yes; name: no) |
| Composite key | A combination of fields, e.g. Area × GPA |
| Extension | The current tuples (changes over time) |
| Intension | The permanent part: name + attributes |
| **Selection Sᴄ** | Keep the **rows** that satisfy condition C |
| **Projection P<sub>i,j</sub>** | Keep **columns** i, j. Duplicate rows merge, so the row count can fall |
| **Join** | Combine two tables on their common fields |

**Example:** in the students table, selecting Area = CS ∧ GPA > 3.5 leaves only **Ackermann**.

## Week 11 — ⭐ Graphs

**தமிழ் சுருக்கம்:** Graph = **vertices** (புள்ளிகள்) + **edges** (கோடுகள்). எந்த graph-ஐயும் வகைப்படுத்த மூன்று கேள்விகள் கேளுங்கள்:

1. அம்புகள் (arrows) உண்டா?
2. Multiple edges உண்டா?
3. Loops உண்டா?

**Königsberg:** 4 landmasses, 7 bridges. Degrees 5, 3, 3, 3 are all odd, so the walk is impossible (Euler).

| Type | Edges | Multiple edges? | Loops? |
|---|---|---|---|
| Simple graph | Undirected | ✗ | ✗ |
| Multigraph | Undirected | ✓ | ✗ |
| Pseudograph | Undirected | ✓ | ✓ |
| Simple directed | Directed | ✗ | ✗ |
| Directed multigraph | Directed | ✓ | ✓ |
| Mixed | Both | ✓ | ✓ |

**⭐ Graph models (every paper):**

| Model | Graph type |
|---|---|
| Acquaintanceship | Simple |
| Influence | Simple directed |
| Web, citations | Directed |
| Airline flights | Directed multigraph |
| Round-robin tournament | Simple directed |
| Roads | Two-way = simple · one-way = directed · both = mixed |

For a model answer, always say **what a vertex is, what an edge is, and why** it is that graph type.

**Degree:**

- A loop counts **2**.
- **Handshaking:** Σ deg(v) = 2|E|. So the number of odd-degree vertices is always even.
- In a simple graph with n vertices, every degree is ≤ n − 1.

**⭐ "Draw it or explain why not":**

1. Is the sum even?
2. For a simple graph: is the max degree ≤ n − 1, and do 0 and n − 1 never appear together?
3. Run Havel–Hakimi.

| Degrees | Verdict |
|---|---|
| 2, 2, 2, 3, 4, 6 | ✗ sum 19 is odd |
| 2, 3, 3, 3, 5 (simple) | ✗ max degree allowed is 4 |
| 3, 3, 1, 1 (simple) | ✗ |
| 2, 2, 2, 4, 4 (simple) | ✓ |

:::exam
**⭐ Template: every simple graph with n ≥ 2 vertices has two vertices of equal degree (both 2023 papers).**

> Each degree lies in {0, 1, …, n − 1}. If some vertex has degree n − 1, it is adjacent to all others, so no vertex has degree 0; the degrees lie in {1, …, n − 1}. Otherwise they lie in {0, …, n − 2}. Either way, n vertices take at most n − 1 values, so by the pigeonhole principle two vertices have the same degree. ∎
:::

## Week 12 — Trees & Binary Search Trees

**தமிழ் சுருக்கம்:** **Tree** என்பது connected ஆகவும் circuit இல்லாமலும் இருக்கும் graph. n vertices கொண்ட tree-இல் **எப்போதும் n − 1 edges**. குடும்ப மரத்தின் சொற்களையே இங்கும் பயன்படுத்துகிறோம்: parent, child, sibling, ancestor, descendant.

| Concept | Rule |
|---|---|
| Tree | Connected + no simple circuit (always a simple graph) |
| Tree test | Any two of: connected · no circuit · n − 1 edges |
| Theorem 1 | Tree ⇔ exactly one simple path between any two vertices |
| Forest | No circuits; each component is a tree |
| Rooted tree | Root on top; edges point away from the root |
| Ancestors of v | Path from the root to v, **including the root, excluding v** |
| Leaf / internal | No children / has children |
| Binary tree | At most 2 children each: left and right |
| **BST** | Left subtree < key < right subtree |

**Building a BST:**

1. The first item is the root.
2. For each next item, compare from the root: smaller → go left, larger → go right.
3. Place it where the child is missing.

**Example:** mathematics, physics, geography, zoology, meteorology, geology, psychology, chemistry gives:

- Root: mathematics
- Left: geography (with chemistry on its left, geology on its right)
- Right: physics (with meteorology on its left, zoology on its right)
- psychology goes left of zoology

**Write every comparison in the exam.**

## Week 13 — Decision Trees, Traversal & Spanning Trees

**தமிழ் சுருக்கம்:** மூன்று தலைப்புகள்:

- **Decision tree:** probabilities வைத்துச் சிறந்த முடிவைத் தேர்ந்தெடுப்பது.
- **Traversal:** tree-இன் ஒவ்வொரு vertex-ஐயும் ஒருமுறை சந்திப்பது.
- **Spanning tree:** circuits-ஐ உடைத்து, எல்லா vertices-ஐயும் இணைக்கும் ஒரு tree பெறுவது.

**Decision tree:**

- **Symbols:** square = decision, circle = chance, end = result.
- **Expected value** = Σ (probability × value), minus the costs.
- **Product example:**
    - EV(success) = 0.2(1,000,000) + 0.5(800,000) + 0.3(600,000) = 780,000
    - EV(fail) = 30,000
    - Launch = 0.7(780,000) + 0.3(30,000) = **555,000**
    - Net of R&D: 555,000 − 400,000 = **+155,000** → launch
- **A/B sequences** of length 6 with no AA and no BBB: there are **9**.

**Traversal (tree from Example 13.2.1):**

| Order | Rule | Answer |
|---|---|---|
| **Preorder** | Root first, then subtrees left to right | a b e j k n o p f c d g l m h i |
| **Postorder** | Subtrees left to right, root last | j n o p k e f b c l m g h i d a |

**Trick:** walk around the tree. In preorder, write each vertex the **first** time you pass it. In postorder, write it the **last** time.

**Spanning tree:**

- A subgraph that is a tree and contains **every** vertex.
- Connected ⇔ the graph has a spanning tree.
- Remove **m − n + 1** edges, each one taken from a circuit.
- **IP multicasting** uses a spanning tree: the root is the source, the leaves are the receiving subnetworks.

## Self-test — cover the answers

Answer **on paper** first, then open each one.

<details markdown="1">
<summary>1. Negate ∀x ∃y P(x, y).</summary>

∃x ∀y ¬P(x, y)
</details>

<details markdown="1">
<summary>2. Write the 3-set inclusion–exclusion formula.</summary>

n(A∪B∪C) = n(A) + n(B) + n(C) − n(A∩B) − n(A∩C) − n(B∩C) + n(A∩B∩C)
</details>

<details markdown="1">
<summary>3. How do you prove f is one-to-one and onto?</summary>

- **One-to-one:** assume f(a) = f(b) and show a = b.
- **Onto:** take any y, find an x with f(x) = y, and check it.
</details>

<details markdown="1">
<summary>4. Give the geometric sum and the infinite geometric sum.</summary>

- Σ<sub>j=0</sub><sup>n</sup> arʲ = (arⁿ⁺¹ − a)/(r − 1)
- Infinite: a/(1 − r) when |r| < 1
</details>

<details markdown="1">
<summary>5. Give the 2 × 2 inverse formula.</summary>

(1/(ad − bc)) · [[m: d −b; −c a]], valid when ad − bc ≠ 0.
</details>

<details markdown="1">
<summary>6. Prove 7 ∣ 4n ⇒ 7 ∣ n.</summary>

4n = 7k, so n = 8n − 7n = 2(7k) − 7n = 7(2k − n). Hence 7 ∣ n.
</details>

<details markdown="1">
<summary>7. Encrypt YARD with the Caesar cipher.</summary>

**BDUG**
</details>

<details markdown="1">
<summary>8. What are the two steps of induction, and what do you assume?</summary>

- **Basis:** show P(1).
- **Inductive step:** assume P(k) and show P(k + 1).
</details>

<details markdown="1">
<summary>9. How many arrangements of BANANA? How many onto functions from a 4-set to a 3-set?</summary>

- BANANA: 6!/(3!·2!) = **60**
- Onto: 81 − 48 + 3 = **36**
</details>

<details markdown="1">
<summary>10. What are the three properties of an equivalence relation?</summary>

Reflexive, symmetric, transitive.
</details>

<details markdown="1">
<summary>11. What is the difference between selection and projection?</summary>

- **Selection** keeps rows.
- **Projection** keeps columns, and duplicate rows merge.
</details>

<details markdown="1">
<summary>12. What is the handshaking theorem?</summary>

Σ deg(v) = 2|E|. So the number of odd-degree vertices is even.
</details>

<details markdown="1">
<summary>13. What type of graph models airline flights?</summary>

A directed multigraph.
</details>

<details markdown="1">
<summary>14. How many edges does a tree with n vertices have? How many edges must be removed for a spanning tree?</summary>

- A tree has **n − 1** edges.
- Remove **m − n + 1** edges.
</details>

<details markdown="1">
<summary>15. What is the preorder rule, and what is the postorder rule?</summary>

- **Preorder:** root first, then the subtrees left to right.
- **Postorder:** the subtrees left to right, root last.
</details>

:::exam
**Exam-day rules:**

1. Write **every line** of working. Method marks are a large share of each question.
2. For proofs, start from the **definition**: "Suppose … so b = ac" or "f(a) = f(b)".
3. End every proof with a **conclusion line** and ∎.
4. For a "true/false" quantifier question, give a **witness or counterexample** as the reason.
5. Check counting answers with a small case. Check a matrix inverse with A·A⁻¹ = I.

After this page, open **Past papers**: the 2023 questions repeat almost word for word.
:::
