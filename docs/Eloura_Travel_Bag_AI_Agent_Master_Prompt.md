# ELOURA — 3-IN-1 TRAVEL BAG
## MASTER AI AGENT PROMPT — PRODUCT REPLACEMENT, NOT REDESIGN

# 0. CRITICAL MISSION AND PROJECT CONTEXT

You are working on an **EXISTING Astro/Vue/Tailwind/JavaScript landing-page project**, originally built for **Solana East by ORA**. Your mission is to repurpose its existing premium UI/UX for a new e-commerce product: **Eloura — شنطة السفر الترند 3 في 1**.

**This is NOT a redesign. The current running website is the PRIMARY AND FINAL visual reference.** Preserve its visual identity, section composition, spacing, typography, palette, transitions, motion, organic masks, responsiveness, and overall polish as closely as possible. Replace real-estate content, imagery, branding, and inquiry functionality with truthful product content, assets, and a working order journey.

## Project location (verify before editing)

```text
E:\Work\Web\www\Solana Landing Page
```

Read and inspect these existing files where present:

```text
src/content/solana-east.content.js
src/content/sources.md
docs/PROJECT_MAP.md
docs/ASSET_CATALOG.md
docs/AI_AGENT_GUIDE.md
```

The original `solana-east.content.js` and `sources.md` are **legacy real-estate data**, not sources for the new product. Read them to understand content architecture and identify everything that must be migrated or retired. **The product brief in THIS PROMPT is the source of truth for product copy and specs, subject to supplier verification.** Do not import Solana facts, pricing, contacts, locations, payment plans, or claims into the Eloura site.

## Image asset handoff — EXTREMELY IMPORTANT

**The human owner WILL REPLACE the old product/project photos with real photos of the new travel bag inside the project's assets directory.** You must support this workflow rather than requiring the images to be present immediately.

1. Inspect current asset directories and `docs/ASSET_CATALOG.md`.
2. Identify all places that reference Solana imagery: Astro components, Vue components, CSS background URLs, OG images, gallery arrays, and content files.
3. Create a centralized, descriptive travel-bag asset manifest (e.g. `src/content/travel-bag.assets.js`) with roles such as `hero`, `closedBag`, `openGarmentBag`, `shoeBag`, `interior`, `carryModes`, `details`, `lifestyle`, `gallery`, `ogImage`.
4. Use **actual owner-provided travel-bag assets** once available; map them by inspecting image content and filenames, not by guessing that a file is correct because of its name.
5. **Never use old Solana images, unrelated stock photos, generated fake product imagery, or fake brand logos as final product photos.**
6. If images are not yet supplied, preserve the intended image layout and show clearly labeled, non-deceptive placeholders in development; provide a precise image replacement checklist. Do not block the rest of implementation.
7. If the owner replaces files using the **same filenames**, check whether their contents and proportions have changed; avoid stale cached assets and update alt text. If using **new filenames**, update only the centralized manifest and asset catalog.
8. Use `public/assets/travel-bag/` or an existing equivalent folder that fits the actual project structure. Do not silently delete or overwrite original files; preserve backups or work on an isolated copy/branch.
9. Keep image aspect ratios correct and preserve existing organic image masks and art direction. Use appropriate responsive crops without distorting the bag.
10. Ensure no broken images: unresolved paths must have graceful fallback behavior. The page should be ready for the owner to drop in new images later.

# 1. ROLES AND SUCCESS CRITERIA

Act as a Luxury E-commerce Creative Director, Senior Astro Engineer, Vue Engineer, Tailwind Specialist, CRO Strategist, Arabic UX Copywriter, SEO Engineer, Accessibility Specialist, and QA Engineer.

Success means: the **same premium website experience**, now fully about the Eloura travel bag, with real product photography once provided, accurate Arabic product information, intuitive purchasing CTAs, responsive behavior, accessible interactions, and fast loading. Do not build a generic storefront or add unnecessary dependencies.

# 2. NON-NEGOTIABLE VISUAL PRESERVATION

**The existing live website is the visual source of truth; any previous spa screenshot or redesign instruction is superseded.**

Preserve as far as appropriate:
- Dark luxury theme, champagne-gold accents, typography scale and font pairings
- Header proportions, logo placement, navigation, hover states and mobile menu
- Hero asymmetry, text/image balance, organic image masking, CTA visual style
- Editorial sections, overlapping imagery, circular thumbnails, gallery interactions
- Cards, borders, separators, whitespace, spacing tokens and container widths
- Animation timings, reveal patterns, image transitions and microinteractions
- Responsive breakpoints and touch-friendly layouts
- Footer styling and overall visual rhythm

