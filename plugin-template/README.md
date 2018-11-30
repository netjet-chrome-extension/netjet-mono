

# SCE Plugin Template

<i> Use this repo as a template for creating your own Suman Chrome Extension plugin. </i>

# Basic info

You can clone this project, make your changes, then push to Github, and 
Github can host your plugin.

To load your plugin from Github, you use a link like so:

https://rawgit.com/sumanjs/sce-plugin-template/master/dist/plugin.js

in general terms, that is:

`https://rawgit.com/<org>/<repo>/<branch-or-commithash>/dist/plugin.js`

Using the branchname (like "master") is fine since SCE will reload your plugin
from the URL everytime the app is loaded - caching is off in the browser, since
SCE uses `fetch(url, {cache:'no-store'})`.

However, caching might be on from the Github standpoint, and in that case, use the commit hash or develop
your plugin on localhost before publishing.

# Requirements

1. Install typecript `npm install -g typescript`
2. Install webpack `npm install -g webpack`


# Devloping your plugin

To develop your own plugin, do it locally.

1. Clone this project using https.

2. Use `src/index.ts` as the entrypoint of your plugin - you must export `SCEPlugin` as a class from index.ts.

3. Build your plugin using `./scripts/build.sh`

4. Locally, serve your plugin to SCE, using `./scripts/dev.sh`

5. Open SCE using Chrome, and then on the homepage click settings, paste the URL to your plugin and click load plugin.

6. Your plugin can be hosted locally with localhost, or on Github or Gitlab.


# Watch this video

See this video for a step-by-step guide to developing your own plugin for SCE:

[tbd]






