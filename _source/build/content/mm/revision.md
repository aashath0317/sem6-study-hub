---
title: Multimedia Development — One-Shot Revision
lead: எல்லா 14 வாரங்களுக்கும் தமிழ் விளக்கம், முக்கிய வேறுபாடுகள், formula sheet, English exam answer frames, self-test, 25–28 November திட்டம்.
sources: Multimedia Development course PDFs, weeks 01–14; authored weekly worked examples
---

## எப்படி படிப்பது? தேர்வில் எப்படி எழுதுவது?

**Exam: Saturday 28 November 2026, 13:30–15:30, Sri Lanka time.** மொத்தம் **2 hours**. இந்தப் பக்கம் revision-க்கு. முதலில் தெரியாத வாரத்தின் முழு notes-ஐப் படிக்கவும். கணக்கு வந்தால் விடையை மட்டும் மனப்பாடம் செய்யாமல் working எழுதிப் பழகவும்.

**முக்கிய பழக்கம்:** ஒரு definition → தேவையான points → ஒவ்வொன்றுக்கும் விளக்கம் → பொருத்தமான example அல்லது diagram. Calculation-க்கு **formula → substitution → working → answer with unit**. Matrix-க்கு vector convention, multiplication order எழுதவும். Question வேறு unit கொடுத்தால் முதலில் convert செய்யவும்.

:::warn Predictions பற்றிய குறிப்பு
இந்த subject folder-இல் official past paper அல்லது official quiz இல்லை. இங்குள்ள practice, self-test, study priorities அனைத்தும் learning aids. எந்த topic தேர்வில் வரும் என்ற முன்னுரிமையும் **guess மட்டுமே**; தெரிந்த exam question அல்ல. அனைத்து learning outcomes-ஐயும் படிக்கவும்.
:::

## Week 01 — Multimedia அடிப்படை

**தமிழ் சுருக்கம்:** Text, image, graphics, sound, animation, video சேர்ந்து ஒரு செய்தியைப் புரியவைக்கும் போது multimedia கிடைக்கிறது. Assets தனித்தனி பொருட்கள்; அவற்றை ஒரே பயன்பாடாக இணைத்தது title. User என்ன எப்போது பார்க்க வேண்டும் என்று தேர்வு செய்தால் interactive. Cinema போன்ற முன்கூட்டிய ஓட்டம் non-interactive.

**Must know:** Captured என்பது real world-இலிருந்து; synthesized என்பது computer உருவாக்கியது. Discrete asset-க்கு time sequence கட்டாயமில்லை. Continuous asset காலத்துடன் விரிகிறது. Photograph captured/discrete; animation synthesized/continuous.

| Structure | நினைவுக்குறிப்பு |
|---|---|
| Linear | ஒரே வரிசை |
| Hierarchical | Parent, child branches |
| Nonlinear | தொடர்புள்ள links வழியாகச் செல்லல் |
| Composite | Free choice + உள்ளே கட்டாய வரிசை |

**Layers:** Application → System → Device. Application user functions தரும்; system OS/database/network services தரும்; device layer media processing, storage, physical support தரும். Synchronisation சரியான நேரத்தில் elements சேர உதவும்.

**User evaluation:** content relevance, platform, usability, cost. **Developer evaluation:** content, performance, delivery, interface. New media many-to-many participation, feedback, computation தருகிறது. Challenges: storage, bandwidth, timing, indexing, cost, specialist skills.

**English answer frame:** “Multimedia combines digital text, graphics, images, sound, animation and video. Interactive multimedia allows the user to control what is delivered and when. For example, a learning title can let a student choose and replay a narrated animation.”

## Week 02 — Development process

**தமிழ் சுருக்கம்:** நல்ல idea மட்டும் போதாது. யாருக்காக, எந்த நோக்கத்துக்காக, எவ்வளவு நேரத்தில், என்ன செலவில், எந்த medium-இல் title உருவாக்குகிறோம் என்று முடிவுசெய்ய வேண்டும். முதலில் audience, scope, content தீர்மானித்தால் பின்னர் தேவையில்லாத வேலை குறையும்.

**Four stages:** Planning and costing → Designing and producing → Testing → Delivering. Development feedback மூலம் மீண்டும் முந்தைய stage-க்கு செல்லலாம். Source ADDIEA paragraph-உம் ADDIE diagram-உம் ஒரே labels கொடுக்கவில்லை; Week 02 correction பார்க்கவும்.

**Planning:** idea; purpose/goals/objectives; target audience; treatment; specifications; storyboard/navigation. Audience பற்றி age, educational knowledge, technology background, language, gender, economic background, profession அறியவும். Content-இன் breadth/depth, existing resources-க்கான rights, capture/digitisation, புதிய assets உருவாக்கம் ஆகியவை cost-ஐ மாற்றும். Time, money, people ஒன்றையொன்று பாதிக்கும்.

