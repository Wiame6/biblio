interface CardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
}

export default function Card({ title, value, subtitle, icon }: CardProps) {
  return (
    <div className="admin-card">
      <div className="admin-card__top">
        <div>
          <div className="admin-card__title">{title}</div>
          <div className="admin-card__value">{value}</div>
        </div>
        <div className="admin-card__icon">{icon}</div>
      </div>

      <div className="admin-card__subtitle">{subtitle}</div>
    </div>
  );
}