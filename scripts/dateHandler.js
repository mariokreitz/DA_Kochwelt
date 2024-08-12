const dayNames = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];
const currentday = new Date().getDay();
export function getDayName() {
  return dayNames[currentday];
}

export function getDayNumber() {
  return currentday;
}
