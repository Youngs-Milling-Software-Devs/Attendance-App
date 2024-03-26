import { useState } from "react";
import { dataTypes } from "../../../components/FlatList";

export const useHooks = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [visible, setVisible] = useState(false);

  const [checked, setChecked] = useState("first");

  const data: dataTypes[] = [
    {
      id: "1",
      title: "Subtracted Earnings",
      data: [{ description: "Tardiness", value: "0.00" }],
    },
    {
      id: "2",
      title: "Additional Earnings",
      data: [{ description: "SIL", value: "0.00" }],
    },
    {
      id: "3",
      title: "EARNINGS",
      data: [
        { description: "Basic", value: "5,000.00" },
        { description: "Holiday Pay", value: "0.00" },
        { description: "Overtime Pay", value: "0.00" },
        { description: "Commision", value: "0.00" },
        { description: "Allowances", value: "5,000.00" },
        { description: "Back Pay", value: "0.00" },
      ],
    },
    {
      id: "4",
      title: "",
      data: [{ description: "Gross", value: "10,000.00" }],
    },
    {
      id: "5",
      title: "DEDUCTION",
      data: [
        { description: "SSS", value: "600.00" },
        { description: "Pag-ibig", value: "200.00" },
        { description: "Philhealth", value: "0.00" },
        { description: "SSS Loan", value: "0.00" },
        { description: "Pag-ibig Loan", value: "0.00" },
        { description: "Tax", value: "0.00" },
        { description: "Salary Loan", value: "0.00" },
        { description: "Savings", value: "2,500.00" },
        { description: "Others", value: "0.00" },
      ],
    },
    {
      id: "6",
      title: "",
      data: [
        { description: "Total Deductions", value: "1,500.00" },
        { description: "Other Allowances", value: "1,000.00" },
      ],
    },
    {
      id: "7",
      title: "",
      data: [{ description: "Net Earnings", value: "9,500.00" }],
    },
    {
      id: "8",
      title: "Physical Working Hours",
      data: [{ description: "Net Earnings", value: "9,500.00" }],
    },
  ];

  const items = [
    { label: "Item 1", value: "item1" },
    { label: "Item 2", value: "item2" },
    { label: "Item 3", value: "item3" },
  ];

  return {
    data,
    selectedItem,
    setSelectedItem,
    visible,
    setVisible,
    checked,
    setChecked,
    items,
  };
};
