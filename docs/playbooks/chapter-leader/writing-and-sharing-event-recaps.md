---
sidebar_position: 7
title: Writing & Sharing Event Recaps
---

# Writing & Sharing Event Recaps

The event is a moment. The recap is what turns that moment into momentum.

If you don't recap and share, the energy dies in the room. The people who couldn't make it never hear about it. The people who came forget. The speakers don't amplify it. And the next event starts from zero.

The goal of a recap: make people who weren't there wish they were, make people who were there proud to share it, and drive signups for the next event.

---

## This Is Not the Informational Recap

There are two types of event recaps in the Applied AI Society system:

1. **Informational recap** (in [Event Recaps](/docs/playbooks/chapter-leader/event-recaps)): Chapter-leader-facing. What worked, what didn't, costs, metrics. Internal learning document.
2. **Newsletter recap** (this playbook): Public-facing. Narrative, promotional, designed for Substack email and social media. Builds excitement and drives action.

This playbook covers the newsletter recap.

---

## Core Principles

### The recording is the centerpiece

Every recap must include the event recording (YouTube link or embed). The entire article is designed to get people to watch it. Everything else supports that goal.

### Highlights prime people to watch

Include 3-5 standout quotes or moments from the event. These act as trailers. People read a quote that resonates and think: “I need to watch this.”

### Photos humanize the brand

Include two photo montages (4 photos each, wide format). Real people, real energy, real community. This is what separates Applied AI Society from every other AI group that only posts abstract graphics.

### Always promote what's next

Every recap should push readers toward the next event, the next meetup, the next opportunity to get involved. Momentum compounds.

### Hyperlink every sponsor and partner

Every mention of a sponsoring or partnering organization in the recap must be a hyperlink to their website. This is non-negotiable. Sponsors and partners gave you venue space, money, or co-promotion. The least you can do is drive traffic back to them. It also makes it easy for readers to learn about the organizations involved, and it makes partners more likely to share the recap since it links to them.

### Grow the list

Every recap should include a newsletter signup pitch and a referral CTA. The goal is not just engagement on this one email but growing the community for every future email.

---

## Newsletter Recap Process

The newsletter recap is interview-driven. It doesn't start with writing. It starts with a conversation.

The host (or their Jarvis) interviews the event organizer with targeted questions:
- What happened at the event? What's the one-line summary?
- What's the headline? What would make someone who missed it feel the urgency?
- Is there raw content to distill (transcript, notes, attendee feedback)?
- What media do we have? (Photos, video, montages, speaker slides)

The draft is then compiled from those answers. This approach keeps the voice authentic and grounded in what actually happened, rather than generic recap language.

### Newsletter Structure

Every newsletter recap follows this skeleton:

1. **Quick Links at top.** Three CTAs with direct links (e.g., “Watch the recording,” “RSVP for the next event,” “Join the community”). These go above the fold so busy readers can act immediately.
2. **Main content.** The recap itself, following the article template below.
3. **Sponsor section with CTAs.** This is not just a “thank you to our sponsors” line. Include what the sponsor does, why it matters to the audience, and a clear CTA (visit their site, try their product, check out their open roles). Sponsors who see real engagement keep sponsoring.
4. **Sign-off.** Personal, warm, forward-looking. Point to what's coming next.

---

## The Recap Article

### Template

Use this structure for every event recap:

**1. Opening (2-3 sentences)**

Genuine excitement about what just happened. How many people came. What made this one special. Set the tone.

**2. Hero photo**

The crowd shot or most impactful moment. Full-width. This is the first thing people see.

**3. Recording link**

Embed the YouTube video or link to it with a clear call-to-action: “Watch the full event.”

**4. Highlights (3-5 quotes)**

Each highlight should include:
- The quote itself (in blockquote format)
- Who said it (name and context)
- 1-2 sentences of why it matters

Pick quotes that are diverse: different speakers, different topics, different emotional registers. A mix of practical insight and inspiring vision works best.

**5. Photo montage #1**

