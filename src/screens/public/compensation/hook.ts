import { dataTypes } from "../../../components/FlatList";

export const useHooks = () => {
  const data: dataTypes[] = [
    {
      id: "1",
      title: "Subtracted Earnings",
      data: [
        { description: "Tardiness", value: "0.00" },
        { description: "Tardiness2", value: "1.00" },
        { description: "Tardiness3", value: "2.00" },
      ],
    },
    {
      id: "2",
      title: "Additional Earnings",
      data: [{ description: "Undertime", value: "0.00" }],
    },
  ];

  return { data };
};
