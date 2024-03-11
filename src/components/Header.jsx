import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-4 mb-4 md:mb-16">
      <img className="mb-8 w-44 h-44 object-contain" src={logo} alt="A canvas" />
      <h1 className="text-xl md:text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-title">ReactArt</h1>
      <p className="text-stone-500 text-xs md:text-lg">A community of artists and art-lovers.</p>
    </header>
  );
}
