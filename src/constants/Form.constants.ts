import { SelectDropDownProps } from "components/select";


export const selectOptions: SelectDropDownProps[] = [
   {
      value: "Net 1 Day",
      label: "Net 1 Days"
   },
   {
      value: "Net 7 Days",
      label: "Net 7 Days"
   },
   {
      value: "14 Days",
      label: "Net 14 Days"
   },
   {
      value: "30 Days",
      label: "Net 30 Days"
   },
];


export const Label = {
   STREET_ADDRESS: "Street Address",
   CITY: "City",
   POST_CODE: 'PostCode',
   COUNTRY: 'Country',
   CLIENT_NAME: 'Client Name',
   DESCRIPTION: 'Description',
   ITEM_NAME: 'ItemName',
   QTY: 'Qty.',
   PRICE: 'Price',
   TOTAL: 'Total',
   PAYMENT_TERMS: "Payment Terms",
   INVOICE_DATE: 'Invoice Date',
}

export const FormInputs = {
   FROM_STREET_ADDRESS: "fromStreetAddress",
   FROM_CITY: "fromCity",
   FROM_POST_CODE: 'fromPostCode',
   FROM_COUNTRY: 'fromCountry',
   CLIENT_NAME: 'clientName',
   TO_STREET_ADDRESS: 'toStreetAddress',
   TO_CITY: 'toCity',
   TO_POST_CODE: 'toPostCode',
   TO_COUNTRY: 'toCountry',
   DESCRIPTION: 'description',
   ITEM_NAME: 'itemName',
   QTY: 'qty',
   PRICE: 'price',
   TOTAL_AMOUNT: 'totalAmount',
   DATE: 'date',
   PAYMENT: 'payment',
   STATUS: 'status',

}

export interface FormInputsType {
   FROM_STREET_ADDRESS: string;
   FROM_CITY: string;
   FROM_POST_CODE: string;
   FROM_COUNTRY: string;
   CLIENT_NAME: string;
   TO_STREET_ADDRESS: string;
   TO_CITY: string;
   TO_POST_CODE: string;
   TO_COUNTRY: string;
   DESCRIPTION: string;
   ITEM_NAME: string;
   QTY: string;
   PRICE: string;
   TOTAL_AMOUNT: string;
   DATE: string;
   PAYMENT: string;
   STATUS: string;
}