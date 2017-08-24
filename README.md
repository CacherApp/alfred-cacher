# alfred-cacher
> Alfred Workflow for finding a snippet from your [Cacher](https://www.cacher.io) library. 

![Demo](/media/demo.gif "Demo")

## Prerequisites

- [Alfred 3 for Mac](https://www.alfredapp.com/)

- You have registered as a user at [cacher.io](https://www.cacher.io). Cacher is a code snippet organizer for 
software developers. [Click here to sign up for a free account](https://www.cacher.io).

## Install

### Step 1

```bash
$ npm install --global @cacherapp/alfred-cacher
```

### Step 2

Open Cacher and click on the "Apps" icon in the top bar:

![Get API Key and Token](/media/get-key-token.gif "Get API Key and Token")

Note the API Key and Token in the footer.  

### Step 3

[screen]

1. Open Alfred Preferences. 
2. Click on the "Workflows" tab and find Cacher.
3. Click on the "Configure workflow and variables" button.
4. Add the following under Workflow Environment Variables:
    - `CACHER_API_KEY`: `[API Key from Step 2]`
    - `CACHER_API_TOKEN`: `[API Token from Step 2]`
5. Click "Save"

## Usage

In Alfred, type `snip [keywords]` and wait for results to return. Select a snippet and press <kbd>Enter</kdd> to copy
its contents to the clipboard.

## Libraries Used

- [alfy](https://github.com/sindresorhus/alfy) - Create Alfred Workflows using Node
- [Fuse.js](https://github.com/krisk/Fuse) - Lightweight fuzzy-search

