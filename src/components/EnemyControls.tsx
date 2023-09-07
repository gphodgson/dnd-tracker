interface Props {
  onSort: () => void;
}

const EnemyControls = ({ onSort }: Props) => {
  return (
    <>
      <button className="btn btn-primary" onClick={onSort}>
        Sort By Initiative
      </button>
    </>
  );
};

export default EnemyControls;
