# Car Hobbyist App — Design Doc

**Status:** Draft
**Owner:** Victor Li
**Last updated:** 2026-09-13

---

## 1. Overview

A social platform for car hobbyists to document their current and past car
collections. Combines elements of Instagram (photo sharing, follows),
blogs (write-ups), and build documentation (structured, tabbed logs per
system — suspension, engine, angle kit, etc.) with parts lists and tips.

**Why this project exists:** built primarily as a personal learning project
to gain production-relevant SWE skills (React, Next.js, full-stack data
modeling, auth, deployment) as part of a post-grad job search — not
currently pursued as a market product, though it may be developed further
and deployed later.

---

## 2. Goals & non-goals

Build order is frontend-first (UI against mock data, then wire up a real
backend) — but feature *scope* stays narrow regardless of build order.
Feed, following, explore, and search are deferred to v2 not because
they're "backend work," but because they only become meaningful with
multiple real users and real data — they can't be usefully mocked, and
they're not core to the original idea (documenting your own builds in
depth). Keeping v1 narrow means more reps on fundamentals (components,
forms, layout, data modeling, auth) instead of half-building a social
feed.

**Goals (v1 / MVP)**
- [ ] User accounts and profiles
- [ ] Add/edit cars in a personal collection
- [ ] Structured build logs per car, organized into tabs (e.g. suspension,
      engine, exterior) with parts lists and notes
- [ ] Photo upload per car / build log entry
- [ ] Public-facing view of a user's collection (read-only for visitors)

**Non-goals (explicitly deferred — v2+)**
- Feed / explore page
- Follows
- Search / discovery
- Comments
- Native mobile app (site will be responsive, not a separate app)

> Keep this list honest. Anything not in "Goals" doesn't get built yet,
> even if it's easy — scope creep here is the main risk to finishing.

---

## 3. Data model

Rough entities and relationships — refine before writing schema/migrations.

```
User
 └── has many → Car
                 └── has many → BuildLog (tab: suspension, engine, etc.)
                                 └── has many → Part
                                 └── has many → Photo
                 └── has many → Photo (car-level, e.g. hero image)
```

**Open questions:**
- Does a `BuildLog` belong to a fixed set of categories, or can users
  create custom tabs?
- Is `Part` just a text field (name, notes, link) or a structured entity
  with its own fields (brand, price, install date)?
- Where do photos live relative to the model — attached to `Car`,
  `BuildLog`, or both?

---

## 4. Architecture

**Decided:**
- Frontend: **Next.js + React + Tailwind** (website first, responsive —
  no native app for v1)

**Open — pick and record the decision + reasoning once made (see §6):**
- Database: _TBD_ (e.g. Postgres via Supabase or Neon — pairs naturally
  with Next.js)
- Auth: _TBD_ (e.g. NextAuth/Auth.js vs. a managed provider like Clerk)
- Image storage: _TBD_ (e.g. Supabase Storage, S3, Cloudinary)
- Hosting/deploy: _TBD_ (Vercel is the natural fit for Next.js)

**High-level flow (fill in once decided):**
```
Browser → Next.js (frontend + API routes) → [DB] / [Auth] / [Image storage]
```

---

## 5. Milestones / build sequence

**Phase A — Frontend with mock data**
No backend yet. Build every v1 screen against hardcoded/local JSON so you
get fast reps on component structure, layout, and state before adding
data-layer complexity.
1. Project setup — repo, Next.js + Tailwind scaffold
2. Profile page (static/mock user + car list)
3. Car page + build log tabs (suspension, engine, etc.), rendered from
   mock data
4. Photo display (mock images) + basic responsive layout pass
5. Forms for add/edit car and build log entries (local state only, no
   persistence yet)

**Phase B — Backend integration**
Swap mock data for the real thing, one piece at a time, reusing the UI
from Phase A.
6. Pick + wire up db, auth, image storage (record decisions in §6)
7. Connect Car/BuildLog CRUD to the real database
8. Real photo upload (replacing mock images)
9. Auth-gated editing vs. public read-only view

**Phase C — Ship**
10. Basic tests + CI (lint + build on push)
11. Deploy to production, share with a few real users for feedback

**v2 (after v1 ships):** feed/explore, follows, search — now backed by
real multi-user data instead of mocks.

---

## 6. Decisions log (ADR-style)

Record each significant decision here once made — one entry per decision,
so future-you remembers *why*.

**Format:**
> **Decision:** what was chosen
> **Context:** what was being decided and why it mattered
> **Trade-off:** what was given up / alternatives considered

_(empty — fill in as decisions are made)_

---

## 7. Open questions

- [ ] Custom vs. fixed build-log categories?
- [ ] Database choice
- [ ] Auth provider
- [ ] Image storage

---

## 8. Future ideas (unscoped, post-v2)

Not committed to, not scheduled — parked here so they aren't forgotten.
Both depend on having real data to work with, so neither is realistic
before v1's data model exists and is populated.

- **Build-style recommendation.** User describes a style/chassis (e.g.
  "Meihan-style drift S13") and gets pointed toward related accounts and
  a common build setup for that style. Needs real build-log data to
  retrieve over (RAG, not MCP — MCP connects an AI *client* to external
  tools, it's not the right shape for an in-app feature like this).
  Blocked on v2+ having enough real user build data to retrieve
  meaningfully, otherwise it's just an LLM making plausible-sounding
  stuff up.

- **Torque-spec lookup from workshop manual PDFs.** User asks for a spec
  (e.g. "S13 lower control arm torque") and the app surfaces the
  matching page/table from an uploaded manual. Good RAG candidate since
  the source data (manuals) is fixed/authoritative rather than needing
  a user base first. Caveats to revisit when this gets picked up:
  - Many older JDM manuals are scanned images, not real text — plain
    text extraction won't work; needs OCR or a parser built for
    scanned/tabular PDFs (e.g. `llama-parse`).
  - Safety-critical data — the LLM's job should be retrieval only
    (surface the exact page/table), never generating a torque value
    from its own reasoning/memory. Always ground the answer in a
    citable excerpt from the source manual.
