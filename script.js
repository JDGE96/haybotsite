/*
  ============================================================
  HAYLEA PICK-ME-UP — JAVASCRIPT
  ============================================================

  THIS is probably the most fun file to experiment with.

  JavaScript controls:
    - messages
    - random selection
    - background photos
    - changing the page when the button is clicked

  You can add as many messages and photos as you want.
  ============================================================
*/


/* ============================================================
   1. YOUR PHOTOS
   ============================================================

   Put your image files inside:

       photos/

   Then add their filenames below.

   IMPORTANT:
   The filename must match EXACTLY.

   Example:

       photos/sunset.jpg

   becomes:

       "photos/sunset.jpg"

   Supported formats in modern browsers:
       .jpg
       .jpeg
       .png
       .webp
       .gif

   You can use as many as you want.
   ============================================================ */

const photos = [
  "photos/default.jpg",

  // Add your own photos here:
  // "photos/sunset.jpg",
  // "photos/lake.jpg",
  // "photos/stars.jpg",
  // "photos/flowers.jpg",
  // "photos/rollercoaster.jpg",
];


/* ============================================================
   2. YOUR MESSAGES
   ============================================================

   Each message has four pieces:

       category
       emoji
       text
       subtext

   Example:

   {
     category: "MAKE ME LAUGH",
     emoji: "😂",
     text: "You have been sentenced to one mandatory smile.",
     subtext: "Failure to comply will result in aggressive kitten pictures."
   }

   Add a comma after every message EXCEPT the last one.
   ============================================================ */

const messages = [

  /* ----------------------------------------------------------
     💙 ENCOURAGEMENT
     ---------------------------------------------------------- */

  {
    category: "A LITTLE REMINDER",
    emoji: "💙",
    text: "You are doing better than you think you are.",
    subtext: "Give yourself some credit. Seriously."
  },

  {
    category: "KEEP GOING",
    emoji: "🌱",
    text: "You don't have to have everything figured out today.",
    subtext: "Just take the next little step."
  },

  {
    category: "YOU'VE GOT THIS",
    emoji: "💪",
    text: "A bad day is not a bad life.",
    subtext: "Tomorrow gets another chance."
  },

  {
    category: "FOR YOU",
    emoji: "✨",
    text: "You are allowed to rest without feeling guilty about it.",
    subtext: "Rest is not giving up."
  },

  {
    category: "REMEMBER",
    emoji: "🌤️",
    text: "The fact that today is hard doesn't mean you're failing.",
    subtext: "Some days are simply heavier than others."
  },


  /* ----------------------------------------------------------
     😂 FUNNY
     ---------------------------------------------------------- */

  {
    category: "IMPORTANT NEWS",
    emoji: "🚨",
    text: "This is your official reminder to stop bullying yourself.",
    subtext: "There is already enough negativity on the internet."
  },

  {
    category: "MEDICAL ADVICE",
    emoji: "🩺",
    text: "You appear to have a severe case of needing snacks.",
    subtext: "Treatment: acquire snacks immediately."
  },

  {
    category: "BREAKING NEWS",
    emoji: "📰",
    text: "Local woman remains ridiculously awesome despite questionable decisions.",
    subtext: "More at 11."
  },

  {
    category: "VERY SERIOUS",
    emoji: "🐸",
    text: "If everything feels overwhelming, imagine a frog wearing a tiny hat.",
    subtext: "You're welcome."
  },

  {
    category: "REMINDER",
    emoji: "😂",
    text: "You have survived 100% of your worst days so far.",
    subtext: "That's a pretty impressive win rate."
  },


  /* ----------------------------------------------------------
     🫶 KIND
     ---------------------------------------------------------- */

  {
    category: "JUST BECAUSE",
    emoji: "🫶",
    text: "You deserve kindness, including from yourself.",
    subtext: "Especially from yourself."
  },

  {
    category: "A LITTLE LIGHT",
    emoji: "🌷",
    text: "I hope something unexpectedly good finds you today.",
    subtext: "Even if it's something small."
  },

  {
    category: "YOU MATTER",
    emoji: "💛",
    text: "Your existence makes the world a little different.",
    subtext: "Don't underestimate that."
  },


  /* ----------------------------------------------------------
     ✝️ FAITH
     ---------------------------------------------------------- */

  {
    category: "A LITTLE FAITH",
    emoji: "✝️",
    text: "Be still, and know that I am God.",
    subtext: "Psalm 46:10"
  },

  {
    category: "A LITTLE FAITH",
    emoji: "🙏",
    text: "The Lord is near to the brokenhearted.",
    subtext: "Psalm 34:18"
  },

  {
    category: "A LITTLE FAITH",
    emoji: "🌿",
    text: "Cast all your anxiety on Him because He cares for you.",
    subtext: "1 Peter 5:7"
  },


  /* ----------------------------------------------------------
     🥹 PERSONAL-FEELING
     ---------------------------------------------------------- */

  {
    category: "FROM SOMEONE ROOTING FOR YOU",
    emoji: "💙",
    text: "Whatever today looks like, I hope you remember that someone is genuinely rooting for you.",
    subtext: "No expectations. Just a reminder."
  },

  {
    category: "ONE MORE THING",
    emoji: "🥹",
    text: "I hope you find at least one reason to smile today.",
    subtext: "And if not, come back and try again tomorrow."
  }

];


