# SEM 6 Study Hub

Offline study guides for every week of Semester 6:

- Business Processes & Accounting Systems
- Data Mining
- Discrete Mathematics
- Human Computer Interaction
- Marketing

Each week page has full notes, interactive tools, and a self-check quiz. Every subject page also has a mixed practice exam, and quiz scores are saved in your browser.

Start at **`SEM 6 Study Hub.html`**, or the GitHub Pages site for this repository.

Lecture videos and PDFs are **not** stored in this repository. Online players use the linked Google Drive recordings; offline players use local recordings when present.

## Beginner accounting practice

Business Processes & Accounting Systems has two new beginner exercises in each of its 15 weeks (30 total). Open a week and choose **Start beginner practice** near the top. Each exercise states its inputs and includes an expandable answer with numbered steps, explanations and a final check. Tamil introductions explain the basic idea. Course-paper practice remains separate: all 84 PDF questions now have interactive answer boxes and complete stepped answers, including requested journals, ledger accounts and financial statements. Week 04 also has an original full-cycle capstone labelled “Extra practice, not from the PDF”. Weeks 01, 12 and 13 have no practice paper. The original 30 beginner exercises and the capstone are learning examples, not official exam questions. The course provides no official answer key; answers are checked against the lecture notes and independently recalculated.

Start with Week 01 for business processes and AIS, then Week 02 for debit and credit. Attempt each question before opening its answer, then complete the weekly quiz. Practice sections count separately in the study planner and preserve previous section completion IDs.

## Rebuilding

The pages are generated from `_source/build/content/` (`wNN.md` for notes, `wNN.quiz` for quizzes):

```
cd _source/build
pip install markdown
python build.py          # or: python build.py bpas dm …
```


## Deadline and pace dashboard

The hub's **My finish plan** reads existing section checks and latest quiz scores from this browser. It covers 70 weeks, available past-paper sections and optional mixed practice exams. Set realistic daily focused hours, study days, section/quiz/revision estimates, quiz target and revision buffer. Exam dates use Sri Lanka time and exam days are excluded from study capacity.

The dashboard checks cumulative work due before every deadline, shows capacity shortfalls and projected completion, and builds today's and the next seven study days' focus blocks. Latest weak quiz results and older passed learning add revision tasks. The default estimates are not a personalised measurement or a guarantee of passing.

Study pages now **start tracking automatically** while visible and focused. The timer **automatically pauses** after two minutes without mouse movement, scrolling, touch or typing (adjustable from 1–30 minutes), when minimised, when switching tabs/windows, or when navigating away. It **automatically resumes** on activity or return to a visible focused study page. A deliberate **Pause/Stop** remains paused until **Resume**; that manual choice survives study-page navigation. Only one tab can count at a time. Counted time is checkpointed every ten seconds and on pause/navigation, including sessions shorter than six seconds. The clock displays the total recorded study time for today, so navigating does not visually reset it. Entries split at Sri Lanka midnight; manual time entries and corrections are also available. History is recorded from installation forward; old section checks have no historical completion dates. After three tracked study days, the dashboard compares logged time/day with required hours/day.

Progress stays in the current browser/site and is not uploaded to GitHub or automatically synced. **Download progress backup** and **Restore / merge backup** transfer section checks, quizzes, plan settings and history between browsers/devices and online/offline copies. Restore retains understood sections and merges logs by ID to avoid duplicates. Warnings appear in the open site; background phone/push notifications are not provided.

Planner checks (Node.js, no extra packages):

```
node _source/build/tests/study-plan.test.cjs
node _source/build/tests/study-timer.test.cjs
```

## HCI authored Tamil translations

All 13 HCI weeks, past papers and the subject index have a floating **தமிழ் / English** button. Tamil is an authored translation of the existing English notes, tables, examples, quizzes and interactive-tool text, saved locally. It does not use Google Translate, an API or a translation service. Switching retains quiz answers and live tool state. The original labels inside figure images and embedded video players remain unchanged; captions and chapter descriptions are translated.

Translation sources live in `_source/build/content/hci/ta/`. The original English note files and quiz answers remain unchanged. `source-manifest.json` detects changes to the English source that require a translation review. Never substitute the earlier explanatory summaries for these translations. The original per-section **தமிழில் புரிந்துகொள்ள** explanation buttons are also available alongside the floating translation button. `HCI_TAMIL_REVIEW.md` documents those authored explanations.

To refresh only the HCI translations while preserving the existing English pages and video metadata:

```sh
python _source/build/refresh_hci_translations.py
```

The regular builder also embeds these translations. Translation checks cover all 15 HCI pages, 90 note/past-paper sections, 145 weekly questions and 24 live tools. Run the DOM integration test with Node.js and `jsdom` installed:

```sh
node _source/build/tests/hci-translation.test.cjs
```

The test exercises Tamil/English switching, dynamic tool branches, answer selection and quiz grading without fetching external resources.

## Business Tamil translations

All **15 Business Processes and Accounting Systems weeks**, past papers and the subject index now include authored offline Tamil translations through the right-side **தமிழ் / English** button. Original per-section **தமிழில் புரிந்துகொள்ள** explanations remain available alongside it.

Coverage: **114 note/past-paper sections, 168 weekly quiz questions and 24 live tools**, including worked examples, tables and all video titles, descriptions and chapter captions. English content, financial values, quiz answers and original explanation content are preserved. Labels embedded in original images/video players and editable source data remain unchanged.

Refresh: `python _source/build/refresh_hci_translations.py bpas`.

Checks (Node.js integration requires `jsdom`):

```sh
python _source/build/tests/tamil-source.test.py
STUDY_TRANSLATION_SUBJECT=bpas node _source/build/tests/hci-translation.test.cjs
```

These checks cover numeric/source parity, metadata coverage, both Tamil options, tool branches, edited financial inputs/results, quiz selections and grading.

## Business sections awaiting Tamil

Beginner practice and rewritten course-paper practice sections show English under a Tamil notice until they are translated. After changing them, run `python _source/build/tamil_english_fallback.py`, then rebuild.

## Answer-it-yourself practice

Week pages can include step-by-step answer boxes (`_source/build/practice.js`). A wrong answer explains why and how to think about it. Add one in a week's `.md` with a `:::tool` block holding `<div id="gp-wNN-qN" class="gp"><script type="application/json">…</script></div>`; see `content/bpas/w02.md` for examples. The `tests/translation-preservation.test.py` script check compares against an old baseline, so it reports a change whenever shared page scripts change on purpose.
