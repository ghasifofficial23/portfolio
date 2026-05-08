# Design Spec: Maximized Hero Section

**Date:** 2026-05-09
**Status:** Draft
**Author:** Antigravity

## 1. Problem Statement
When viewing the portfolio on a maximized browser window (especially on ultra-wide or large monitors >1400px), the content of the Hero section remains constrained to the center, leaving noticeable empty space on the left and right edges. The user desires a fully maximized, edge-to-edge layout that completely fills the screen boundaries regardless of browser width.

## 2. Context
Currently, the `Hero.tsx` component houses its main content inside a wrapper with `max-w-[1400px]`. 
While the animated background elements (the floating "GHASIF" text and the blurred gradient blobs) are absolute and stretch across the screen, the primary structural grid (text content and avatar hub) is restricted. Removing or expanding this constraint will require repositioning the layout so it scales aesthetically on 4K or ultra-wide screens without looking broken or overly stretched.

## 3. Proposed Approaches

### Approach 1: Fluid Edge-to-Edge Constraints (The "Liquid Layout")
- **Description:** Remove the `max-w-[1400px]` completely and replace it with `w-full px-8 md:px-16 xl:px-24`. The text content snaps to the left padding, and the avatar hub snaps to the right padding.
- **Pros:** Completely eliminates the empty border space. Maximizes horizontal real estate. 
- **Cons:** On an ultra-wide monitor, the distance between the left text and the right avatar might become so vast that the connection between them is visually lost.

### Approach 2: Proportional Scaling Container (The "Cinema Mode")
- **Description:** Keep the content centered but increase the max-width dynamically using `max-w-[90vw]`. As the screen gets larger, the container grows proportionally up to a much higher limit (e.g., `max-w-[2000px]`). We would also scale up the typography (`text-[vw]`) so the text physically grows to fill the void.
- **Pros:** Maintains the visual relationship between text and the 3D avatar. Looks incredibly cinematic on large displays.
- **Cons:** Requires careful tuning of font sizes and line heights to ensure text doesn't become illegibly large on massive screens.

### Approach 3: Asymmetrical Edge Bleed
- **Description:** Anchor the text content to the left edge with standard padding, but allow the 3D Avatar Hub to bleed entirely off the right edge of the screen using absolute positioning on large screens (`xl:absolute xl:-right-10`).
- **Pros:** Creates a highly modern, editorial look. The empty space on the left is filled by the text, and the right space is consumed by the massive glowing avatar.
- **Cons:** Can be tricky to ensure responsive perfection across the breakpoints between 1200px and 2000px.

**Recommendation:** **Approach 1 combined with slightly scaled typography.** It provides the most predictable edge-to-edge coverage while maintaining the beautiful premium aesthetic we've built. By snapping the content to dynamic padding (`px-8 lg:px-20 2xl:px-32`), we ensure the "empty borders" are replaced with purposeful content alignment.

## 4. Technical Architecture
- **Components to Modify:** `src/components/Hero.tsx`
- **CSS Changes:** Replacing `max-w-[1400px]` with fluid width wrappers (`w-full px-[5%]`) and adjusting grid gaps (`lg:gap-10 xl:gap-20`).

## 5. Open Questions
- On massive monitors (e.g. 34-inch ultra-wides), do you want the avatar and text to be pushed *all* the way to the far left and right edges, or would you prefer they stop at a reasonable maximum width (like 1800px) so they don't sit miles apart?
