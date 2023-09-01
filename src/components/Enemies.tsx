import { useState } from "react";
import NewEnemyForm from "./NewEnemyForm";
import Enemy from "../types/Enemy";

const Enemies = () => {
  const [enemiesList, setEnemiesList] = useState<Enemy[]>([]);

  return (
    <>
      <div className="m-3">
        <NewEnemyForm callback={() => {}} />
      </div>
    </>
  );
};

export default Enemies;
