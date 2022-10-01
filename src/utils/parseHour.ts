export function parseHour(id: string): string {
  let parsedString: string = ""

  switch(id) {
    case "1":
      parsedString = "12:00:00.000Z"
      break;
    case "2":
      parsedString = "12:30:00.000Z"
      break;
    case "3":
      parsedString = "13:00:00.000Z"
      break;
    case "4":
      parsedString = "13:30:00.000Z"
      break;
    case "5":
      parsedString = "18:00:00.000Z"
      break;
    case "6":
      parsedString = "18:30:00.000Z"
      break;
    case "7":
      parsedString = "19:00:00.000Z"
      break;
    case "8":
      parsedString = "19:30:00.000Z"
      break;
    case "9":
      parsedString = "20:00:00.000Z"
      break;
    default:
      return "00:00:00.000Z";
  }

  return parsedString;
}