**Design:** content definition → content outline → logic flow → navigation mapping → storyboard → implementation. Principles: balance, harmony, emphasis, movement, rhythm/pattern, contrast, hierarchy/proportion. Team roles: project manager, multimedia designer, video specialist, audio specialist, multimedia programmer.

| Test | எப்போது? | முக்கிய நோக்கம் |
|---|---|---|
| Alpha | ஆரம்ப implementation | Concept, format, interface, layout feedback |
| Beta | Final release-க்கு முன் | Real users மூலம் bugs, content errors கண்டுபிடித்தல் |

**English answer frame:** “I would first define the goal, audience, scope and delivery platform. I would estimate time, money and staff, prepare navigation and storyboards, create and integrate the assets, test the title with representative users, and package it with installation instructions.”

## Week 03 — Text and typography

**தமிழ் சுருக்கம்:** Text என்ன சொல்கிறது என்பதும் எப்படி தெரிகிறது என்பதும் முக்கியம். Title, label, instruction, menu எல்லாவற்றுக்கும் ஒரே visual importance கொடுக்க வேண்டாம். Decorative font-ஐ மிகச் சிறிய body text-க்குப் பயன்படுத்தினால் படிக்கக் கடினம். English, Tamil எழுத்துக்கள் சரியாக வர encoding, font support இரண்டும் வேண்டும்.

**Typeface** என்பது letter design family. **Font** என்பது அதன் குறிப்பிட்ட style/size என்ற பாரம்பரிய வேறுபாடு. Modern font files பல sizes/styles ஆதரிக்கலாம். **Glyph** என்பது character-இன் visual வடிவம். **Point:** 1/72 inch; point size என்பது em அளவு, ஒவ்வொரு glyph-இன் visible height அப்படியே அல்ல.

| Pair | வேறுபாடு |
|---|---|
| Serif / sans serif | Stroke ends-இல் சிறிய serifs உள்ளதா? |
| Leading / tracking / kerning | Line spacing / முழு text-இன் letter spacing / குறிப்பிட்ட letter pair spacing |
| Bitmap / vector font | Fixed pixel patterns / mathematical outlines |
| Aliasing / anti-aliasing | Jagged edges / edge colours blend செய்து smooth appearance |
| Plain / rich / hypertext | Content / formatting உள்ள content / linked content |

**Encoding:** ASCII basic repertoire; Unicode பல மொழிகளுக்கான code points. UTF-8, UTF-16, UTF-32 code points-ஐ bytes-ஆக encode செய்யும் முறைகள். Character, glyph, code point, byte ஒன்றல்ல. Missing font-க்கு substitute கொடுப்பது font mapping. Font format இருப்பதால் licence தேவையில்லை என்று நினைக்க வேண்டாம்.

**English answer frame:** “A bitmap font stores characters as pixel patterns and can become jagged when enlarged. An outline font stores mathematical descriptions that can be scaled and rasterized for the target display. Anti-aliasing blends edge coverage to reduce the jagged appearance.”

## Week 04 — Graphics

**தமிழ் சுருக்கம்:** Raster image pixels-ஆல் ஆனது. Vector graphic shapes, curves, mathematical descriptions-ஆல் ஆனது. Photo-வுக்கு raster பொருத்தம். பல அளவுகளில் காட்டும் logo-க்கு vector உதவும். ஒரு format பெயரை மட்டும் வைத்து எல்லா files-உம் ஒரே size, quality என்று சொல்ல முடியாது.

| Bitmap / raster | Vector |
|---|---|
| Pixel grid | Geometric objects |
| Enlargement-இல் pixels தெரியும் | Shapes-ஐ மீண்டும் calculate செய்து scale செய்யலாம் |
| Photographs-க்கு ஏற்றது | Logos, diagrams-க்கு ஏற்றது |
| Size dimensions × bit depth சார்ந்தது | Size object complexity சார்ந்தது |

**Must know:** Pixel dimensions, resolution, physical print size, aspect ratio, colour depth, RGB/CMYK, indexed colour, dithering, compression. RGB additive light; CMYK subtractive printing model. Dithering குறைந்த palette-இல் அருகிலுள்ள pixels patterns மூலம் கூடுதல் shades இருப்பது போலக் காட்டும்; original colour information-ஐ முழுமையாக மீட்காது.

**Formats:** JPEG பொதுவாக lossy photo compression; PNG lossless raster மற்றும் transparency; GIF indexed palette மற்றும் animation; TIFF பல imaging options; BMP raster storage; SVG vector descriptions. Format-இன் options காரணமாக விவரங்கள் மாறலாம்.

**English calculation frame:** “For uncompressed pixel data, size = width × height × bits per pixel ÷ 8. I assume no header, palette, padding or compression. I then convert bytes into the requested unit.”

## Week 05 — Vector operations

