export const formatDate = date => {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dec"
  ];
  let current_datetime = new Date(date);
  let formatted_date =
    current_datetime.getDate() + " " + months[current_datetime.getMonth()];
  return formatted_date;
};

export default null;
