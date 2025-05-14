const GridBg = () => {
  return (
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `
            linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)
          `,
        backgroundSize: "20px 20px",
        backgroundAttachment: "fixed",
      }}
    />
  );
};
export default GridBg;
