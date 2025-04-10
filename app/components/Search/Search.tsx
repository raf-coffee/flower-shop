import { IconSearch } from "@tabler/icons-react";

export default function Search() {
  return (
    <form role="search" className="flex">
      <input
        type="search"
        placeholder="Поиск..."
        className="max-w-32 rounded-l-lg px-2 sm:max-w-60"
      />
      <button className="rounded-r-lg bg-white px-2">
        <IconSearch />
      </button>
    </form>
  );
}
