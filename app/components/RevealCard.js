export default function RevealCard({ id, className = '', children }) {
  return (
    <article id={id} className={`glass card reveal-bit ${className}`.trim()}>
      {children}
    </article>
  );
}
