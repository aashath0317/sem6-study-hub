## Week 6 timed quiz — Norman model, execution, ஏழு நிலைகள்

*இந்தத் தலைப்பின் பாடக் குறிப்புகள்: [Week 02](Week%2002/Week%2002%20-%20Study%20Guide.html), [Week 05](Week%2005/Week%2005%20-%20Study%20Guide.html)*

இது **அதிகாரபூர்வ Week 6 timed quiz** (கட்டுரை வகை, 25 மதிப்பெண், 1 மணி நேரம்). **Don Norman model** — goals, intentions, execution, ஏழு நிலைகள் (seven stages of action), Gulf of Execution — சோதிக்கப்படுகிறது. கேள்விகள் 1, 2, 4 ஒரு **travel ticket-booking app** scenario-வைக் குறிக்கின்றன (scenario உரை screenshot-இல் இல்லை); கேள்வி 3 **உணவு ஆர்டர் செய்வதை** பயன்படுத்துகிறது.

> 1. Don Norman model-இல் **"Goal"**, **"Intention"** என்பவற்றை வரையறுத்து, scenario-விலிருந்து ஒவ்வொன்றுக்கும் ஓர் உதாரணம் தருக. *(4 marks)*
> 2. User interaction-இல் **"Execution"** என்றால் என்ன? கொடுக்கப்பட்ட scenario-வில் execution தொடர்பான ஒரு சிக்கலைத் தருக. *(3 marks)*
> 3. Don Norman-இன் **Seven Stages of Action**-ஐப் பயன்படுத்தி, ஒரு பயனர் **உணவு ஆர்டர் செய்யும்போது** செய்யும் செயல்களின் வரிசையை விவரிக்குக. *(14 marks)*
> 4. இந்த application-இல் **Gulf of Execution** பயனர்களை எப்படிப் பாதிக்கிறது என்று விளக்குக. இரண்டு உதாரணங்கள் தருக. *(4 marks)*

**எப்படிப் பயன்படுத்துவது:** முதலில் உங்கள் பதில்களைத் தாளில் எழுதுங்கள். பின்னர் கீழே உள்ள quiz-ஐச் செய்யுங்கள் (உண்மையான quiz போலவே: எல்லாவற்றுக்கும் விடையளித்து, **Finish attempt**, **Submit**, பின்னர் review). கடைசியாக மாதிரிப் பதில்களைத் திறந்து ஒப்பிடுங்கள்.

{{tool:gp-hci-norman}}

<details class="beginner-answer" markdown="1">
<summary>மாதிரிப் பதில்களைக் காட்டு (முதலில் உங்களுடையதை எழுதுங்கள்)</summary>

தேர்வில் ஆங்கிலத்தில் எழுதுவதால் மாதிரிப் பதில்கள் ஆங்கிலத்தில் உள்ளன.

**Q1. Goal and Intention (4 marks)**

- **Goal** — the end state the user wants to achieve, described in the user's own terms and independent of any device or interface. *Example:* "I want a confirmed seat on the train to Kandy on Friday morning."
- **Intention** — the user's decision to act in a particular way to reach the goal: the course of action they commit to. *Example:* "I will book the ticket through the booking app's search feature for the Friday 8 a.m. train."

*Tip:* keep intention separate from the action sequence. The intention is **what** to do ("book it in the app"); the exact taps (open app → choose date → choose time → pay) are the next stage, **specifying the action sequence**.

**Q2. Execution (3 marks)**

**Execution** is the side of Norman's cycle where the user turns a goal into action on the system: forming the **intention**, **specifying the action sequence**, and **physically carrying it out** on the interface (tapping, typing, selecting).

*Execution issue (example):* the date/time picker is small and crowded, so a user who intends to book Friday taps Saturday by accident — an **action slip** caused by poor target size and layout. (Another valid issue: the user cannot find how to select a return journey or seat class, so they cannot turn their intention into actions.)

**Q3. Seven stages — ordering food (14 marks: 2 per stage)**

