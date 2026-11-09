# Soweto Global Solutions

## Table of Contents

- [Student Information](#Studentinformation)
- [Project Overview](#projectoverview)
- [Website Goals](#WebsiteGoals)
- [Website features](#Websitefeatures)
- [Responsive Design and Testing](#ResponsiveDesignandTesting)
- [Timeline](#Timeline)
- [Sitemap](#Sitemap)
- [Part 1 details](#Part1details)
- [Part 2 details](#Part2details)
- [Changelog details](#Changelogdetails)
- [Reference section](#Referencesection)
- [Disclosure of AI Usage in my Assessment](#DisclosureofAIUsageinmyAssessment)

## Student information
* *Student Name:* Tamisha Pillay
* *Student Number:* ST10524760
* *Course:* Higher certificate in mobile application and web development.
* *Module:* WEDE5020 - Web Development
  
## Project overview
This project is a website developed for *Soweto Global Solutions (SGS)*, a South Africa-based IT consulting and workforce empowerment organization. SGS specializes in providing IT helpdesk support, corporate Microsoft Office training, and Standard Operating Procedure (SOP) process documentation to small-to-medium enterprises (SMEs) across Gauteng.

The primary goal of this digital platform is to create a multi-page visual presence that communicates corporate capabilities, offers seamless quote generation for business clients, and builds regional market authority.

## Website Goals
* *Establish Digital Authority:* Build an accessible, professional website presenting Soweto Global IT and training solutions to investors.
* *Streamline Lead Acquisition:* Provide an intuitive online quotation request system enabling businesses to request custom service proposals.
* *Promote Digital Skills Adoption:* Highlight structured MS Office workforce training modules aimed at improving business productivity.
* *Demonstrate Web & UX Standards:* Deliver an inclusive, mobile-responsive layout adhering to semantic HTML5 structure and high usability standards.

## Website features
* *Semantic Multi-Page Architecture:* Structured using standard HTML5 tags: header, nav, main, section, article, footer.
* *Interactive Service Quote Form:* Custom form elements allowing prospective clients to specify IT support needs, training group sizes, and operational locations.
* *Executive Leadership Showcase:* Biographies highlighting key management personnel (Lead IT Support Specialist, Head of Training and Development and Workflow Consultant) to establish credibility.
* *Multi-Hub Operational Contact Details:* Clear business location listings for both the Soweto Main Branch and Johannesburg CBD Support Hub.
* *Cross-Platform Social Integration:* Connected corporate trust indicators linking to official LinkedIn and Facebook business presences.

## Responsive Design & Testing

*Added responsive web design techniques. Tested the responsiveness by minimizing and maximizing the websites window. 
responsive behavior is built natively using pure CSS Grid, Flexbox, and strategic CSS media queries.

### Key Responsive Design Strategies
1. *Grid System (1fr and Relative Units)*
   * Layout grids (.grid-3, .grid-2, and .footer-container) use CSS Grid with 1fr flexible units and percentages (width: 90%) so content naturally expands or shrinks to fit the viewport width.
   * Internal spacing and padding use relative units (rem, %) to maintain visual balance across different screen sizes.

2. *Mobile-First Content Flow & Dynamic Stacking*
   * Desktop layouts feature side-by-side content structures.
   * As the viewport narrows, multi-column grid containers gracefully collapse into single-column vertical stacks, prioritizing readability and avoiding horizontal scrollbars.

3. *Flexible Images & Media (max-width: 100%)*
   * All images across cards, story sections, and maps are constrained with max-width: 100%, height: auto, and object-fit: cover/contain. This prevents images from breaking out of their parent containers or stretching out of proportion on smaller screens.

## Timeline
* *Phase 1: Requirements & Sourcing (Weeks 1–2):* Project proposals, site architecture planning, wireframing, and content research gathering. (Completed)
* *Phase 2: HTML Core Development (Weeks 3–4):* Building semantic HTML structure, basic form mechanics, and structural link routing. (Completed)
* *Phase 3: CSS Styling & Responsive Layout (Weeks 5–6):* Custom CSS design, color palette implementation, typography setup, and media queries. (Upcoming - Part 2)
* *Phase 4: JavaScript Interactivity (Weeks 7–8):* Client-side form validation, dynamic price calculators, and UI enhancements. (Upcoming - Part 3)
* *Phase 5: Final Testing & Deployment (Week 9):* Cross-browser auditing, accessibility compliance checks, and final GitHub Pages deployment. (Upcoming - Part 3)

## Site map
project/

├── index.html

├── pages/

│ ├── about.html

│ ├── services.html

│ ├── enquiry.html

│ └── contact.html

## Part 1 details
This repository currently contains the *Part 1 Submission* requirements:
* Initial semantic HTML structure for all primary pages (index.html, about.html, services.html, enquiry.html, contact.html).
* Complete visual sitemap structure and navigation flow.
* Comprehensive research documentation on industry benchmarks and visual assets.
* Baseline repository setup with descriptive Git commit history.

## Part 2 details
This repository now currently contains the *Part 1 Submission* and *Part 2 Submission* requirements:
Part 2 expands on the initial semantic HTML5 framework created in Part 1 by implementing a fully customized, responsive desktop-first CSS design system (style/main.css). The application incorporates visual accessibility, custom brand typography, flexbox/grid layout mechanics, and responsive media query breakpoints for desktop, tablet, and mobile devices.

## Changelog details
All notable changes to this project will be documented here.
---
### [Unreleased]
- Planned features: the functioning of the website as in redirecting users to the pages with more details. (e.g.clicking on a service package will redirect the user to a page with the detailed version of that service). working quote generator.
- Upcoming fixes: the edition of css to style the website.
---
### [v1.2] – 2026‑08‑31
- Added company logo with white background for the contact page, enquiry page, services page.
- Added entire HTML5 page code for the enquiry,  contact and services page, including the addition of all images and icons, the navigation function and a few links
- Updated and troubleshooted the pages
- Fixed broken image paths in `index.html`
- fixed GitHub repository error

### [v1.1] – 2026‑08‑25
- Added company logo with white background for the home page and about us page.
- Added entire HTML5 page code for the home and about us page, including the addition of all images and icons, the navigation function and a few links
- Updated and troubleshooted the pages
- Fixed broken path for about us page from home page
- fixed mispelled tag error
- Created Readme and added the initial titles and navigation

### [v1.0] – 2026‑08‑20
- Initial planning of HTML pages and research

### *Part 2 Updates (CSS Styling & Responsiveness) [v1.3] - 10/5/2026*
- *Updated:* Standardized relative font units (rem, em) and responsive container widths (%).
- *Added:* Created master style/style.css stylesheet implementing global CSS reset and variable definitions.
- *Added:* Integrated 12-column CSS Grid and Flexbox layouts for services, teams, and contact pages.
- *Added:* Added media queries for tablet (992px) and mobile (640px) viewport breakpoints.
- *Added:* Implemented CSS interactive states (:hover, :focus, :active) for navigation links and buttons.
- *Added:* Added responsive <picture> tags with srcset attributes for optimized image loading.
  
## Reference section
```adamvduke, 2015. standard-readme. [online] Available at: <https://github.com/RichardLitt/standard-readme/blob/main/example-readmes/maximal-readme.md> [Accessed 30 August 2026].```

```adamvduke, 2015 - 2026. Standard readme. [online] Available at: <https://github.com/RichardLitt/standard-readme/blob/main/example-readmes/maximal-readme.md > [Accessed 29 August 2026].```

```atlassain, 2026. IT service desk vs IT help desk vs ITSM: What's the difference?. [online] Available at: <https://www.atlassian.com/itsm/service-request-management/help-desk-vs-service-desk-vs-itsm > [Accessed 30 august 2026].```

```Iconify Design, 2016. Iconify Icons. [online] Available at: <https://icon-sets.iconify.design/?query=map > [Accessed 30 August 2026].```

```Lucide, 2013. Lucide. [online] Available at: <https://lucide.dev/icons/?focus=>  [Accessed 30 August 2026].```

```Unsplash, 2013. Unsplash. [online] Available at: <https://unsplash.com/s/illustrations/profile-picture > [Accessed 30 August 2026].```

```W3Schools, 2026. HTML Headings. [online] Available at: <https://www.w3schools.com/html/html_headings.asp > [Accessed 28 August 2026].```

```W3Schools, 2026. HTML Styles. [online] Available at: <https://www.w3schools.com/html/html_styles.asp#gsc.tab=0 > [Accessed 28 August 2026].```

```W3Schools, 2026. w3schools symbols. [online] Available at: <https://www.w3schools.com/html/html_symbols.asp> [Accessed 29 August 2026].```

```Westech, 1995. It support desk. [online] Available at: <https://www.westech.co.za/ > [Accessed 30 August 2026].```

```[s.a.]. sitemap-template. [electronic print] Available at: <https://images.edrawmind.com/templates/sitemap-template/337-sitemap-template.jpg > [Accessed 30 august 2026].```

```b2Impact, 2026. b2b-marketing-trends-strategies-tool. [online] Available at: <https://b2impact.com/en/b2b-marketing-trends-strategies-tools/ > [Accessed 30 august 2026].```

```Comptia, 2024 - 2025. Comptia research. [online] Available at: <https://www.comptia.org/en-za/resources/research/ > [Accessed 30 august 2026].```

```Draw.io, 2026. Draw.io. [online] Available at: <https://app.diagrams.net/ > [Accessed 30 august 2026].```

```Hootsuite, 2026. Hootsuite Research social trends. [online] Available at: <https://www.hootsuite.com/research/social-trends > [Accessed 30 august 2026].```


```International organization for standardization, 1947 - 2026. ISO. [online] Available at: <https://www.iso.org/home.html > [Accessed 30 august 2026].```

## *Disclosure of AI Usage in my Assessment*

- *Section(s) within the assessment in which generative AI was used:*
- In the Services page in order to create the downloadable documents.

- *Name of AI tool(s) used:*
- Gemini Ai

- *Purpose/intention behind use:*
- To generate the user guides for each specific package

- *Date(s) in which generative AI was used:*
- 05 October 2026

- *A link to the actual generative AI chat:*
- https://share.gemini.google/KypVwKHDqNUb
