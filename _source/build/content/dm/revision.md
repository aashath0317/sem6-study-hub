---
title: One-Shot Revision — All 15 Weeks in 5 Hours
lead: Every week on one page — definitions, step lists, formulas and the worked numbers (binning, normalisation, Apriori, FP-growth, info gain, Naïve Bayes, k-means, PAM). Read top to bottom, tick each card, and finish with the self-test.
sources: Weeks 01–15 study guides; Self-assessment quiz; Assessment 02
---

**எப்படிப் படிப்பது:** ஒவ்வொரு card-உம் ஒரு வாரம். முதலில் **தமிழ் சுருக்கத்தைப்** படியுங்கள். பிறகு **lists, formulas-ஐ** ஒரு தாளில் எழுதிப் பாருங்கள். ⭐ குறியிட்டவை **கணக்குகள்**. அவற்றை ஒருமுறையாவது கையால் செய்து பாருங்கள்: Apriori, FP-tree, info gain, Naïve Bayes, k-means, PAM. Theory கேள்விகளுக்கு **Define → List → Example** என்ற வடிவில் எழுதுங்கள்.

## 5-hour plan

| நேரம் | என்ன படிப்பது | Cards |
|---|---|---|
| 0:00 – 0:30 | Basics: data mining, KDD | Weeks 01–02 |
| 0:30 – 1:15 | ⭐ Preprocessing + reduction (binning, normalisation) | Weeks 03–04 |
| 1:15 – 2:00 | Data warehouse, schemas, design, cubes | Weeks 05–08 |
| 2:00 – 2:15 | ☕ **Break** | |
| 2:15 – 3:15 | ⭐ Apriori + FP-growth (do both by hand) | Weeks 09–10 |
| 3:15 – 4:00 | ⭐ Decision tree + Naïve Bayes | Weeks 11–12 |
| 4:00 – 4:40 | ⭐ k-means, PAM, hierarchical | Weeks 13–14 |
| 4:40 – 5:00 | Applications + **self-test** | Week 15 |

## Week 01 — Introduction to Data Mining & Big Data

**தமிழ் சுருக்கம்:** **Data mining** என்பது பெரிய அளவு data-விலிருந்து **சுவாரஸ்யமான patterns-ஐக் கண்டுபிடிப்பது**. அந்த patterns:

- non-trivial (எளிதில் தெரியாதவை)
- implicit (மறைந்திருப்பவை)
- முன்பு தெரியாதவை
- பயனுள்ளவை

மண்ணிலிருந்து (data) தங்கத்தை (knowledge) எடுப்பது போல. Data நிறைய இருக்கிறது, ஆனால் பெரும்பாலும் பயன்படுத்தப்படாமலே கிடக்கிறது.

