import { ChangeEvent } from "react";

interface IProps {
  type: string;
  value: string;
  setValue: (value: string) => void;
}

export default function Input({ type, value, setValue }: IProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
      }}
      className="border border-slate-300 w-full bg-slate-50 p-2 pl-3 rounded"
    />
  );
}
