import DesktopMenu from "../DesktopMenu/DesktopMenu";
import Logo from "../Logo/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";
// import Search from "../Search/Search";
import { Container } from "../ui";

export default function Header() {
  return (
    <header className="relative bg-main-pink-400">
      <Container className="border-b-2 border-b-main-pink-600 p-4">
        <div className="flex items-center justify-between sm:mb-4 sm:justify-center">
          <MobileMenu />
          {/* <Search /> */}
          <Logo />
        </div>
        <DesktopMenu />
      </Container>
    </header>
  );
}
