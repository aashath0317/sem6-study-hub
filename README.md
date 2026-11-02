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

Use **Start focus**, **Pause/Resume** and **Finish** on any study page. The timer pauses when the page is hidden or after five minutes without interaction. Only one tab can run a timer at a time. Finish or navigation saves counted time; manual time entries and corrections are also available. History is recorded from installation forward; old section checks have no historical completion dates. After three tracked study days, the dashboard compares logged time/day with required hours/day.

Progress stays in the current browser/site and is not uploaded to GitHub or automatically synced. **Download progress backup** and **Restore / merge backup** transfer section checks, quizzes, plan settings and history between browsers/devices and online/offline copies. Restore retains understood sections and merges logs by ID to avoid duplicates. Warnings appear in the open site; background phone/push notifications are not provided.

Planner checks (Node.js, no extra packages):

```
node _source/build/tests/study-plan.test.cjs
```
