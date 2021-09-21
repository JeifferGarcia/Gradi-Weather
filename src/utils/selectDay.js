const selectDay = (day) => {
  switch (day) {
    case 1:
      const monday = "Monday"
      return monday

      break;

    case 2:
      let tuesday = "Tuesday"
      return tuesday

      break;
    case 3:
      let wednesday = "Wednesday"
      return wednesday

      break;

    case 4:
      let thursday = "Thursday"
      return thursday

      break;

    case 5:
      let friday = "Friday"
      return friday

      break;

    case 6:
      let saturday = "Saturday"
      return saturday

      break;

    default:
      let sunday = "Sunday"
      return sunday

      break;
  }
}

export default selectDay;