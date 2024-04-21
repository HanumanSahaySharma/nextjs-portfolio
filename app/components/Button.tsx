import Spinner from "./Spinner";

interface IProps {
  label: string;
  loading?: boolean;
}
export default function Button({ label, loading }: IProps) {
  return (
    <button className="flex items-center justify-center transition ease-in-out duration-300 px-8 py-3 bg-lime-600 text-white font-normal rounded-full hover:scale-110 hover:-translate-y-2">
      {loading && <Spinner cssClass="mr-3" />} <span>{label}</span>
    </button>
  );
}
