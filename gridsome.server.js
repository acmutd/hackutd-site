const XLSX = require('xlsx');

const DATA_PATH = 'data/organizers.xlsx';

const ORGANIZERS_SHEET_NAME = 'Organizers';
const WORKSHOPS_SHEET_NAME = 'Workshops';
const EVENTS_SHEET_NAME = 'Events';

module.exports = function (api) {
  const workbook = XLSX.readFile(DATA_PATH);
  const organizers = XLSX.utils.sheet_to_json(workbook.Sheets[ORGANIZERS_SHEET_NAME], { raw: true, defval: null });
  const events = XLSX.utils.sheet_to_json(workbook.Sheets[EVENTS_SHEET_NAME], { raw: true, defval: null });
  const workshops = XLSX.utils.sheet_to_json(workbook.Sheets[WORKSHOPS_SHEET_NAME], { raw: true, defval: null });

  api.loadSource(({ addCollection }) => {
    const organizerCollection = addCollection('Organizers');
    organizers.forEach((organizer, index) => {
      organizerCollection.addNode({
        id: index,
        ...organizer,
      });
    });
    const eventsCollection = addCollection('HackathonEvents');
    events.forEach((event, index) => {
      eventsCollection.addNode({
        id: index,
        ...event,
      });
    });
    const workshopsCollection = addCollection('Workshops');
    workshops.forEach((workshop, index) => {
      workshopsCollection.addNode({
        id: index,
        ...workshop,
      });
    });
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
}