| # | Stage | Side | Food-ordering example |
|---|---|---|---|
| 1 | **Establish the goal** | — | "I'm hungry — I want a pizza delivered for dinner." |
| 2 | **Form the intention** | Execution | "I'll order it through the food delivery app." |
| 3 | **Specify the action sequence** | Execution | Plan: open app → search "pizza" → choose restaurant → add a large pizza to cart → checkout → pay. |
| 4 | **Execute the actions** | Execution | Physically tap the icon, type the search, tap **Add to cart**, enter the card, tap **Confirm order**. |
| 5 | **Perceive the system state** | Evaluation | Notice the screen change: a green tick, an order number and a delivery map appear. |
| 6 | **Interpret the system state** | Evaluation | Understand it: "The restaurant has accepted my order and it is being prepared." |
| 7 | **Evaluate against the goal** | Evaluation | Compare with the goal: "My pizza is ordered and on its way — goal met." If not (e.g. payment failed), form a new intention and go round the cycle again. |

For full marks, name **each** stage, say whether it is execution or evaluation, and give a **specific** example from the scenario. Mention that the cycle **repeats** if the goal is not met.

**Q4. Gulf of Execution (4 marks)**

The **Gulf of Execution** is the gap between what the user **intends** to do and the **actions the system allows or makes obvious** — the question "How do I do this?". A wide gulf makes users hesitate, make errors, take longer and sometimes give up.

*Examples in a ticket-booking app:*

1. **Changing or cancelling a booking is hidden** — the user wants to cancel, but the option is buried in an unlabelled "⋮" menu, so they cannot work out which action does it.
2. **Inputs that don't match how the user thinks** — the user knows they want "next Friday, morning train", but the app forces them to type the date as DD/MM/YYYY and pick the time from a long 24-hour list, so turning the intention into actions is slow and error-prone.

*Narrowing the gulf:* visible, clearly labelled controls (affordances and signifiers), a calendar with natural mapping, and options such as "Morning / Afternoon / Evening".

</details>

## வினாடி வினா — Online course registration system-இன் usability சிக்கல்கள்

*இந்தத் தலைப்பின் பாடக் குறிப்புகள்: [Week 07](Week%2007/Week%2007%20-%20Study%20Guide.html)*

இது **அதிகாரபூர்வ HCI quiz கேள்வி** (கட்டுரை வகை). Week 07-இன் usability principles — முக்கியமாக **Nielsen-இன் 10 heuristics** — இதில் சோதிக்கப்படுகின்றன.

> ஒரு பல்கலைக்கழகம் புதிய **online course registration system**-ஐ அறிமுகப்படுத்துகிறது. மாணவர்கள் கூறிய சிக்கல்கள்:
>
> - **Register**, **Drop Course** buttons மிகவும் ஒன்றுபோலத் தெரிகின்றன.
> - Course-க்குப் பதிவு செய்த பின், பதிவு வெற்றியடைந்ததா என்று system தெளிவாக உறுதிப்படுத்துவதில்லை.
> - **"Invalid input"** போன்ற error messages, மாணவர் எதைத் திருத்த வேண்டும் என்று விளக்காமல் காட்டப்படுகின்றன.
> - ஒரு screen-இலிருந்து இன்னொன்றுக்குச் செல்லும்போது மாணவர்கள் course codes-ஐ நினைவில் வைத்திருக்க வேண்டும்.
> - ஒரே கருத்துக்கு வெவ்வேறு pages **"Module," "Course,"** **"Subject"** என வெவ்வேறு சொற்களைப் பயன்படுத்துகின்றன.
>
> **பொருத்தமான usability principles-ஐப் பயன்படுத்தி, system-இல் உள்ள நான்கு usability சிக்கல்களைக் கண்டறிந்து, ஒவ்வொன்றையும் எப்படி மேம்படுத்தலாம் என்று விளக்குக.**

