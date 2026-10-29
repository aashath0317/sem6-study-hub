---
title: Past Papers — Model Answers & What to Expect
lead: The ITE 3752 paper (same module code as yours) answered in full, with examples you can reuse, plus outline answers for two older ITE 3603 papers (December 2019 and September 2020) whose overlapping topics still matter.
sources: HCI 2020 (ITE 3752); HCI December 2019 (ITE 3603); HCI September 2020 (ITE 3603)
---

## What the exam looks like and what to focus on

:::key Format
- **3 hours, 100 marks**, closed book.
- **4 questions × 25 marks**, answer **all** of them.
- It's **all essay-style**: define the term, explain it, and **illustrate with an example**.
:::

:::warn Two different syllabuses
- **ITE 3752** is **your module**. Its paper tests exactly the course topics: UCD and ISO, stakeholders, Norman's model and the gulfs, slips and mistakes, goals and tasks, HTA, needfinding biases, and the design life cycle.
- **ITE 3603** was the **older module**. It also covered groupware and ubiquitous computing, which **aren't in your weekly notes**. Its usability-evaluation, memory, attention and mobile-design questions still overlap with your course.
:::

| Topic (ITE 3752) | Week to revise |
|---|---|
| UCD importance, the 8 user characteristics, ISO 9241-210, stakeholders | 11 |
| Norman's execution and evaluation loop, gulfs, slips vs mistakes | 2, 5 |
| Goals vs tasks, textual and diagrammatic HTA | 9, 10 |
| Needfinding biases | 12 |
| Design life cycle: alternatives, prototyping, evaluation | 11–13 |

## ITE 3752 — Question 1: User-centred design (25 marks)

:::example (a) Why UCD matters [4]
UCD puts **users, their tasks and their context** at the centre of every design decision, and involves them **throughout** the life cycle.

- It builds systems people **actually want and can use**, which raises **usability and satisfaction**.
- It cuts **errors, training and support costs**.
- It catches problems **early**, when they're cheap to fix, instead of after release.
- It increases **adoption and productivity**, and gives a competitive advantage.

Specification-driven design **presumes** users' needs. UCD **discovers** them.
:::

:::example (b) How user characteristics affect design [6]
There's no "average user". Designers must consider:

- **Role:** e.g. an admin needs different screens from a cashier.
- **Age:** older users need larger fonts and memory aids.
- **Gender:** preferences such as colour and theme.
- **Education level:** plain language vs technical terms.
- **Cultural background:** colour meanings, reading direction, metaphors.
- **Interests and motivation.**
- **Professional level:** familiarity with domain terms.
- **Computer literacy:** novices need **wizards and guidance**, while experts want **shortcuts**.

These shape vocabulary, layout, help, and the number of steps. Designers combine them into **personas** and support **dual pathways** (novice and expert).
:::

:::example (c) The ISO 9241-210 UCD principles [9]
1. **Explicit understanding of users, tasks and environments.** Design from evidence about who the users are, what they do, and where they do it.
2. **Users involved throughout design and development:** interviews, co-design, usability trials at every stage.
3. **Design driven and refined by user-centred evaluation:** formative tests on sketches, summative tests on finished versions.
4. **Iterative process:** design → test → refine → test again.
5. **Address the whole user experience:** expectations, emotion, onboarding, error recovery, support.
6. **Multidisciplinary team:** designers, engineers, psychologists, domain experts, technical writers.
:::

:::example (d) Levels of stakeholders, with an example [6]
**Example: a university Moodle (LMS)**

| Level | Who | In the example | What to design for |
|---|---|---|---|
| **Primary** | **Direct users** of the interface | Students and lecturers using Moodle | Ease of use, low cognitive load, error prevention |
| **Secondary** | Don't use the interface, but **use its output** | The photocopy shop receiving a report of which notes no longer need printing | Format, accuracy and timeliness of the output |
| **Tertiary** | Never touch the system or its output, but are **affected** | Parents, administration and staff whose workloads change | Ethics, workload balance, wider impact |
:::

