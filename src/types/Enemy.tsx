import Condition from "./Condition";

interface Enemy {
  id: string;
  name: string;
  hp: number;
  init: number;
  massNumber: number;
  notes?: string;
  hero: boolean;
  conditions: Array<Condition>;
}

export default Enemy;
