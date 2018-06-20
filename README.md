# Caderno
Caderno is an UI5 web based application to view and share notes. This
is inspired in the great [devdocs](http://devdocs.io) but for personal
notes. The notes are stored in markdown.

# Status
Work in progress. Not yet usable.

# How it works
Caderno is built in [OpenUI5](http://openui5.org)

# Features
 - Fast search
 - Support for code highlighting in code snippets
 - Notes written in plain text or markdown
 - Works offline
 - Save notes to google drive and in browser local storage

# Running Caderno locally
 1. Install all prequisites (instructions below)
 2. `cd` into the root Caderno folder.
 3. `npm install`
 4. `bower install`
 5. Download openui5 and install it into a local folder. Example:
    `~/lib/openui5-1.54.4`.
 6. Move to the webapp folder: `cd webapp`
 7. Link `resources` inside `webapp` to the openui5 resources folder:
    `ln -s -T ~/lib/openui5-1.54.4/resources ./resources`
 8. Link `node_modules` inside webapp to the node_modules folder:
    e.g. `ln -s -T ~/projects/caderno/node_modules ./node_module`
 7. Link `bower_components` inside webapp to your `bower_components` folder. e.g.: `cd webapp && ln -s -T ~/projects/caderno/bower_components ./bower_components`
 8. Open a local server, for example with python3. `python3 -m http.server`
 9. Compile the project. Run `tsc` at the root.
 9. Open browser at http://127.0.0.1:8000/webapp/

## Prerequisites to running Caderno locally
 1. Install `node` (recommend doing it with `nvm`)
 2. Install `bower`: `sudo npm install -g bower`
 3. Install `typescript`: `sudo npm install -g typescript`
