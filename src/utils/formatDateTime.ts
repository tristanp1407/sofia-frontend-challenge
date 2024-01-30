import { DateTime } from "luxon";

export const formatDateAndTime = (
  date?: string,
  time?: string
): string | null => {
  if (!date) {
    console.error("Invalid date string provided");
    return null;
  }

  let dateTime = DateTime.fromFormat(date, "yyyy-MM-dd");

  if (time) {
    const [hours, minutes] = time.split(":").map(Number);
    dateTime = dateTime.set({ hour: hours, minute: minutes });
  } else {
    dateTime = dateTime.endOf("day");
  }

  if (!dateTime.isValid) {
    console.error("Invalid date string provided");
    return null;
  }

  const now = DateTime.now();
  const diffInDays = now
    .startOf("day")
    .diff(dateTime.startOf("day"), "days").days;

  // Handle past dates (yesterday, x days ago)
  if (diffInDays > 0) {
    if (diffInDays === 1) {
      return "Yesterday";
    } else {
      return `${diffInDays} days ago`;
    }
  }

  // Handle future dates (tomorrow)
  if (diffInDays < 0) {
    if (diffInDays === -1) {
      let timeString = time ? `, ${dateTime.toFormat("HH:mm")}` : "";
      return "Tomorrow" + timeString;
    }
  }

  let formatString = "EEE, MMM dd";
  if (time) {
    formatString += ", h:mma";
  }

  return dateTime.toFormat(formatString);
};
