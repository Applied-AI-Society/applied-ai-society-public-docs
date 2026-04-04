---
sidebar_position: 39
title: "The Sovereignty Stack"
---

# The Sovereignty Stack

*Own your future. Every layer of your life has a default version controlled by someone who is not you. Here is the full map.*

---

## You Should Own Your Own Super Intelligence

Start with the simple version: you should own your AI. Not rent it. Not subscribe to it. Own it.

You should not be dependent on OpenAI. Or Anthropic. Or Google. Or Meta. Or any single provider for the intelligence that powers your thinking, your business, your life. Because the moment you are dependent, you are controlled. They set the price. They set the policy. They decide what you can and cannot do with the tool that has become central to how you operate.

But owning your AI is not just about the model. It is about every layer of the stack that enables your AI to function. The hardware it runs on. The network it communicates through. The operating system it sits inside. The data it draws from. The identity you use to access it. Every layer has a default version controlled by someone who is not you.

That is what the sovereignty stack maps. Every layer. Every dependency. Every point of control.

A practical note: this does not mean you refuse to use proprietary tools. We recommend Claude Code (Anthropic) as the default harness in our own [Supersuit Up Workshop](/docs/workshops/supersuit-up). We use frontier models daily. The practical reality is that proprietary models are still ahead for many complex tasks, and the gap, while closing, is real. The sovereignty principle is not “never use proprietary tools.” It is “build on portable foundations so you are never trapped by them.” Your context lives in markdown files on your computer. If your provider changes their pricing, their policies, or their attitude, you switch. Nothing is lost.

## Assume Adversarial Intent

It goes deep. ISPs log your traffic. Operating systems phone home. AI platforms train on your prompts. Cloud providers hold your data hostage behind their login. NVIDIA has a monopoly on GPU compute through CUDA. Satellite internet (Starlink) is controlled by one person. Chip fabrication is controlled by a handful of fabs. DNS resolution, CDN termination, firmware, device manufacturing. Every layer has an entity that can shut you down, surveil you, or change the terms on you.

This is not paranoia. It is the business model. Not every layer can be fully sovereign today. But you should know where you are exposed.

## The Stack

