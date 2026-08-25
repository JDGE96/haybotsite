HAYLEA PICK-ME-UP — VERSION 2
==============================

This version adds rotating background photos.

FILES
-----

index.html
    Controls the basic webpage structure and visible wording.

style.css
    Controls colors, layout, glass card, background overlay,
    button, animations, and mobile appearance.

script.js
    Controls messages, randomization, and background photos.

photos/
    Put your photographs here.


ADDING PHOTOS
-------------

1. Put an image inside the "photos" folder.

Example:

    photos/sunset.jpg

2. Open script.js.

3. Find:

    const photos = [
      "photos/default.jpg",
    ];

4. Add your image:

    const photos = [
      "photos/default.jpg",
      "photos/sunset.jpg",
      "photos/lake.jpg",
      "photos/stars.jpg",
    ];

5. Save the file.

The site will randomly select from those photographs.


IMPORTANT
---------

The filename in script.js must exactly match the actual
filename.

This:

    photos/Sunset.jpg

is NOT necessarily the same as:

    photos/sunset.jpg


ADDING A MESSAGE
----------------

Inside the messages array, add:

{
  category: "YOUR CATEGORY",
  emoji: "😂",
  text: "Your main message goes here.",
  subtext: "Your smaller message goes here."
},

Do not forget the comma after the closing brace if another
message comes after it.


BACKGROUND APPEARANCE
--------------------

The background photo is controlled by .background in
style.css.

The overlay is controlled by .background-overlay.

If the photo is too dark, reduce the opacity values in the
overlay.

If the photo is too bright, increase them.


NFC
---

The NFC card only needs to contain the URL of the hosted
website.

For example:

https://yourwebsite.com/haylea/

The card does NOT need to contain the messages or photos.

That means you can change the website later without rewriting
the NFC card.


LOCAL TESTING
-------------

You can double-click index.html to test the site.

However, some browsers/security settings can restrict local
files from loading other local files.

If your photos don't appear when double-clicking index.html,
that's normal.

Use a simple local web server or upload the site to a web host.


IDEA FOR LATER
--------------

This project can be expanded with:

- category buttons
- hundreds of messages
- personal inside jokes
- daily messages
- Bible verses
- special rare messages
- music
- photo-specific messages
- a hidden surprise page
- a custom NFC landing page