**தமிழ் சுருக்கம்:** Ideal line continuous. Screen pixel grid discrete. அதனால் எந்த pixels line-க்கு அருகில் உள்ளன என்று algorithm தீர்மானிக்கிறது. DDA increments-ஐச் சேர்த்து round செய்கிறது. Bresenham integer decision parameter மூலம் அடுத்த pixel-ஐத் தேர்வு செய்கிறது. Circle-இல் symmetry பயன்படுத்தி ஒரு octant-இலிருந்து மற்ற பகுதிகளைப் பெறலாம்.

| DDA | Bresenham line |
|---|---|
| Fractional increments பயன்படுத்தலாம் | Integer decision recurrence |
| Coordinates accumulate, பின்னர் round | Error/decision மூலம் next pixel |
| Rounding convention முக்கியம் | Slope/octant convention முக்கியம் |

**DDA:** Δx = x₂ − x₁; Δy = y₂ − y₁; steps = max(|Δx|, |Δy|); x increment = Δx/steps; y increment = Δy/steps. Start pixel-ஐயும் endpoint-ஐயும் சேர்க்கவும். Coincident endpoints இருந்தால் ஒரு pixel மட்டும்.

**Bresenham shallow positive line:** p₀ = 2Δy − Δx. ஒவ்வொரு step-லும் x உயரும். p < 0 என்றால் y அதே; இல்லையெனில் y உயரும். அடுத்த p முறையே p + 2Δy அல்லது p + 2Δy − 2Δx. மற்ற slopes-க்கு coordinate/sign மாற்றம் வேண்டும்.

**Circle:** Centre-ஐ மறக்க வேண்டாம். (x,y) offsets-இலிருந்து (±x,±y), (±y,±x) சேர்க்கவும். Midpoint, Bresenham circle recurrences-ஐக் கலக்காதீர்கள்; Week 05 table-இன் initialization, update order-ஐப் பின்பற்றவும்.

**Vector tools:** Shapes create செய்தல்; nodes/curves edit செய்தல்; move/rotate/scale; combine/intersect/subtract; fill/outline; rasterization/vectorization. Source silent recordings-க்கு transcript அல்லது invented timestamp கிடையாது; notes-இல் பார்த்த actions விளக்கப்பட்டுள்ளன.

**English answer frame:** “I calculate the initial decision value, plot the starting pixel, record the decision before each update, select the next pixel according to the stated rule, and continue until the endpoint. The table includes both endpoints.”

## Week 06 — Raster applications and 2D transformations

**தமிழ் சுருக்கம்:** Translation இடம் மாற்றும். Scaling அளவு மாற்றும். Rotation angle-க்கு ஏற்றபடி திருப்பும். Homogeneous coordinates மூலம் translation-ஐயும் matrix multiplication-ஆக எழுதலாம். Transformations வரிசை மாறினால் result பொதுவாக மாறும்.

**Column-vector convention:** P = [x y 1]ᵀ. P′ = MP. Translation T = [[1,0,tₓ],[0,1,tᵧ],[0,0,1]]. Scaling S = [[sₓ,0,0],[0,sᵧ,0],[0,0,1]]. Positive counter-clockwise rotation R = [[cosθ,−sinθ,0],[sinθ,cosθ,0],[0,0,1]]. Screen coordinates-இல் y கீழ்நோக்கிச் சென்றால் visual direction வேறாகலாம்.

**Rotation about C:** முதலில் C-ஐ origin-க்கு translate; rotate; மீண்டும் translate. P′ = T(cₓ,cᵧ) R T(−cₓ,−cᵧ)P. Column convention-இல் rightmost transformation முதலில் நடக்கும். Source row-vector example இருந்தால் அதை transpose செய்து அதற்கேற்ற multiplication order பயன்படுத்தவும்.

**Layers:** தனித்தனி பகுதிகளை மாற்ற உதவும். Order, opacity, visibility, blend mode result-ஐ மாற்றும். Filters pixels-ஐ மாற்றுகின்றன. Adjustment, mask, original copy பாதுகாப்பு போன்ற வழிகள் மீண்டும் edit செய்ய உதவும். Raster selection, painting, colour adjustments, compositing-ஐப் பழகவும்.

**English answer frame:** “Using column vectors, I represent the point in homogeneous form, write each transformation matrix and multiply in the required order. To rotate about a fixed point, I translate that point to the origin, rotate, and translate back.”

## Week 07 — 2D animation

**தமிழ் சுருக்கம்:** தனித்தனி still frames வேகமாகக் காட்டப்படும் போது movement உணரப்படுகிறது. Keyframes முக்கிய நிலைகள். Tweening அவற்றுக்கு இடையிலான frames உருவாக்கும். Path animation object செல்லும் வழியைக் கட்டுப்படுத்தும். Shape tween ஒரு shape-ஐ மற்றொன்றாக மாற்றும்.