Do not introduce an unrelated beige fashion design, replace the entire palette, rebuild everything from scratch, or use a new template. Minor structural changes are allowed **only** where necessary to represent the bag and convert visitors into customers; retain the original section styling and visual vocabulary.

Before editing, run or inspect the site and capture baseline desktop/mobile screenshots if tools allow. After implementation, compare equivalent sections and correct visual drift.

# 3. NEW BRAND AND PRODUCT — SINGLE SOURCE OF TRUTH

Brand: **Eloura**
Product name: **شنطة السفر الترند 3 في 1**
English descriptor: **3-in-1 Convertible Travel Garment Duffel Bag**
Market: Egypt
Audience: Women and men; Arabic Egyptian storefront copy. Use inclusive language wherever natural; do not assume this is exclusively a women's product.

## Approved hero copy

Eyebrow: `ELOURA | TRAVEL ESSENTIALS`
Headline: `سافري بشياكة… ومن غير كركبة!`
Alternative inclusive headline for mixed audience: `سافر بأناقة… ومن غير كركبة!`
Subheading: `شنطة واحدة لكل احتياجات رحلتك: تنظيم أذكى، مساحة أكبر، وتصميم يتحول لشنطة حفظ الملابس لتقليل الكرمشة.`
Primary CTA: `اطلب شنطتك دلوقتي`
Secondary CTA: `اكتشف المميزات`

Use persuasive but restrained Egyptian Arabic, accurate spelling, strong readability, and natural RTL. English product terms can be included in parentheses where helpful. No fake luxury labels or exaggerated guarantees.

## Product narrative

The bag combines a traditional travel duffel with a fold-out garment organizer (Garment Bag), helping organize clothes and reduce wrinkling during short trips, weekends, work travel, events, and gym use. It is designed for practical carrying and storage of clothing, accessories, toiletries, and shoes.

## Ten customer benefits (preserve substance, polish copy)

1. **Spacious short-trip packing:** Intended for approximately 2–3 days of travel, depending on the user's belongings.
2. **Convertible garment-bag design:** Unfolds to organize hanging clothing and help reduce wrinkles; do not promise wrinkle-free results.
3. **Separate shoe bag:** Keeps shoes apart from clothing and other belongings.
4. **Elegant PU synthetic leather:** Water-resistant to light splashes; do not claim waterproof/submersible protection.
5. **Practical zippers:** Designed for secure everyday closure; do not claim tested anti-theft or guaranteed non-slip performance.
6. **Three carrying styles:** Handheld, shoulder, and crossbody with detachable adjustable strap.
7. **Flexible use:** Weekend trips, work travel, occasions, and gym; foldable for storage.
8. **Convenient handling:** Comfortable design; avoid unsupported exact weight or weight-limit claims.
9. **Organized storage:** Two internal zippered pockets and one exterior pocket for quick-access items.
10. **Unisex styling:** Suitable for men and women.

## Product specifications

- Name: شنطة السفر الترند 3 في 1
- Type: Convertible travel duffel / garment bag
- Material: PU synthetic leather, water-resistant
- Main bag dimensions: **20.5 × 10 × 12.5 inches** (approximately **52 × 25 × 32 cm**)
- Separate shoe bag dimensions: **11.5 × 9 × 5 inches** (approximately **29 × 23 × 13 cm**)
- Intended capacity: Approximately 2–3 days of travel, packing-dependent
- Carry methods: Hand, shoulder, crossbody
- Strap: Detachable and adjustable
- Pockets: Two interior zippered pockets and one exterior pocket
- Color: Subject to confirmed inventory; do not invent variants
- Audience: Men and women

## Package contents

- 1 × convertible 3-in-1 travel bag
- 1 × separate shoe bag
- 1 × detachable adjustable shoulder strap

Verify included items with supplier before presenting as guaranteed.

## Use cases

Short trips, weekend vacations, business trips, weddings and special occasions, gym, and practical gifts for travelers.

## Care instructions

Wipe with a soft, slightly damp cloth. Avoid bleach and harsh cleaners. Air-dry away from direct sunlight. Store dry. Avoid overloading beyond the bag's verified capacity.

