import { ChangeEvent } from "react";

interface IProps {
  placeholder?: string;
  value: string;
  setValue: (value: string) => void;
}

export default function Textarea({ placeholder, value, setValue }: IProps) {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
      }}
      className="w-full bg-transparent rounded-lg border-2 border-stone-500 px-5 py-3 focus:border-lime-500 focus:outline-none h-[120px] resize-none"
    />
  );
}
