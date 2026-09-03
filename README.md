# Tevexxo Spark

Make ONLY the following changes to this project. Do not change any other colors, layout, fonts, spacing, or components that aren't mentioned below.

1. LOGO REPLACEMENT

   - In `src/components/Logo.tsx`, replace the "T" text mark with the attached Tevexxo logo image (circular orange flame/arrow mark on a white circular background). Use an <img> tag inside the same rounded container, keep the same box size/dimensions (sm/md/lg), object-fit: contain, and remove the "T" span. Keep the "Tevexxo" text next to it unchanged.

   - Save the logo image as `src/assets/tevexxo-logo.png` (or similar) and import it properly.

2. HERO SPINNING GRAPHIC (SpinningHeroMark in `src/components/Hero.tsx`)

   - Replace the "T" text in the center core circle with the same Tevexxo logo image, properly centered, correct aspect ratio (not stretched or cropped), same size as the current "T" box.

   - Do not change the existing spin animations, glow, or ring styles.

   - On the outer rotating ring (the ring outside the logo core), add a small orbiting label/badge that says "Projects" attached to the ring so it rotates along with the ring's spin animation. Keep the existing orange dot markers on the ring as they are — just add this "Projects" label as an additional element that revolves around.

3. SEPARATE PAGES

   - Convert these sections into their own standalone routed pages instead of anchor-scrolled sections on the home page: Blog, Contact, Projects, Services, Products, Why Tevexxo.

   - Add react-router-dom, create routes: `/projects`, `/services`, `/products`, `/why-tevexxo`, `/blog`, `/contact` — each route renders the full existing component (Projects.tsx, Services.tsx, Products.tsx, WhyTevexxo.tsx, Blog.tsx, Contact.tsx) as a full page with the TopNavbar and Footer still showing.

   - Update `TopNavbar.tsx` links for these 6 items to route to their new page paths (using React Router `Link`) instead of `#anchor` hash links. Keep the other nav links (Home, About Us, Courses, Programs) as anchor links on the home page, unchanged.

   - Home page (`/`) should keep Hero at the top; keep Courses, About, Programs as sections on the home page as they are now. Remove Projects, Services, Products, WhyTevexxo, Blog, Contact from being rendered as sections inside the home page `App.tsx` main content, since they now have their own pages.

4. CURSOR EFFECT

   - Add a custom cursor effect across the site: a medium-sized solid orange glowing dot that follows the mouse cursor smoothly.

   - Add thin connected grid/network lines that trail and connect near the cursor as it moves (like a subtle constellation/grid effect following the mouse), in the same orange color theme, low opacity, not distracting from content.

   - Keep this lightweight and performant (canvas or a small React component), and make sure it doesn't block clicks on buttons/links (pointer-events: none on the cursor overlay).

Do not modify any other existing component, color palette, animation, or page content beyond what's listed above.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/25e8f742-4388-4aee-8a82-4cbb999b4a24).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
