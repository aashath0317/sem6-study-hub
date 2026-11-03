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

## Business Tamil translations — current progress

Business Processes and Accounting Systems **Weeks 01–02** have both the original Tamil explanation buttons and the floating Tamil/English button for authored direct translations. These two weeks include 15 note sections, 23 quiz questions and three interactive tools. Original English notes, numerical examples, answers and explanation content are preserved. Lecture-video titles, descriptions and chapter captions remain English in these weeks. Weeks 03–15 retain their original explanation buttons; their direct translations are pending.

Refresh completed Business translations with `python _source/build/refresh_hci_translations.py bpas`. Run their integration checks with `STUDY_TRANSLATION_SUBJECT=bpas node _source/build/tests/hci-translation.test.cjs`.
