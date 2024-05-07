import Favorite from "./header/Favorite";
import FavoriteListModal from "./header/FavoriteListModal";
import Logo from "./header/Logo";
import SearchLocation from "./header/SearchLocation";

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <Logo />

        <div className="flex items-center gap-4 relative">
          <SearchLocation />
          <Favorite />
          <FavoriteListModal />
        </div>
      </nav>
    </header>
  );
}
