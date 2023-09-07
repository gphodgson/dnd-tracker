import { map } from "zod";
import Enemy from "../types/Enemy";
import EnemyItem from "./EnemyItem";

interface Props {
  enemies: Enemy[];
  onInitReroll: (id: string) => void;
}

const EnemyList = ({ enemies, onInitReroll }: Props) => {
  const handleInitReroll = (id: string) => {
    console.log(id);

    onInitReroll(id);
  };

  return (
    <>
      <form action="" className="row">
        {enemies.map((enemy) => (
          <EnemyItem
            onInitReroll={handleInitReroll}
            key={enemy.id}
            data={enemy}
          />
        ))}
      </form>
    </>
  );
};

export default EnemyList;
