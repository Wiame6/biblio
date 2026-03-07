"use client";

type Status = "available" | "borrowed" | "reserved";

interface CardProps {
  id: string | number;
  imageUrl: string;
  imageAlt?: string;
  category: string;
  status: Status;
  title: string;
  subtitle: string;
  onDetailsClick?: (id: string | number) => void;
}

export default function CardModern({
  id,
  imageUrl,
  imageAlt,
  category,
  status,
  title,
  subtitle,
  onDetailsClick,
}: CardProps) {
  const statusText: Record<Status, string> = {
    available: "Disponible",
    borrowed: "Emprunté",
    reserved: "Réservé",
  };

  const handleClick = () => onDetailsClick?.(id);

  return (
    <article className="card-modern" data-id={id}>
      <div className="card-image-modern" aria-hidden>
        {/* <img> volontairement : plus simple pour les URLs externes */}
        <img
          src={imageUrl}
          alt={imageAlt ?? title}
          loading="lazy"
          onError={(e) => {
            // fallback image (propre) si l'URL casse
            (e.currentTarget as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1400&auto=format&fit=crop";
          }}
        />
      </div>

      <div className="card-content-modern">
        <div className="card-topline">
          <span className="card-category">{category}</span>
          <span className={`book-status status-${status}`}>{statusText[status]}</span>
        </div>

        <h3 className="card-title-modern">{title}</h3>
        <p className="card-subtitle-modern">{subtitle}</p>

        <button type="button" className="card-link-modern" onClick={handleClick}>
          Voir détails <span aria-hidden>→</span>
        </button>
      </div>
    </article>
  );
}