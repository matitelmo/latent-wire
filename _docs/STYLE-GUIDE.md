# LatentWire style guide

How to write and build more LatentWire articles with the same look, the same Plexo placements, and the same rules. Copy `_docs/article-template.html` to start a new article.

## What LatentWire is

A one-story-at-a-time tech news site about enterprise AI. Each article is shared on Reddit, the reader comes for the story, and Plexo is the only advertiser on the page. The article has to be worth reading on its own. If it reads like an ad, people leave and Reddit removes the post.

## Files and URLs

```
index.html                     homepage (lead story, The Wire, numbers, inside the story)
articles/<slug>.html           one file per article
styles.css                     shared styles, never fork per article
site.js                        reading bar, bottom bar, copy link, newsletter form
plexo-mark.png                 Plexo logo used in every unit
_docs/                         this guide and the template; GitHub Pages does not publish it
```

The slug is lowercase, hyphenated, and names the company plus the news: `accenture-claude-spending-cap`, not `article-2`. Article pages link assets with `../`. The homepage links them without it.

## Look and feel

**Colors.** Paper `#ffffff`, ink `#111111`, body text `#2b2b2b`, muted `#6b6b6b`, hairlines `#e6e6e6`, soft panel `#f5f5f3`. The editorial accent is red `#e5412d`. Plexo owns cobalt `#1a4bff` and near-black `#09090b`. Red never appears in a Plexo unit, and cobalt never appears in editorial. That split is what makes the units read as sponsored while still belonging to the page.

**Type.**

| Use | Font | Size |
| --- | --- | --- |
| Headline, dek, body, pull quote, numbers | Newsreader (serif) | h1 32–50px, dek 21px, body 20px / 1.65 |
| Section heads inside the article, UI, Plexo units | Inter | h2 22px bold |
| Dates, kickers, labels, chart titles | JetBrains Mono | 10–12px, uppercase, tracked |

**Layout.** Content width 1200px. Article column 720px max, right rail 300px, 64px gap. Below 1020px the rail drops under the story and the tall Plexo unit hides. Below 720px the type steps down and charts stack their labels.

**Masthead.** Black top bar (date, one market figure tied to the story, Newsletter link), then the logo with the italic tagline "Enterprise AI, without the press release." and a red Subscribe button, then a strip with a 1px top rule and a 3px bottom rule.

**Signature pieces, use each one in every article:**

- A hero chart built in HTML (`.chart` with `.bar-row`s), not a stock photo. The red bar is the number the story is about. Caption says the source and "Chart: LatentWire."
- A drop cap on the first paragraph (`<p class="lead">`).
- One pull quote (`.pull`) that is our own sentence, not a source quote.
- A "By the numbers" rail with four figures, red serif numerals.
- A source note at the end of the body.

## Writing an article

**Pick the story.** It has to be real, recent, reported by a named outlet, and about what AI costs, how it is run, or where it fails inside companies. Those are the stories where Plexo is the obvious next click.

**Never copy the source.** Rewrite every sentence in our own words. Quotes are copied exactly, inside quotation marks, and attributed to who said them. Numbers are copied exactly from the source, never rounded into a better number and never invented. If the source doesn't say it, the article doesn't say it.

**Shape, in this order, 700 to 900 words:**

1. **Headline.** The fact plus the tension, in sentence case: "Accenture caps staff Claude spending at $29 a month. Some consultants were burning $1,000." Under 110 characters.
2. **Dek.** One or two sentences on why it matters beyond the company.
3. **Lead paragraph.** The irony or the stakes in two sentences.
4. **The facts.** Two or three paragraphs: what happened, the key numbers, who said what.
5. **`h2` sections, each with an `id`:** what the document or announcement says (`#memo`), why it matters (`#agents`), the money behind it (`#margin`), the lesson for everyone else (`#lesson`), and what we still don't know (`#unknowns`). Rename them per story, but keep the ids short because the homepage links to them.
6. **The lesson for everyone else.** The bridge to Plexo's argument (work you can't see is work you can't automate, so budget AI by workflow) without naming Plexo. Editorial never mentions Plexo.
7. **What we still don't know.** Always included. It is what makes the piece read as journalism.
8. **Source note.** "This story draws on reporting by {outlet}, {link}." The link stays: it is attribution, and it is the only non-Plexo exit on the page.

**Voice.** Plain, specific, a little dry. Short paragraphs, connected sentences, no hype words ("revolutionary," "game-changer"), no exclamation points. Byline is "LatentWire Staff."

## Plexo placements

