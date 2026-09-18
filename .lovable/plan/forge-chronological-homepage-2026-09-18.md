# FORGE chronological homepage

## Goal
Replace only the current homepage presentation with a chronological newsroom feed inspired by the reference structure, while preserving FORGE’s brand, routes, story pages, assets, shared components, and responsive behavior.

## Implementation
- Extend the existing story records with optional feed metadata: publishing time, editorial content label, and series/topic.
- Add reusable homepage-only feed components:
  - topic filter strip with horizontal mobile scrolling and active states
  - date grouping derived automatically from story dates
  - date dividers with a special “Today” label for the newest group
  - responsive horizontal story cards with media, video controls, timestamps, labels, topic tags, and existing article links
- Replace the homepage’s marketing-style hero and mixed sections with the chronological feed, keeping the existing newsletter call-to-action after the feed.
- Adapt the shared navigation to the requested Feed / Series / Videos / About structure and add “Jump to Today,” without removing existing routes. Series will expose the existing People, Technology, and Processes destinations through a compact menu.
- Keep search and the compact mobile menu available.

## Interaction and responsive behavior
- Topic chips filter the feed without changing the underlying content.
- “Jump to Today” smoothly returns to the first date group.
- Desktop cards use a compact image-and-copy row; mobile cards become a stable two-column compact layout, then stack when space is very narrow.
- Existing hover zoom, focus states, article/video routes, and video duration indicators remain in use.

## Validation
- Verify every existing route still resolves.
- Check the homepage at desktop and mobile widths, including filters, card navigation, mobile menu, and jump-to-top behavior.
- Confirm the generated route tree and preview build remain healthy.
