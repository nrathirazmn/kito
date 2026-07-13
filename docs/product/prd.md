# Product Requirements Document (PRD)

**Product:** Kito

**Version:** 1.0

**Status:** Draft

**Last Updated:** TBD

---

# 1. Product Overview

Kito is a collaborative workspace designed for group trips. It acts as the group's single source of truth by keeping important trip information—including shared finds, payments, checklists, agendas, and useful links—in one organized workspace.

Rather than replacing communication platforms such as WhatsApp, Kito complements them by organizing information that would otherwise become scattered across multiple applications.

---

# 2. Background

Planning a group trip today is often fragmented. Conversations happen in WhatsApp, payments are tracked elsewhere, recommendations are shared through TikTok and Instagram, links are buried in chats, and itineraries are maintained in separate documents.

As information becomes distributed across different platforms, groups spend unnecessary time searching for information, repeating questions, and trying to stay synchronized.

Kito is built to reduce this friction by becoming one trusted place where every important piece of trip information can be stored, organized, and accessed by everyone involved.

---

# 3. Problem Statement

Groups planning trips experience information fragmentation across multiple applications, making coordination inefficient and frustrating.

Current tools specialize in individual tasks—communication, payments, notes, or planning—but none provide a centralized workspace where the group can collaboratively organize everything required for the trip.

As a result, important information is frequently lost, duplicated, or forgotten.

---

# 4. Product Goals

## Primary Goals

- Eliminate fragmented trip information.
- Reduce time spent searching for information.
- Improve coordination among group members.
- Provide a single trusted workspace for every trip.

## Secondary Goals

- Encourage collaborative planning.
- Reduce repetitive questions inside group chats.
- Make group trips feel easier to manage.

---

# 5. Success Metrics

Kito is considered successful when:

- Groups consistently use Kito as the first place to look for trip information.
- Important information is no longer lost throughout the planning process.
- Users spend significantly less time searching through chat history.
- Multiple collaborative modules (Payments, Finds, Checklist, Agenda, Links) are actively used throughout the trip.

---

# 6. Target Audience

## Primary Audience

- Friends planning domestic or international trips together.

## Secondary Audience

- University clubs.
- Student organizations.
- Small travel groups.

## Potential Future Audience

- Corporate retreats.
- Volunteer programmes.
- Team offsites.

---

# 7. Scope

## In Scope (MVP)

- Trip Management
- Dashboard
- Shared Finds
- Payments
- Checklist
- Agenda
- Links

## Out of Scope

- Hotel booking
- Flight booking
- Messaging
- Maps
- AI itinerary generation
- Weather forecasts
- Currency conversion
- Social networking

---

# 8. Core Value Proposition

Kito enables groups to coordinate trips through one trusted workspace instead of relying on multiple disconnected applications.

By organizing important information into dedicated modules, Kito reduces cognitive load and makes collaboration significantly easier.

---

# 9. Product Pillars

Every feature in Kito should strengthen at least one of these pillars.

## Organize

Keep important information structured.

Examples:

- Payments
- Checklist
- Links

---

## Coordinate

Help every member stay aligned.

Examples:

- Dashboard
- Agenda

---

## Discover

Capture and organize shared inspiration.

Examples:

- Shared Finds

---

## Access

Make information immediately retrievable.

Examples:

- Dashboard
- Future Search

---

# 10. Information Architecture

```
Home

│

├── My Trips

├── Join Trip

└── Create Trip

↓

Trip Workspace

│

├── Dashboard

├── Shared Finds

├── Payments

├── Agenda

├── Checklist

└── Links
```

---

# 11. User Flow

## Existing Workflow

```
WhatsApp

↓

Splitwise

↓

Notes

↓

TikTok

↓

Google Docs

↓

Google Maps
```

Information becomes fragmented.

---

## Kito Workflow

```
Open Kito

↓

Select Trip

↓

Dashboard

↓

Access any module

↓

Complete coordination
```

---

# 12. Functional Requirements

## Trip Management

Purpose:

Allow users to create and join collaborative trip workspaces.

Requirements

- Create trip
- Join trip
- Invite members
- View trips

---

## Dashboard

Purpose

Provide a quick overview of everything requiring attention.

Requirements

- Countdown
- Upcoming agenda
- Payment summary
- Recent finds
- Checklist progress

---

## Shared Finds

Purpose

Allow members to collaboratively save trip inspiration.

Requirements

- Save links
- Support TikTok
- Support Instagram
- Support YouTube
- Support Xiaohongshu
- Add title
- Optional notes
- Categories
- Mark completed (Future)

---

## Payments

Purpose

Track shared expenses.

Requirements

- Add expense
- Split expense
- Track payment status
- Outstanding balances

---

## Agenda

Purpose

Maintain a shared trip timeline.

Requirements

- Create activity
- Edit activity
- Sort chronologically
- Display upcoming events

---

## Checklist

Purpose

Track shared preparation tasks.

Requirements

- Add item
- Complete item
- Shared progress

---

## Links

Purpose

Provide quick access to important trip resources.

Requirements

- Store URLs
- Categorize links
- Quick open

---

# 13. MVP Definition

## Must Have

- Authentication
- Create Trip
- Join Trip
- Dashboard
- Shared Finds
- Payments
- Checklist
- Agenda
- Links

## Nice to Have

- Notifications
- Search
- Offline support

## Future

- AI assistance
- OCR
- Maps integration
- Calendar sync
- File attachments

---

# 14. Risks

## Risk

Users continue relying entirely on WhatsApp.

Mitigation

Position Kito as a coordination workspace rather than a messaging replacement.

---

## Risk

Feature overload.

Mitigation

Strictly follow MVP scope.

---

## Risk

Low group adoption.

Mitigation

Design collaboration features that naturally encourage every member to participate.

---

# 15. Assumptions

- Users already communicate through messaging platforms.
- Groups are willing to adopt one additional tool if it significantly reduces coordination effort.
- The value of Kito increases as more members actively contribute.

---

# 16. Future Enhancements

Potential ideas beyond MVP.

- Search
- Notifications
- Offline mode
- Attachments
- AI assistance
- Calendar integration
- Expense analytics
- Maps integration
- QR trip invitations
- Widgets
- Apple Watch support