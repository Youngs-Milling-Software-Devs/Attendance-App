import { dataTypes } from "../../../components/FlatList";

export const useHooks = () => {
  const data: dataTypes[] = [
    {
      id: "1",
      title: "Subtracted Earnings",
      data: [
        { key: 1, description: "Tardiness", value: "0.00" },
        { key: 2, description: "Tardiness2", value: "1.00" },
        { key: 3, description: "Tardiness3", value: "2.00" },
      ],
    },
    {
      id: "2",
      title: "Additional Earnings",
      data: [{ key: 4, description: "Undertime", value: "0.00" }],
    },
  ];

  return { data };
};