## ITE 3752 — Question 2: Norman's model (25 marks)

:::example (a) The execution and evaluation loop, with an example [12]
**Example: setting an alarm for 6:00 am on a phone.**

| Stage | Loop | In the example |
|---|---|---|
| 1. **Goal** | — | Wake up at 6:00 tomorrow |
| 2. **Plan / form the intention** | Execution | Decide to set an alarm in the Clock app |
| 3. **Specify the action sequence** | Execution | Open Clock → Alarm tab → tap + → choose 06:00 |
| 4. **Perform / execute** | Execution | Physically tap and scroll the time wheel, then press Save |
| 5. **Perceive** the state of the world | Evaluation | See the new alarm row showing "06:00, ON" |
| 6. **Interpret** the perception | Evaluation | "The alarm I made is switched on for 6 am" |
| 7. **Compare / evaluate** against the goal | Evaluation | "It will ring at 6 am. Goal achieved." If not, start the loop again |
:::

:::example (b) The gulfs of execution and evaluation [6]
- **Gulf of execution:** the gap between what the user **wants to do** and the **actions the system allows**. *Example:* the user doesn't know whether to press **+** or long-press the clock. Bridge it with **clear affordances, labels and mapping**, e.g. a visible "Add alarm" button.
- **Gulf of evaluation:** the gap between the **system state** and the user's ability to **perceive and interpret** it. *Example:* after Save, no confirmation appears, so the user can't tell whether the alarm is set. Bridge it with **feedback**, e.g. "Alarm set for 8 hours 12 minutes from now".
:::

:::example (c) Slips vs mistakes, and how to reduce them [7]
| | Slip | Mistake |
|---|---|---|
| Cause | **The goal is right, but the execution goes wrong** (attention, habit) | **The goal or plan itself is wrong** (wrong mental model) |
| Example | Tapping "Delete" next to "Edit" by accident; a typo | Setting the alarm for 6 **PM** because of misreading the AM/PM switch |

**Reducing slips:**

- Space dangerous buttons apart, and make targets large
- Add **confirmation** for destructive actions
- Provide **undo**
- Use **constraints** (disable invalid options) and **forcing functions**

**Reducing mistakes:**

- Use **clear conceptual models and labels** that match users' mental models
- Give **informative feedback**
- Provide **help** and sensible **defaults**
- Show a **preview** of the result before it's committed
:::

## ITE 3752 — Question 3: Goals, tasks and HTA (25 marks)

:::example (a) Goals vs tasks [6]
- A **goal** is the **end state** the user wants to reach: the *what*. *Example:* "Have the report in the Projects folder."
- A **task** is the **structured set of activities** (actions) needed to reach the goal: the *how*. *Example:* "Open File Explorer, select the file, cut, open the destination, paste."

Goals are stable. Tasks depend on the **technology**: the same goal could be done by drag-and-drop or with a command line.
:::

:::example (b) Textual HTA: move a file in Windows [11]
```
0. Move a file to another location
   1. Locate the file
      1.1 Open File Explorer
      1.2 Navigate to the source folder
      1.3 Find/select the file (search if not visible)
   2. Choose a moving method
   3. Move the file
      3.1 Cut-and-paste method
          3.1.1 Right-click file → Cut (or Ctrl+X)
          3.1.2 Navigate to destination folder
          3.1.3 Right-click empty area → Paste (or Ctrl+V)
      3.2 Drag-and-drop method
          3.2.1 Open destination folder in a second window / nav pane
          3.2.2 Drag the file to the destination (Shift+drag on another drive)
          3.2.3 Release the mouse button
   4. Handle conflicts
      4.1 If a file with the same name exists → choose Replace / Skip / Keep both
   5. Verify the move
      5.1 Check the file appears in the destination
      5.2 Check it no longer appears in the source
```
**Plans:**

- **Plan 0:** do 1, 2, 3; then 4 if there's a conflict; then 5.
- **Plan 3:** if the method is cut-and-paste, do 3.1 (3.1.1 → 3.1.3); otherwise do 3.2 (3.2.1 → 3.2.3).
:::

