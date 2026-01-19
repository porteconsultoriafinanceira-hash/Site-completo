import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container-site">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 md:h-12 w-auto" />
          </Link>
          <nav>
            <Button variant="cta" size="default" asChild>
              <Link to="/ofdiagnostico">Quero resolver meu caso agora</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
