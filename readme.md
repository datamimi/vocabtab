## What's this?

I'm pretty bad at making time to practise Urdu vocabulary as part of my daily routine, so I built a browser extension to help with that. This Chrome extension displays a randomly selected word when a new
browser tab is opened. The user is asked to type an English translation; if
correct, the user is redirected to Google. If incorrect, the tab closes and the
user is appropriately ashamed.

![Screenshot](https://github.com/datamimi/vocabtab/blob/main/extension/screenshot.png)

## How do I install this?

Create a new folder somewhere convenient on your Mac/PC

Download all the files in the 'extension' folder in this repo, to that folder

Fire up Chrome and go to 'Preferences -> Extensions'

Enable 'Developer Mode' by ticking the box at the top right of the page

Hit 'Load unpacked extension'

Select the folder you created in Step 1

This should now show up in your list of extensions

Happy language practicing!

## Is this case sensitive?

Nope! You can type your translation in upper or lower case, or both if you're
feeling fancy.

## How can I redirect to my usual home page?

If you'd rather you were redirected to your usual homepage after correctly
translating a word rather than to Google, edit the URL on line 16 of 'script.js'.

## How can I change the vocab or adapt this to work with different languages?

This extension is driven by `vocab.json`.

This is a file which stores the words and meanings for all the words used by this extension.
It's structured in a very specific way (the name of this structure is JSON) using
`{}` curly brackets around each word-translation pair, and `[]` square brackets around the whole
  vocabulary.

You can add, remove or modify this file to include a wider/narrower/different range of
words, in a language of your choice, as long as you don't mess with the underlying structure of the JSON.

The best way to open and edit the file is using a text editor like Notebook, Text Editor, Atom or Sublime.

Just make sure that you save it under its original name and extension, `vocab.json`.

## What about different scripts?

Maybe you'd like to use this script to learn Arabic, Russian, Urdu, Japanese, or another language
that uses a different script?

That's great! Just follow the same process as above by modifying `vocab.json` and paste
the words (even if they're in a different script) straight into the file.
