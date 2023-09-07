import { useState } from "react";
import NewEnemyForm from "./NewEnemyForm";
import Enemy from "../types/Enemy";
import EnemyList from "./EnemyList";
import EnemyControls from "./EnemyControls";

type MassList = {
  [index: string]: number;
};

const Enemies = () => {
  const [enemiesList, setEnemiesList] = useState<Enemy[]>([]);
  const [massList, setMassList] = useState<MassList>({});
  // const massList = new Map();

  const onAddEnemy = (enemy: Enemy) => {
    let newList = { ...massList };
    if (enemy.name in massList) {
      newList[enemy.name] = massList[enemy.name] + 1;
    } else {
      newList[enemy.name] = 1;
    }
    setMassList(newList);

    enemy.massNumber = newList[enemy.name];

    console.log(massList);

    setEnemiesList([...enemiesList, enemy]);
  };

  const handleInitReroll = (id: string) => {
    console.log(id);
    setEnemiesList(
      enemiesList.map((enemy) =>
        enemy.id === id
          ? { ...enemy, init: Math.floor(Math.random() * 20) }
          : enemy
      )
    );
  };

  const handleSort = () => {
    setEnemiesList([...enemiesList].sort((a, b) => b.init - a.init));
  };

  return (
    <>
      <div className="m-3">
        <NewEnemyForm callback={onAddEnemy} />
        <div className="m-3"></div>
        <EnemyList onInitReroll={handleInitReroll} enemies={enemiesList} />
        <EnemyControls onSort={handleSort} />
      </div>
    </>
  );
};

export default Enemies;
