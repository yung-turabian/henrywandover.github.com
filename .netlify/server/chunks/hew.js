function sqlDate2Pretty(bad_str) {
  let tov_str = "";
  const parts = bad_str.split("-");
  switch (parts[1]) {
    case "01":
      tov_str = "January";
      break;
    case "02":
      tov_str = "Febuary";
      break;
    case "03":
      tov_str = "March";
      break;
    case "04":
      tov_str = "April";
      break;
    case "05":
      tov_str = "May";
      break;
    case "06":
      tov_str = "June";
      break;
    case "07":
      tov_str = "July";
      break;
    case "08":
      tov_str = "August";
      break;
    case "09":
      tov_str = "September";
      break;
    case "10":
      tov_str = "October";
      break;
    case "11":
      tov_str = "November";
      break;
    case "12":
      tov_str = "December";
      break;
    default:
      tov_str + "?";
  }
  let day = parts[2];
  if (day[0] === "0") {
    day = day[1];
  }
  tov_str = tov_str + " " + day + ", " + parts[0];
  return tov_str;
}
export {
  sqlDate2Pretty as s
};
