import {useState } from "react";


import NewEnemyForm from "./NewEnemyForm";
import Enemy from "../types/Enemy";
import EnemyList from "./EnemyList";
import EnemyControls from "./EnemyControls";
import SaveHandler from "../logic/saveHandler";

type MassList = {
  [index: string]: number;
};

const Enemies = () => {
  const [enemiesList, setEnemiesList] = useState<Enemy[]>([]);
  const [massList, setMassList] = useState<MassList>({});
  const saveHandler = new SaveHandler();

  const onAddEnemy = (enemy: Enemy) => {
    let newList = { ...massList };
    if (enemy.name in massList) {
      newList[enemy.name] = massList[enemy.name] + 1;
    } else {
      newList[enemy.name] = 1;
    }
    setMassList(newList);

    enemy.massNumber = newList[enemy.name];

    setEnemiesList([...enemiesList, enemy]);
  };

  const handleInitReroll = (id: string) => {
    setEnemiesList(
      enemiesList.map((enemy) =>
        enemy.id === id ? { ...enemy, init: getRandomRoll() } : enemy
      )
    );
  };

  const handleInitSet = (id: string, amount: number) => {
    setEnemiesList(
      enemiesList.map((enemy) =>
        enemy.id === id ? { ...enemy, init: amount } : enemy
      )
    );
  };

  const handleSaveToFile = () => {
    saveHandler.save(enemiesList);
  }

  const handleLoad = (value:string) => {
    const newList = saveHandler.load(value);
    setEnemiesList(newList);
  }


  const handleHpSet = (id: string, amount: number) => {
    setEnemiesList(
      enemiesList.map((enemy) =>
        enemy.id === id ? { ...enemy, hp: amount } : enemy
      )
    );
  };

  const handleHpEditBy = (id: string, amount: number) => {
    setEnemiesList(
      enemiesList.map((enemy) =>
        enemy.id === id ? { ...enemy, hp: enemy.hp + amount } : enemy
      )
    );
  };

  const handleDelete = (id: string) => {
    setEnemiesList(enemiesList.filter((enemy) => enemy.id !== id));
  };

  const handleSort = () => {
    setEnemiesList([...enemiesList].sort((a, b) => b.init - a.init));
  };

  const handleRollAll = () => {
    setEnemiesList(
      enemiesList.map((enemy) => {
        return { ...enemy, init: getRandomRoll() };
      })
    );
  };

  const getRandomRoll = (): number => {
    return Math.floor(Math.random() * 20) + 1;
  };

  return (
    <>
      <div className="m-3">
        <NewEnemyForm callback={onAddEnemy} />
        <div className="m-3"></div>
        <EnemyList
          onInitReroll={handleInitReroll}
          onInitSet={handleInitSet}
          onHpSet={handleHpSet}
          onHpEditBy={handleHpEditBy}
          onDelete={handleDelete}
          enemies={enemiesList}
        />
        <EnemyControls 
          onSort={handleSort} 
          onRollAll={handleRollAll} 
          onSaveToFile={handleSaveToFile} 
          onLoad={handleLoad}
        />
      </div>
    </>
  );
};

export default Enemies;
