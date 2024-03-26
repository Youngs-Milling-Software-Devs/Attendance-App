import { AgendaSchedule } from "react-native-calendars";

interface MarkedDates {
  [date: string]: {
    marked?: boolean;
    dotColor?: string;
    color?: string;
    selected?: boolean;
    selectedColor?: string;
  };
}

export const useHooks = () => {
  const markDates: MarkedDates = {
    "2024-03-18": {
      marked: true,
      selected: true,
      selectedColor: "#50cebb",
      dotColor: "transparent",
    },
    "2024-03-19": {
      marked: true,
      selected: true,
      selectedColor: "#50cebb",
      dotColor: "transparent",
    },
    "2024-03-20": {
      marked: true,
      selected: true,
      selectedColor: "#50cebb",
      dotColor: "transparent",
    },
    "2024-03-21": {
      marked: true,
      selected: true,
      selectedColor: "#50cebb",
      dotColor: "transparent",
    },
  };

  const items: AgendaSchedule = {
    "2024-03-18": [{ name: "Holiday", height: 50, day: "Monday" }],
    "2024-03-19": [{ name: "Holiday", height: 50, day: "Monday" }],
    "2024-03-20": [{ name: "Absent", height: 50, day: "Tuesday" }],
    "2024-03-21": [{ name: "Leave", height: 50, day: "Wednesday" }],
  };

  return { markDates, items };
};
