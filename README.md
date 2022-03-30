# Twitch Video Adblock

This is a fork of the "Video Ad-Block, for Twitch" extension which added malicious code to their extension. This extension is forked from the 5.3.3 version which did not have the malicious code.

A few changes were made.

- Removed all donation images and links.
- Update extension icon.

### How It Works

The extension swaps the m3u8 playlist to the 480p version while ads are being played. Once the ads are complete, the video stream switches back to the previous quality.

The lengthy URL permission requirement remains in this version of the extension as those are Twitch telemetry/tracking domains.

The original readme can be found in the `OLD_README.md` file.
