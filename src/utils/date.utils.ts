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

export const getDate = () => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
  };

  const formattedDate = date.toLocaleDateString("en-US", options);

  // Get the day number with ordinal suffix
  const day = date.getDate();
  const ordinalSuffix = (n: number) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  const finalFormattedDate = ordinalSuffix(day) + " " + formattedDate;
  return finalFormattedDate;
};
