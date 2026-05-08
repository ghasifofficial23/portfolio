# Implementation Plan: Maximized Hero Section

**Date:** 2026-05-09
**Status:** Approved
**Author:** Antigravity

## 1. Objective
Expand the Hero section to utilize maximum horizontal screen space on ultra-wide monitors, eliminating the "empty space" borders while maintaining a reasonable maximum boundary (`max-w-[1920px]`) so the content doesn't separate too far on massive displays. 

## 2. Approach
Implement **Approach 1 (Liquid Layout with Maximum Boundary)** combined with premium UI/UX enhancements:
- Change the main container from `max-w-[1400px]` to `max-w-[1920px]`.
- Implement fluid padding using `w-full px-[5%] xl:px-[8%] 2xl:px-[10%]`.
- Increase typography scale slightly on massive screens so text doesn't look tiny in the expanded space (`2xl:text-[8.5rem]`).
- Adjust the layout grid gaps (`2xl:gap-16`) to maintain spacing harmony.
- Update `Ticker.tsx` to match the new `max-w-[1920px]` boundary so the marquee aligns with the hero boundaries perfectly.

## 3. Tasks

### Task 1: Update Hero Container Constraints
- **File:** `src/components/Hero.tsx`
- **Action:** Replace `max-w-[1400px]` with `max-w-[1920px]`.
- **Action:** Add fluid padding `px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24`.
- **Action:** Add `2xl` responsive classes to the main heading (`2xl:text-[8.5rem]`).
- **Verification:** Resize the browser window above 1400px and ensure the layout continues to expand until 1920px without looking broken.

### Task 2: Align Ticker Component
- **File:** `src/components/Ticker.tsx`
- **Action:** Update the `max-w-6xl` or `max-w-[1400px]` constraints to match the new `max-w-[1920px]` so the central text alignment stays harmonious with the Hero.
- **Verification:** Scroll down to the Ticker section and verify it spans the same maximum width as the Hero.
