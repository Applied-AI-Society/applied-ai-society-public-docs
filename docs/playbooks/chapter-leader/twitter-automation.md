---
sidebar_position: 10
title: Twitter Automation
---

# Twitter DM Automation with PhantomBuster

A system for Twitter/X outreach with PhantomBuster. Syncs Airtable, Google Sheets, and PhantomBuster. Exports contacts from Airtable, sends automated DMs via PhantomBuster, and updates status back to Airtable.

Status: Tested and working

Last Updated: January 26, 2026

---

## Table of Contents

- [Tools](#tools)
- [Flow](#flow)
- [Prerequisites](#prerequisites)
- [Warning: Twitter Safety & Limits](#warning-twitter-safety--limits)
- [Setup](#setup)
  - [Step 1: Configure Airtable](#step-1-configure-airtable)
  - [Step 2: Set Up Google Sheet](#step-2-set-up-google-sheet)
  - [Step 3: Configure PhantomBuster](#step-3-configure-phantombuster)
  - [Step 4: Set Up Google Apps Script](#step-4-set-up-google-apps-script)
  - [Step 5: Finalize and Test](#step-5-finalize-and-test)
- [How It Works (Once Running)](#how-it-works-once-running)
- [How to Pause or Stop](#how-to-pause-or-stop)
- [Troubleshooting](#troubleshooting)

---

## Tools

| Tool | Purpose |
|------|---------|
| Google Sheets | Hub for data sync |
| Google Apps Script | Runs automation code |
| Airtable | Source of contacts, stores results |
| PhantomBuster | Sends Twitter DMs |

## Flow

1. A list of contacts with Twitter Profile URLs stored in a filtered **"To Message (Twitter)"** view in Airtable
2. Google Apps Script Sequence runs every hour:
    - pushing the Airtable view onto a Google sheet
    - pulling results from PhantomBuster back to sheet
    - syncing results from the Google Sheet back to Airtable
3. PhantomBuster sends Twitter DMs regularly (based on the schedule you set)

---

## Prerequisites

Before starting, you need:

| Requirement | Notes |
|-------------|-------|
| Twitter/X account | Active account in good standing |
| PhantomBuster account | Free trial available; paid plan recommended for volume |
| Airtable account | Free tier works |
| Google account | For Sheets and Apps Script |

---

## Warning: Twitter Safety & Limits

**Daily/Weekly Limits:**

Twitter restricts how many DMs you can send. PhantomBuster shows a warning with your recommended limit based on your account age and activity.

**Recommended Settings:**

| Setting | Safe Range |
|---------|------------|
| Messages per launch | 5-10 |
| Launches per day | 2-4 |
| Days per week | 5 (skip weekends) |
| Total per week | Stay under PhantomBuster's warning |

**Avoid Account Restrictions:**

- Don't send identical messages to everyone. Personalize with variables
- Space out your messages throughout the day
- Keep messages conversational, not salesy
- Start slow with a new account, increase volume gradually
- If Twitter shows warnings or locks your account, pause and reduce volume

---

## Setup

### Step 1: Configure Airtable

Your table needs these fields:

**Must-have fields:**

| Field | Type | Purpose |
|-------|------|---------|
| `twitterUsername` | Single line text | Used in message personalization |
| `Twitter Profile` | URL | Contact's Twitter profile URL |
| `Outreach Status` | Single select | Tracks messaging state |
| `Last Attempt` | Date/Time | Timestamp of last message attempt |
| `Message Sent` | Long text | Message content or error details |

> **Tip:** Since contacts are scraped from Twitter, use `twitterUsername` (their @handle) for personalization instead of first name. It's more reliable and avoids awkward mismatched nicknames. Name the field without spaces so PhantomBuster can use it as a variable.

**Outreach Status options:**

| Option | Meaning |
|--------|---------|
| `To Message` | Ready to be messaged |
| `Message Sent` | Successfully messaged |
| `Message Failed` | Delivery failed |

**Create a filtered view:**

1. Create a new view named **"To Message (Twitter)"**
2. Add filter: `Outreach Status` = `To Message`

This view feeds contacts to PhantomBuster. Only contacts in this view will be messaged.

### Step 2: Set Up Google Sheet

1. Create a new Google Sheet
2. Create two tabs:
   - **"Airtable Sync (For Twitter Messages Automation)":** receives contacts from Airtable
   - **"Phantom Output":** receives results from PhantomBuster

**Make the sheet accessible to PhantomBuster:**

1. Click **Share** (top right)
2. Under "General access", select **"Anyone with the link"**
3. Set permission to **"Viewer"**
4. Copy the sheet URL for Step 3

### Step 3: Configure PhantomBuster

**Create the Phantom:**

1. Go to your PhantomBuster dashboard
2. Click **Browse Phantoms**
3. Search for **"Twitter DM Sender"** (or "X DM Sender")
4. Click **Use Now**

**Configure Profile URLs:**

1. Under "Choose your profile URLs", select **"A URL"**
2. Paste your Google Sheet link
3. Open **Spreadsheet Settings** dropdown
4. For "Column containing profile URLs": leave empty for now (configure in Step 5)

**Connect Twitter:**

1. Install the PhantomBuster browser extension
2. The extension auto-detects your Twitter session
3. Follow prompts to connect your account

**Set Up Your Message:**

1. Leave "Condition for sending messages" empty (optional)
2. In "Your message" field, write your message
3. Use tags for personalization (e.g., `#twitterUsername#` for the contact's @handle)

**Configure Behavior:**

1. Set messages per launch (1-10, max is 10)
2. Note the daily/weekly message limit warning at the top

**Configure Launch Settings:**

1. Select **"Repeatedly"**
2. Choose **"Once every other working hour (9 to 5)"** as a starting point
3. Click **"Advanced"** to customize:
   - Remove Saturday/Sunday if needed
   - Adjust hours to match your schedule
4. Click **Save**

**Copy Phantom ID:**

1. After saving, copy your **Phantom Agent ID** from the URL or settings
2. Save this for Step 4

### Step 4: Set Up Google Apps Script

**Open Apps Script:**

1. Open your Google Sheet from Step 2
2. Go to **Extensions → Apps Script**
3. Name your project (e.g., "Twitter Outreach Automation")

**Copy the Script:**

Delete any existing code in `Code.gs` and paste this entire script:

```javascript
/**
 * Airtable <-> Google Sheets <-> PhantomBuster pipeline (TWITTER)
 * - Pull Phantom output -> Sheet
 * - Write Phantom results -> Airtable (success/fail, last attempt, message/error)
 * - Export Airtable VIEW -> Sheet (feed Phantom)
 */

// ===========================
// CONFIG
// ===========================

// SECRETS (stored in Script Properties - see Project Settings > Script Properties)
const SCRIPT_PROPS = PropertiesService.getScriptProperties();
const AIRTABLE_TOKEN = SCRIPT_PROPS.getProperty("AIRTABLE_TOKEN");
const AIRTABLE_BASE_ID = SCRIPT_PROPS.getProperty("AIRTABLE_BASE_ID");
const PHANTOM_API_KEY = SCRIPT_PROPS.getProperty("PHANTOM_API_KEY");
const PHANTOM_AGENT_ID = SCRIPT_PROPS.getProperty("PHANTOM_AGENT_ID");

// SETTINGS
const AIRTABLE_TABLE = "People";
const AIRTABLE_VIEW = "To Message (Twitter)";
const SHEET_TAB_NAME = "Airtable Sync (For Twitter Messages Automation)";
const AIRTABLE_TWITTER_FIELD = "Twitter Profile";
const PHANTOM_OUTPUT_TAB = "Phantom Output";

// Airtable fields (must match exactly)
const AIRTABLE_STATUS_FIELD = "Outreach Status";
const AIRTABLE_LAST_ATTEMPT_FIELD = "Last Attempt";
const AIRTABLE_MESSAGE_FIELD = "Message Sent";

// Status values (must match your single select options in Airtable)
const STATUS_SENT = "Message Sent";
const STATUS_FAILED = "Message Failed";

// ===========================
// PIPELINE ENTRYPOINT
// ===========================

function runPipelineHourly() {
  if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID || !PHANTOM_API_KEY || !PHANTOM_AGENT_ID) {
    throw new Error("Missing Script Properties! Add: AIRTABLE_TOKEN, AIRTABLE_BASE_ID, PHANTOM_API_KEY, PHANTOM_AGENT_ID");
  }

  clearAirtableCache_();
  
  fetchPhantomOutputToSheet();
  syncPhantomSheetToAirtable();

  Utilities.sleep(3000);
  syncAirtableToSheet();
}

// ===========================
// 1) AIRTABLE -> SHEET (FEED PHANTOM)
// ===========================

function syncAirtableToSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_TAB_NAME) || ss.insertSheet(SHEET_TAB_NAME);

  const records = fetchAllAirtableRecords_(AIRTABLE_BASE_ID, AIRTABLE_TABLE, AIRTABLE_VIEW);

  if (!records.length) {
    sheet.clearContents();
    sheet.getRange(1, 1).setValue("No records in view: " + AIRTABLE_VIEW);
    return;
  }

  const fieldSet = new Set();
  records.forEach(r => Object.keys(r.fields || {}).forEach(k => fieldSet.add(k)));
  const fields = Array.from(fieldSet);

  const header = ["airtable_record_id", ...fields];
  const values = [header];

  records.forEach(r => {
    const row = [r.id];
    fields.forEach(f => row.push(normalizeCell_(r.fields?.[f])));
    values.push(row);
  });

  sheet.clearContents();
  sheet.getRange(1, 1, values.length, values[0].length).setValues(values);
}

function fetchAllAirtableRecords_(baseId, table, viewName) {
  let all = [];
  let offset = null;

  do {
    let url = "https://api.airtable.com/v0/" + baseId + "/" + encodeURIComponent(table);
    url += viewName 
      ? "?view=" + encodeURIComponent(viewName) + "&pageSize=100"
      : "?pageSize=100";
    if (offset) url += "&offset=" + encodeURIComponent(offset);

    const res = UrlFetchApp.fetch(url, {
      method: "get",
      headers: { Authorization: "Bearer " + AIRTABLE_TOKEN },
      muteHttpExceptions: true,
    });

    if (res.getResponseCode() < 200 || res.getResponseCode() >= 300) {
      throw new Error("Airtable API error: " + res.getContentText());
    }

    const data = JSON.parse(res.getContentText());
    all = all.concat(data.records || []);
    offset = data.offset || null;
  } while (offset);

  return all;
}

function normalizeCell_(v) {
  if (v === null || v === undefined) return "";
  if (Array.isArray(v)) return v.map(normalizeCell_).join(", ");
  if (typeof v === "object") return JSON.stringify(v);
  return v;
}

// ===========================
// 2) PHANTOM OUTPUT -> SHEET
// ===========================

function fetchPhantomOutputToSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(PHANTOM_OUTPUT_TAB) || ss.insertSheet(PHANTOM_OUTPUT_TAB);

  // Try fetch-result-object API first (more reliable)
  const resultUrl = "https://api.phantombuster.com/api/v2/agents/fetch-result-object?id=" + encodeURIComponent(PHANTOM_AGENT_ID);
  const resultRes = UrlFetchApp.fetch(resultUrl, {
    method: "get",
    headers: { "X-Phantombuster-Key-1": PHANTOM_API_KEY },
    muteHttpExceptions: true,
  });
  
  if (resultRes.getResponseCode() >= 200 && resultRes.getResponseCode() < 300) {
    try {
      const resultPayload = JSON.parse(resultRes.getContentText());
      if (resultPayload.resultObject && Array.isArray(resultPayload.resultObject) && resultPayload.resultObject.length > 0) {
        writeObjectsToSheet_(sheet, resultPayload.resultObject);
        return;
      }
    } catch (e) { /* fall through to backup method */ }
  }
  
  // Fallback: parse log output for S3 URLs
  const apiUrl = "https://api.phantombuster.com/api/v2/agents/fetch-output?id=" + encodeURIComponent(PHANTOM_AGENT_ID);
  const res = UrlFetchApp.fetch(apiUrl, {
    method: "get",
    headers: { "X-Phantombuster-Key-1": PHANTOM_API_KEY },
    muteHttpExceptions: true,
  });

  if (res.getResponseCode() < 200 || res.getResponseCode() >= 300) {
    throw new Error("PhantomBuster API error: " + res.getContentText());
  }

  const payload = JSON.parse(res.getContentText());
  const logText = payload.output || "";

  const jsonMatch = logText.match(/https:\/\/phantombuster\.s3\.amazonaws\.com\/[^\s"]+\.json/g);
  const csvMatch = logText.match(/https:\/\/phantombuster\.s3\.amazonaws\.com\/[^\s"]+\.csv/g);
  const jsonUrl = jsonMatch ? jsonMatch[jsonMatch.length - 1] : null;
  const csvUrl = csvMatch ? csvMatch[csvMatch.length - 1] : null;

  if (!jsonUrl && !csvUrl) {
    sheet.clearContents();
    sheet.getRange(1, 1).setValue("No PhantomBuster results found. Run the phantom first.");
    return;
  }

  if (jsonUrl) {
    const outRes = UrlFetchApp.fetch(jsonUrl, { muteHttpExceptions: true });
    if (outRes.getResponseCode() < 200 || outRes.getResponseCode() >= 300) {
      throw new Error("Could not fetch Phantom JSON: " + outRes.getContentText());
    }
    const rows = JSON.parse(outRes.getContentText());
    if (!Array.isArray(rows) || rows.length === 0) {
      sheet.clearContents();
      sheet.getRange(1, 1).setValue("Phantom JSON was empty.");
      return;
    }
    writeObjectsToSheet_(sheet, rows);
    return;
  }

  // CSV fallback
  const outRes = UrlFetchApp.fetch(csvUrl, { muteHttpExceptions: true });
  if (outRes.getResponseCode() < 200 || outRes.getResponseCode() >= 300) {
    throw new Error("Could not fetch Phantom CSV: " + outRes.getContentText());
  }
  const csv = Utilities.parseCsv(outRes.getContentText());
  sheet.clearContents();
  sheet.getRange(1, 1, csv.length, csv[0].length).setValues(csv);
}

function writeObjectsToSheet_(sheet, rows) {
  const headers = Object.keys(rows[0] || {});
  const values = [headers];
  rows.forEach(r => values.push(headers.map(h => normalizeCell_(r[h]))));
  sheet.clearContents();
  sheet.getRange(1, 1, values.length, values[0].length).setValues(values);
}

// ===========================
// 3) SHEET -> AIRTABLE (UPDATE STATUS)
// ===========================

function syncPhantomSheetToAirtable() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(PHANTOM_OUTPUT_TAB);
  if (!sheet) return;

  const data = sheet.getDataRange().getValues();
  if (data.length < 2) return;

  const headers = data[0].map(h => String(h).trim());
  const idx = {};
  headers.forEach((h, i) => (idx[h] = i));

  // Twitter profile URL fields (PhantomBuster might use different column names)
  if (idx["twitterProfile"] === undefined && idx["handle"] === undefined && idx["profileUrl"] === undefined && idx["link"] === undefined) return;

  const updates = [];

  for (let r = 1; r < data.length; r++) {
    const row = data[r];
    
    // Get Twitter profile - try multiple field names (order matters - try exact match first)
    let twitterUrl = readCol_(row, idx, ["twitterProfile", "profileUrl", "link", "url", "query"]) || 
                     readCol_(row, idx, ["handle", "username", "screenName"]) || "";
    
    if (!twitterUrl) continue;

    twitterUrl = normalizeTwitterUrl_(twitterUrl);

    // Read fields from PhantomBuster output
    const message = readCol_(row, idx, ["message", "Message", "sentMessage", "text", "dmText"]) || "";
    const error = readCol_(row, idx, ["error", "Error", "errorMessage"]) || "";
    const rawTimestamp = readCol_(row, idx, ["timestamp", "time", "sentAt", "date"]) || "";
    const attemptTime = normalizeToIso_(rawTimestamp) || new Date().toISOString();

    // Determine success/failure
    const hasMessage = Boolean(String(message).trim());
    const hasError = Boolean(String(error).trim());
    const isSuccess = hasMessage && !hasError;

    // Find matching Airtable record
    const record = airtableFindRecordByTwitter_(twitterUrl);
    if (!record) continue;

    // Build update
    const fieldsToUpdate = {};
    fieldsToUpdate[AIRTABLE_LAST_ATTEMPT_FIELD] = attemptTime;

    if (isSuccess) {
      fieldsToUpdate[AIRTABLE_STATUS_FIELD] = STATUS_SENT;
      fieldsToUpdate[AIRTABLE_MESSAGE_FIELD] = String(message);
    } else {
      fieldsToUpdate[AIRTABLE_STATUS_FIELD] = STATUS_FAILED;
      fieldsToUpdate[AIRTABLE_MESSAGE_FIELD] = hasError 
        ? "[FAILED] " + String(error)
        : "[FAILED] No message sent";
    }

    updates.push({ id: record.id, fields: fieldsToUpdate });
  }

  if (updates.length > 0) {
    airtableBatchUpdate_(updates);
  }
}

function readCol_(row, idx, names) {
  for (const n of names) {
    if (idx[n] !== undefined) return row[idx[n]];
  }
  return "";
}

// ===========================
// HELPER FUNCTIONS
// ===========================

function normalizeTwitterUrl_(url) {
  if (!url) return "";
  
  let normalized = String(url).toLowerCase().trim();
  
  // If it's just a username (starts with @), remove @ and create the path
  if (normalized.startsWith("@")) {
    normalized = normalized.substring(1);
  }
  
  // If it's a full URL, normalize it
  normalized = normalized
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/^(twitter\.com|x\.com)\//, "")
    .replace(/\/$/, "");
  
  // If it contains query params or path beyond username, strip them
  normalized = normalized.split("?")[0].split("/")[0];
  
  return normalized;
}

function normalizeToIso_(rawTimestamp) {
  if (!rawTimestamp) return null;
  try {
    const d = new Date(rawTimestamp);
    return isNaN(d.getTime()) ? null : d.toISOString();
  } catch (e) {
    return null;
  }
}

let airtableRecordsCache_ = null;

function airtableFindRecordByTwitter_(twitterUrl) {
  if (!airtableRecordsCache_) {
    airtableRecordsCache_ = {};
    const allRecords = fetchAllAirtableRecords_(AIRTABLE_BASE_ID, AIRTABLE_TABLE, null);
    for (const record of allRecords) {
      const recordUrl = record.fields?.[AIRTABLE_TWITTER_FIELD];
      if (recordUrl) {
        airtableRecordsCache_[normalizeTwitterUrl_(recordUrl)] = record;
      }
    }
  }
  return airtableRecordsCache_[twitterUrl] || null;
}

function clearAirtableCache_() {
  airtableRecordsCache_ = null;
}

function airtableBatchUpdate_(updates) {
  if (!updates || updates.length === 0) return 0;
  
  const url = "https://api.airtable.com/v0/" + AIRTABLE_BASE_ID + "/" + encodeURIComponent(AIRTABLE_TABLE);
  let totalUpdated = 0;
  
  for (let i = 0; i < updates.length; i += 10) {
    const batch = updates.slice(i, i + 10);
    const res = UrlFetchApp.fetch(url, {
      method: "patch",
      headers: {
        "Authorization": "Bearer " + AIRTABLE_TOKEN,
        "Content-Type": "application/json"
      },
      payload: JSON.stringify({ records: batch }),
      muteHttpExceptions: true
    });
    
    if (res.getResponseCode() >= 200 && res.getResponseCode() < 300) {
      const data = JSON.parse(res.getContentText());
      totalUpdated += (data.records || []).length;
    }
    
    if (i + 10 < updates.length) Utilities.sleep(200);
  }
  
  return totalUpdated;
}

// ===========================
// SETUP & DEBUG
// ===========================

/**
 * Run once to set up hourly trigger
 */
function setupHourlyTrigger() {
  ScriptApp.getProjectTriggers().forEach(t => {
    if (t.getHandlerFunction() === "runPipelineHourly") {
      ScriptApp.deleteTrigger(t);
    }
  });
  ScriptApp.newTrigger("runPipelineHourly").timeBased().everyHours(1).create();
  Logger.log("Hourly trigger created");
}

/**
 * Verify Script Properties are configured
 */
function testScriptProperties() {
  Logger.log("AIRTABLE_TOKEN: " + (AIRTABLE_TOKEN ? "OK" : "MISSING"));
  Logger.log("AIRTABLE_BASE_ID: " + (AIRTABLE_BASE_ID ? "OK" : "MISSING"));
  Logger.log("PHANTOM_API_KEY: " + (PHANTOM_API_KEY ? "OK" : "MISSING"));
  Logger.log("PHANTOM_AGENT_ID: " + (PHANTOM_AGENT_ID ? "OK" : "MISSING"));
}
```

**Script Configuration (edit these if your field names differ):**

| Setting | Default Value | Description |
|---------|---------------|-------------|
| `AIRTABLE_TABLE` | `"People"` | Your Airtable table name |
| `AIRTABLE_VIEW` | `"To Message (Twitter)"` | View name from Step 1 |
| `SHEET_TAB_NAME` | `"Airtable Sync (For Twitter Messages Automation)"` | Tab name from Step 2 |
| `AIRTABLE_TWITTER_FIELD` | `"Twitter Profile"` | Field containing Twitter URLs |
| `PHANTOM_OUTPUT_TAB` | `"Phantom Output"` | Tab for PhantomBuster results |
| `AIRTABLE_STATUS_FIELD` | `"Outreach Status"` | Field for message status |
| `AIRTABLE_LAST_ATTEMPT_FIELD` | `"Last Attempt"` | Field for timestamp |
| `AIRTABLE_MESSAGE_FIELD` | `"Message Sent"` | Field for message content |

**Add Script Properties (Secrets):**

1. Click **Project Settings** (gear icon in left sidebar)
2. Scroll to **Script Properties**
3. Click **Add script property** for each:

| Property | Where to Find It |
|----------|------------------|
| `AIRTABLE_TOKEN` | Airtable → Account → Developer Hub → Personal Access Tokens → Create Token (scopes: `data.records:read`, `data.records:write`) |
| `AIRTABLE_BASE_ID` | Airtable → Your Base → Help → API Documentation → The ID starts with `app...` |
| `PHANTOM_API_KEY` | PhantomBuster → Account Settings → API Keys |
| `PHANTOM_AGENT_ID` | PhantomBuster → Your Phantom → Look in URL or Settings (the ID is a number) |

**Grant Permissions:**

1. Click **Run** on any function (e.g., `testScriptProperties`)
2. Click **Review permissions**
3. Select your Google account
4. Click **Advanced** → **Go to [project name] (unsafe)**
5. Click **Allow** to grant:
   - Access to Google Sheets
   - Connect to external services (Airtable, PhantomBuster APIs)

**Test Your Setup:**

1. Select `testScriptProperties` from the function dropdown
2. Click **Run**
3. Click **View → Logs** to see results
4. All 4 properties should show OK

**Function Reference:**

| Function | Purpose | When to Use |
|----------|---------|-------------|
| `runPipelineHourly()` | Runs full sync sequence | Main automation entry point |
| `syncAirtableToSheet()` | Exports Airtable view → Sheet | Populates contacts for PhantomBuster |
| `fetchPhantomOutputToSheet()` | Pulls PhantomBuster results → Sheet | Gets message delivery status |
| `syncPhantomSheetToAirtable()` | Updates Airtable with results | Writes status back to Airtable |
| `setupHourlyTrigger()` | Creates hourly automation | Run once to enable auto-sync |
| `testScriptProperties()` | Verifies all secrets are set | Debugging configuration |

**Execution Sequence:**

```
runPipelineHourly()
    ├── fetchPhantomOutputToSheet()   → Pull latest PhantomBuster results
    ├── syncPhantomSheetToAirtable()  → Update Airtable with sent/failed status
    └── syncAirtableToSheet()         → Refresh contact list for next PhantomBuster run
```

### Step 5: Finalize and Test

**5.1: Test Airtable → Sheet Export:**

1. In Apps Script, select `syncAirtableToSheet` from the dropdown
2. Click **Run**
3. Open your Google Sheet and check the **"Airtable Sync (For Twitter Messages Automation)"** tab
4. Verify your contacts and all fields are exported correctly

**5.2: Finalize PhantomBuster Configuration:**

1. Return to your PhantomBuster Phantom settings
2. Go to **Spreadsheet Settings** dropdown
3. Click **"Name of column containing profile URLs"**
4. Select the column with your Twitter URLs (now visible after export)

**5.3: Update Your Message Template (Optional):**

Now that your Airtable fields are on the sheet, you can personalize your message using column names as variables.

Example message:
```
Hey @#twitterUsername#, saw your tweets about AI and wanted to reach out...
```

**Important:** Column names with spaces won't work as variables. If you followed Step 1, your fields are already named correctly (e.g., `twitterUsername`).

**5.4: Test PhantomBuster Manually:**

1. Go to your PhantomBuster dashboard
2. Click on your Twitter DM Sender Phantom
3. Click the **Launch** button (right side)
4. Watch the progress bar. The Phantom will start messaging

**5.5: Test PhantomBuster Results Import:**

1. After the Phantom finishes, return to Apps Script
2. Run `fetchPhantomOutputToSheet`
3. Check the **"Phantom Output"** tab in Google Sheets
4. Verify message results are imported (profileUrl, message, timestamp, etc.)

**5.6: Test Airtable Sync Back:**

1. In Apps Script, run `syncPhantomSheetToAirtable`
2. Open your Airtable table
3. Verify these fields are updated for messaged contacts:
   - `Outreach Status` → "Message Sent" or "Message Failed"
   - `Last Attempt` → timestamp
   - `Message Sent` → the message content or error

**5.7: Enable Hourly Automation:**

Option A: Run the function:
1. In Apps Script, run `setupHourlyTrigger`
2. Check **View → Logs** for "Hourly trigger created"

Option B: Manual setup:
1. In Apps Script, click **Triggers** (clock icon, left sidebar)
2. Click **+ Add Trigger**
3. Configure:
   - Function: `runPipelineHourly`
   - Event source: Time-driven
   - Type: Hour timer
   - Interval: Every hour
4. Click **Save**

**5.8: Verify the Loop Works:**

1. Run `syncAirtableToSheet` again
2. Check the export. Contacts you already messaged should be **gone** from the sheet
3. This confirms the filter is working: only `Outreach Status = To Message` contacts appear

**You're all set!**

---

## How It Works (Once Running)

The automation runs hourly and:

1. **Pulls PhantomBuster results** → updates Airtable with message status
2. **Refreshes the contact list** → only unmessaged contacts remain
3. **PhantomBuster reads the sheet** → sends messages on its own schedule

Your Airtable stays up-to-date with who was messaged, when, and what was sent.

---

## How to Pause or Stop

**Pause temporarily:**

1. **PhantomBuster:** Go to your PhantomBuster dashboard and toggle off the Phantom that you want to stop
2. **Apps Script:** The hourly sync will continue but won't cause messages to send

**Stop completely:**

1. **Delete the Apps Script trigger:**
   - Open Apps Script → Triggers (clock icon)
   - Click the 3 dots next to the trigger → Delete

   **Resume later:**
    1. Run `setupHourlyTrigger()` in Apps Script
    2. Set PhantomBuster back to "Repeatedly" with your schedule

2. **Disable PhantomBuster:**
   - Go to your PhantomBuster dashboard and toggle off the Phantom that you want to stop
   - Or delete the Phantom entirely

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| No records exported | Check Airtable view has records with `Outreach Status = To Message` |
| Messaged contacts still appearing | Verify `Outreach Status` is updating to "Message Sent" |
| Status not updating | Check Twitter URL format matches between PhantomBuster output and Airtable |
| Variables not working in message | Remove spaces from Airtable field names (use camelCase) |
| API errors | Run `testScriptProperties()` to verify all 4 credentials |
| Trigger not running | Check **Triggers** in Apps Script for errors |
| Can't DM someone | They may have DMs restricted to followers only |

---

## See Also

- [CRM Setup](/docs/playbooks/chapter-leader/crm-setup): Setting up Airtable for outreach tracking
- [LinkedIn Automation](/docs/playbooks/chapter-leader/linkedin-automation): LinkedIn DM automation setup
- [Tools](/docs/playbooks/chapter-leader/tools): Other chapter leader tools
