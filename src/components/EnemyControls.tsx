interface Props {
  onSort: () => void;
  onRollAll: () => void;
}

const EnemyControls = ({ onSort, onRollAll }: Props) => {
  return (
    <>
      <button className="btn btn-primary m-3" onClick={onSort}>
        Sort By Initiative
      </button>

      <button className="btn btn-primary" onClick={onRollAll}>
        Roll all
      </button>
    </>
  );
};

export default EnemyControls;
