import Link from "next/link";
import Logo from "../Logo/Logo";
import { Container, TextSize, Text } from "../ui";

function CatalogNavigation() {
  return (
    <section>
      <Container className="py-5">
        <div className="mb-5 flex items-center justify-center">
          <Logo />
        </div>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-4">
          {["Цветы", "Воздушные шары", "Аксессуары"].map((name) => (
            <Link
              className="relative min-h-[140px] bg-main-pink-400 lg:min-h-[360px]"
              href="/"
              key={name}
            >
              <li className="relative h-full w-full">
                <div className="absolute bottom-0 flex h-[40px] w-full items-center justify-center rounded-t-[10px] bg-soft-white-transparent lg:h-[95px]">
                  <Text className="text-center" size={TextSize.SMALL}>
                    {name}
                  </Text>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default CatalogNavigation;
