import { FC } from "react";
import { useAppDispatch } from "../app/hooks";
import { search } from "../features/filter/filterSlice";

interface Props {}

const SearchBar: FC<Props> = () => {
  const dispatch = useAppDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value;
    dispatch(search(searchText));
  };

  return (
    <div className="flex justify-center">
      <input
        className="flex justify-center bg-[#4a566c] text-white p-2 w-80 border border-gray-400 rounded placeholder-gray font-bold"
        type="text"
        onChange={handleInputChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
