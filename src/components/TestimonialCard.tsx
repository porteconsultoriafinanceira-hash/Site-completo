import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  location: string;
}

export function TestimonialCard({ quote, author, role, location }: TestimonialCardProps) {
  return (
    <div className="bg-white border border-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300">
      <Quote className="w-8 h-8 text-verde-seguranca/30 mb-4" />
      <blockquote className="text-grafite mb-4 leading-relaxed">
        "{quote}"
      </blockquote>
      <footer className="pt-4 border-t border-border">
        <p className="font-semibold text-azul-profundo">{author}</p>
        <p className="text-sm text-muted-foreground">
          {role}, {location}
        </p>
      </footer>
    </div>
  );
}