**எப்படிப் பயன்படுத்துவது:** முதலில் உங்கள் சொந்தப் பதிலைத் தாளில் எழுதுங்கள் — ஒவ்வொரு சிக்கலுக்கும் **principle**, **அது ஏன் சிக்கல்**, **தீர்வு**. பின்னர் கீழே உள்ள quiz-ஐச் செய்யுங்கள் (உண்மையான quiz போலவே: எல்லாவற்றுக்கும் விடையளித்து, **Finish attempt**, **Submit**, பின்னர் review). கடைசியாக மாதிரிப் பதிலைத் திறந்து ஒப்பிடுங்கள்.

{{tool:gp-hci-usability}}

<details class="beginner-answer" markdown="1">
<summary>மாதிரிப் பதிலைக் காட்டு (முதலில் உங்களுடையதை எழுதுங்கள்)</summary>

கேள்வி **நான்கு** சிக்கல்களைக் கேட்கிறது; ஐந்து உள்ளன, எனவே எவையேனும் நான்கைத் தேர்ந்தெடுங்கள் (இங்கே ஐந்துக்கும் பதில் உள்ளது). ஒவ்வொன்றுக்கும் **principle → ஏன் சிக்கல் → மேம்பாடு** என்று எழுதுங்கள். தேர்வில் ஆங்கிலத்தில் எழுதுவதால் அட்டவணை ஆங்கிலத்தில் உள்ளது.

| # | Problem in the system | Usability principle broken | Why it is a problem | How to improve it |
|---|---|---|---|---|
| 1 | Register and Drop Course buttons look very similar | **Error prevention** (Nielsen) | Students can easily click Drop by mistake and lose a course — a *slip*. | Make them look different: Register as the main green button, Drop as a red/outlined button with a bin icon, placed apart. Ask **"Drop ITE3752? Yes / Cancel"** before dropping, or allow **undo**. |
| 2 | No clear confirmation after registering | **Visibility of system status** (feedback) | Students do not know whether it worked, so they register again or worry. | Show an immediate message: **"✓ You are registered for ITE3752 – Human Computer Interaction"**, update a **"My registered courses"** list, and send a confirmation email. |
| 3 | Error message only says **"Invalid input"** | **Help users recognise, diagnose and recover from errors** | It does not say what is wrong or how to fix it, so students cannot recover. | Use plain language that names the problem and the fix, e.g. **"Course code must be 7 characters, like ITE3752."** Highlight the field and check input as it is typed (also prevents the error). |
| 4 | Students must remember course codes between screens | **Recognition rather than recall** (minimise memory load) | Short-term memory is limited (about 7 ± 2 items), so students forget or mistype codes. | Carry the chosen course to the next screen; use a **search box with auto-complete** or a drop-down showing code **and** name; keep a **"Selected courses"** panel visible. |
| 5 | **"Module"**, **"Course"** and **"Subject"** used for the same thing | **Consistency and standards** | Students think they are different things and get confused. | Choose **one** term (e.g. "Course") and use it on every page, button and message; keep a style guide / glossary so new pages follow it. |

**தேர்வில் ஒரு புள்ளியை எப்படி எழுதுவது (உதாரணம்):**

> **Problem: no confirmation after registering.** This breaks **visibility of system status** — the system should always keep users informed about what is happening through timely feedback. Because no message appears, the student cannot tell whether the registration was saved and may register twice. **Improvement:** show a clear success message naming the course ("You are registered for ITE3752"), add it to a "My registered courses" list and send a confirmation email.

**முழு மதிப்பெண்ணுக்கான குறிப்புகள்**
- **Principle-இன் பெயரைச்** சரியாக எழுதுங்கள் (Nielsen heuristic, அல்லது Shneiderman rule — *"offer informative feedback"*, *"prevent errors"*, *"reduce short-term memory load"*, *"strive for consistency"*).
- **Scenario-உடன் இணையுங்கள்** — மாணவருக்கு என்ன தவறு நடக்கிறது என்று சொல்லுங்கள்.
- **குறிப்பான, நடைமுறைத் தீர்வு** தாருங்கள்; "இன்னும் சிறப்பாக்கு" என்று மட்டும் எழுதாதீர்கள்.

</details>