**Must know:** fps; visual/timing/motion parameters; bitmap/vector animation; cel animation; delta frames; palette animation; VFX; character animation. PDF-இன் 12–30 fps teaching range எல்லா animations-க்கும் கட்டாய standard அல்ல. Persistence of vision மட்டும் motion perception-இன் முழு விளக்கம் அல்ல.

**Principles:** squash/stretch, anticipation, staging, straight-ahead/pose-to-pose, follow-through/overlap, slow-in/slow-out, arcs, secondary action, timing, exaggeration, solid drawing, appeal. எந்த principle எந்த effect தருகிறது என்று example-உடன் எழுதவும்.

**Activities:** Bouncing ball + shadow: height, scale, shadow மாற்றங்கள் synchronise செய்யவும். Bird: bitmap-ஐ path-இல் நகர்த்தவும். Circle → triangle: vector shape tween. PDF activity number “6.1” என்று உள்ளது; இது Week 07 exercise.

**English answer frame:** “A keyframe defines an important state. Tweening computes intermediate states between keyframes. In path animation the object follows a specified route, while shape animation interpolates a change in the object's geometry.”

## Week 08 — Interactive 2D multimedia

**தமிழ் சுருக்கம்:** Animation ஓடுவது மட்டும் interactivity அல்ல. Click, key, pointer போன்ற action-க்கு system response கொடுக்க வேண்டும். Event listener அந்த event-ஐக் கவனிக்கிறது. Handler என்ன செய்ய வேண்டும் என்று code இயக்குகிறது.

**Flow control:** அடுத்து எந்த frame/sequence என்பதைக் கட்டுப்படுத்தும். **Time control:** குறிப்பிட்ட நேரம் wait, repeat அல்லது timed trigger கொடுக்கும். **Library component:** ஒரே symbol-இன் பல instances பயன்படுத்தலாம்; symbol மாற்றம் தொடர்புள்ள instances-ஐப் பாதிக்கலாம்.

:::flow நினைவில் வைக்கும் வரிசை
User action
Event
Listener
Handler or callback
State change
Visible response
:::

**Activities:** Stage click-இல் butterfly pointer position-க்கு நகர வேண்டும். Ball பல paths-இல் ஒன்றைத் தேர்ந்து முடிந்ததும் அடுத்த random path தொடங்க வேண்டும். Coordinates stage-க்கு relative ஆக மாற்றவும்; ஒரு click-க்கு duplicate listeners உருவாக்க வேண்டாம். Buttons keyboard-இலும் பயன்படுத்தக்கூடியதாக இருக்க வேண்டும்.

**English answer frame:** “An event-driven application listens for events and invokes the associated handler. For example, a stage-click handler obtains the local click coordinates and updates the butterfly's target position. The animation then moves toward that target.”

## Week 09 — 3D concepts

**தமிழ் சுருக்கம்:** 3D point-க்கு x, y, z coordinates. Object-ஐ world-இல் அமைத்து camera viewpoint-க்கு மாற்றி projection மூலம் 2D screen-க்கு கொண்டு வருகிறோம். 3D model-ஐ நகர்த்துவதும் camera-ஐ மாற்றுவதும் ஒரே operation அல்ல.

**Pipeline:** modelling/local coordinates → world coordinates → viewing coordinates → projection → clipping/viewport → display. Axis directions, handedness, vector convention ஆகியவற்றை ஆரம்பத்தில் எழுதவும். 3D homogeneous point-க்கு நான்கு components; transformations 4×4 matrices.

| Parallel projection | Perspective projection |
|---|---|
| Projectors parallel | Projectors centre of projection-இல் சந்திக்கும் |
| Distance காரணமாக object size தானாகக் குறையாது | தூரமான object சிறியதாகத் தோன்றும் |
| Engineering measurements-க்கு உதவும் | Realistic depth appearance-க்கு உதவும் |
| Orthographic, oblique வகைகள் | Camera-distance division முக்கியம் |

**Transformations:** Translation ஒவ்வொரு coordinate-க்கும் displacement சேர்க்கும். Scaling ஒவ்வொரு coordinate-ஐ scale factor-ஆல் பெருக்கும். Axis rotation-இல் ஒரு coordinate மாறாது; மற்ற இரண்டு sine/cosine மூலம் மாறும். Perspective calculation-இல் denominator zero ஆகக்கூடாது. Camera/projection plane எங்கு உள்ளது என்பதைக் கொடுக்காமல் formula-ஐத் தேர்ந்தெடுக்காதீர்கள்.

**Column-vector formulas:** Rx: x′=x, y′=y cosθ−z sinθ, z′=y sinθ+z cosθ. Ry: x′=x cosθ+z sinθ, y′=y, z′=−x sinθ+z cosθ. Rz: x′=x cosθ−y sinθ, y′=x sinθ+y cosθ, z′=z. ஒவ்வொரு rotation-க்கும் homogeneous matrix-இன் கடைசி row [0,0,0,1].

