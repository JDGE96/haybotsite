
/*
  MINIMAL HAYLEA PAGE — JAVASCRIPT

  ACTIVE:
    - Discord message box (text and optional file attachment)

  DISABLED:
    - Random messages / encouragement
    - Photo and background rotation
    - Spotify song picker
    - Special message card
    - "Another message" button and page-load randomization

  The letter link is an HTML element, not JavaScript. Keep its <a> element
  in your HTML; this file does not create or remove that link.

  SECURITY:
    The webhook URL that was in the uploaded source is exposed. Delete/regenerate
    that webhook in Discord and put the NEW webhook URL below. Do not reuse the
    exposed URL.
*/

// Replace this with a newly generated Discord webhook URL.
const discordWebhookUrl = "PASThttps://discord.com/api/webhooks/1549257705129119775/dkYM5V_fp3r__4LEZEGNT16artlKExHK73J28znxm-KcEMWk7SnastTin1CXI9Tzin6Z";

const maxAttachmentBytes = 10 * 1024 * 1024;

const fileInput = document.getElementById("discordnoteFileInput");
const fileNameDisplay = document.getElementById("discordnoteFileName");
const sendButton = document.getElementById("discordnoteSendBtn");

if (fileInput && fileNameDisplay) {
  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];

    if (!file) {
      fileNameDisplay.textContent = "";
      return;
    }

    if (file.size > maxAttachmentBytes) {
      fileNameDisplay.textContent =
        "That file is too large (limit approximately 10 MB).";
      fileInput.value = "";
      return;
    }

    fileNameDisplay.textContent = "Attached: " + file.name;
  });
}

async function sendNoteToDiscord() {
  const input = document.getElementById("discordnoteInput");
  const status = document.getElementById("discordnoteStatus");

  if (!input || !status || !sendButton || !fileInput || !fileNameDisplay) {
    console.error("The Discord message form is missing required HTML elements.");
    return;
  }

  const noteText = input.value.trim();
  const file = fileInput.files[0];

  if (!noteText && !file) {
    status.textContent = "Please type something or attach a file.";
    return;
  }

  if (
    !discordWebhookUrl ||
    discordWebhookUrl === "PASTE_NEW_DISCORD_WEBHOOK_URL_HERE"
  ) {
    status.textContent = "Add your new Discord webhook URL in the JavaScript first.";
    return;
  }

  if (file && file.size > maxAttachmentBytes) {
    status.textContent = "That file is too large (limit approximately 10 MB).";
    return;
  }

  sendButton.disabled = true;
  status.textContent = "Sending...";

  try {
    let fetchOptions;

    if (file) {
      const formData = new FormData();
      formData.append("payload_json", JSON.stringify({ content: noteText }));
      formData.append("files[0]", file, file.name);

      fetchOptions = {
        method: "POST",
        body: formData
      };
    } else {
      fetchOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: noteText })
      };
    }

    const response = await fetch(discordWebhookUrl, fetchOptions);

    if (!response.ok) {
      const details = await response.text();
      console.error("Discord webhook error:", response.status, details);
      status.textContent = "Something went wrong. Please try again.";
      return;
    }

    status.textContent = "Sent.";
    input.value = "";
    fileInput.value = "";
    fileNameDisplay.textContent = "";
  } catch (error) {
    console.error("Discord webhook request failed:", error);
    status.textContent = "Something went wrong. Please try again.";
  } finally {
    sendButton.disabled = false;
  }
}

if (sendButton) {
  sendButton.addEventListener("click", sendNoteToDiscord);
}

/*
  DISABLED ORIGINAL FEATURES
  --------------------------
  The original arrays and functions for photos, messages, Spotify tracks,
  random selection, changing the background, showing the special message,
  card animation, the "another" button, Spotify button, and showMessage()
  on first load have intentionally been omitted from the active script.

  Keep the letter's <a href="...">...</a> link in the HTML. It is independent
  of this JavaScript.
*/
