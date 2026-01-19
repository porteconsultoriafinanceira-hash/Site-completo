interface ListCardProps {
  text: string;
  className?: string;
}

export function ListCard({ text, className = "" }: ListCardProps) {
  return (
    <div
      className={`border-l-4 border-azul-profundo/20 pl-4 py-3 bg-cinza-claro rounded-r-lg ${className}`}
    >
      <p className="text-grafite font-medium">{text}</p>
    </div>
  );
}
