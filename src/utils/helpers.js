import { formatDistance, parseISO, differenceInDays } from "date-fns";

// We want to make this function work for both Date objects and strings (which come from Supabase)
export const subtractDates = (dateStr1, dateStr2) => {
  // Ensure dateStr1 and dateStr2 are strings before parsing
  const parsedDate1 =
    typeof dateStr1 === "string" ? parseISO(dateStr1) : dateStr1;
  const parsedDate2 =
    typeof dateStr2 === "string" ? parseISO(dateStr2) : dateStr2;
  return differenceInDays(parsedDate1, parsedDate2);
};

export const formatDistanceFromNow = (dateStr) => {
  // Ensure dateStr is a string before parsing
  const parsedDate = typeof dateStr === "string" ? parseISO(dateStr) : dateStr;
  return formatDistance(parsedDate, new Date(), {
    addSuffix: true,
  })
    .replace("about ", "")
    .replace("in", "In");
};

// Supabase needs an ISO date string. However, that string will be different on every render because the MS or SEC have changed, which isn't good. So we use this trick to remove any time
export const getToday = function (options = {}) {
  const today = new Date();

  // This is necessary to compare with created_at from Supabase, because it is not at 0.0.0.0, so we need to set the date to be END of the day when we compare it with earlier dates
  if (options?.end)
    // Set to the last second of the day
    today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    value
  );
