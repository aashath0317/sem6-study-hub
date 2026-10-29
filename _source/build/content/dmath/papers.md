---
title: Past Papers — Worked Answers & What to Expect
lead: Four past papers solved step by step: January 2023, July 2023, October 2019 and the official model questions. Quantifiers, functions, relations, number theory, induction, sets and Venn diagrams, sequences, matrices, counting and graphs come up every year, often almost word for word.
sources: ITE 3822 January 2023; July 2023; October 2019; Model questions
---

## What the exam looks like and what keeps coming back

:::key Format
- **3 hours, 100 marks**, closed book, non-programmable calculator.
- **2023:** 4 questions × 25 marks, answer **all**.
- **2019:** 5 questions × 20 marks, answer **all**.
:::

| Topic | Jan 2023 | Jul 2023 | 2019 | Model | Week |
|---|---|---|---|---|---|
| **Truth values of quantified statements** | ✔ | ✔ | ✔ | | 1 |
| **Injective / surjective proofs** | ✔ | ✔ | ✔ | ✔ | 3 |
| **Equivalence relation proof** | ✔ | ✔ | ✔ (≠ relation) | | 9 |
| **Divisibility proofs (7 \| 4n ⇒ 7 \| n)** | ✔ | ✔ | ✔ | ✔ | 6 |
| **Congruence / mod arithmetic** | ✔ | ✔ | ✔ | ✔ | 6 |
| **Caesar cipher** (YARD / CHVW) | ✔ | ✔ | | | 6 |
| **Venn diagram with three sets** | ✔ | ✔ | | | 2 |
| **Sequences / series** | ✔ | ✔ (GP) | ✔ | ✔ | 4 |
| **Matrices** | ✔ (inverse) | ✔ (PᵀP) | | | 5 |
| **Induction** | | ✔ | ✔ | | 7 |
| **Counting (combinations, arrangements)** | | | ✔ | ✔ | 8 |
| **Two vertices of equal degree** | ✔ | ✔ | | | 11 |
| **Degree sequences: draw or explain** | ✔ | ✔ | | | 11 |
| **Graph model of a real problem** | ✔ (traffic) | ✔ (committees) | ✔ | ✔ | 11 |

:::tip Repeated questions
- **"Show that if 7 | 4n then 7 | n"** appeared in both 2023 papers.
- **"Every graph has two vertices of equal degree"** appeared in both 2023 papers.
- **Caesar cipher on YARD / CHVW** is the **same example as the Week 6 lecture**.
- The **truth-value question** uses the Week 1 Assignment formulas, e.g. (∀x)(∃y)(x + y = x).
:::

## January 2023 — Question 1

:::example a) Truth values over the integers
| Statement | Value | Why |
|---|---|---|
| (∀x)(∃y)(x + y = x) | **True** | Take y = 0 |
| (∃y)(∀x)(x + y = 0) | **False** | One y can't equal −x for **every** x (x = 1 needs y = −1, x = 2 needs y = −2) |
| (∀x)(∀y)(x < y ∨ y < x) | **False** | x = y = 1 |
| (∃x)(∃y)(x² = y) | **True** | x = 2, y = 4 |

Compare with Assignment 1: swapping ∀ and ∃ changes the meaning. ∀x∃y lets y depend on x, while ∃y∀x needs **one** y that works for all x.
:::

:::example b) f : ℤ → ℤ, f(x) = 2x − 1
**(i) Injective: yes.** If f(a) = f(b), then 2a − 1 = 2b − 1, so a = b.

**(ii) Surjective: no.** f(x) is always **odd**. For example, 0 = 2x − 1 gives x = ½, which isn't an integer, so 0 has no preimage.
:::

:::example c) aRb ⇔ 3a − 7b is even: an equivalence relation
- **Reflexive:** 3a − 7a = −4a is even ✓
- **Symmetric:** if 3a − 7b is even, then 3b − 7a = −(3a − 7b) − 4a − 4b is even ✓
- **Transitive:** if 3a − 7b and 3b − 7c are even, their sum 3a − 4b − 7c is even, so 3a − 7c = (sum) + 4b is even ✓

So **R is an equivalence relation**. In fact aRb exactly when **a and b have the same parity**.
:::

## January 2023 — Question 2 (number theory)

:::example a) If 7 | 4n then 7 | n (also July 2023 Q3b)
7 | 4n, so 4n = 7k for some integer k. Then:

**n = 8n − 7n = 2(4n) − 7n = 14k − 7n = 7(2k − n)**

so 7 | n. ∎ (This works because gcd(4, 7) = 1.)
:::

:::example b) a | b and c | d ⇒ ac | bd
b = ak and d = cm, so bd = (ac)(km), and therefore ac | bd. ∎
:::