## Final CTA copy

Heading: `مش مجرد شنطة سفر… دي طريقة أذكى لتنظيم رحلتك.`
Supporting line: `من أول تجهيز هدومك لحد الوصول، خلي كل حاجة منظمة وسهلة الوصول.`
CTA: `اطلب شنطة السفر الترند من Eloura`

# 4. CONTENT MIGRATION — REMOVE ALL REAL ESTATE REFERENCES

Audit and replace **every** Solana East / ORA / real-estate-specific occurrence in:

- UI headings, paragraphs, menus, buttons, form labels, FAQs and footer
- Content/config files, navigation arrays and gallery captions
- Image alt text, file references, CSS background images and icons
- Browser title, description, canonical URL, OG/Twitter metadata and structured data
- Contact labels, legal copy, form confirmation text and tracking event names
- Routes, internal links and user-visible URLs

Search for `Solana`, `ORA`, `residences`, `developer`, `units`, `master plan`, `location`, `investment`, and Arabic real-estate terms. Remove only when they are legacy product content; do not break unrelated code identifiers blindly.

Create `src/content/travel-bag.content.js` (or follow the project's actual existing content conventions). Centralize all new copy, product details, FAQ, asset references, price, offer and checkout configuration. Reuse existing components and their props wherever possible. Keep the original content file in backup/source control rather than destructively deleting it.

# 5. SECTION-BY-SECTION ADAPTATION — SAME UI, NEW PURPOSE

Adapt existing sections in place using the same layouts, animations and image treatment:

1. **Navigation:** ELOURA branding; links to benefits, how it works, gallery, specs, FAQ, order.
2. **Hero:** Existing cinematic split composition with the real travel bag hero photo, product headline, concise value proposition, primary purchase CTA and secondary explore CTA.
3. **Introduction / project overview → Product story:** Explain the convertible bag and the clutter/wrinkle problem it addresses.
4. **Architectural vision → Smart convertible design:** Show closed bag versus unfolded garment-bag mode using original editorial visual layout.
5. **Lifestyle experience → Travel occasions:** Weekend, work, events and gym.
6. **Amenities → Bag benefits:** Reuse existing circular visual features / refined numbering for the most important 4–6 benefits, with authentic bag photos.
7. **Residences / unit types → Product details:** Material, pockets, shoe compartment, carrying modes and included accessories; reuse premium cards or selectors if relevant.
8. **Master plan → How it works:** Three clear stages: unfold, organize clothing/shoes, close and carry. Only demonstrate mechanisms visible in supplied photos or confirmed by supplier.
9. **Location/connectivity → Specifications and sizing:** Main dimensions, shoe bag dimensions, capacity disclaimer and carry options.
10. **Gallery:** Use the existing gallery component with the new bag images and truthful captions.
11. **Lead-generation → Purchase section:** Replace the real-estate inquiry experience with a genuine checkout/order action; see integration section.
12. **Footer:** Eloura branding, real support/contact links when supplied, shipping, return, privacy and terms links if verified.

You may merge redundant sections for conversion efficiency, but avoid changing the signature visual layouts unnecessarily. Ensure each section offers new information and is not padded with repetitive claims.

# 6. CHECKOUT / EASYORDERS INTEGRATION

Eloura uses **EasyOrders**. The owner will provide a verified product page/checkout URL, pricing, shipping information, available colors, and policy URLs later.

- Do not assume any EasyOrders API exists or that the current Astro form can create orders.
- Store `productUrl`, `checkoutUrl`, `price`, `compareAtPrice`, `currency: 'EGP'`, `shippingPolicyUrl`, `returnsPolicyUrl`, and `contactUrl` as explicit configuration values. Unknown values must remain `null` or documented TODOs.
- When a verified product URL is available, route all purchase CTAs to that real URL.
- If no URL is available, use an honest `View purchase options` / contact fallback only if a real channel exists, otherwise visibly disable the checkout action in development; do not pretend a purchase succeeded.
- Do not carry over real-estate lead form fields, endpoints, or success notifications as though they process orders.
- If a real order form is implemented, use only verified backend/official integration, real validation, privacy disclosures, and accurate success/error handling.
- Add conversion tracking hooks only when actual integrations exist; `Purchase` must not fire on a button click.
- No fabricated discounts, countdown timers, scarcity, delivery promises, ratings, reviews or trust badges.

# 7. DESIGN, MOTION, RESPONSIVENESS AND ACCESSIBILITY

Maintain the existing Astro + Vue + Tailwind + JavaScript stack and architecture. Use Astro for static content, Vue only for meaningful interactions, selective hydration, and existing design tokens.

Preserve the current motion language: restrained reveals, organic mask transitions, gallery transitions, subtle image zoom, refined CTA hovers. Prefer lightweight CSS where suitable. Respect `prefers-reduced-motion`; avoid scroll hijacking and layout shifts.

On mobile, intelligently recompose existing layouts rather than merely scaling down desktop. Check long Arabic text wrapping, RTL direction, mixed English measurements, CTA tap targets, nav accessibility, image crops, sticky elements, and absence of horizontal overflow. Target WCAG 2.2 AA where feasible.

# 8. SEO, METADATA AND PERFORMANCE

Suggested page title: `شنطة السفر الترند 3 في 1 للملابس والأحذية | Eloura`
Suggested meta description: `اكتشف شنطة السفر الترند 3 في 1 من Eloura: تصميم يتحول لشنطة حفظ الملابس، مع شنطة أحذية منفصلة وخامة PU مقاومة لرذاذ الماء. مناسبة للرحلات القصيرة.`
Suggested slug: `3-in-1-travel-garment-bag`

Use `lang="ar"`, RTL document flow where appropriate, semantic HTML, proper heading hierarchy, descriptive image alt text, OG image from the new assets, and canonical URL only when known. Add Product JSON-LD only with verified product facts; do not include invented price, availability, ratings or reviews.

Optimize hero LCP, responsive image sizes, lazy loading below fold, dimensions to avoid CLS, font loading, minimal JavaScript and CSS. Aim for strong Lighthouse scores, but report only measured results. Do not guarantee 100/100.

# 9. EXECUTION PLAN — DO THE WORK, NOT JUST THE PLAN

1. **Inspect:** Read all available mandatory files; inspect dependencies, content architecture, existing components, asset directory and current website.
2. **Baseline:** Capture desktop/mobile screenshots where tooling permits; identify sections, motion, typography and image placements.
3. **Plan:** Produce a concise mapping from old section → new travel-bag section, plus asset manifest and checkout unknowns.
4. **Protect:** Work on a new git branch or safe copy if possible; preserve original functionality and source history.
5. **Implement:** Create centralized product content and asset manifest, replace branding/copy/metadata, adapt old components rather than rewriting the design.
6. **Asset-ready:** Use verified bag images if present. Otherwise install labeled placeholders, leave documented paths, and do not block implementation waiting for assets.
7. **Checkout:** Wire only verified links/integrations; leave transparent TODOs for missing price/URL/policies.
8. **Test:** Run the existing project's actual lint/typecheck/build commands when available; inspect runtime, mobile layout, navigation, gallery, CTA, SEO, broken assets and console errors.
9. **Compare:** Capture new screenshots and compare against the original layout; fix avoidable differences.
10. **Document:** Update `docs/PROJECT_MAP.md`, `docs/ASSET_CATALOG.md`, `docs/AI_AGENT_GUIDE.md` to describe the new product and asset replacement procedure.

Do not ask unnecessary questions. Ask only if a missing detail makes safe implementation impossible. Otherwise proceed with transparent placeholders and a final checklist.

# 10. FINAL DELIVERY REPORT

Report:
- Original design preserved and any necessary deviations
- Old → new section mapping
- Files added/changed
- New content file and asset manifest paths
- Exact image filenames/roles the owner should upload or replace
- Checkout/price/shipping/policy values still required
- SEO and tracking changes
- Commands actually run and test results
- Visual comparison findings
- Any remaining Solana references and why they remain
- Any unverified product claims requiring supplier confirmation

**FINAL NON-NEGOTIABLE ORDER OF PRIORITIES:**
1. Preserve existing UI/UX, animations, layout and premium feel.
2. Replace ALL customer-facing Solana East content with accurate Eloura travel-bag content.
3. Be ready for the owner to replace the old product photos with real travel-bag assets in the project assets folder.
4. Preserve the stack and working code; avoid destructive edits.
5. Implement genuine conversion paths, honest product claims, accessible responsive UX, SEO and performance.

**START NOW:** inspect the current Astro project and docs, establish the current live UI as your baseline, then implement the Eloura 3-in-1 travel bag adaptation end-to-end. Do not stop after planning.
