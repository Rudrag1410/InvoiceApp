interface ICardResponse {
   amount: string;
   date: string;
   invoiceNumber: string;
   owner: string;
   status: "paid" | "pending" | "draft";
}
export const cardData: ICardResponse[] = [
   {
      amount: "1,800.90",
      date: "19 Aug 2024",
      invoiceNumber: "RT3080",
      owner: "Jensen Huang",
      status: "paid",
   },
   {
      amount: "1,800.90",
      date: "19 Aug 2024",
      invoiceNumber: "RT3080",
      owner: "Jensen Huang",
      status: "draft",
   },
   {
      amount: "1,800.90",
      date: "19 Aug 2024",
      invoiceNumber: "RT3080",
      owner: "Jensen Huang",
      status: "pending",
   },
   {
      amount: "6,155.91",
      date: "31 Sep 2021",
      invoiceNumber: "XM9141",
      owner: "Alex Grim",
      status: "paid",
   },
   {
      amount: "102.04",
      date: "10 OCT 2024",
      invoiceNumber: "AA1449",
      owner: "Alysa Werner",
      status: "draft",
   },
   {
      amount: "102.04",
      date: "10 OCT 2024",
      invoiceNumber: "AA1449",
      owner: "Alysa Werner",
      status: "draft",
   },
];