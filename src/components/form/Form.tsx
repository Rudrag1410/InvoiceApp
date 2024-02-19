import styles from "./form.module.scss";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { getIcons } from "assests";
import { IconsType } from "assests/types";
import CustomSelect from "components/select";
import Input from "components/input";
import Button, { Variant } from "components/button";
import FormFooter from "./FormFooter";

import {
  FormInputs,
  FormInputsType,
  Label,
  selectOptions,
} from "constants/Form.constants";

interface FormProps {
  handleDrawerToggler: () => void;
  setCardData: React.Dispatch<React.SetStateAction<Array<FormInputsType>>>;
}

const Form = ({ handleDrawerToggler, setCardData }: FormProps): JSX.Element => {
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

  const { handleSubmit, register, control } = useForm();

  const onSubmit = (data: any) => {
    handleDrawerToggler();
    const formData = Object.values(data);
    setCardData(formData);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <div className={styles.billInfo}>
        <p>Bill From</p>
        <div className={styles.input}>
          <Input
            label={Label.STREET_ADDRESS}
            {...register(FormInputs.FROM_STREET_ADDRESS, { required: true })}
            id={FormInputs.FROM_STREET_ADDRESS}
          />

          <div className={styles.qty}>
            <Input
              label={Label.CITY}
              {...register(FormInputs.FROM_CITY)}
              id={FormInputs.FROM_CITY}
            />
            <Input
              label={Label.POST_CODE}
              {...register(FormInputs.FROM_POST_CODE)}
              id={FormInputs.FROM_POST_CODE}
            />
          </div>
          <Input
            label={Label.COUNTRY}
            {...register(FormInputs.FROM_COUNTRY)}
            id={FormInputs.FROM_COUNTRY}
          />
        </div>
      </div>

      <div className={styles.billInfo}>
        <p>Bill To</p>
        <div className={styles.input}>
          <Input
            label={Label.CLIENT_NAME}
            {...register(FormInputs.CLIENT_NAME)}
            id={FormInputs.CLIENT_NAME}
          />
          <Input
            label={Label.STREET_ADDRESS}
            {...register(FormInputs.TO_STREET_ADDRESS)}
            id={FormInputs.TO_STREET_ADDRESS}
          />
          <div className={styles.qty}>
            <Input
              label={Label.CITY}
              {...register(FormInputs.TO_CITY)}
              id={FormInputs.TO_CITY}
            />
            <Input
              label={Label.POST_CODE}
              {...register(FormInputs.TO_POST_CODE)}
              id={FormInputs.TO_POST_CODE}
            />
          </div>
          <Input
            label={Label.COUNTRY}
            {...register(FormInputs.TO_COUNTRY)}
            id={FormInputs.TO_COUNTRY}
          />
          <Input
            label={Label.INVOICE_DATE}
            type="date"
            {...register(FormInputs.DATE)}
          />

          <Controller
            name={FormInputs.PAYMENT}
            control={control}
            render={({ field }) => {
              const { onChange, value } = field;
              return (
                <CustomSelect
                  id="payment"
                  control={control}
                  label={Label.PAYMENT_TERMS}
                  onChange={onChange}
                  options={selectOptions}
                  value={value}
                />
              );
            }}
          />

          <Input
            label={Label.DESCRIPTION}
            {...register(FormInputs.DESCRIPTION)}
            id={FormInputs.DESCRIPTION}
          />
        </div>
      </div>

      <div className={styles.billInfo}>
        <p>Item List</p>
        <div className={styles.input}>
          <Input
            label={Label.ITEM_NAME}
            {...register(FormInputs.ITEM_NAME)}
            id={FormInputs.ITEM_NAME}
          />
          {item.map((item, index) => (
            <div className={styles.qty} key={index}>
              <Input
                label={Label.QTY}
                {...register(FormInputs.QTY)}
                id={FormInputs.QTY}
              />
              <Input
                label={Label.PRICE}
                {...register(FormInputs.PRICE)}
                id={FormInputs.PRICE}
              />

              <Input
                label={Label.TOTAL}
                {...register(FormInputs.TOTAL_AMOUNT)}
                id={FormInputs.TOTAL_AMOUNT}
              />
              <span
                onClick={() => handleDeleteItem(item)}
                className={styles.icon}
              >
                {getIcons(IconsType.delete)}
              </span>
            </div>
          ))}
        </div>
        <Button
          type="button"
          variant={Variant.White}
          onClick={handleAddItemRow}
          size="extraLarge"
          className={styles.addBtn}
        >
          + Add New Item
        </Button>
      </div>

      <FormFooter DrawerToggler={handleDrawerToggler} />
    </form>
  );
};
export default Form;
