# Graph Report - darshan-portfolio  (2026-11-25)

## Corpus Check
- Corpus is ~5,567 words - fits in a single context window. You may not need a graph.

## Summary
- 170 nodes · 236 edges · 26 communities (11 shown, 15 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Package Dependencies
- Portfolio Components
- Tooling Configuration
- Credentials and Projects
- Portfolio Feature Notes
- App Entry and Contact
- Hero Media Components
- Project Commands
- Forage Simulation Certificate
- Web Development Certificate
- Footer Component
- Printer Favicon
- Neon Folder Icon
- Bluesky Icon
- Discord Icon
- Documentation Icon
- GitHub Icon
- Profile Settings Icon
- Social Icon Sprite
- X Social Icon
- Black Hoodie Portrait
- Blue Lit Portrait
- Pink Collared Portrait
- Pink Shirt Portrait
- Neon Hero Portrait
- Profile Portrait

## God Nodes (most connected - your core abstractions)
1. `FUTURE_FS_01 Personal Portfolio Website` - 14 edges
2. `Hospital Management System` - 11 edges
3. `App()` - 10 edges
4. `E-Commerce Web Application` - 8 edges
5. `react` - 6 edges
6. `Hero()` - 6 edges
7. `Full Stack Developer Profile` - 6 edges
8. `scripts` - 5 edges
9. `Footer()` - 5 edges
10. `Contact()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `Contact()`  [EXTRACTED]
  src/App.jsx → src/components/Contact.jsx
- `App()` --calls--> `Footer()`  [EXTRACTED]
  src/App.jsx → src/components/Footer.jsx
- `App()` --calls--> `Hero()`  [EXTRACTED]
  src/App.jsx → src/components/Hero.jsx
- `App()` --calls--> `About()`  [EXTRACTED]
  src/App.jsx → src/components/About.jsx
- `App()` --calls--> `Experience()`  [EXTRACTED]
  src/App.jsx → src/components/Experience.jsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Icons in the shared SVG sprite** — public_icons_social_icon_sprite, public_icons_bluesky_icon, public_icons_discord_icon, public_icons_documentation_icon, public_icons_github_icon, public_icons_social_icon, public_icons_x_icon [EXTRACTED 1.00]

## Communities (26 total, 15 thin omitted)

### Community 0 - "Package Dependencies"
Cohesion: 0.08
Nodes (35): dependencies, clsx@^2.1.1, @emailjs/browser@^4.4.1, framer-motion@^12.38.0, gsap@^3.15.0, lenis@^1.3.23, lottie-react@^2.4.1, react-dom@^19.2.6 (+27 more)

### Community 1 - "Portfolio Components"
Cohesion: 0.13
Nodes (23): App(), About(), Experience(), Navbar(), Projects(), Skills(), about, contactSection (+15 more)

### Community 2 - "Tooling Configuration"
Cohesion: 0.12
Nodes (19): devDependencies, eslint@^10.3.0, @eslint/js@^10.0.1, eslint-plugin-react-hooks@^7.1.1, eslint-plugin-react-refresh@^0.5.2, globals@^17.6.0, @types/react@^19.2.14, @types/react-dom@^19.2.3 (+11 more)

### Community 3 - "Credentials and Projects"
Cohesion: 0.12
Nodes (21): Brilliance Foundation, B.Tech in Computer Science, Darshan Desale, E-Commerce Web Application, Forage, Framer Motion, Full Stack Developer Profile, Full Stack Java Developer Certificate (+13 more)

### Community 4 - "Portfolio Feature Notes"
Cohesion: 0.15
Nodes (13): Contact Form, EmailJS, FUTURE_FS_01 Personal Portfolio Website, JavaScript, Projects Showcase, React.js, Resume Download, Skills Section (+5 more)

### Community 5 - "App Entry and Contact"
Cohesion: 0.29
Nodes (5): Darshan Desale Portfolio Entry Page, react@^19.2.6, react, Contact(), getContactIcon()

### Community 6 - "Hero Media Components"
Cohesion: 0.48
Nodes (4): getSocialMeta(), Hero(), splitText(), Stats()

### Community 7 - "Project Commands"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, preview

### Community 8 - "Forage Simulation Certificate"
Cohesion: 0.50
Nodes (4): Create a Backpack React Web App, Darshan Desale, Forage, Front-End Software Engineering Job Simulation Certificate

### Community 9 - "Web Development Certificate"
Cohesion: 0.50
Nodes (4): Brilliance Foundation, Darshan Desale, Web Development, Web Development Certificate of Completion

### Community 10 - "Footer Component"
Cohesion: 0.83
Nodes (3): Footer(), getSocialColor(), getSocialIcon()

## Knowledge Gaps
- **39 isolated node(s):** `React.js`, `Vite`, `Tailwind CSS`, `JavaScript`, `Smooth Animations` (+34 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 51 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **15 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `App Entry and Contact` to `Package Dependencies`, `Portfolio Components`, `Hero Media Components`?**
  _High betweenness centrality (0.157) - this node is a cross-community bridge._
- **What connects `React.js`, `Vite`, `Tailwind CSS` to the rest of the system?**
  _39 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Package Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.07936507936507936 - nodes in this community are weakly interconnected._
- **Why does `dependencies` connect `Package Dependencies` to `App Entry and Contact`?**
  _High betweenness centrality (0.062) - this node is a cross-community bridge._
- **Should `Portfolio Components` be split into smaller, more focused modules?**
  _Cohesion score 0.12873563218390804 - nodes in this community are weakly interconnected._
- **Why does `devDependencies` connect `Tooling Configuration` to `Package Dependencies`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **Should `Tooling Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.11904761904761904 - nodes in this community are weakly interconnected._