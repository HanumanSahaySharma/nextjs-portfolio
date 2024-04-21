import Spinner from "./Spinner";

interface IProps {
  label: string;
  loading?: boolean;
}
export default function Button({ label, loading }: IProps) {
  return (
    <button className="py-2 px-5 flex items-center bg-blue-600 hover:bg-blue-800 text-white font-medium rounded">
      {loading && <Spinner cssClass="mr-3" />} <span className="">{label}</span>
    </button>
  );
}