**Projection convention in the PDF:** Centre of projection origin; plane z=d. Orthographic projection (x,y,z) → **(x,y,d)**. Perspective projection → **(xd/z, yd/z, d)**, z≠0. வேறு camera position கொடுத்தால் முதலில் viewing coordinates-க்கு மாற்றவும்.

**English answer frame:** “Parallel projection uses parallel projectors and does not produce distance-dependent perspective shrinkage. Perspective projection uses projectors meeting at a centre of projection, so more distant objects appear smaller. I state the camera and projection-plane convention before calculating coordinates.”

## Week 10 — 3D modelling and animation

**தமிழ் சுருக்கம்:** 3D workflow-இல் geometry மட்டும் போதாது. Model, materials/textures, lights, camera, animation, render settings சேர்ந்து final image உருவாகிறது. Viewport preview-வும் final render-உம் ஒரே quality ஆக இருக்க வேண்டியதில்லை.

**Must know:** 3ds Max workspace/viewports; primitives; selection and transforms; editable geometry; modifiers; materials; texture mapping; lighting; cameras; animation timeline/keyframes; rendering and export. Source-இல் உள்ள exact practical steps-ஐ Week 10 notes-இல் செய்து பார்க்கவும்.

| Term | வேலை |
|---|---|
| Model | Object shape/geometry |
| Material | Surface light-க்கு எப்படி பதிலளிக்கிறது |
| Texture map | Surface properties-ஐ இடத்துக்கு இடம் மாற்றும் data |
| Light | Scene illumination |
| Camera | Viewpoint, framing |
| Render | Scene-இலிருந்து output image/frame கணக்கிடுதல் |

**English answer frame:** “I create and position the geometry, assign suitable materials and texture coordinates, add lights and a camera, set animation keyframes where needed, test-render the scene, and export with the required resolution, frame rate and format.”

## Week 11 — Digital video technology

**தமிழ் சுருக்கம்:** Video frames வரிசையாக இருக்கும். Frame dimensions, colour depth, frame rate, duration பெருகினால் raw data பெருகும். Audio இருந்தால் அதன் size-ஐயும் சேர்க்க வேண்டும். Codec compression செய்கிறது; container video/audio streams, metadata வைத்திருக்கும். Container extension மட்டும் quality-ஐத் தீர்மானிக்காது.

| Lossless compression | Lossy compression |
|---|---|
| Original numerical data-ஐ exact-ஆக மீட்கலாம் | சில தகவல் நிரந்தரமாக அகற்றப்படும் |
| Compression அளவு data patterns சார்ந்தது | Quality/data trade-off கட்டுப்படுத்தலாம் |
| Editing/master preservation-க்கு உதவும் | Smaller distribution files-க்கு பயன்படும் |

**Must know:** Analogue/digital signals; progressive/interlaced scanning; standards; aspect ratio; frame rate; spatial/temporal compression; lossy/lossless; codec/container; production stages. Interlaced fields-ஐ complete frames-உடன் குழப்ப வேண்டாம்.

:::formula
Raw video bits = width × height × bits/pixel × frames/second × seconds
Raw video bytes = raw video bits ÷ 8
Bit rate = total bits ÷ duration in seconds
Compression ratio = original size ÷ compressed size
Compressed size = original size ÷ compression ratio
:::

**English answer frame:** “Assuming uncompressed video without headers or audio, I calculate pixels per frame, multiply by bits per pixel and frame rate to obtain bits per second, then multiply by duration. I divide by eight for bytes and state whether the final unit is decimal MB or binary MiB.”

## Week 12 — Video design and development

**தமிழ் சுருக்கம்:** Editing unwanted shots அகற்றுவது மட்டும் அல்ல. Storyboard-இன் message-ஐ சரியான pace, order, sound, titles, effects மூலம் audience-க்குச் சேர்ப்பது. NLE source media-ஐ மாற்றாமல் editing decisions வைத்திருக்க முடியும்; files move/delete செய்தால் project links உடையலாம்.

| Linear editing | Non-linear editing |
|---|---|
| Sequence-ஆக master tape-க்கு copy | Digital random access |
| நடுவே மாற்றம் பின்னுள்ள பகுதிகளை recopy செய்ய வைக்கலாம் | Clips reorder, trim, insert செய்ய எளிது |
| Real-time recording முக்கியம் | Project decisions + final render/export |

**Cuts:** Hard cut நேரடியாக shot மாற்றம். Jump cut நேரத் தாவல் காட்டலாம். J-cut-இல் அடுத்த shot audio முதலில் வரும். L-cut-இல் முந்தைய shot audio அடுத்த visual-மீதும் தொடரும். Cutaway supporting visual தரும். Cross-cutting தொடர்புள்ள வேறு actions இடையே மாற்றும். Match cut visual/action தொடர்பைப் பயன்படுத்தும். Cutting on action இயக்கத்தின் நடுவே மாற்றத்தை இணைக்கிறது.

