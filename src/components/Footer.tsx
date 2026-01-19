export function Footer() {
  return (
    <footer className="mt-14 py-8 border-t border-border">
      <div className="container-site">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Empresa — Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
