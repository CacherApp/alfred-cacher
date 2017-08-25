# alfred-cacher
> Alfred Workflow for finding a snippet from your [Cacher](https://www.cacher.io) library. 

![Demo](/media/demo.gif "Demo")

## Prerequisites

- [Alfred 3 for Mac](https://www.alfredapp.com/)

- [Node.js](https://nodejs.org/en/download/)

- You are registered as a user at [cacher.io](https://www.cacher.io). Cacher is a code snippet organizer for 
software developers. [Sign up for a free account](https://www.cacher.io).

## Installation

### Step 1

Run the following shell command from a Terminal window.

```bash
npm install --global alfred-cacher
```

### Step 2

1. Open Cacher and click on the "Apps" icon in the top bar.
2. Note the API Key and Token in the footer.

![Get API Key and Token](/media/get-key-token.gif "Get API Key and Token")

### Step 3

1. Open Alfred Preferences. 
2. Click on the "Workflows" tab and find Cacher.
3. Click on the "Configure workflow and variables" button.
4. Add the following under Workflow Environment Variables:
    - `CACHER_API_KEY`: `[API Key from Step 2]`
    - `CACHER_API_TOKEN`: `[API Token from Step 2]`
5. Click "Save"

![Set Environment Variables](/media/alfred-env-vars.gif "Set Environment Variables")

## Usage

In Alfred, type `snip [keywords]` and wait for results to return. Select a snippet and press <kbd>Enter</kbd> to copy
its contents to the clipboard.

## Libraries Used

- [alfy](https://github.com/sindresorhus/alfy) - Create Alfred Workflows using Node
- [Fuse.js](https://github.com/krisk/Fuse) - Lightweight fuzzy-search

