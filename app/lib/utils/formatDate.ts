export default function formatDate(date: string, short: boolean = false) {
  if (short) {
    return new Date(date)
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
      })
      .toString()
      .toUpperCase();
  } else {
    return new Date(date)
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .toString()
      .toUpperCase();
  }
}