/* ============================================================
   3. KEEP TRACK OF THE LAST MESSAGE / PHOTO
   ============================================================ */

let lastMessageIndex = -1;
let lastPhotoIndex = -1;


/* ============================================================
   4. RANDOM NUMBER HELPER
   ============================================================

   This gives us a random number between 0 and the length
   of an array.

   Example:

       randomIndex(messages)

   might return:

       0
       4
       12
       etc.
   ============================================================ */

function randomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


/* ============================================================
   5. GET A RANDOM MESSAGE
   ============================================================

   This avoids immediately showing the exact same message
   twice in a row.
   ============================================================ */

function getRandomMessage() {

  let index;

  do {
    index = randomIndex(messages);
  }

  while (
    messages.length > 1 &&
    index === lastMessageIndex
  );

  lastMessageIndex = index;

  return messages[index];
}


/* ============================================================
   6. GET A RANDOM PHOTO
   ============================================================

   Same idea as messages — don't immediately repeat the
   previous photograph.
   ============================================================ */

function getRandomPhoto() {

  let index;

  do {
    index = randomIndex(photos);
  }

  while (
    photos.length > 1 &&
    index === lastPhotoIndex
  );

  lastPhotoIndex = index;

  return photos[index];
}


/* ============================================================
   7. CHANGE THE BACKGROUND PHOTO
   ============================================================ */

function changeBackground() {

  const background =
    document.getElementById("background");

  const newPhoto =
    getRandomPhoto();

  /*
    Change the background image.

    If you wrote:

      "photos/sunset.jpg"

    above, the browser loads:

      photos/sunset.jpg
  */

  background.style.backgroundImage =
    `url("${newPhoto}")`;
}


/* ============================================================
   8. DISPLAY A NEW MESSAGE
   ============================================================ */

function showMessage() {

  const item =
    getRandomMessage();

  /*
    Put the message information into the HTML.
  */

  document.getElementById("emoji").textContent =
    item.emoji;

  document.getElementById("category").textContent =
    item.category;

  document.getElementById("message").textContent =
    item.text;

  document.getElementById("subtext").textContent =
    item.subtext;


  /*
    Change the background at the same time.
  */

  changeBackground();


  /*
    Restart the little card animation.
  */

  const card =
    document.getElementById("card");

  card.classList.remove("pop");

  /*
    This forces the browser to restart the animation.
  */

  void card.offsetWidth;

  card.classList.add("pop");
}


/* ============================================================
   9. BUTTON
   ============================================================

   When the button is clicked:

       new message
       +
       new photo
   ============================================================ */

document
  .getElementById("another")
  .addEventListener(
    "click",
    showMessage
  );


/* ============================================================
   10. FIRST LOAD
   ============================================================

   Show a random message and photo immediately when the
   webpage opens.
   ============================================================ */

showMessage();