:::example c) a² has the form 3k or 3k + 1
By the division algorithm, a = 3q + r with r ∈ {0, 1, 2}:

- r = 0: a² = 9q² = **3(3q²)**
- r = 1: a² = 9q² + 6q + 1 = **3(3q² + 2q) + 1**
- r = 2: a² = 9q² + 12q + 4 = **3(3q² + 4q + 1) + 1**

So a² is always 3k or 3k + 1, and **never 3k + 2**. ∎
:::

:::example d) and e)
**d)** 78 + x ≡ 3 (mod 5). Since 78 ≡ 3, this means x ≡ 0 (mod 5), so the **least positive x = 5**.

**e) Decrypt "CHVW"** with f⁻¹(p) = (p − 3) mod 26:

- C (2) → Z (25)
- H (7) → E (4)
- V (21) → S (18)
- W (22) → T (19)

**→ ZEST**
:::

## January 2023 — Question 3

:::example a) Pain-reliever survey (Venn diagram)
150 people answered and 37 were positive about none of the items, so **113** were positive about at least one.

E = 60, S = 50, C = 40, E∩S = 20, S∩C = 15, C∩E = 10:

113 = 60 + 50 + 40 − 20 − 15 − 10 + x, so **x = 8 were positive about all three**.

| Region | Count |
|---|---|
| E only | 60 − 20 − 10 + 8 = **38** |
| S only | 50 − 20 − 15 + 8 = **23** |
| C only | 40 − 15 − 10 + 8 = **23** |
| E∩S only / S∩C only / C∩E only | **12 / 7 / 2** |
| All three | **8** |
| None | **37** |
:::

:::example b) iPod songs
aₙ = 53 + 4(n − 1).

- **(i)** The first four terms are **53, 57, 61, 65**
- **(ii)** a₃₀ = 53 + 4 × 29 = **169 songs**
:::

:::example c) Inverse matrix and solving BX = 2X + C
**(i)** det A = 1(1 − 6) − 2(2 − 9) + 3(4 − 3) = **12**.

adj A = [[−5, 4, 3], [7, −8, 3], [1, 4, −3]], so A⁻¹ = (1/12) adj A. Matching T gives **s = −5 and t = 4**.

**(ii)** BX = 2X + C, so (B − 2I)X = C. And **B − 2I = [[1, 2, 3], [2, 1, 3], [3, 2, 1]] = A**, so **X = A⁻¹C = TC**:

X = [[−1/2, 0, 0, 1/6], [1/2, 3, −3, 1/6], [1/2, −1, 2, 1/6]]
:::

## January 2023 — Question 4 (graphs)

:::example a) Every graph with n ≥ 2 vertices has two vertices of equal degree (simple graph)
- Degrees lie in {0, 1, …, n − 1}, which is n values.
- But **0 and n − 1 can't both occur**: a vertex joined to all the others means no vertex is isolated.
- So the degrees take at most **n − 1 different values** for n vertices.
- By the **pigeonhole principle**, two vertices share a degree. ∎
:::

:::example b) Draw it, or explain why it can't exist
- **(i) Simple graph, 5 vertices, degrees 2, 3, 3, 3, 5: impossible.** In a simple graph on 5 vertices the maximum degree is **4**. (The degree sum 16 is even, but that doesn't help.)
- **(ii) Five edges, vertex degrees 1, 1, 3: impossible.** The degree sum must be 2 × 5 = **10**, but 1 + 1 + 3 = **5**.
- **(iii) Four vertices, degrees 1, 2, 3, 4: possible as a multigraph, not as a simple graph.** The sum is 10, so it needs 5 edges. Example: A–D, B–C, B–D, and **two edges C–D**. That gives A = 1, B = 2, C = 3, D = 4.
:::

:::example c) Traffic-light graph model
- **Vertices:** the 10 lanes L₁ … L₁₀.
- **Edges:** join two lanes if their paths **cross or merge**, i.e. they **can't have green at the same time**.
- A set of lanes that can share a phase is an **independent set**. The minimum number of phases is the graph's **chromatic number**: colour the vertices so no two joined vertices share a colour, and each colour is one phase.
:::

## July 2023

:::example Q1 a) Truth values over the real numbers
| Statement | Value | Why |
|---|---|---|
| ∀x∃y(x = y²) | **False** | x = −1 has no real square root |
| ∀x∃y(x² = y) | **True** | Take y = x² |
| ∃x∀y(xy = 0) | **True** | x = 0 |
| ∀x∃y(x + y = 1) | **True** | y = 1 − x |
:::

:::example Q1 b) and c)
**b) f : ℕ → ℚ, f(x) = x / (1 + x)**

- **Injective:** x/(1 + x) = y/(1 + y) gives x + xy = y + xy, so x = y ✓
- **Not surjective:** every value is **less than 1**, so 2 ∈ ℚ has no preimage

