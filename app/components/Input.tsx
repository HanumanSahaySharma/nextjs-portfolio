import { ChangeEvent } from "react";

interface IProps {
  type: string;
  placeholder?: string;
  value: string;
  setValue: (value: string) => void;
}

export default function Input({ type, placeholder, value, setValue }: IProps) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
      }}
      className="w-full bg-transparent rounded-lg border-2 border-stone-500 px-5 py-3 focus:border-lime-500 focus:outline-none"
    />
  );
}