**A-roll:** Main story/narration. **B-roll:** அதை விளக்கும் supporting footage. Example: tea grower interview + tea plucking shots. Titles readable ஆகவும் safe placement-இலும் இருக்க வேண்டும். Effects message-க்கு உதவ வேண்டும். Export-க்கு target dimensions, fps, codec, bit rate, audio, compatibility சரிபார்க்கவும். Music-video Activity-க்கு music/footage பயன்படுத்தும் உரிமையும் தேவை.

**English answer frame:** “Non-linear editing uses random access to arrange digital clips without destructively modifying the source media. I import and organise assets, assemble a rough cut from the storyboard, refine timing and sound, add suitable titles and transitions, and export and test the required delivery format.”

## Week 13 — Digital audio

**தமிழ் சுருக்கம்:** Sound continuous pressure variation. Sampling குறிப்பிட்ட நேர இடைவெளிகளில் அளவிடுகிறது. Quantization ஒவ்வொரு sample-ஐ available levels-இல் ஒன்றாக மாற்றுகிறது. Sampling rate அதிகமானால் time detail; bit depth அதிகமானால் amplitude levels அதிகம். Channels எண்ணிக்கை தனியான multiplier.

:::formula
PCM bit rate = sampling rate × bit depth × channels
PCM bytes = sampling rate × bit depth × channels × seconds ÷ 8
Quantization levels = 2^(bit depth)
Nyquist: பாடத்தின் condition sampling rate > 2 × highest retained frequency
The theoretical boundary is 2 × highest frequency; practical capture needs margin and filtering
Practical recording: allow margin above that boundary and use anti-alias filtering
:::

**Must know:** Frequency Hz; amplitude; wavelength; sampling; quantization; ADC/DAC; mono/stereo; audio formats; lossless/lossy encoding; filtering; editing/mixing. Nyquist-இல் sample rate-ஐ sound wave frequency-யாக எடுத்துக்கொள்ளாதீர்கள். 44,100 Hz என்பது 44.1 kHz.

| Operation | நோக்கம் |
|---|---|
| Low-pass filter | Higher frequencies குறைத்தல் |
| High-pass filter | Lower frequencies குறைத்தல் |
| Band-pass filter | ஒரு frequency band அனுமதித்தல் |
| Mixing | பல tracks-ஐ level, timing சேர்த்து இணைத்தல் |
| Normalization | தேர்ந்த reference-க்கு gain மாற்றுதல் |
| Compression in encoding | Storage/transmission data குறைத்தல் |

**English answer frame:** “The sampling rate is the number of samples per second. Bit depth determines the available amplitude levels, and channel count determines how many sample streams are stored. For uncompressed PCM, I multiply sampling rate, bit depth, channels and duration, then divide by eight to obtain bytes.”

## Week 14 — Authoring

**தமிழ் சுருக்கம்:** Assets தயாரானபின் அவற்றை storyboard, timing, navigation, interaction-க்கு ஏற்றபடி இணைப்பது authoring. Authoring software குறைந்த code-உடன் title உருவாக்க உதவலாம். எல்லா authoring styles-க்கும் ஒரே flexibility இல்லை; project தேவைக்கேற்றதைத் தேர்ந்தெடுக்கவும்.

| Metaphor | எப்படி organise செய்கிறது? | Source example |
|---|---|---|
| Structure-based | Hierarchical/network content relationships | Dreamweaver |
| Timeline-based | Time axis-இல் tracks/items | Flash |
| Script-based | Code மூலம் positions, timing, events | ActionScript |
| Flow-control | Icons, flow lines, branches | Authorware |

இவை source-இன் examples; legacy tools-ஐ modern browser support உள்ளது என்று எடுத்துக்கொள்ள வேண்டாம். Storyboard screen/shot, visuals, narration, action, transitions, interaction காட்ட வேண்டும். **Script process:** program idea → program brief → research → identify/select content → interface/layout → storyboard.

**Orchestration:** Assets import, name, organise, reuse as instances; correct paths, timing, synchronisation, controls அமைத்தல். **Distribution:** Target platform-இல் test செய்தபின் package/export. Web/social media-க்கு bandwidth/format/platform limits; CD/DVD-க்கு capacity/drive; intranet-க்கு access/network; VPN-க்கு authenticated connectivity; TV-க்கு broadcaster specifications தேவை. Exact platform limits மாறுவதால் target requirements சரிபார்க்க வேண்டும்.

**English answer frame:** “Authoring integrates prepared media assets into a title according to a storyboard. I would choose a metaphor that fits its navigation and timing, import and organise assets, implement controls and synchronisation, test on the target platforms, and package the result for the intended distribution medium.”

## Formula sheet — units மற்றும் order