**c) (a, b) R (c, d) ⇔ a + d = b + c**

- **Reflexive:** a + b = b + a ✓
- **Symmetric:** a + d = b + c gives c + b = d + a ✓
- **Transitive:** a + d = b + c and c + f = d + e; adding gives a + f = b + e ✓

So **R is an equivalence relation**.
:::

:::example Q2 a) Learning preferences (80 students)
V = 64, L = 56, K = 46, all three = 21, V∩L = 47, V∩K = 35, L∩K = 27.

| Region | Count |
|---|---|
| V∩L only | 47 − 21 = 26 |
| V∩K only | 35 − 21 = 14 |
| L∩K only | 27 − 21 = 6 |
| **V only** | 64 − 26 − 14 − 21 = **3** |
| L only | 56 − 26 − 6 − 21 = 3 |
| K only | 46 − 14 − 6 − 21 = 5 |
| None | 80 − 78 = 2 |
:::

:::example Q2 b) and c)
**b) GP where the 2nd term is 81 × the 6th and S∞ = 9**

- ar = 81ar⁵, so r⁴ = 1/81 and **r = ±1/3**
- a / (1 − r) = 9 gives:
  - r = 1/3: **a = 6**
  - r = −1/3: **a = 12**

**c) PᵀP = 2Q**

- PᵀP = [[8, 4], [4, a² + 4]] and 2Q = [[2b, 4], [4, 8]]
- So **b = 4** and **a = ±2**
:::

:::example Q3: Induction, congruences, Caesar
**a) 6 | 2n³ + 3n² + n.**

- Base case n = 1: the value is 6 ✓
- Step: f(k + 1) − f(k) = 6k² + 12k + 6 = 6(k + 1)². So if 6 | f(k), then 6 | f(k + 1) ✓

**c) 41 | 2²⁰ − 1.** 2¹⁰ = 1024 = 41 × 25 − 1, so 2¹⁰ ≡ −1 (mod 41). Therefore 2²⁰ ≡ 1 and **41 | 2²⁰ − 1** ✓

**d) 3 × 7 × 13 × 515 × 23 (mod 11).** Reduce each factor: 3 · 7 · 2 · 9 · 1. Then 21 ≡ 10, 10 · 2 = 20 ≡ 9, 9 · 9 = 81 ≡ **4**.

**e) Encrypt "YARD"** with (p + 3) mod 26: **BDUG**
:::

:::example Q4: Degree sets and the committee graph
**b)**

- **(i) {2, 2, 2, 3, 4, 6}: impossible.** 6 vertices allow a maximum degree of 5, and the degree sum 19 is **odd**.
- **(ii) {2, 3, 3, 4}: impossible.** 4 vertices allow a maximum degree of 3.
- **(iii) {2, 2, 2, 4, 4}: possible.** A and B are joined to each other and to C, D and E. Then A and B have degree 4, and C, D, E have degree 2.

**c) Committee graph**

- **Vertices:** the six committees.
- **Edges:** join two committees that **share a member**, because they can't meet at the same time.
- **Edges found:** UG–Grad (Cohen), UG–Library (Boole), UG–Hiring (Newton), Grad–Hiring (Gatto, Yang), Grad–Personnel (Yang), Colloquium–Library (Sahin), Colloquium–Hiring (McMurry), Library–Personnel (Cortzen), Hiring–Personnel (Yang).
- Grad, Hiring and Personnel form a **triangle**, so at least 3 slots are needed, and **3 are enough**:
  - **Slot 1:** UG, Colloquium, Personnel
  - **Slot 2:** Grad, Library
  - **Slot 3:** Hiring
:::

## October 2019

:::example Q1: Predicates and quantifiers
**a)** A **predicate** is a statement with variables that becomes a proposition once the variables are given values. Example: P(x): "x > 3". P(5) is true and P(1) is false.

**b)** Over the reals, with P(x) = "x is positive" and N(x) = "x is negative":

| | Statement | In English | Value |
|---|---|---|---|
| A | ∀x(P(x) ∨ N(x)) | Every real number is positive or negative | **False** (x = 0) |
| B | ∃x(~P(x) ∧ ~N(x)) | Some real number is neither positive nor negative | **True** (x = 0) |
| C | ∀x(P(x) → ~N(x)) | Every positive real number is not negative | **True** |
| D | ∃x(P(x) → ~N(x)) | For some real x, if x is positive it isn't negative | **True** |

**Negations of each other: A and B**, since ~∀x(P ∨ N) ≡ ∃x(~P ∧ ~N).

**c) The sum of two odd integers is even:** (2a + 1) + (2b + 1) = 2(a + b + 1), which is even. ∎
:::

