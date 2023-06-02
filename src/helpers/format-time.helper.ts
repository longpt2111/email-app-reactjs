export default function formatTime(
  dateString: string | Date,
  local = "vi-VN",
  hour?: boolean,
  options?: Intl.DateTimeFormatOptions
) {
  return hour
    ? new Date(dateString).toLocaleString(local, options)
    : new Date(dateString).toLocaleDateString(local, options);
}
