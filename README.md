# SEM 6 Study Hub

Offline study guides for every week of Semester 6:

- Business Processes & Accounting Systems
- Data Mining
- Discrete Mathematics
- Human Computer Interaction
- Marketing

Each week page has full notes, interactive tools, and a self-check quiz. Every subject page also has a mixed practice exam, and quiz scores are saved in your browser.

Start at **`SEM 6 Study Hub.html`**, or the GitHub Pages site for this repository.

Lecture videos and PDFs are **not** included. The video players only work in the local copy on the laptop.

## Rebuilding

The pages are generated from `_source/build/content/` (`wNN.md` for notes, `wNN.quiz` for quizzes):

```
cd _source/build
pip install markdown
python build.py          # or: python build.py bpas dm …
```