:::example (c) Diagrammatic HTA [8]
Draw it **top-down**:

- **Box 0** "Move a file" at the top, with sub-boxes **1, 2, 3, 4, 5** in a row beneath it.
- Under **3**, branch to **3.1** (cut/paste) and **3.2** (drag/drop), each with its numbered sub-steps.
- Write the **plans** beside each parent box, e.g. "Plan 3: if cut/paste, 3.1 else 3.2".
- **Notation:** number every box. Mark **leaf tasks** (no further breakdown) with a line under the box. Read the diagram top to bottom, left to right.

See the Week 10 HTA diagrams for the layout.
:::

## ITE 3752 — Question 4: Needfinding and the design life cycle (25 marks)

:::example (a) Bias in needfinding [3]
A **bias** is an **attachment to a particular idea**: a preconception or preference that **distorts the data we collect** about users, so we "find" what we expected instead of what users really need.
:::

:::example (b) The five types of bias [10]
| Bias | What happens | How to avoid it |
|---|---|---|
| **Confirmation** | We notice data that **confirms** our ideas and ignore data that contradicts them | Look for evidence that you're **wrong**; test with many users |
| **Observer** | We **influence** users: helping some more, or asking leading questions | Script the sessions, stay neutral, use separate observers |
| **Social desirability** | Users say **what pleases** the designer | Hide that you're the designer; observe behaviour, not opinions |
| **Voluntary response** | Only people with **strong opinions** reply | Sample deliberately; follow up with non-responders |
| **Recall** | Users **misremember** past actions | Observe in context, or ask about recent specific events |
:::

:::example (c) How the life cycle stages produce a usable and used interface [12]
- **(i) Designing alternatives:** generate **many** different ideas before committing (brainstorming, personas, scenarios, timelines). This avoids fixating on the first idea and explores the design space, and the best features can be combined.
- **(ii) Prototyping:** make ideas **tangible and testable**, from paper and wireframes up to interactive high-fidelity versions. It's cheap to change, lets users react to something real, and reveals problems early.
- **(iii) Evaluation:** measure **usability with real users**. Early on it's qualitative (preferences); in the middle it checks usability (learnability, workload); late on it's quantitative (time, errors). The findings feed the **next iteration**.

**Together:** needfinding → alternatives → prototypes → evaluation, **repeated**. Each cycle closes the gap between the design and users' needs, so the interface is both **usable** and **actually used**.
:::

## Older ITE 3603 papers — outline answers

:::example Dec 2019 Q1: Usability evaluation
**a) Points to consider when gathering usability data:**

- Clear **goals and measures** (effectiveness, efficiency, satisfaction)
- **Representative users** and tasks, and a realistic context
- **Ethics and consent**
- Avoid **bias**
- Combine **qualitative and quantitative** data
- Check **reliability, validity, generalisability and precision**

**b) Five evaluation methods:**

| Method | Users? | Data | Notes |
|---|---|---|---|
| Heuristic evaluation | No (experts) | Problems found | Cheap, quick, can miss real-user issues |
| Cognitive walkthrough | No | Learnability problems | Steps through a task as a new user |
| Think-aloud usability test | Yes | Qualitative | Shows why users struggle |
| Controlled experiment (empirical) | Yes | Quantitative | Statistical; needs a careful setup |
| Questionnaires / surveys | Yes | Satisfaction | Many users, but self-reported |
| Predictive (GOMS / KLM) | No | Estimated times | No users needed; slow to model |

**c) Shortcut keys vs menus in MS Word: a controlled experiment.**

- **Hypothesis:** shortcuts are faster.
- **Independent variable:** method (shortcut or menu). **Dependent variables:** task time and errors.
- **Participants:** about 20 representative users, in a **within-subjects** design with **counterbalanced order**.
- **Tasks:** standard ones, e.g. bold, copy, save, repeated 10 times each.
- **Measure** with a timer or logging. **Analyse** with a paired t-test.
- **Control** for practice and fatigue. Also use the **KLM** to predict the times beforehand.
:::

