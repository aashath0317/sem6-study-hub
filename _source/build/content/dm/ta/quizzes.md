## Self-assessment வினாடி வினா — data mining functions, issues

*இந்தத் தலைப்பின் பாடக் குறிப்புகள்: [Week 01](Week%2001/Week%2001%20-%20Study%20Guide.html), [Week 02](Week%2002/Week%2002%20-%20Study%20Guide.html)*

இவை உங்கள் Data Mining கோப்புறையில் உள்ள **அதிகாரபூர்வ self-assessment கேள்விகள்** (கேள்வி 15 screenshot-இல் இல்லை; கேள்வி 17, கேள்வி 8-இன் மறுபதிப்பு; எனவே 18 கேள்விகள்). Data mining functions (association, classification, clustering, outlier analysis), biological / stream data பிரச்சினைகள், privacy, distance ஆகியவற்றைச் சோதிக்கின்றன.

உண்மையான quiz-இல் கேள்வி 1, 2 *ஒன்று அல்லது பல* தேர்வுகள்; இங்கு ஒவ்வொரு option-உம் எழுத்துகளின் சேர்க்கை.

**எப்படிப் பயன்படுத்துவது:** இது உண்மையான quiz போலவே செயல்படும். **Attempt quiz now** அழுத்தி, எல்லாக் கேள்விகளுக்கும் விடையளியுங்கள் (கேள்வி எண்களால் தாவலாம், மீண்டும் பார்க்க வேண்டியவற்றை ⚑ flag செய்யலாம்), பின்னர் **Finish attempt**, **Submit** அழுத்துங்கள். உங்கள் மதிப்பெண் கிடைக்கும்; ஒவ்வொரு கேள்விக்கும் உங்கள் விடை, சரியான விடை, **ஏன்** என்பது — தவறான தேர்வு ஏன் தவறு என்பதும் — காட்டப்படும். மீண்டும் முயல **Retake quiz** அழுத்துங்கள். பின்னர் மீள்பார்வைக்கு கீழே உள்ள விடை அட்டவணையைத் திறவுங்கள்.

{{tool:gp-dm02-self}}

<details class="beginner-answer" markdown="1">
<summary>Show all answers — self-assessment (open after you finish the quiz)</summary>

| Q | Answer | Why |
|---|---|---|
| 1 | **a, b, c, d, e, f — everything except Data Presentation** | Functions: generalization (characterization/discrimination), association & correlation, classification, prediction, clustering, outlier and evolution analysis. Presentation is a later step of the KDD process. |
| 2 | **a, b and d** | Biological data has very many attributes (curse of dimensionality), is personal (privacy) and is very large. |
| 3 | **Outlier Analysis** | Fraud is rare and unusual, so it shows up as an outlier (anomaly). |
| 4 | **Data warehousing** | A data warehouse stores integrated data for analysis; it is a data source, not a mining function. |
| 5 | **All the answers are correct** | Supermarkets (basket analysis), stock markets (prediction) and spam detection (classification) all use data mining. |
| 6 | **False** | Graph mining (frequent subgraphs, networks) is part of structure and network analysis, not association and correlation analysis. |
| 7 | **Classification** | Spam detection trains on labelled emails and puts each new one into a class (spam / not spam). |
| 8 | **False** | Grouping similar data = cluster analysis. Frequent pattern mining finds items that occur together often. |
| 9 | **All of the above** | Data mining on biological data helps with medical diagnosis and with finding disease patterns. |
| 10 | **Outlier Analysis** | Irregular counts are outliers (anomalies), so outlier analysis. |
| 11 | **None of the above** | All four prepare the data before mining (pre-processing). None of them is a data mining function. |
| 12 | **17** | /5−1/ + /6−0/ + /7−0/ = 4 + 6 + 7 = 17. |
| 13 | **Dynamic in nature** | Stream data is dynamic: it arrives continuously and changes over time, so it must be mined on the fly. |
| 14 | **Association and Correlation Analysis** | Association rules such as {phone} → {phone cover} find items that are frequently bought together. |
| 15 | **Supervised learning** | Learning from labeled data is supervised learning. Watch out: the textbook version says “unlabeled data”, and then the answer is unsupervised learning. |
| 16 | **All of the above** | Privacy needs controlled access, confidentiality and user anonymity. |
| 17 | **True** | Efficiency and scalability are one of the major issues in data mining: algorithms must run fast on very large data. |
| 18 | **Extraction of compelling patterns or knowledge from large amount of data** | Data mining = extracting interesting (non-trivial, useful) patterns or knowledge from large amounts of data. |

</details>

## Assessment 02 பயிற்சி — cleaning, integration, transformation

*இந்தத் தலைப்பின் பாடக் குறிப்புகள்: [Week 03](Week%2003/Week%2003%20-%20Study%20Guide.html)*

இந்தப் பயிற்சி **Assessment 02**-ஐப் பின்பற்றுகிறது (data cleaning, integration, transformation). ஒவ்வொரு படியும் ஒரு வெற்றிடம். தவறான விடையைத் தேர்ந்தால் அது **ஏன் தவறு** என்றும் ஒரு குறிப்பும் காட்டப்படும்; மீண்டும் முயலுங்கள்.

{{tool:gp-dm03-assign2}}

**சுருக்கம் — எந்தப் பிரச்சினைக்கு எந்தத் தீர்வு**

| Problem | Column type | Fix | Why |
|---|---|---|---|
| Missing values | Number, no big outliers (Amount) | Fill with the **mean** | Keeps the overall average and statistics |
| Missing values | Number with outliers (Age) | Fill with the **median** | The middle value is not pulled by outliers |
| Missing values | Category (PaymentType) | Fill with the **mode** | Most common value; you cannot average words |
| Inconsistent entries (Male / male / M) | Category | **Standardize** to one uniform format | Removes inconsistencies |
| Two files about the same customers | — | **Integrate**: merge on the key (CustomerID) | One combined view of each customer |
| Mixed date formats | Date | **Transform**: standardize to YYYY-MM-DD | Consistency, no parsing errors |
| Numeric age → Youth / Adult / Senior | Number → category | **Feature construction / discretization** | Easier segmentation |
