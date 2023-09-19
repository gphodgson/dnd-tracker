import Enemy from "../types/Enemy";
import EnemyItem from "./EnemyItem";

interface Props {
  enemies: Enemy[];
  onInitReroll: (id: string) => void;
  onInitSet: (id: string, amount: number) => void;
  onHpSet: (id: string, amount: number) => void;
  onHpEditBy: (id: string, amount: number) => void;
  onDelete: (id: string) => void;
}

const EnemyList = ({
  enemies,
  onInitReroll,
  onHpSet,
  onHpEditBy,
  onInitSet,
  onDelete,
}: Props) => {
  const handleInitReroll = (id: string) => {
    onInitReroll(id);
  };
  const handleHpSet = (id: string, amount: number) => onHpSet(id, amount);
  const handleHpEditBy = (id: string, amount: number) => onHpEditBy(id, amount);

  const handleInitSet = (id: string, amount: number) => onInitSet(id, amount);

  const handleDelete = (id: string) => onDelete(id);

  return (
    <>
      <form action="" className="row">
        {enemies.map((enemy) => (
          <EnemyItem
            onInitReroll={handleInitReroll}
            onHpSet={handleHpSet}
            onHpEditBy={handleHpEditBy}
            onInitSet={handleInitSet}
            onDelete={handleDelete}
            key={enemy.id}
            data={enemy}
          />
        ))}
      </form>
    </>
  );
};

export default EnemyList;
