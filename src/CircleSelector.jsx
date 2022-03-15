import "./styles.css";

export default function CircleSelector({ selectedNum, setSelectedNum }) {
  return (
    <>
      <section className="CircleSelector">
        <button
          className={selectedNum === 1 ? "selected" : ""}
          onClick={() => setSelectedNum(1)}
        >
          {selectedNum !== 1 ? "SELECT CIRCLE 1" : "CIRCLE 1 SELECTED"}
        </button>
        <button
          className={selectedNum === 2 ? "selected" : ""}
          onClick={() => setSelectedNum(2)}
        >
          {selectedNum !== 2 ? "SELECT CIRCLE 2" : "CIRCLE 2 SELECTED"}
        </button>
        <button
          className={selectedNum === 3 ? "selected" : ""}
          onClick={() => setSelectedNum(3)}
        >
          {selectedNum !== 3 ? "SELECT CIRCLE 3" : "CIRCLE 3 SELECTED"}
        </button>
        <button
          className={selectedNum === 4 ? "selected" : ""}
          onClick={() => setSelectedNum(4)}
        >
          {selectedNum !== 4 ? "SELECT CIRCLE 4" : "CIRCLE 4 SELECTED"}
        </button>
      </section>
    </>
  );
}
