import Logo from "@/app/components/ui/Logo";
import DesktopMenu from "@/app/components/ui/DesktopMenu/DesktopMenu";
import MobileMenu from "@/app/components/ui/MobileMenu/MobileMenu";
import Container from "@/app/components/ui/Container";

export default function Header() {
  return (
    <header className="relative bg-main-pink-400">
      <Container className="border-b-2 border-b-main-pink-600 p-4">
        <div className="flex items-center justify-between sm:mb-4 sm:justify-center">
          <MobileMenu />
          <Logo />
        </div>
        <DesktopMenu />
      </Container>
    </header>
  );
}
