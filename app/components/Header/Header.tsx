import DesktopMenu from "../DesktopMenu/DesktopMenu";
import Logo from "../Logo/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";
import Search from "../Search/Search";

export default function Header() {
  return (
    <header className="relative bg-main-pink-400">
      <div className="mx-auto max-w-7xl border-b-2 border-b-main-pink-600 p-4">
        <div className="flex justify-between sm:mb-4">
          <div className="flex">
            <MobileMenu />
            <Logo />
          </div>
          <Search />
        </div>
        <DesktopMenu />
      </div>
    </header>
  );
}