:::example Dec 2019 Q2: Cost savings, mobile vs desktop, good and bad UI
**a) Agree: HCI guidelines save money.** They mean fewer redesigns and late changes, lower training and help-desk costs, fewer user errors, and higher productivity and sales. Fixing a problem at the design stage costs far less than after release.

**b) Mobile vs desktop:**

| Mobile | Desktop |
|---|---|
| Small screen, touch input (fat-finger problem) | Large screen; mouse and keyboard precision |
| Used **on the move**, with interruptions and variable lighting | Used seated, with sustained attention |
| Limited battery, network and processing | Plenty of resources |
| Sensors: GPS, camera, motion | Multitasking with many windows |
| Platform guidelines (iOS / Android); app stores | Native or web apps |

**c) Good vs bad UI:** pick real examples and judge them on visibility, feedback, consistency, affordance, mapping, constraints, error prevention and recovery, and learnability.

- **Good:** e.g. Google Search (simple, clear feedback).
- **Bad:** e.g. a cluttered government form with unclear errors.
:::

:::example Dec 2019 Q3: Attention, memory, learning
**a) Attention:** people have **limited attention**. Use selective attention by highlighting what matters through contrast, position and motion used sparingly. Avoid **divided attention** and clutter, and design for **interruptions** by saving state.

**b) Memory:**

- **Sensory memory** is very brief.
- **Short-term memory** holds about **7 ± 2** chunks, so **chunk** information, use **recognition rather than recall** (menus, icons), and limit how much users must remember between screens.
- **Long-term memory** is helped by **consistency**, meaningful labels and familiar metaphors.

**c) Problems learning new interfaces:**

- Unfamiliar concepts (a **mismatched mental model**)
- Inconsistent controls, and hidden features (**poor visibility**)
- Jargon, too many options (cognitive overload), and poor feedback
- Fear of making errors (no undo)

**Remedies:** consistency, help and onboarding, progressive disclosure, undo.
:::

:::example Dec 2019 Q4 and Sept 2020 Q3/Q4: Groupware (older syllabus)
- **Groupware** is software that helps **groups work together**: communication, coordination and collaboration. Examples: email, chat, video meetings, shared documents (Google Docs), calendars, workflow tools.
- **Design issues:**
  - **Awareness** of others' activity
  - **Concurrency control**, i.e. managing simultaneous edits
  - **Access control** and privacy
  - **Critical mass:** it's only useful if enough people use it
  - Avoiding **disparity** between who does the work and who benefits
  - Supporting **social protocols**
- **Synchronous vs asynchronous:**

| Synchronous (same time) | Asynchronous (different times) |
|---|---|
| Video calls, chat, co-editing | Email, forums, version control, shared drives |
| Immediate feedback | Flexible, works across time zones |
| Needs everyone available | Slower decisions |
:::

:::example Sept 2020 Q1 and Q2: Ubiquitous computing and small screens
**Ubiquitous computing (UC):** computing **embedded everywhere** and fading into the background (Weiser).

| Compared with | Difference |
|---|---|
| **AI** | AI is about intelligence |
| **VR** | VR puts the user **inside the computer**; UC puts **computers into the world** |
| **User agents** | Agents act on the user's behalf; UC provides the environment they work in |

**How UC transforms HCI:**

- Moves from desktop to **implicit, context-aware interaction**: sensors, voice, gestures
- Uses many devices per person, and calm technology

**Future trends:**

- **IoT** and smart homes and cities
- **Wearables** and health sensing
- **Context-aware assistants**

**Five small-screen design guidelines:**

1. **Prioritise content:** one main task per screen
2. **Large touch targets** (about 44–48 px) with spacing
3. **Minimise typing:** pickers and autofill
4. **Simple navigation:** tab bar, back button
5. **Readable text and high contrast**, with feedback for every touch

Also: design for one-handed use and interruptions.

**Four early design techniques:** brainstorming · personas · scenarios and storyboards · paper prototyping (also card sorting).
:::
