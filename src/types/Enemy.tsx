interface Enemy {
  id: string;
  name: string;
  hp: number;
  init: number;
  massNumber: number;
  notes?: string;
  hero: boolean;
}

export default Enemy;
