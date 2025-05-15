const GridBgWhite = () => {
  return (
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `
            linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)
          `,
        backgroundSize: "20px 20px",
        backgroundAttachment: "fixed",
      }}
    />
  );
};
export default GridBgWhite;
