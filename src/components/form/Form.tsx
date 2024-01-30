import styles from "./form.module.scss";
import Input from "components/input";
import Button from "components/button";
import { getIcons } from "assests";
import { IconsType } from "assests/types";
import CustomSelect from "components/select/CustomSelect";
import { useState } from "react";
import FormFooter from "./FormFooter";

interface FormProps {
  DrawerToggler: () => void;
}
const Form = ({ DrawerToggler }: FormProps): JSX.Element => {
  const newItem = {
    qty: "",
    price: "",
    total: "",
  };

  const [item, setItems] = useState([newItem]);

  const handleAddItemRow = () => {
    setItems((prev) => [...prev, newItem]);
  };

  const handleDeleteItem = (itemToDelete: any) => {
    setItems((prev) => prev.filter((item) => item !== itemToDelete));
  };

  const selectOptions = [
    { value: "Net 1 Day", label: "Net 1 Days" },
    { value: "Net 7 Days", label: "Net 7 Days" },
    { value: "14 Days", label: "Net 14 Days" },
    { value: "30 Days", label: "Net 30 Days" },
  ];

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.billInfo}>
          <p>Bill From</p>
          <div className={styles.input}>
            <Input label="Street Address" />
            <div className={styles.qty}>
              <Input label="City" />
              <Input label="Post Code" />
            </div>
            <Input label="Country" />
          </div>
        </div>
        <div className={styles.billInfo}>
          <p>Bill To</p>
          <div className={styles.input}>
            <Input label="Client’s Name" />
            <Input label="Street Address" />
            <div className={styles.qty}>
              <Input label="City" />
              <Input label="Post Code" />
            </div>
            <Input label="Country" />
            <Input label="Invoice Date" type="date" />
            <CustomSelect options={selectOptions} label="Payment Terms" />
            <Input label="Project Description" />
          </div>
        </div>

        <div className={styles.billInfo}>
          <p>Item List</p>
          <div className={styles.input}>
            <Input label="Item Name" />
            {item.map((item, index) => (
              <div className={styles.qty} key={index}>
                <Input label="Qty." />
                <Input label="Price" />
                <Input label="Total" />
                <div
                  onClick={() => handleDeleteItem(item)}
                  className={styles.icon}
                >
                  {getIcons(IconsType.delete)}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button
          variant="light"
          onClick={handleAddItemRow}
          classname={styles.add}
        >
          + Add New Item
        </Button>
      </div>
      <div className={styles.shadow}></div>
      <FormFooter DrawerToggler={DrawerToggler} />
    </div>
  );
};
export default Form;
