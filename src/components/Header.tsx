import { useAppDispatch } from "../app/hooks";
import { sortSelected } from "../features/filter/filterSlice";
import SearchBar from "./SearchBar";

const Header = () => {
  const dispatch = useAppDispatch();

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    dispatch(sortSelected(selectedValue));
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 text-gray-300 mt-16">
      <h1 className="m-0 text-2xl font-bold mb-4 md:mb-0">Popular Movies</h1>
      <div className="flex-grow text-center md:text-right mb-4 md:mb-0">
        <SearchBar />
      </div>
      <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
        <select
          id="sort"
          className="bg-yellow-500 font-bold px-4 py-2 border border-gray-300 rounded cursor-pointer text-white hover:bg-white hover:text-black"
          onChange={handleSortChange}
        >
          <option>Sort & Filter By</option>
          <option value="highToLow">Rating High to Low</option>
          <option value="lowToHigh">Rating Low to High</option>
          <option value="popularity">Popularity</option>
          <option value="newToOld">Newest to Oldest</option>
          <option value="oldToNew">Oldest to Newest</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