4 photos in a wide-format strip. See [Photo Montage with Remotion](#photo-montage-with-remotion) below.

**6. What's Next**

Upcoming events with dates, brief descriptions, and registration links. Be specific. Don't say “more events coming soon.” Say “Applied AI Live #2 at Antler VC HQ on February 26th.”

**7. Photo montage #2**

Second set of 4 photos. Different moments from the event.

**8. Newsletter pitch**

Sell the value of staying subscribed: practitioner profiles, case studies, community updates, event invites. Make it clear what they get by being on this list.

**9. Referral CTA**

“Know a business owner who could use AI help? Know someone who wants to become an applied AI practitioner and make good money doing it? Forward this email to them.”

**10. Thank You**

Thank sponsors, partners, venue, co-hosts, and speakers by name. **Every organization must be hyperlinked to their website.** This drives traffic to partners and makes them more likely to share the recap.

**11. Footer**

Links to website, socials, Substack.

---

## How to Find Highlights

You need 3-5 standout moments. Here's where to find them:

1. **Transcribe the recording.** Use AI transcription (Whisper, Deepgram, or similar). Then ask AI to pull the top 10 quotes from the transcript. Pick the best 3-5.

2. **Search social media.** Look for posts on X and LinkedIn that mention the event, the speakers, or the organization. Attendees often call out specific quotes or ideas that resonated with them. These are gold because they're already validated by the audience.

3. **Check Q&A submissions.** If you used the custom Q&A platform, review the questions that were submitted. The questions themselves reveal what the audience cared about, and the answers to those questions are often highlight-worthy.

4. **Diversity matters.** Don't pull all 5 quotes from one speaker. Spread them across speakers and topics. This gives readers a reason to watch the full recording, not just one segment.

### Quote Extraction

When reviewing transcripts, pull the 3-5 best quotes from each speaker. Not every quote will make it into the recap, but having a pool gives you options across platforms.

What to look for:
- **Surprising statements.** Something that makes you pause or rethink an assumption.
- **Actionable advice.** Concrete steps someone could take tomorrow.
- **One-sentence insights.** The kind of line that captures a whole philosophy in a single breath.

Use bold formatting for emphasis when posting quotes on social media. A bolded key phrase inside a longer quote draws the eye and makes people stop scrolling.

When you find a great quote, note the timestamp too. You'll need it for YouTube descriptions and X posts.

---

## Photo Montage with Remotion

Use the `PhotoMontage` Still composition in the [Remotion repo](/docs/playbooks/chapter-leader/tools) to create wide-format photo strips.

**Specs:**
- Dimensions: 1920x540 (wide, fits email and Substack layouts)
- Layout: 4 photos in a horizontal strip
- Brand styling: cream background, gaps between photos, rounded corners, small Applied AI Society watermark

**Rendering:**
```bash
cd applied-ai-society-remotion
npx remotion still PhotoMontage --props='{"images":["photo1.jpg","photo2.jpg","photo3.jpg","photo4.jpg"]}' --output=montage.png
```

Save the rendered montages to `applied-ai-society-public-docs/static/img/events/live-N/` alongside the individual event photos.

**Photo selection tips:**
- Montage #1: Crowd energy, speaker on stage, networking, food/venue setup
- Montage #2: Close-ups, candid conversations, audience reactions, behind-the-scenes

---

## Google Doc Review Workflow

Before publishing, create a Google Doc of the newsletter or recap for internal review. Share it with collaborators so they can leave comments, flag errors, and suggest edits.

When you make revisions, use the `--update` flag to refresh the same doc URL. This way, reviewers always see the latest version at the same link. No one has to chase down a new URL every time you tweak something.

This is especially important for sponsor sections (make sure CTAs are accurate), speaker quotes (make sure attribution is correct), and event details (dates, times, locations). A second set of eyes catches things you'll miss after staring at the same draft for an hour.

---

## Sharing & Amplification

The recap article is only half the job. Distribution is the other half.

### Substack first

Publish the full recap as the newsletter email. This goes to all attendees and existing subscribers. Substack is the source of truth.

### Platform-Specific Strategy

Each platform has its own rules. What works on X will fall flat on LinkedIn, and vice versa. Here's how to approach each one.

#### X (posting from personal account)

- **Lowercase voice throughout.** Casual, intimate, like you're texting a friend about something you're excited about.
- **Bold all-caps headline at the top.** This is the hook. Something provocative or crystallizing. Example: **THE NORTH STAR OF THE APPLIED AI ECONOMY ISN'T SOFTWARE. IT'S THE SELF-IMPROVING BUSINESS.**
- **Bold for key quotes and emphasis.** Draw the eye to the most compelling lines.
- **Upload video directly to X** (not a YouTube link). Native video gets dramatically more reach than external links. X suppresses posts with outbound URLs in the main body.
- **Include full timestamps in the post body** with newlines between each. This lets people jump to the moments that interest them.
- **Event plug goes in a Reply to the main post, not in the post body.** Keep the main post clean and focused on content. The reply is where you drop the Substack link, registration link for the next event, and any other CTAs.
- **Tag speakers with their X handles.** This gets the post in front of their audiences and makes it easy for them to retweet.
- Pin the post to your profile until the next event.

#### LinkedIn

- **Normal capitalization.** LinkedIn is more professional. Match the energy of the platform.
- **Unicode bold for the headline.** LinkedIn's plain text editor doesn't support markdown, so use Unicode bold characters (tools like YayText can generate these) for the opening hook.
- **3,000 character max.** No timestamps. Keep it tight and focused on the narrative: what happened, why it mattered, what's next.
- **Link to the YouTube video** (don't upload directly). LinkedIn doesn't suppress outbound links the way X does, and YouTube links generate a nice preview card.
- **Event plug inline at the end of the post.** Unlike X, you don't need to bury CTAs in a reply. Put registration links and next-event info right in the post body.
- **Use full names instead of handles.** Tag people using LinkedIn's mention feature.
- **#AppliedAILive inline on first mention is the only hashtag.** Don't stack hashtags at the bottom. One tasteful hashtag woven into the text is enough.

#### YouTube

- **Title format:** `[Talk Title] | [Event Name]`
- **Description:** 2-3 sentence summary of the talk or panel, followed by panelist names with links to their X and LinkedIn profiles, full timestamps, a subscribe CTA, and links to upcoming events.
- **Tags:** Relevant keywords (applied ai, event name, speaker names, topics covered). These help with discoverability in YouTube search.
- **Thumbnail:** Create via Remotion using the `YouTubeThumbnail` component (photo background + text overlay + AAS branding). Use a real photo from the event, not illustrations. Authentic photos outperform designed graphics on YouTube.

### Partner amplification

Send the recap to co-hosts, sponsors, and speakers. Ask them to share or retweet. They have audience reach you don't. Make it easy for them:

- Give them a suggested tweet or quote-RT text
- Send a direct link they can share
- Partners want to amplify events they were part of. You just have to ask.

### Speakers

Tag speakers in every social post. Send them the article and the specific quotes attributed to them. People share content that features them. Make it effortless.

### Attendees

Make the recap worth sharing. Include photos of real people. Include quotes that attendees relate to. Build the feeling that this is a community they want to be part of and tell others about.

---

## Content Storage

All social posts, newsletter drafts, YouTube metadata, and thumbnails are stored in your chapter's private content repo and committed to git. Every piece of content gets version-controlled.

This creates a searchable archive. Need to reference how you worded a sponsor CTA three events ago? Search the repo. Need the exact timestamps you used for a previous YouTube upload? They're in git. Need to reuse a thumbnail layout? It's all there.

Nothing gets lost in a Google Doc or a Slack thread. If it was published, it lives in the repo.

---

## Full Checklist

- [ ] Interview the event organizer (or answer the interview questions yourself)
- [ ] Transcribe the recording and extract 3-5 quotes per speaker
- [ ] Write the recap draft (article body following the template above)
- [ ] Verify every sponsor/partner mention is hyperlinked to their website
- [ ] Create 2 photo montages with Remotion
- [ ] Create a Google Doc for internal review and share with collaborators
- [ ] Incorporate feedback, updating the same doc URL with `--update`
- [ ] Ensure the recording is uploaded to YouTube with proper title, description, tags, and thumbnail
- [ ] Publish on Substack (email to full list)
- [ ] Post on X: native video upload, lowercase voice, bold headline, timestamps, event plug in reply
- [ ] Post on LinkedIn: normal caps, Unicode bold headline, YouTube link, #AppliedAILive, full names
- [ ] Send recap link to co-hosts and sponsors, ask them to share
- [ ] Send recap + attributed quotes to each speaker, ask them to share
- [ ] DM key attendees the recap link with a personal note
- [ ] Commit all content (social posts, newsletter draft, YouTube metadata, thumbnails) to your chapter's private content repo

---

## See Also

- [Content Distribution](/docs/playbooks/chapter-leader/content-distribution): Platform strategy for all content types
- [Recording an Event](/docs/playbooks/chapter-leader/recording-an-event): Capturing video for the recording
- [Event Recaps](/docs/playbooks/chapter-leader/event-recaps): Informational recaps (different from this)