| Concept | Key point |
|---|---|
| Definition | Discovering interesting (non-trivial, implicit, previously unknown, potentially useful) patterns from massive data |
| Nature | Iterative, exploratory, human + computer cooperation |
| Why needed | Huge data, mostly unused; it was created for storage, not analysis |
| Big Data **3 V's** | **Volume** (size), **Velocity** (speed), **Variety** (types) |
| +2 V's | **Veracity** (trust), **Value** (worth) |
| Pattern forms | **Black box** (can't explain) vs **transparent box** (shows the structure) |

**Applications:**

| Domain | Uses |
|---|---|
| Banking | Market basket analysis, CRM, fraud detection |
| Health | Treatment effectiveness, bioinformatics, fraud detection |
| Public sector | Weather forecasting, criminal investigation |

## Week 02 — The KDD Process

**தமிழ் சுருக்கம்:** Data mining என்பது **KDD (Knowledge Discovery in Databases)** process-இன் **ஒரு படி** மட்டுமே. KDD-இல் மொத்தம் **7 படிகள்**. அவற்றில் முதல் 4 படிகள் **preprocessing**.

**⭐ KDD steps:**

1. Data **cleaning**: remove noise and inconsistency
2. Data **integration**: combine sources
3. Data **selection**: pick the relevant data
4. Data **transformation**: into forms suitable for mining
5. **Data mining**: find the patterns
6. **Pattern evaluation**: keep the interesting ones
7. **Knowledge presentation**: visualise the results

**Architecture (top → bottom):**

- User interface
- Pattern evaluation
- Data mining engine
- Knowledge base: concept hierarchies, user beliefs, thresholds, metadata
- Database / data warehouse server

**Data types:**

| Type | Meaning |
|---|---|
| Data warehouse | Many sources, one unified schema, one site. Built by clean → integrate → transform → load → refresh |
| Transactional DB | Transaction ID + list of items |
| Time-series vs sequence | Repeated measurements over time vs ordered events |
| Spatial: raster vs vector | Pixel maps vs points, lines and polygons |
| Web usage mining | User access patterns from weblogs |

**5 data mining task primitives:**

1. Task-relevant data
2. Kind of knowledge to mine
3. Background knowledge
4. Interestingness measures
5. Visualisation of the patterns

## Week 03 — ⭐ Data Preprocessing

**தமிழ் சுருக்கம்:** நிஜ data **"அழுக்காக"** இருக்கும். மூன்று பிரச்சனைகள்:

- **Incomplete:** சில மதிப்புகள் இல்லை.
- **Noisy:** பிழைகள் உள்ளன.
- **Inconsistent:** ஒன்றுக்கொன்று முரண்படுகின்றன.

KDD நேரத்தில் **70–80%** இந்தச் சுத்தம் செய்வதற்கே போகிறது.

**Missing values: 6 methods**

1. Ignore the tuple
2. Fill it in manually
3. Use a global constant ("Unknown")
4. Use the attribute **mean**
5. Use the mean **of the same class**
6. Use the **most probable** value (regression, decision tree)

**Noise smoothing: 3 methods** — binning, regression, clustering.

**⭐ Binning example:** sorted data 4, 8, 15, 21, 21, 24, 25, 28, 34 in equal-depth bins of 3.

| Bin | Data | By means | By boundaries |
|---|---|---|---|
| 1 | 4, 8, 15 | 9, 9, 9 | 4, 4, 15 |
| 2 | 21, 21, 24 | 22, 22, 22 | 21, 21, 24 |
| 3 | 25, 28, 34 | 29, 29, 29 | 25, 25, 34 |

**By boundaries:** each value is replaced by whichever bin boundary (the bin's min or max) is closer.

**Integration issues:**

- **Entity identification**: are two fields the same thing? Use metadata.
- **Redundancy**: use correlation.

**Correlation r** ranges from −1 to +1.

- r > 0: positive correlation (possibly redundant).
- r = 0: no linear correlation. This does not mean the attributes are independent.
- r < 0: negative correlation.

**Transformation:** smoothing, aggregation, generalisation, normalisation.

**⭐ Normalisation (income v = 73,600; min 12,000, max 98,000; mean 54,000, σ 16,000):**

| Method | Formula | Answer |
|---|---|---|
| Min-max to [0, 1] | (v − min)/(max − min) × (new max − new min) + new min | (73,600 − 12,000)/86,000 = **0.716** |
| Z-score | (v − mean)/σ | (73,600 − 54,000)/16,000 = **1.225** |

## Week 04 — Data Reduction & Discretization

**தமிழ் சுருக்கம்:** Data-வை **சிறிதாக்குவது**, ஆனால் mining முடிவுகள் **கிட்டத்தட்ட அதேபோல்** இருக்க வேண்டும். இதனால் நேரமும் memory-உம் மிச்சமாகும்.

**5 reduction strategies:**

1. Data cube aggregation
2. Attribute subset selection
3. Dimensionality reduction
4. Numerosity reduction
5. Discretization and concept hierarchies

**Attribute subset selection:**

- **Goal:** the minimum set of attributes whose class distribution stays close to the original.
- **Greedy methods:**
    - Forward selection
    - Backward elimination
    - Forward + backward combined
    - Decision tree induction

**Dimensionality reduction:**

- **Lossless:** exact reconstruction.
- **Lossy:** approximation (wavelets, PCA).

**Numerosity reduction:**

- **Parametric:** store only the model parameters, e.g. regression y = wx + b, log-linear models.
- **Non-parametric:** histograms, clustering, sampling.

**Histogram types:**

| Type | Rule |
|---|---|
| Equal-width | Width W = (B − A)/N. Outliers hurt it |
| Equal-frequency (depth) | Same count in each bin. Sort first; depth = n/N |
| V-Optimal | Least variance |
| MaxDiff | Cut at the β − 1 largest gaps |

**Discretization:**

- **Supervised** (uses class labels) vs **unsupervised** (does not).
- **Top-down** (splitting at cut points) vs **bottom-up** (merging neighbours).
- **Concept hierarchy:** recursive discretization, e.g. age → youth / middle-aged / senior. It is done **before** mining.

## Week 05 — Introduction to Data Warehousing

**தமிழ் சுருக்கம்:** **Data warehouse** என்பது **முடிவெடுப்பதற்காக** மட்டும் தனியாக வைக்கப்படும் ஒரு database.

- **OLTP:** தினசரி transactions-க்கு. உதா: bank counter.
- **OLAP:** பகுப்பாய்வுக்கு. உதா: manager report.

**⭐ Inmon's definition (4 keywords):** a data warehouse is **subject-oriented, integrated, time-variant and nonvolatile**, supporting management decisions.

| Keyword | Meaning |
|---|---|
| Subject-oriented | Organised around subjects (customer, product, sales), not applications |
| Integrated | Combines multiple sources with consistent names and units |
| Time-variant | 5–10 years of history; every key has a time element |
| Nonvolatile | Loaded and refreshed in a controlled way; no day-to-day updates |

**⭐ OLTP vs OLAP:**

| | OLTP | OLAP |
|---|---|---|
| Users | Clerks, IT staff | Knowledge workers, managers |
| Function | Day-to-day operations | Decision support |
| Data | Current, detailed | Historical, consolidated |
| Access | Read/write, short transactions | Mostly read, complex queries and scans |
| Number of users | Thousands | Hundreds |
| Size | MB – GB | GB – TB |

**Why keep the warehouse separate:**

- Performance
- Concurrency and recovery
- It holds different data (historical, consolidated)

**Data cube:**

- **Dimensions** = perspectives.
- **Facts** = numeric measures.
- **Fact table** = the measures + keys to the dimension tables.

**Lattice of cuboids:**

- n dimensions give **2ⁿ cuboids**.
- **Base cuboid** = all dimensions (the lowest level of summary).
- **Apex cuboid** = "all" (the highest summary).

**OLAP operations:**

- **Roll-up**: go up a hierarchy (summarise)
- **Drill-down**: go into more detail
- **Slice**: fix one dimension
- **Dice**: select a sub-cube on 2+ dimensions

## Week 06 — Schemas for the Multidimensional Model

**தமிழ் சுருக்கம்:** Warehouse-க்கு **3 schemas** உள்ளன:

- **Star:** நடுவில் ஒரு fact table, சுற்றிலும் dimension tables.
- **Snowflake:** dimension tables-உம் மேலும் பிரிக்கப்படுகின்றன (normalised).
- **Fact constellation:** பல fact tables, dimension tables-ஐப் பகிர்ந்துகொள்கின்றன.

| Schema | Structure | Trade-off |
|---|---|---|
| **Star** | 1 fact table + 1 table per dimension | Simplest; some redundancy |
| **Snowflake** | Normalised dimensions (item → supplier, location → city) | Less redundancy, more joins |
| **Fact constellation** (galaxy) | Several fact tables sharing dimensions (sales + shipping) | Used for whole-enterprise warehouses |

**Warehouse vs data mart:**

- **Warehouse:** enterprise-wide, many subjects. Uses a fact constellation.
- **Data mart:** a department's subset, selected subjects. Uses a star (preferred) or snowflake.

**DMQL:**

- `define cube name [dims]: measures`
- `define dimension name as (attrs)`
- Sharing a dimension: `define dimension time as time in cube sales`

**Concept hierarchy:** maps low-level values to higher-level ones, e.g. street < city < province/state < country.

## Week 07 — Design of a Data Warehouse

**தமிழ் சுருக்கம்:** Warehouse design-ஐ **4 views**-இலிருந்து பார்க்கிறோம். கட்டுவதற்கு **4 design steps** உள்ளன. கட்டமைப்பு **3 tiers**-ஆக இருக்கும். மூன்று OLAP server வகைகள்:

- **ROLAP:** relational tables.
- **MOLAP:** arrays.
- **HOLAP:** இரண்டும் கலந்தது.

**Benefits of a warehouse:**

- Competitive advantage
- Productivity
- CRM
- Cost reduction

**4 views:** top-down, data source, data warehouse, business query.

**Design approaches:**

- **Top-down** (plan first; suits mature technology and clear problems) vs **bottom-up** (prototype first; cheaper, suits early stages).
- **Waterfall** (step by step) vs **spiral** (rapid, increasing releases).

**⭐ 4 design steps:**

1. Choose the **business process**
2. Choose the **grain**
3. Choose the **dimensions**
4. Choose the **measures**

**3 tiers:**

| Tier | Contents |
|---|---|
| Bottom | Relational warehouse server + metadata |
| Middle | OLAP server |
| Top | Client tools: query, reports, analysis, mining |

**3 warehouse models:** enterprise warehouse, data mart, virtual warehouse.

**Metadata** = data about data.

**OLAP servers:**

| Server | Storage | Notes |
|---|---|---|
| **ROLAP** | Relational tables | Scalable (MicroStrategy) |
| **MOLAP** | Multidimensional arrays | Fast; dense/sparse two-level storage |
| **HOLAP** | Detail in ROLAP, aggregates in MOLAP | MS SQL Server 2000 |

## Week 08 — Data Cube Computation & Generalization

**தமிழ் சுருக்கம்:** ஒரு cube-இல் **2ⁿ cuboids** இருக்கும். எல்லாவற்றையும் கணக்கிட்டால் மிகப் பெரிதாகிவிடும். அதனால் ஒரு **threshold-ஐத் தாண்டும் cells-ஐ மட்டும்** சேமிக்கிறோம். இதுதான் **iceberg cube**.

| Concept | Key point |
|---|---|
| Base cell vs aggregate cell | All n values set vs at least one "\*" |
| m-D cell | Exactly m non-\* values |
| Ancestor / parent | Fewer dimensions and agrees where not \*. Parent = exactly one dimension fewer |
| Full cube size | 2ⁿ cuboids; with hierarchies Π(Lᵢ + 1) |
| **Iceberg cube** | Store only cells with measure ≥ threshold (e.g. count ≥ 10) |
| MultiWay | Chunked array; one base cell updates all its aggregate cells at once |
| BUC | Explores from apex to base; prunes branches that fail the iceberg condition |
| Star-cubing | Values whose 1-D aggregate fails the condition become \*; uses a star-tree |
| AOI (1989) | Attribute-oriented induction: query-oriented, on-line generalisation; attribute removal vs generalisation; prime relation with counts |

## Week 09 — ⭐ Frequent Patterns & Apriori

**தமிழ் சுருக்கம்:** "எந்தப் பொருட்கள் **சேர்ந்து** வாங்கப்படுகின்றன?" என்று கண்டுபிடிப்பது இது. உதா: bread வாங்குபவர்கள் butter-உம் வாங்குகிறார்கள். **Support**, **confidence** இரண்டும் threshold-ஐத் தாண்டினால் அது ஒரு **strong rule**.

**Formulas:**

- **Support** (usefulness) of A ⇒ B = % of all transactions that contain **A ∪ B**.
- **Confidence** (certainty) = P(B | A) = count(A ∪ B) / count(A).
- **Strong rule** = support ≥ min_sup **and** confidence ≥ min_conf.

**Two-step mining:**

1. Find all frequent itemsets.
2. Generate strong rules from them.

**Apriori** (Agrawal & Srikant, 1994) works level by level, with one DB scan per level.

**⭐ Apriori property:** every **subset** of a frequent itemset is frequent. So if an itemset is infrequent, all its **supersets** are infrequent too.

**Steps:**

1. Scan the DB → C₁ → keep those with count ≥ min_sup → **L₁**.
2. **Join:** Lₖ₋₁ ⋈ Lₖ₋₁, joining itemsets whose first k − 2 items match → Cₖ.
3. **Prune:** drop any candidate with an infrequent (k − 1)-subset.
4. Scan to count Cₖ → keep the frequent ones → **Lₖ**.
5. Repeat until Lₖ is empty.

**Rules from l:**

- For each non-empty proper subset s of l, form **s ⇒ (l − s)**.
- confidence = sup(l)/sup(s).
- Keep the rule if confidence ≥ min_conf.

**Classic example result:** L₃ = {I1, I2, I3}, {I1, I2, I5}. C₄ is pruned.

## Week 10 — ⭐ FP-Growth & Kinds of Association Rules

**தமிழ் சுருக்கம்:** Apriori-க்கு இரண்டு பிரச்சனைகள்: மிக அதிகமான candidates, மீண்டும் மீண்டும் DB scans. **FP-growth** candidates இல்லாமலே வேலை செய்கிறது. DB-ஐ **2 முறை மட்டுமே** scan செய்கிறது. எல்லா data-வையும் ஒரு compact **FP-tree**-இல் சுருக்கி வைக்கிறது.

**Building the FP-tree:**

1. **Scan 1:** count the supports. Drop infrequent items. Sort the rest in **descending support** to get the L order (e.g. f, c, a, b, m, p). Ties: pick one fixed order and keep it.
2. **Scan 2:** for each transaction:
    - Keep only the frequent items, **in L order**.
    - Insert them from the root. **Shared prefixes increase the counts.**
    - New items start a new branch.
3. A **header table** links all the nodes of each item (node-links).

**⭐ Ordered frequent items (min_sup = 3):**

| TID | Items | Ordered frequent items |
|---|---|---|
| 100 | f, a, c, d, g, i, m, p | f, c, a, m, p |
| 200 | a, b, c, f, l, m, o | f, c, a, b, m |
| 300 | b, f, h, j, o | f, b |
| 400 | b, c, k, s, p | c, b, p |
| 500 | a, f, c, e, l, p, m, n | f, c, a, m, p |

**Mining the tree:**

1. Start from the **least frequent** item (the suffix).
2. Collect its **conditional pattern base**: the prefix paths, with counts.
3. Build the **conditional FP-tree**.
4. Recurse, joining (concatenating) the suffix onto the patterns found.

**Classic result:** p → {c, p}:3 · m → {f, c, a, m}:3 · b → none · a → {f, c, a}:3 · c → {f, c}:3

If the tree is too big for memory, use **projected databases**.

**Kinds of association rules:**

- **Multilevel:** use concept hierarchies, mined top-down, with uniform or reduced support.
- **Multidimensional:**
    - Single-dimensional: one predicate repeated
    - Inter-dimensional: no repeated predicates
    - Hybrid: some predicates repeat
- **Constraints:**
    - Knowledge type
    - Data
    - Dimension / level
    - Interestingness
    - Rule constraints (metarules)

## Week 11 — ⭐ Classification & Decision Trees

**தமிழ் சுருக்கம்:**

- **Classification:** ஒரு **category label**-ஐக் கணிப்பது. உதா: buys_computer = yes/no.
- **Prediction:** ஒரு **continuous value**-ஐக் கணிப்பது.

இது **supervised learning**: labels கொடுக்கப்பட்டிருக்கும். Decision tree-இல், **அதிக information gain** உள்ள attribute **root** ஆகிறது.

**Classification vs clustering:**

- **Classification** is supervised: the labels are given.
- **Clustering** is unsupervised: no labels.

**Two steps:**

1. **Learn** a model on the training set.
2. **Test** its accuracy on an independent test set, then classify new data.

**Overfitting:** the model learns the anomalies of the training data, so an accuracy estimate made on the training set is too optimistic.

**Preparing the data:**

- Cleaning
- Relevance analysis
- Transformation and reduction

**Comparing classifiers:**

- Accuracy
- Speed
- Robustness
- Scalability
- Interpretability

**Decision tree parts:**

- Internal node = a **test** on an attribute.
- Branch = an **outcome** of the test.
- Leaf = a **class**.

| Algorithm | Measure |
|---|---|
| ID3 | Information gain |
| C4.5 | Gain ratio (fixes the bias towards many-valued attributes) |
| CART | Gini index, binary splits |

**⭐ Formulas:**

- **Info(D)** = −Σ pᵢ log₂ pᵢ
    - buys_computer (9 yes, 5 no): −(9/14)log₂(9/14) − (5/14)log₂(5/14) = **0.940**
- **Info_A(D)** = Σ (|Dⱼ|/|D|) × Info(Dⱼ)
    - For age: **0.694**
- **Gain(A)** = Info(D) − Info_A(D)
    - Gain(age) = 0.940 − 0.694 = **0.246**. This is the highest, so **age is the root**.
- **Gain ratio** = Gain / SplitInfo
- **Gini(D)** = 1 − Σ pᵢ²
    - Choose the split with the **minimum** Gini.
    - A v-valued attribute has 2ᵛ − 2 possible binary splits.

## Week 12 — ⭐ Bayesian & Rule-Based Classification

**தமிழ் சுருக்கம்:** **Naïve Bayes**, ஒவ்வொரு class-க்கும் probability கணக்கிட்டு **அதிகமானதைத்** தேர்ந்தெடுக்கிறது. "Naïve" என்று பெயர் வரக் காரணம்: attributes ஒன்றுக்கொன்று **சாராதவை (independent)** என்று அது எடுத்துக்கொள்கிறது.

**⭐ Bayes' theorem:** P(H|X) = P(X|H) · P(H) / P(X)

- P(H|X) = **posterior**. P(H) = **prior**.
- **Meningitis example:** 0.5 × (1/50,000) / (1/20) = **0.0002**.

**Naïve Bayes steps:**

1. Priors: P(Cᵢ) = (class count) / (total).
2. For each attribute value: P(xₖ|Cᵢ) = (count in the class) / (class size). For a continuous attribute, use the Gaussian g(x, μ, σ).
3. P(X|Cᵢ) = the **product** of the P(xₖ|Cᵢ) values.
4. Choose the class with the largest **P(X|Cᵢ)·P(Cᵢ)**. P(X) is the same for every class, so ignore it.

**Example result:**

- yes: 0.044 × 0.643 = **0.028**
- no: 0.019 × 0.357 = **0.007**
- So the answer is **yes**.

**Rule-based classification:**

- **Form:** IF antecedent (tests joined by AND) THEN consequent (class).
- **Coverage** = n<sub>covers</sub>/|D|.
- **Accuracy** = n<sub>correct</sub>/n<sub>covers</sub>.
- Example R1: coverage 14.28%, accuracy 100%.

**Tree → rules:** one rule per root-to-leaf path. The rules are mutually exclusive and exhaustive.

**Belief networks:** graphical models that, unlike Naïve Bayes, **allow dependencies** between attributes.

## Week 13 — ⭐ Cluster Analysis & k-means

**தமிழ் சுருக்கம்:** **Clustering** என்பது ஒரே மாதிரியான objects-ஐ **ஒரு குழுவாகச் சேர்ப்பது**. ஒரு குழுவுக்குள் similarity **அதிகம்**, குழுக்களுக்கு இடையே **குறைவு**. இது **unsupervised**: labels தேவையில்லை.

**Uses:**

- Customer groups
- Image processing
- Data segmentation
- **Outlier detection** (fraud)

**5 method families:**

| Type | Idea | Examples |
|---|---|---|
| Partitioning | k groups, each object in exactly one | k-means, k-medoids |
| Hierarchical | Merge (agglomerative) or split (divisive). Can't undo | Chameleon, BIRCH |
| Density-based | Grow while the neighbourhood is dense. Arbitrary shapes; filters noise | DBSCAN, OPTICS, DENCLUE |
| Grid-based | Work on grid cells. Fast | STING, WaveCluster |
| Model-based | Fit a model to each cluster | EM, COBWEB, SOM |

**k-means steps:**

1. Pick k initial centres.
2. Assign each object to the **nearest** centre.
3. Recompute each centre as the **mean** of its cluster.
4. Repeat until nothing changes.

**⭐ Worked example:** A1(2,10), A2(2,5), A3(8,4), A4(5,8), A5(7,5), A6(6,4), A7(1,2), A8(4,9). Initial centres A1, A4, A7. Manhattan distance.

| Iteration | Clusters | New centres |
|---|---|---|
| 1 | {A1} · {A3, A4, A5, A6, A8} · {A2, A7} | (2, 10), (6, 6), (1.5, 3.5) |
| 2 | {A1, A8} · {A3, A4, A5, A6} · {A2, A7} | **(3, 9.5), (6.5, 5.25), (1.5, 3.5)** |

**Distances:** Minkowski, with q = 1 giving **Manhattan** (|Δx| + |Δy|) and q = 2 giving **Euclidean**.

**Evaluating a classifier (Weka):**

- **ZeroR baseline:** always guess the majority class. For the diabetes data, 500/768 = **65%**.
- **k-fold cross-validation:**
    - Each fold is tested once, and the results are averaged.
    - **Stratified** = class proportions are kept in every fold.
    - Weka runs it **k + 1** times (k folds + the final model).
- **CV vs holdout:** similar mean (74.5% vs 74.8%), but a much smaller SD (0.9% vs 4.6%).

## Week 14 — ⭐ k-Medoids & Hierarchical Clustering

**தமிழ் சுருக்கம்:** k-means-இல் centre என்பது ஒரு **சராசரி**. k-medoids-இல் centre ஒரு **உண்மையான object** (medoid). அதனால் k-medoids outliers-ஆல் குறைவாகப் பாதிக்கப்படுகிறது. **Hierarchical** clustering படிப்படியாக merge (அல்லது split) செய்கிறது. ஒருமுறை செய்ததைத் **திரும்ப மாற்ற முடியாது**.

| Concept | Key point |
|---|---|
| Medoid | The most centrally located **real object** in a cluster |
| PAM | Partitioning Around Medoids: try swaps, keep those that lower the cost |
| Error E | Σ distance of every object to its cluster's medoid |
| Swap rule | S = E(new) − E(old). **Swap if S < 0** |
| Cost | O(k(n − k)²) per iteration, so expensive for large n |

**⭐ Example:**

- Medoids A1, A4, A7: E = **23**.
- Medoids A1, A5, A7: E = **16**.
- S = 16 − 23 = −7 < 0, so the **swap is suitable**.

**Hierarchical clustering:**

- **Agglomerative** (bottom-up merge, AGNES) vs **divisive** (top-down split, DIANA).
- Weakness: a merge or split **can't be undone**.

**Cluster distances:**

| Measure | Also called |
|---|---|
| d_min | Nearest neighbour / **single linkage** |
| d_max | Farthest neighbour / **complete linkage** |
| d_mean, d_avg | A compromise; less sensitive to outliers |

## Week 15 — Applications & Trends

**தமிழ் சுருக்கம்:** Data mining **நான்கு முக்கியத் துறைகளில்** பயன்படுகிறது: நிதி, retail, telecom, biology. ஒவ்வொன்றுக்கும் **அதன் data எப்படி இருக்கிறது**, **எதற்குப் பயன்படுகிறது** என்று இரண்டையும் சொல்லுங்கள்.

| Domain | Data | Uses |
|---|---|---|
| **Finance** | Complete, reliable, high quality | Warehouses; loan prediction via attribute relevance ranking; money laundering via integrated databases + unusual patterns |
| **Retail** | Vast; grows with e-commerce | Buying behaviour, retention, distribution; data cubes by time and region; campaign effectiveness (during vs before/after) |
| **Telecom** | Multidimensional: time, duration, caller/callee location, type | **Fraud** (unusual patterns, account break-ins); association and sequential patterns by group, month, time of day |
| **Biology** | Heterogeneous | Bioinformatics; data integration; **BLAST/FASTA** sequence search (allowing gaps and mismatches); protein networks |

## Self-test — cover the answers

Answer **on paper** first, then open each one.

<details markdown="1">
<summary>1. List the 7 KDD steps.</summary>

Cleaning → Integration → Selection → Transformation → Mining → Evaluation → Presentation.
</details>

<details markdown="1">
<summary>2. What are the 3 V's of Big Data, plus the 2 extra?</summary>

Volume, Velocity, Variety. The extra two: Veracity, Value.
</details>

<details markdown="1">
<summary>3. Smooth 4, 8, 15 | 21, 21, 24 | 25, 28, 34 by bin means.</summary>

9, 9, 9 | 22, 22, 22 | 29, 29, 29
</details>

<details markdown="1">
<summary>4. Give the min-max and z-score formulas.</summary>

- **Min-max:** (v − min)/(max − min) × (new range) + new min
- **Z-score:** (v − mean)/σ
</details>

<details markdown="1">
<summary>5. What are Inmon's 4 keywords?</summary>

Subject-oriented, integrated, time-variant, nonvolatile.
</details>

<details markdown="1">
<summary>6. Give 3 differences between OLTP and OLAP.</summary>

- **Users:** clerks vs managers.
- **Data:** current vs historical.
- **Access:** short read/write transactions vs complex read-only queries.
</details>

<details markdown="1">
<summary>7. Star vs snowflake vs fact constellation?</summary>

- **Star:** one fact table + one table per dimension.
- **Snowflake:** normalised dimensions.
- **Fact constellation:** several fact tables sharing dimensions.
</details>

<details markdown="1">
<summary>8. Name the 4 OLAP operations.</summary>

Roll-up, drill-down, slice, dice.
</details>

<details markdown="1">
<summary>9. Give the support and confidence formulas.</summary>

- **Support** = % of transactions containing A ∪ B.
- **Confidence** = count(A ∪ B)/count(A).
</details>

<details markdown="1">
<summary>10. What is the Apriori property?</summary>

Every subset of a frequent itemset is frequent. So an infrequent itemset has only infrequent supersets.
</details>

<details markdown="1">
<summary>11. How does FP-growth avoid candidate generation?</summary>

It compresses the DB into an FP-tree in 2 scans, then mines the conditional pattern bases recursively.
</details>

<details markdown="1">
<summary>12. What is information gain, and which attribute becomes the root?</summary>

Gain(A) = Info(D) − Info_A(D). The attribute with the **highest** gain becomes the root (age: 0.246).
</details>

<details markdown="1">
<summary>13. Why is Naïve Bayes "naïve"?</summary>

It assumes the attributes are independent given the class.
</details>

<details markdown="1">
<summary>14. What are the k-means steps?</summary>

1. Pick k centres.
2. Assign each object to the nearest centre.
3. Recompute the means.
4. Repeat until stable.
</details>

<details markdown="1">
<summary>15. What is the PAM swap rule?</summary>

Swap if S = E(new) − E(old) < 0. For example, 16 − 23 = −7, so swap.
</details>

:::exam
**How to answer:**

1. **Theory questions:** definition → numbered list → one example per point. The lists above are your headings.
2. **Calculations:** write the **formula**, then the **substitution**, then the **answer**, every time. Show each table: C₁ → L₁ → C₂ …, the FP-tree with counts, the distance table for k-means.
3. **Check:** supports never exceed the number of transactions; each probability is between 0 and 1; every object sits in exactly one cluster.

After this page, try the **Official quizzes** page once.
:::