| Need | Formula / rule |
|---|---|
| Bits to bytes | bytes = bits ÷ 8 |
| Image raw bytes | width × height × bit depth ÷ 8 |
| Possible colours / levels | 2^bits |
| Print width in inches | pixel width ÷ pixels per inch |
| Aspect ratio | width : height; இரண்டையும் gcd-ஆல் வகுக்கவும் |
| Raw video bytes | image bytes/frame × fps × seconds |
| PCM audio bytes | samples/second × bits/sample × channels × seconds ÷ 8 |
| Bit rate | bits ÷ seconds |
| Compression ratio | original ÷ compressed; same units |
| Decimal units | 1 kB = 1000 bytes; 1 MB = 1,000,000 bytes |
| Binary units | 1 KiB = 1024 bytes; 1 MiB = 1,048,576 bytes |
| 2D translation | x′ = x + tₓ; y′ = y + tᵧ |
| 2D scaling | x′ = sₓx; y′ = sᵧy |
| 2D rotation | x′ = x cosθ − y sinθ; y′ = x sinθ + y cosθ |
| 3D translation | x′ = x+tₓ; y′ = y+tᵧ; z′ = z+t𝓏 |
| 3D scaling | x′ = sₓx; y′ = sᵧy; z′ = s𝓏z |

:::warn Units check
Source “KB/MB” என்று 1024-based conversion பயன்படுத்தினால் exam working-இல் அந்த convention-ஐத் தெளிவாகச் சொல்லவும். Bits-க்கும் bytes-க்கும் 8 factor. Minutes-ஐ seconds-ஆக மாற்ற 60 factor. Mono/stereo-க்கு channels factor. Header/compression/audio சேர்க்க வேண்டுமா என்று question-ஐப் படிக்கவும்.
:::

## 25–28 November study plan

இந்தத் திட்டம் focused blocks-க்கான வழிகாட்டல். இடையில் breaks எடுத்துக்கொள்ளவும். தெரியாத calculation-க்கு கூடுதல் நேரம் ஒதுக்கவும். ஏற்கெனவே புரிந்த topic-இன் நேரத்தை weak topic-க்கு மாற்றவும்.

| நாள் | முதல் பகுதி | அடுத்த பகுதி | முடிவில் செய்வது |
|---|---|---|---|
| Wed 25 Nov | W01–W04; definitions, typography, image calculations | W05 algorithms; ஒவ்வொரு iteration table-ஐ கையால் எழுதுதல் | W01–W05 quizzes; mistakes பட்டியல் |
| Thu 26 Nov | W06 transformations; order, rotation about point | W07–W10; animation, interaction, 3D projection/modelling | W06–W10 quizzes; matrices மீண்டும் செய்வது |
| Fri 27 Nov | W11–W14; video/audio calculations, editing, authoring | Formula sheet, Activities, comparison answers | Mixed practice; தவறான answers-க்கு காரணம் எழுதுதல் |
| Sat 28 Nov | காலை short recall; formulas, error list, answer frames | தேர்வுக்கு முன் பயணம்/உணவு/தேவையான பொருட்களுக்கு நேரம் | 13:30–15:30 exam; புதிய பெரிய topic தொடங்க வேண்டாம் |

**ஒவ்வொரு block-இலும்:** முதலில் notes மூடி நினைவிலிருந்து சொல்லவும். பின்னர் சரிபார்க்கவும். Calculation-ஐப் பார்த்து copy செய்யாமல் புதிதாகச் செய்யவும். Quiz-இல் correct option ஏன் correct, மற்றவை ஏன் wrong என்று விளக்கவும்.

## Two-hour exam time plan

Question paper-இன் உண்மையான instructions, marks, compulsory/optional rules முதலில் பார்க்கவும். கீழுள்ள timing ஒரு தயாரிப்பு template; paper structure தெரியும் என்று கருதவில்லை.

| நேரம் | செயல் |
|---|---|
| 13:30–13:40 | முழுப் paper படித்தல்; answer choices/marks பார்த்து வரிசை தீர்மானித்தல் |
| 13:40–15:15 | Answers எழுதுதல்; marks-க்கு ஏற்ற நேரம் பகிர்தல் |
| 15:15–15:30 | Units, matrix order, missing steps, labels, question numbers சரிபார்த்தல் |

Writing budget **95 minutes**. Answer செய்ய வேண்டிய total marks தெரிந்தபின் **95 ÷ total marks = minutes per mark**. ஒரு answer நேரம் முடிந்தால் working தெளிவாக விட்டுவிட்டு அடுத்ததுக்குச் செல்லவும். கடைசியில் திரும்பவும். Algorithm table-க்கு start/end pixel, decision rule; size calculation-க்கு units; descriptive answer-க்கு definition, points, example சரிபார்க்கவும்.

## Self-test — answers மறைத்து முயற்சி செய்யுங்கள்

<details markdown="1"><summary>1. Photograph, animation வகைப்படுத்தவும்.</summary>

Photograph captured/discrete. Computer animation synthesized/continuous. Origin, time இரண்டு தனித்தனி dimensions.
</details>

