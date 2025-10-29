import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar-wrapper items-center rounded-full shadow-[0_4px_4px_0_rgba(0,0,0,0.10)]">
      <div className="search-field flex items-center gap-2 flex-1 px-4 py-[11px] rounded-full bg-[rgba(120,120,128,0.16)] relative">
        <Search
          className="search-icon pt-px"
          size={20}
          color="#999"
          strokeWidth={2}
        />
        <input
          type="text"
          placeholder="Search"
          value={value}
          onChange={onChange}
          className="search-input flex-1 bg-transparent outline-none border-none text-[17px] font-normal leading-[22px] tracking-[-0.08px] text-black placeholder:text-[#999]"
          style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif' }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
