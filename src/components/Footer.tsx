export function Footer() {
  return (
    <footer className="bg-[#FFF0F3] py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-4xl text-center space-y-4">
        <p className="text-muted-foreground text-sm font-medium">
          © {new Date().getFullYear()} Caixinhas Criativas. Todos os direitos reservados.
        </p>
        <div className="flex justify-center gap-6 text-xs text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors font-medium">
            Termos de Uso
          </a>
          <a href="#" className="hover:text-primary transition-colors font-medium">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