:::example Q2: Functions, series, sets
**a) f(x) = 3x² − 4 on ℝ: neither.** It's not injective, since f(1) = f(−1). It's not surjective, since f(x) ≥ −4, so −5 isn't reached.

**b)** Σₖ₌₁ⁿ [k² − (k − 1)²] **telescopes** to **n²**. (Equivalently Σ(2k − 1) = n².)

**c) False.** Counterexample: A = {1}, B = {2}, C = {1, 2}. C ⊆ A ∪ B, but C ⊄ A and C ⊄ B.
:::

:::example Q3: Number theory and induction
**a)** b = ak and c = bm = akm, so b + 2c = a(k + 2km), and **a | b + 2c**.

**b)** Five integers ≡ 3 (mod 31): **3, 34, 65, 96, −28**.

**c) n! ≥ 2ⁿ⁻¹.**

- Base: 1! = 1 ≥ 2⁰ ✓
- Step: (k + 1)! = (k + 1)k! ≥ (k + 1)2ᵏ⁻¹ ≥ 2 · 2ᵏ⁻¹ = 2ᵏ, since k + 1 ≥ 2 ✓
:::

:::example Q4: The relation a ≠ b, and counting
**a) a R b ⇔ a ≠ b**

- **Not reflexive:** 1 ≠ 1 is false
- **Symmetric:** a ≠ b gives b ≠ a ✓
- **Not transitive:** 1 ≠ 2 and 2 ≠ 1, but 1 ≠ 1 is false
- So it's **not an equivalence relation**

**b)** Choose 4 from 6 boys and 4 girls, with at least one boy:

**C(10, 4) − C(4, 4) = 210 − 1 = 209**
:::

:::example Q5: Graph models
**a) Which graph type?**

- (i) One edge if there's a highway between the cities: **simple graph**
- (ii) One edge for each highway: **multigraph**
- (iii) Multiple edges plus loops: **pseudograph**

**b) Acquaintanceship graph:** an undirected simple graph with vertices Tom, Patricia, Hope, Sandy, Amy, Marika, Jeff and Mary.

**Edges:** Tom–Patricia, Tom–Hope, Tom–Sandy, Tom–Amy, Tom–Marika, Jeff–Patricia, Jeff–Mary, Patricia–Hope, Amy–Hope, Amy–Marika.
:::

## Model questions (official sample problems)

:::example Q1: Sets and odd numbers
**a) Matching:** (a)–(5) · (b)–(1) · (c)–(6) · (d)–(2) · (e)–(3) · (f)–(4)

**b) n odd ⇒ 4 | n² − 5, but 8 ∤ n² − 5**

- n = 2k + 1 gives n² − 5 = 4(k² + k − 1)
- k² + k = k(k + 1) is even, so k² + k − 1 is **odd**
- So n² − 5 = 4 × (odd): divisible by 4, never by 8. ∎
:::

:::example Q2: Sums and recurrences
**a)** 1/((i + 1)(i + 2)) = 1/(i + 1) − 1/(i + 2). The sum **telescopes** to 1 − 1/(n + 2) = **(n + 1)/(n + 2)**.

**b)** Sₙ = 3Sₙ₋₁ + nSₙ₋₂ + 4:

- **S₂** = 6 + 2 + 4 = **12**
- **S₃** = 36 + 6 + 4 = **46**
- **S₄** = 138 + 48 + 4 = **190**

**c)** 31 div 6 = **5** and 31 mod 6 = **1**.
:::

:::example Q3: Functions and surjections
**a) f(x) = (7x − 3)/(x − 1) = 7 + 4/(x − 1)**

- Its image is **ℝ \ {7}**, so **d = 7**
- The inverse: **f̂⁻¹(y) = 1 + 4/(y − 7) = (y − 3)/(y − 7)**

**b) Surjections from {1, 2, 3, 4} onto {1, 2, 3}** (inclusion–exclusion):

3⁴ − 3·2⁴ + 3·1⁴ = 81 − 48 + 3 = **36**
:::

:::example Q4: Graph types and counting
**a) Airline routes**

| Model | Graph type |
|---|---|
| (i) One edge if there's a flight either way | Simple graph |
| (ii) One edge per flight | Multigraph |
| (iii) As (ii), plus a sightseeing loop at Miami | Pseudograph |
| (iv) One directed edge from origin to destination | Simple directed graph |
| (v) One directed edge per flight | Directed multigraph |

**b) ABRACADABRA:** 11 letters, with A × 5, B × 2 and R × 2. So 11! / (5! 2! 2!) = **83,160**.

**c) 7 men and 6 women, choose 5 with at least 3 men:**

C(7,3)C(6,2) + C(7,4)C(6,1) + C(7,5) = 525 + 210 + 21 = **756**
:::