Every article carries the same five units, in the same places. The template already has them.

| Unit | Class | Where | Shows on |
| --- | --- | --- | --- |
| Top strip | `.pk-top` > `.pk-lb` | Under the masthead | All |
| In-article card | `.pk-inline` > `.pk-native` | After the first `h2` section | All |
| Tall unit, sticky | `.pk-tower` > `.pk-sky` | Right rail under the numbers | Desktop |
| Square card | `.pk-inline.pk-mobile` > `.pk-box` | After the third `h2` section | Tablet and phone, replaces the tall unit |
| End card | `.pk-end` > `.pk-end-card` | After the tags, before the newsletter | All |
| Bottom bar | `.pk-dock` | Fixed, appears after 600px of scroll, can be closed | All |

So a reader always sees two or three Plexo units at a time, never zero and never a wall of them.

**Never use the words `ad`, `ads`, `advert`, `banner`, `sponsor` or `promo` in a class, id or file name.** Ad blockers hide anything with those names, which is why the first version only showed the bottom bar. Keep the `pk-` prefix. Don't put `aria-label="Advertisement"` on a unit. The visible label stays: every unit starts with `<span class="pk-tag">Sponsored · Plexo</span>`.

**Ad copy.** Tie the headline of the top strip and the in-article card to the story ("Before you cap AI spend, find out where it pays." for a cost story). The tower, square card, end card and bottom bar can stay as they are across articles.

Product claims come only from Plexo's site, as listed in `content/roman-demand-system.md` under **What Plexo is**:

- The line: "Make your company ready for AI agents." Method: interview everyone, map the work, know what AI should take. "You can't automate what you don't understand."
- Voice agents interview the people who do the work, about 20 minutes each, in parallel.
- The map shows every handoff, tool and exception. The roadmap is ranked by hours and says what stays a human decision.
- The free audit: five people, one workflow, seven days, no integrations. Button text: "Get the free audit" or "Get your free AI Opportunity Audit."
- Findings are by role, never by name.
- A case figure (the $415k, $520k, $840k write-ups) only appears with its own case.

Never call Plexo a copilot, a chatbot or a system integration. Never use the article's company in an ad as if it were a Plexo customer.

**Tracking.** Every Plexo link is:

```
https://www.useplexo.ai/?utm_source=reddit&utm_medium=latentwire&utm_campaign=<slug-or-short-name>&utm_content=<unit>
```

`utm_content` is one of `top`, `inline`, `tower`, `box`, `end`, `dock`. Use `utm_campaign=homepage` on the homepage. Write `&amp;` for `&` inside HTML attributes. Every Plexo link has `target="_blank" rel="noopener sponsored"` so the article stays open behind it.

## Keeping readers on the page

The article page is a dead end except for Plexo. On article pages:

- No section menu. The strip under the logo is plain text: `<span class="is-on">Analysis</span><span class="strip-topic">{topic}</span>`.
- Breadcrumbs and tags are `<span>`s, not links.
- No footer menu.
- The only non-Plexo links allowed: the logo (to the homepage, which also carries Plexo units and points back to the story) and the source note.
- In-page anchors (`#newsletter`) are fine.

The homepage menu only jumps to sections on the homepage. Every story card and Wire item links to an article on this site.

## Updating the homepage

When a new article ships:

1. Replace the lead card (`.lead-card`) with the new story: its chart, kicker, headline, dek, date and link.
2. Move the old lead into The Wire, or replace Wire items with facts from the new story. Each Wire item is a single fact from one of our articles, linking to that article's section anchor. No Wire item without an article behind it.
3. Update "By the numbers" and "Inside the story" to the new lead.
4. Update the ticker in the top bar on both pages if a market figure belongs to the story, otherwise remove it.
5. Rewrite the top strip and the in-article card headline for the new story.

## Before you publish

- [ ] Every sentence is rewritten. Every quote is exact and attributed. Every number appears in the source.
- [ ] The story has a "What we still don't know" section and a source note with the link.
- [ ] Plexo is not named anywhere in the editorial.
- [ ] Six Plexo units are present, each labeled "Sponsored · Plexo," each with its own `utm_content`.
- [ ] No class, id or file name contains ad, ads, advert, banner, sponsor or promo.
- [ ] Article page has no links except Plexo, the logo, the source and in-page anchors.
- [ ] `<title>`, `description`, `og:title`, `og:description` and `article:published_time` are filled in.
- [ ] Checked at 1440px and 390px wide, with an ad blocker turned on.
- [ ] Homepage updated.
