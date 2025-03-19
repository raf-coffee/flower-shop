import Logo from "../Logo/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";
import Search from "../Search/Search";

export default function Header() {
  return (
    <header className="relative flex justify-between border-b-2 border-b-main-pink-600 bg-main-pink-400 p-4">
      <div className="flex">
        <MobileMenu />
        <Logo />
      </div>
      <Search />
    </header>
  );
}