*The layers below are illustrative, not prescriptive. They exist to show how many-layered this problem is, not to tell you exactly what to use. The specific tools and recommendations are placeholders that will evolve as the landscape changes. This is a living document. If you have better alternatives, corrections, or experience with any layer, [contribute directly on GitHub](https://github.com/Applied-AI-Society/applied-ai-society-public-docs). Every page in these docs is open for community input.*

### Layer 0: Silicon

**Default:** Intel and AMD chips with opaque architectures. Intel Management Engine runs a separate computer inside your CPU with full memory and network access. You cannot inspect what it does. You cannot turn it off.

**Sovereign direction:** RISC-V, an open-source instruction set architecture, is gaining ground. But even open silicon designs get fabricated at TSMC or Samsung. You can audit the design, not the die.

**If compromised:** Game over. Hardware backdoors survive everything. OS reinstalls, encryption, firmware reflashes. This is the nuclear option for a state-level adversary.

### Layer 1: Firmware

**Default:** Proprietary UEFI firmware. Intel ME and AMD PSP run below your OS with higher privilege. Closed source, always on, with independent network access.

**Sovereign direction:** Coreboot (open-source firmware). Available on System76 laptops, Purism Librem, some Framework and ThinkPad models. Libreboot goes further. ME Cleaner can partially neutralize Intel ME on some systems.

**If compromised:** Firmware-level malware persists across OS reinstalls. The attacker owns your machine before your OS even loads.

### Layer 2: Hardware

**Default:** Apple, Lenovo, Dell. All manufactured in China or Vietnam. Supply chain attacks are documented.

**Sovereign direction:** Purism Librem (made in California, coreboot, hardware kill switches). System76 (US-based, open firmware). Framework (modular, repairable, community coreboot). For phones: Google Pixel hardware running GrapheneOS is the best available option for a sovereign mobile device.

### Layer 3: Operating System

**Default:** Windows (telemetry, forced updates, Microsoft account required). macOS (closed source, Apple controls what runs). iOS/Android with Google Play Services (pervasive tracking).

**Sovereign direction:** Desktop Linux (Debian, Fedora, NixOS). Qubes OS for compartmentalized security. GrapheneOS for mobile (hardened Android, Pixel-only). Tails OS for high-risk situations (routes everything through Tor, leaves no trace).

**Difficulty:** Medium. Linux is mature. GrapheneOS is a weekend project. The barrier is app compatibility, not technical capability.

### Layer 4: Networking

**Default:** Your ISP sees all unencrypted traffic. Your DNS provider sees every domain you visit. Cloudflare terminates TLS for a massive percentage of the web and sees all traffic in plaintext.

**Sovereign direction:**
- **DNS:** Self-hosted Pi-hole or AdGuard Home. Privacy DNS like Quad9 or DNS0 (Swiss/EU non-profits).
- **VPN:** Self-hosted WireGuard on a VPS. Or Mullvad (no-account, cash-payment).
- **Mesh:** Headscale (self-hosted Tailscale). Yggdrasil (encrypted overlay network).
- **ISP bypass:** There is no sovereign ISP. Starlink is a different dependency, not sovereignty. Encrypt everything that traverses the ISP.

### Layer 5: Data Storage

**Default:** Google Drive, iCloud, Dropbox. The provider holds the keys. Subject to government subpoenas, ToS changes, and account lockouts.

**Sovereign direction:** Nextcloud (self-hosted). Syncthing (peer-to-peer, no central server). Local NAS with encrypted drives. Restic or BorgBackup for encrypted backups. The rule: data encrypted on your device before it leaves.

### Layer 6: Identity

**Default:** “Sign in with Google.” Your identity is a row in their database. They can disable it.

**Sovereign direction:** YubiKey hardware security keys (private key never leaves the device). Vaultwarden (self-hosted password manager). KeePassXC (fully local). Decentralized Identity (W3C DIDs) is maturing but not yet mainstream.

**If compromised:** Identity compromise cascades across every linked service. This is why hardware keys matter.

### Layer 7: Communication

**Default:** Gmail (Google reads your mail). iMessage (Apple holds keys for iCloud backup). Zoom (compliance with government requests).

**Sovereign direction:**
- **Email:** ProtonMail (E2E encrypted, Swiss). Tuta (encrypts subject lines too). Self-hosted email is technically possible but deliverability is a nightmare because Gmail and Microsoft control the email ecosystem.
- **Messaging:** Signal (E2E, open protocol). Matrix/Element (federated, self-hostable, used by the EU and the UN). SimpleX (no user IDs at all).
- **Video:** Jitsi Meet (open-source, self-hostable).

### Layer 8: AI / LLM

This layer did not exist five years ago. It is now one of the most critical.

**Default:** OpenAI, Anthropic, Google. Your prompts go to their servers. Your code, your strategy documents, your private thoughts, all processed on infrastructure you do not control. [The lock-in is coming](/docs/concepts/the-lock-in-is-coming). [Hyperscalers are the new record labels](#hyperscalers-are-the-new-record-labels).

**Sovereign direction:**
- **Models:** Local open-source models via [Ollama](https://ollama.com). The open-source model landscape moves fast. Check the [Open LLM Leaderboard](https://vellum.ai/open-llm-leaderboard) or [Open WebUI Leaderboard](https://openwebui.com/leaderboard) for current rankings. A Mac with 32GB RAM can run 70B parameter models. The gap with frontier models is closing.
- **Harness:** OpenCode (open-source, supports 75+ providers including local models). Aider, Continue.dev, Cline. The [Personal Agentic OS architecture](/docs/workshops/supersuit-up) is designed so your [context lake](/docs/concepts/context-lake) works with any harness.
- **Context:** Plain markdown files on your machine. Not chat history on someone else's server. This is the whole point of the context lake architecture.

**Difficulty:** Low to medium. Ollama on a Mac takes minutes. The tradeoff: local models are still behind frontier models for complex tasks. You are trading capability for control. For many use cases, the trade is worth it. For others, use cloud models with eyes open about what you are sending.

### Layer 9: Applications

**Default:** Notion, Google Docs, Stripe, YouTube. Each one is a dependency and a data siphon.

**Sovereign direction:**
- **Knowledge:** Obsidian (plain markdown, local-first). Anytype (P2P, zero-knowledge). AppFlowy (open-source Notion alternative).
- **Payments:** BTCPay Server (self-hosted, open-source). Lightning Network for near-instant payments.
- **Hosting:** Self-hosted on your own domain. ENS + IPFS for censorship resistance. Njalla for privacy-focused domain registration.
- **Content:** Self-hosted blog. PeerTube (federated video). Nostr (censorship-resistant social, your identity is your keypair).

### Layer 10: Analytics

**Default:** Google Analytics tracks you across the web. Windows telemetry phones home. Most apps include analytics SDKs that track every click.

**Sovereign direction:** Plausible or Umami (open-source, self-hostable, cookieless). Firefox + uBlock Origin for browsing. Disable telemetry in your OS.

## The Physical Stack

The layers above are digital. They assume you have power, safety, and the ability to think clearly. Those assumptions are not guaranteed. There are layers beneath the digital stack that most sovereignty conversations ignore because they stay in the terminal. But sovereignty that only exists on a screen is not sovereignty.

### Energy

**Default:** You plug into the grid. A utility company, a government, or a landlord controls whether your devices turn on. A single outage, a rate hike, or a policy decision can shut down your entire sovereign stack overnight. None of the 10 digital layers matter if you cannot power them.

**Sovereign direction:** Solar panels with battery storage (residential or portable). Generators as backup. Power stations like EcoFlow or Bluetti for mobile sovereignty. If you run local AI inference, energy is not optional infrastructure. It is compute infrastructure. A Mac running Ollama draws real watts. A home server running 24/7 draws more. Energy sovereignty is compute sovereignty.

**Why it matters now:** As more of your operation moves to local compute (local models, local harnesses, local storage), your energy bill becomes your AI bill. And here is the sovereignty angle most people miss: if you are entirely dependent on a centralized grid, whoever controls that grid can shut down your AI. Not by hacking your software. By flipping a switch. Rolling blackouts, policy-driven rationing, or targeted infrastructure decisions can take your sovereign stack offline regardless of how carefully you built the digital layers. As AI energy demand scales nationally, grid reliability becomes a geopolitical question, not just a utility question. The people who can power their own stack independent of the grid have a structural advantage that compounds as energy becomes more contested.

### Education

**Default:** You learned to think inside institutions designed to produce employees, not sovereigns. The curriculum was chosen for you. The frameworks were chosen for you. The definition of success was chosen for you. Most professionals have spent decades optimizing for metrics defined by someone else (grades, promotions, performance reviews) and have never practiced the skill of defining their own metrics. This is cognitive capture, and it is the deepest form of non-sovereignty.

**Sovereign direction:** Self-directed learning. Community-based learning with people who challenge your assumptions rather than confirm them. [Applied AI literacy](/docs/applied-ai-practice) as a foundation (understanding what AI can and cannot do, so you are not dependent on anyone else's interpretation). Learning to write [specs](/docs/concepts/spec-writing), build [harnesses](/docs/concepts/harness-engineering), and evaluate AI output for yourself. The sovereign builder does not ask “what should I learn?” They ask “what do I need to know to build the thing I am called to build?” and then they go learn it.

**Why it matters now:** AI is the most powerful leverage tool ever created. The gap between someone who understands it and someone who does not is widening every quarter. If your understanding of AI comes entirely from news headlines, product marketing, or social media takes, your education on the most important technology of your lifetime is controlled by entities with their own agendas. Owning your education about AI is arguably more important than owning your AI model.

### Defense

**Default:** You rely on the state for physical security. Your devices, your servers, your backup drives, your sovereign stack, all of it exists in physical space that someone could access. A home break-in, a stolen laptop, a confiscated server. Digital sovereignty without physical security is a hard drive behind an unlocked door.

**Sovereign direction:** Physical security basics: encrypted drives (so a stolen device is a paperweight, not a breach), hardware kill switches (Purism laptops), secure physical storage for backup media. Full-disk encryption with strong passphrases is non-negotiable for any sovereign setup. Beyond devices: situational awareness, secure locations for critical infrastructure, and the understanding that the most sophisticated digital defenses are irrelevant if someone can physically access your hardware.

**Why it matters now:** As more of your life, your business context, your relationship data, your strategic documents, your financial information moves into your [command center](/docs/concepts/command-centers), the physical security of the device running that command center becomes a higher-stakes question than it has ever been. Your laptop is no longer just a computer. It is the operating system of your life.

### Social Engineering Defense

**Default:** You are one convincing message away from compromise. Social engineering is the oldest and most effective attack vector in existence, and it is getting dramatically more dangerous. AI-generated phishing is now indistinguishable from real communication. Deepfake voice calls can clone anyone's voice from a few seconds of audio. Sophisticated impersonation attacks target people with access to sensitive systems. None of the layers above protect you if someone tricks you into handing over the keys yourself.

This is not just a cybersecurity problem. It is a community and spiritual problem. The deepest social engineering is not a fake email. It is the slow compromise of your judgment through isolation, flattery, fear, or desire. Someone who is emotionally isolated, spiritually ungrounded, or surrounded by people who do not challenge them is exponentially more vulnerable to manipulation than someone embedded in a community of honest, discerning people.

**Sovereign direction:** Community is the defense layer. People who know you well enough to say “that does not sound like you” or “something about this feels wrong.” People who will challenge a decision before you make it, not after. Practically, this looks like:

- **Verification culture.** Never act on urgent requests (wire transfers, credential sharing, access grants) without out-of-band verification. Call the person on a known number. Confirm face to face. Make it normal in your circle to verify before trusting, and never make anyone feel bad for double-checking.
- **Inner circle with discernment.** Surround yourself with people whose spiritual and relational discernment you trust. People who can sense when something is off before they can articulate why. This is not paranoia. It is the ancient pattern of counsel: “Where there is no guidance, a people falls, but in an abundance of counselors there is safety” (Proverbs 11:14).
- **Awareness as practice.** Understand the common plays: urgency pressure (“act now or lose access”), authority impersonation (“this is your CEO”), emotional manipulation (“I need help and you are the only one”). Once you can name the pattern, you are much harder to capture by it.
- **AI as a second check.** Ironically, AI is both the threat and part of the defense. Run suspicious messages through your AI agent for analysis. Use it as a pattern-matching tool for detecting manipulation. The human + LLM two-factor that Vitalik describes below applies here too.

**Why it matters now:** The same AI tools that power your sovereign stack also power the most sophisticated social engineering attacks in history. Every public figure, every business owner, every person with access to valuable systems is a target. The defense is not better spam filters. It is deeper relationships with trustworthy people, sharper discernment, and the discipline to verify before you trust. Your community is your firewall.

## Hyperscalers Are the New Record Labels

In the music industry, a 360 deal means the label takes a cut of everything. They give you distribution and a check upfront. In return, they own your masters.

Every centralized AI platform is running the same play. They give you a powerful tool. In return, they get your context, your thinking, your strategic edge. Your prompts are your masters. If they live on someone else's servers, someone else owns them.

The [Soul Harness](/docs/concepts/the-soul-harness) framework makes the distinction: a predatory harness makes you dependent over time. A liberating harness makes you more capable and more independent over time. At every layer of the stack, choose liberating.

## An Example 80/20 Sovereign Stack

You cannot sovereign everything overnight. Here is one example of the 80/20: roughly 80% of achievable sovereignty with 20% of the effort. Your version will look different depending on your starting point, your threat model, and your technical comfort. Adapt it.

**Today (1-2 hours):**
- Firefox + uBlock Origin + DNS-over-HTTPS
- Signal for sensitive messaging
- YubiKey for critical accounts
- ProtonMail for sensitive email

**This week:**
- Obsidian for knowledge management
- Syncthing for file sync
- Ollama for local AI
- Pi-hole for network-level DNS

**This month:**
- GrapheneOS on a Pixel
- Linux on your primary machine (if on Windows)
- Self-hosted WireGuard VPN
- Restic for encrypted backups

**Ongoing:**
- Coreboot-compatible hardware
- Local-first AI harness for development
- Decentralized identity and hosting
- Solar or battery backup for critical compute
- Self-directed learning plan for AI literacy
- Full-disk encryption on every device, secure physical storage for backups
- Verification culture in your inner circle (never act on urgent requests without out-of-band confirmation)

## Vitalik's Proof of Concept

In April 2026, Vitalik Buterin [published his personal sovereign AI setup](https://vitalik.eth.limo/general/2026/04/02/secure_llms.html): local LLM inference on laptop GPUs, sandboxed agents, a messaging daemon that only allows send-to-self without human confirmation, a local `world_knowledge` folder (his version of a [context lake](/docs/concepts/context-lake)) to reduce reliance on internet searches, and a multi-layer defense approach for when you must use remote models.

Two ideas from his setup are worth highlighting:

**The human + LLM two-factor.** For any risky action (sending a message, moving funds, publishing content), require confirmation from both a human and an LLM. Humans fail sometimes (absent-minded, tricked). LLMs fail sometimes (jailbroken, hallucinating). The hope is they fail in different ways. Requiring both to agree before anything irreversible happens is much safer than trusting either alone. This extends our [permission surface](/docs/concepts/the-permission-surface) concept into a true two-factor model.

**Open-weights is not open-source.** Most “open” AI models give you the trained weights but not the training code, data, or process. You can run them locally, but you cannot fully audit what was trained into them. This means hidden behaviors (backdoors, biases, triggers) could exist in models you think are safe because they are “open.” True sovereignty requires awareness of this gap.

Vitalik's vision aligns with ours: “AI can actually create a future with much stronger privacy and security... the more sophisticated software would live on the user's machine and be aligned with the user, instead of being aligned with a corporation intent on extracting attention and value.” That is the sovereignty stack in one sentence.

## Sovereignty Is a Muscle

Do not read this stack and feel overwhelmed. Do not beat yourself up for using Gmail, running macOS, or having your context in Claude Code right now. Every layer is a moving target. The tools change every quarter. What is cutting edge today will be table stakes tomorrow.

Sovereignty is not a binary. It is a muscle. You strengthen it over time. You start where you are, make one upgrade, then another. Maybe this week you install Signal. Next month you try Ollama. Eventually you flash GrapheneOS on a Pixel. Each step makes you a little more free and a little harder to capture.

Nobody is fully sovereign. Not Vitalik. Not us. The point is direction, not perfection. Are you moving toward sovereignty or away from it? That is the only question that matters.

And sovereignty spreads through community, not isolation. When one person in your circle figures out how to run a local model, they teach the next person. When one chapter leader runs a sovereignty workshop, ten people level up. The muscle gets stronger when you train together. That is why [the movement](https://appliedaisociety.org) matters as much as the technology.

## Moral Sovereignty Comes First

There is a layer below silicon that this stack does not cover: you.

The most sophisticated sovereign tech stack in the world does not protect you if you are morally compromised. If you cannot control your appetites, you are blackmailable. If you are blackmailable, you are capturable. No amount of encryption, local models, or hardware kill switches changes that.

This is not a tangent. It is the foundation. One of the reasons so many leaders, executives, and public figures have been controlled by forces that do not serve them is that they gave those forces leverage through their private behavior. The same lust that brought down kings in the Bible still brings down leaders today. Samson's enemies could not beat him with armies. They beat him with desire.

Sovereignty starts in the body. And it extends to everything that affects your clarity, your energy, and your capacity to act:

- **Regulate your nervous system.** If you are in chronic fight-or-flight, you cannot think clearly enough to make sovereign decisions. You will default to whatever is easiest, which is usually the predatory option.
- **Watch what you eat.** Processed food and sugar dysregulate your nervous system and deplete your willpower. Blood sugar crashes make you reactive and impulsive. Clean food is sovereignty infrastructure.
- **Watch what you listen to.** The music, podcasts, and content you consume shape your mental state. Low-frequency input produces low-frequency output.
- **Watch who you surround yourself with.** If the people around you are not thinking about sovereignty, not taking actions toward it, you probably will not either. Sovereignty is contagious and so is complacency.
- **Guard your integrity.** Get free from the things that give others leverage over you. Then the tech stack has something worth protecting.

## Making Sovereignty Cool

The tech exists. The moral argument exists. What is missing is the cultural shift. Throughout history, every fundamental freedom had to be made cool by artists before it became normal. Harry Belafonte built the celebrity infrastructure that made civil rights the default position for any entertainer. Steven Van Zandt made complicity with apartheid uncool with “Sun City.” Ellen made LGBTQ acceptance the cultural norm through a sitcom.

Sovereignty needs the same treatment. We need artists, creators, and cultural figures to make owning your AI aspirational. To make data independence the default. To make people embarrassed, over time, to pour their lives into platforms that own their context.

This is not about shaming anyone for where they are today. A lot of people do not even have a laptop. To have any internet at all, to be able to learn about sovereignty, is a beautiful thing. The goal is direction: make it increasingly uncool to be fully captured, gradually, then all at once.

## The Sovereignty Economy

An entire economy needs to be built around this stack. Sovereign hardware. Sovereign networking. Sovereign AI. Sovereign identity. Every layer is an opportunity for builders.

The [Applied AI Society](https://appliedaisociety.org) is training sovereign builders. People who understand the stack, can operate at every layer, and can help others achieve sovereignty. Anyone who wants a sovereign future should be part of this movement. We are training the builders of the sovereign future.

The default stack is designed to extract from you. The sovereign stack is designed to liberate you. Every layer you reclaim is a layer the adversary loses.

> **The north star: Own your power. Own your education. Own your safety. Own your silicon. Own your network. Own your data. Own your identity. Own your models. Own your harness. Own your content. Own your future.**

---

## Further Reading

- [Progressive Sovereignty](/docs/concepts/progressive-sovereignty): The practice of climbing this stack one rung at a time, until what is currently a privilege becomes a democratized human right
- [The Lock-In Is Coming](/docs/concepts/the-lock-in-is-coming): Why vendor lock-in is structurally inevitable
- [The Soul Harness](/docs/concepts/the-soul-harness): Predatory vs. liberating systems
- [Context Lake](/docs/concepts/context-lake): Your sovereign knowledge base
- [Personal Agentic OS](/docs/concepts/personal-agentic-os): The sovereign AI system
- [Minimum Viable Infrastructure](/docs/concepts/minimum-viable-infrastructure): The baseline requirements to participate
- [Liberation Architecture](/docs/concepts/liberation-architecture): Building systems that free people
- [Externalize Your Brain](/docs/concepts/externalize-your-brain): The human prerequisite for sovereignty
- [Command Centers](/docs/concepts/command-centers): What sovereignty enables you to build
- [The Slopacalypse](/docs/concepts/slopacalypse): Why sovereign builders stand out when generic tools drown in noise
- [Harness Engineering](/docs/concepts/harness-engineering): Why the wrapper matters as much as the model