<details markdown="1"><summary>2. Typeface, font, glyph வேறுபாடு?</summary>

Typeface design family. Font அதன் specific style/size என்ற பாரம்பரிய usage. Glyph character-இன் visual form. Encoding character-ஐ number/bytes-ஆக represent செய்கிறது.
</details>

<details markdown="1"><summary>3. 800 × 600, 24-bit raw image size?</summary>

Formula = width × height × bits/pixel ÷ 8. Substitution = 800 × 600 × 24 ÷ 8 = **1,440,000 bytes = 1.44 MB**, header/compression இல்லாமல். Aspect ratio **4:3**.
</details>

<details markdown="1"><summary>4. 8-bit colour-இல் எத்தனை values?</summary>

2⁸ = **256** possible values. 24-bit RGB-இல் 2²⁴ = **16,777,216** possible combinations.
</details>

<details markdown="1"><summary>5. DDA: (0,0) முதல் (4,2), increments?</summary>

Δx = 4, Δy = 2, steps = 4. x increment = 1; y increment = 0.5. Continuous positions (0,0), (1,0.5), (2,1), (3,1.5), (4,2). Stated nearest rounding rule பயன்படுத்தி plot செய்யவும்; half-value rule தெளிவாக எழுதவும்.
</details>

<details markdown="1"><summary>6. (2,3)-ஐ (4,−1) translate செய்தால்?</summary>

x′ = 2 + 4 = **6**; y′ = 3 − 1 = **2**. Result **(6,2)**. Column homogeneous vector result [6,2,1]ᵀ.
</details>

<details markdown="1"><summary>7. (2,1)-ஐ origin பற்றி 90° counter-clockwise rotate செய்தால்?</summary>

cos90° = 0, sin90° = 1. x′ = 2×0 − 1×1 = −1; y′ = 2×1 + 1×0 = 2. Result **(−1,2)**, Cartesian y-up convention.
</details>

<details markdown="1"><summary>8. Keyframe, tween, path, shape?</summary>

Keyframe முக்கிய state. Tween intermediate states. Path object செல்லும் route. Shape tween geometry morph. Timing, layers, audio synchronisation-ஐயும் திட்டமிட வேண்டும்.
</details>

<details markdown="1"><summary>9. Event-driven interaction-இன் sequence?</summary>

Action → event → listener → handler → state change → visible response. Handler-இல் சரியான coordinate system பயன்படுத்தவும்.
</details>

<details markdown="1"><summary>10. Parallel, perspective வேறுபாடு?</summary>

Parallel-இல் projectors parallel; distance-dependent size reduction இல்லை. Perspective-இல் projectors centre-இல் சந்திக்கும்; தூரமானவை சிறியதாகத் தோன்றும்.
</details>

<details markdown="1"><summary>11. Raw video: 320 × 240, 24-bit, 25 fps, 10 seconds?</summary>

Bytes/frame = 320 × 240 × 24 ÷ 8 = 230,400. Total = 230,400 × 25 × 10 = **57,600,000 bytes = 57.6 MB**. Raw bit rate = 57,600,000 × 8 ÷ 10 = **46,080,000 bit/s**. Audio/header இல்லை.
</details>

<details markdown="1"><summary>12. Original 80 MB, compressed 10 MB: ratio?</summary>

Compression ratio = original ÷ compressed = 80 ÷ 10 = **8:1**. Saved fraction = (80−10)/80 = **87.5%**. Ratio-ஐ percentage-உடன் குழப்ப வேண்டாம்.
</details>

<details markdown="1"><summary>13. Audio: 44,100 Hz, 16-bit, stereo, 60 seconds?</summary>

Bytes = 44,100 × 16 × 2 × 60 ÷ 8 = **10,584,000 bytes = 10.584 MB**. PCM bit rate = 44,100 × 16 × 2 = **1,411,200 bit/s**. Header/compression இல்லை.
</details>

<details markdown="1"><summary>14. Highest frequency 8 kHz என்றால் Nyquist boundary?</summary>

Boundary = 2 × 8 = **16 kHz**. பாடத்தின் strict condition-படி **16 kHz-க்கு அதிகமான** sampling rate தேர்ந்தெடுக்கவும். Practical capture-இல் margin, anti-alias filtering தேவை; boundary-இல் sampling எல்லா phase-களையும் பாதுகாப்பாக capture செய்யும் என்று கருத வேண்டாம்.
</details>

<details markdown="1"><summary>15. Storyboard, authoring, distribution எப்படித் தொடர்புடையவை?</summary>

Storyboard content, layout, sequence, timing, interaction திட்டம் தருகிறது. Authoring அதை assets, code/controls மூலம் செயல்படுத்துகிறது. Testing முடிந்தபின் target medium-க்கு ஏற்ற package/export செய்து distribute செய்கிறோம்.
</details>
