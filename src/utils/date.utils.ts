export function formatTimestampToDate(timestamp: number): string {
  const date = new Date(timestamp);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Format the date
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  // Get the day of the month
  const day = date.getDate();

  // Add the appropriate suffix for the day
  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";

  // Return the date in "Month daySuffix, year" format
  return formattedDate.replace(/\d+/, day + suffix);
}

export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};
