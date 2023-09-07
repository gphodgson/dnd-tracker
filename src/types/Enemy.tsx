interface Enemy {
  id: string;
  name: string;
  hp: number;
  init: number;
  massNumber: number;
  notes?: string;
}

export default Enemy;
