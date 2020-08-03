# HackUTD Organization Site

Code for the website that keeps track of all past HackUTD-organized events
and related organization history.

## Project Structure
This project uses [Gridsome](https://gridsome.org/), a Vue.js-based static site generator. This allows us to easily change the *information* on the site without editing any code. This easy-to-change info is in the `data` directory.

This project uses Tailwind CSS for most of its styles.

## Development
First install all of the necessary dependencies with `npm install`.

To start the local dev server, run `npm run develop`. By default, the site can be accessed at `http://localhost:8080`.

### Aside: Data Loading Caveat
If the local dev server is being run while changes to the data directory are
made, the dev server must be restarted to build generated page content such
as officer descriptions or event information.

A fix for this is in the works.

## Deployment
The site can be built locally using `npm run build`. This will build the site and place it into a folder named `dist` that can be deployed to any static web hosting service.

To deploy it to Github Pages, simply push to `master`. [This Github Action](.github/workflows/deploy.yml) will automatically deploy it.

Because `master` is automatically deployed, be careful about pushing directly to it! Make a new branch and a PR for large changes.