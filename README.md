# Rohith's Software Engineer Portfolio

A responsive seven-page portfolio with an editorial charcoal palette, restrained lime accents, serif display typography, and separate pages for Home, About, Skills, Projects, Experience, Education, and Contact.

## Run locally

Install dependencies and start the Vite development server:

```sh
npm install
npm run dev
```

Open the **Local** URL printed by Vite (usually `http://localhost:5173/`).

## Publish to GitHub Pages

For an existing GitHub Pages site deploying from the repository root, commit and push the updated source files; Pages will publish them using its current configuration.

To publish the optimized Vite build instead:

1. Run `npm ci` and `npm run build`.
2. Publish the **contents** of `dist/` using GitHub Pages. You can copy them to a `docs/` folder and select **Deploy from a branch**, `main`, `/docs`, or configure a GitHub Actions workflow to deploy `dist/`.
3. Open `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/` and verify the site.

The Vite build uses relative asset URLs so it works when hosted under a repository path.

## Customize before sharing

- Add real project repository/demo URLs to each project card when available.
- Confirm all resume facts and certification names/dates.
- Replace the PDF when your resume is updated.
- Consider adding project screenshots, architecture diagrams and a social preview image when available.

The website intentionally does not claim unverified performance metrics, project demos or proficiency percentages.
