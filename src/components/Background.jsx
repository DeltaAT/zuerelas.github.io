// Decorative animated backdrop: floating aurora orbs + subtle grid.
const Background = () => {
  return (
    <div className="app-background" aria-hidden="true">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="grid-overlay" />
      <div className="noise-overlay" />
    </div>
  );
};

export default Background;
