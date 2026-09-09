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
  "photos/BabyDriver.jpg",
  "photos/fnaf.jpg",
  "photos/fox1.jpg",
  "photos/stardewvalley.jpeg",
  "photos/CobraKai.jpg",
  "photos/HIMYM1.jpg",
  "photos/HIMYM2.jpg",
  "photos/HIMYM3.jpg",
  "photos/HIMYM4.jpg",
  "photos/JohnWick.jpg",
  "photos/ST.jpg",

  // Add your own photos here:
  // "photos/sunset.jpg",
  // "photos/lake.jpg",
  // "photos/stars.jpg",
  // "photos/flowers.jpg",
  // "photos/rollercoaster.jpg",
];


/* ============================================================
   3. SPOTIFY SONGS
   ============================================================

   Add Spotify tracks here.

   To add another song later, copy one of the blocks below
   and replace the title, artist, and Spotify URL.
   The button will randomly choose from this list.
   ============================================================ */

const spotifyTracks = [
  
/*

  {
    title: "",
    artist: "",
    url: ""
  },

*/
/* AVATAR */
  {
    title: "Don't Go In The Forest",
    artist: "Avatar",
    url: "https://open.spotify.com/track/62JAxMtxSgFMUlBgjmi23H"
  },
  
  {
    title: "Bloody Angel",
    artist: "Avatar",
    url: "https://open.spotify.com/track/2cQkslUQT9nyvmMNTftd4S?si=c514b6880a0d4cfa"
  },
  
  {
    title: "Let It Burn",
    artist: "Avatar",
    url: "https://open.spotify.com/track/0tPkGeymvg02oRCbrEHr2l?si=bcfe298f80b14554"
  },

  {
    title: "Hail the Apocalypse",
    artist: "Avatar",
    url: "https://open.spotify.com/track/0PMxzdeOobkZzeSGVV8jo9?si=7b3d9dd754db4e13"
  },

/* METALLICA */
  {
    title: "One",
    artist: "Metallica",
    url: "https://open.spotify.com/track/0LAcM6I7ijW4VVW0aytl1t?si=d17a4c6362fb4a03"
  },
  
  {
    title: "For Whom The Bell Tolls (Remastered)",
    artist: "Metallica",
    url: "https://open.spotify.com/track/51YZAJhOwIC5Gg3jMbAmhZ"
  },

 /* AVENGED SEVENFOLD */
  {
    title: "A Little Piece of Heaven",
    artist: "Avenged Sevenfold",
    url: "https://open.spotify.com/track/1BLfQ6dPXmuDrFmbdfW7Jl?si=39149737142f4e2a"
  },

/* THE HEATHERS */

  {
    title: "Freeze Your Brain",
    artist: "Kevin Murphy, Laurence O'Keefe, Barrett Wilbert Weed, Ryan McCartan",
    url: "https://open.spotify.com/track/1IKnbVLnSCwOPFAurjs0vc"
  },

  {
    title: "Big Fun",
    artist: "Kevin Murphy, Laurence O'Keefe, Barrett Wilbert Weed, Ryan McCartan",
    url: "https://open.spotify.com/track/2UXnpMyr1l7OixcCtT6dJK?si=75ef198bdd04454b"
  },

/* BADFLOWER */



/* GHOST */

  {
    title: "Mary On A Cross",
    artist: "Ghost",
    url: "https://open.spotify.com/track/2HZLXBOnaSRhXStMLrq9fD?si=88c619fd6b4d473c"
  },

  {
    title: "Absolution",
    artist: "Ghost",
    url: "https://open.spotify.com/track/74CoPm5QmWUk8tne5GfMRc?si=6ec2d83833734a31"
  },


/* HOLLYWOOD UNDEAD */

  {
    title: "Everywhere I Go",
    artist: "Hollywood Undead",
    url: "https://open.spotify.com/track/1czaCgWLWgqp0eRIZ0BcXh?si=fe93842621214b17"
  },

  {
    title: "Riot",
    artist: "Hollywood Undead",
    url: "https://open.spotify.com/track/5toE2GI4iMIpelQtzKNT9Q?si=bb9e8bc5048e4cd0"
  },

/* THREE DAYS GRACE */

  {
    title: "Never Too Late",
    artist: "Three Days Grace",
    url: "https://open.spotify.com/track/0p1E3mQ8j5L1AMGuvGoYRR?si=b8351cadb530411c"
  },

  {
    title: "Break",
    artist: "Three Days Grace",
    url: "https://open.spotify.com/track/4urxRqBRiaH0i20OKBsgxc?si=16d6be8ce7d744d4"
  },

/* OTHERS */  
  {
    title: "You're Gonna Go Far, Kid",
    artist: "The Offspring",
    url: "https://open.spotify.com/track/6TfBA04WJ3X1d1wXhaCFVT?si=d8d2814d480c4625"
  },

    {
    title: "Killer Queen",
    artist: "Queen",
    url: "https://open.spotify.com/track/4mKlzy0qaK1c2Qw5e2VqpF?si=a98f3c4b7ba14afd"
  },

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
    subtext: "I'm always rooting for you"
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
    text: "Today might be bad, but tomorrow could be better",
    subtext: "Tomorrow gets another chance."
  },

  {
    category: "FOR YOU",
    emoji: "✨",
    text: "You are never alone you will always have someone in your corner",
    subtext: "I'll always be here for you"
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
    category: "MEDICAL ADVICE",
    emoji: "🩺",
    text: "You appear to have a severe case of needing snacks.",
    subtext: "Treatment: Chex Mix with a side of M&Ms"
  },

  {
    category: "BREAKING NEWS",
    emoji: "📰",
    text: "Local woman remains silly goose, and its needed back at the pond",
    subtext: "More at 11."
  },

  {
    category: "VERY SERIOUS",
    emoji: "🐸",
    text: "If everything feels overwhelming, imagine a frog wearing a tiny hat.",
    subtext: "Hes a fancy frog"
  },

  {
    category: "REMINDER",
    emoji: "😂",
    text: "You have survived 100% of your worst days so far.",
    subtext: "That's a pretty impressive win rate."
  },

  /*
   {
    category: "",
    emoji: "",
    text: "",
    subtext: ""
  },
  /*


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

  {
    category: "CHERISHED",
    emoji: "💕",
    text: "You are valued and loved by many",
    subtext: "I will always appreciate even if you dont believe it"
  },

  {
    category: "HUMBLE YOURSELF",
    emoji: "🥘",
    text: "You are NOT a man that owns 5 Ovens",
    subtext: "So always strive to be better!"
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
    subtext: "No expectations. Just a reminder. From me"
  },

  {
    category: "ONE MORE THING",
    emoji: "🥹",
    text: "I hope you find at least one reason to smile today.",
    subtext: "And if not, come back and try again tomorrow."
  },

  {
    category: "CHIN UP",
    emoji: "☕",
    text: "Keep your head up high,  you got this",
    subtext: "Your name could be Swarly after all"
  },

  {
    category: "REMEMBER",
    emoji: "🥋",
    text: "You wanna take this inside??",
    subtext: "I COULD EAT 👺"
  },

  /*
  {
    category: "",
    emoji: "",
    text: "",
    subtext: ""
  },
  /*

    /* ----------------------------------------------------------
     🥹 Fox-and-Wolf
     ---------------------------------------------------------- */
 {
    category: "REMINDER",
    emoji: "🌂",
    text: "You will always have someone here by your side, through every major problem",
    subtext: "🫡 Major Problem 🫡"
  },

  {
    category: "IM HERE",
    emoji: "🐺",
    text: "This is your sign to call/message to feel better",
    subtext: "I Love you, ok?"
  },

  {
    category: "COULD BE WORSE",
    emoji: "🏕️",
    text: "You think your day is going bad?",
    subtext: "Be happy you are not a man camping in secret"
  },

  {
    category: "LEGENDARY",
    emoji: "🤵",
    text: "Things could be Legend..",
    subtext: "Wait for it..."
  },

  {
    category: "A LITTLE LAUGH",
    emoji: "🧁",
    text: "I like you",
    subtext: "Have a cupcake!"

  },

  {
    category: "YOU CAN DO IT",
    emoji: "🏒",
    text: "Just know it is always possible, you can do it",
    subtext: "HELL YEAH, FUCK YEAH"
  }

];


