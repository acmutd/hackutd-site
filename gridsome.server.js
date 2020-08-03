const XLSX = require('xlsx');

const DATA_PATH = 'data/organizers.xlsx';

const ORGANIZERS_SHEET_NAME = 'Organizers';
const WORKSHOPS_SHEET_NAME = 'Workshops';
const EVENTS_SHEET_NAME = 'Events';

/**
 * Removes spaces from a string and convert it to lowercase.
 *
 * @param {String} title A string to convert into a slug
 */
function convertToSlug(title) {
  return title.toLowerCase().replace(/\s/g, '-')
}

module.exports = function (api) {
  const workbook = XLSX.readFile(DATA_PATH);
  const organizers = XLSX.utils.sheet_to_json(workbook.Sheets[ORGANIZERS_SHEET_NAME], { raw: true, defval: '' });
  const events = XLSX.utils.sheet_to_json(workbook.Sheets[EVENTS_SHEET_NAME], { raw: true, defval: '' });
  const workshops = XLSX.utils.sheet_to_json(workbook.Sheets[WORKSHOPS_SHEET_NAME], { raw: true, defval: '' });

  api.loadSource(({ addCollection }) => {
    const organizerCollection = addCollection('Organizer');
    organizers.forEach((organizer, index) => {
      organizerCollection.addNode({
        id: index,
        slug: convertToSlug(organizer.name),
        ...organizer,
      });
    });
    const eventsCollection = addCollection('Event');
    events.forEach((event, index) => {
      eventsCollection.addNode({
        id: index,
        ...event,
      });
    });
    const workshopsCollection = addCollection('Workshop');
    workshops.forEach((workshop, index) => {
      workshopsCollection.addNode({
        id: index,
        ...workshop,
      });
    });
  });
};
