# HackUTD Organization Site

Code for the website that keeps track of all past HackUTD-organized events
and related organization history.

## Development
Prerequisites:
- NPM or an equivalent package manager/script runner

This project uses Gridsome, a Vue.js-based static site generator. The CLI is
already installed locally, so one should only have to use the following commands

To build the site, run `npm run build`. This will build the site and place it
into a folder named `dist` that can be deployed to any static web hosting
service.

To start the local dev server, run `npm run develop`. By default, the site can
be accessed at `http://localhost:8080`.
This project uses Tailwind CSS for most of its styles.

### Aside: Data Loading Caveat
If the local dev server is being run while changes to the data directory are
made, the dev server must be restarted to build generated page content such
as officer descriptions or event information.

A fix for this is in the works.