/* ============================================================
   3. KEEP TRACK OF THE LAST MESSAGE / PHOTO
   ============================================================ */

let lastMessageIndex = -1;
let lastPhotoIndex = -1;
let lastSpotifyIndex = -1;


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
   8. SPOTIFY RANDOM SONG
   ============================================================ */

function getRandomSpotifyTrack() {

  let index;

  do {
    index = randomIndex(spotifyTracks);
  }

  while (
    spotifyTracks.length > 1 &&
    index === lastSpotifyIndex
  );

  lastSpotifyIndex = index;

  return spotifyTracks[index];
}


function pickSpotifySong() {

  if (spotifyTracks.length === 0) {
    return;
  }

  const song = getRandomSpotifyTrack();

  document.getElementById("spotifyResult").textContent =
    `🎵 ${song.title} — ${song.artist}`;

  /*
    Opening the normal Spotify track URL lets Spotify
    handle the link. If the Spotify app is installed,
    the device/browser may hand the link to the app.
    Otherwise it opens Spotify on the web.
  */

  window.open(song.url, "_blank");
}


/* ============================================================
   9. DISPLAY A NEW MESSAGE
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
   10. BUTTON
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

  
/*
   Spotify button: pick a random song and open it in Spotify.
*/
document
  .getElementById("spotifyRandom")
  .addEventListener(
    "click",
    pickSpotifySong
  );

/* ============================================================
   11. FIRST LOAD
   ============================================================

   Show a random message and photo immediately when the
   webpage opens.
   ============================================================ */

showMessage();
