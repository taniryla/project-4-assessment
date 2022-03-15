import "./styles.css";

export default function Circles({ selectedNum, setSelectedNum }) {
  return (
    <>
      <section className="Circles">
        <div className={selectedNum === 1 ? "selected" : ""}>1</div>
        <div className={selectedNum === 2 ? "selected" : ""}>2</div>
        <div className={selectedNum === 3 ? "selected" : ""}>3</div>
        <div className={selectedNum === 4 ? "selected" : ""}>4</div>
      </section>
    </>
  );
}
