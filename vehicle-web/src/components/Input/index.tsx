import { UseFormRegister, Path, FieldValues } from "react-hook-form";
import { InputError } from "../InputError";

import styles from "./Input.module.scss"

type InputVehicleProps<TFormValues extends FieldValues> = {
  value?: any;
  mask?: string;
  type?: string;
  htmlFor?: string;
  text?: string;
  id?: string;
  error?: any;
  placeholder?: string;
  name: Path<TFormValues>;
  onChange?: (e: any) => void;
  register?: UseFormRegister<TFormValues>;
}

const InputVehicle = <TFormValues extends Record<string, unknown>>({ mask, placeholder, error, value, type, htmlFor, text, id, name, onChange, register }: InputVehicleProps<TFormValues>): JSX.Element => {
  return (
    <div className='container'>
      <div className={styles.container__label__error}>
        <label className={styles.container__label} htmlFor={htmlFor}>{text}*</label>
        {error && <InputError msg={error} />}
      </div>
      <input
        className={styles.container__input}
        id={id}
        type={type}
        placeholder={`${placeholder}...`}
        value={value}
        {...(register && register(name))}
        onChange={onChange} />
    </div>
  )
}

export default InputVehicle