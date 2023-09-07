import Enemy from "../types/Enemy";
import { SlClose } from "react-icons/sl";
import { GiDiceTarget } from "react-icons/gi";

interface Props {
  data: Enemy;
  onInitReroll: (id: string) => void;
}

const EnemyItem = ({ data, onInitReroll }: Props) => {
  const handleInitReroll = () => {
    console.log(data.id);

    onInitReroll(data.id);
  };

  return (
    <div className="input-group mb-2">
      <span className="input-group-text">{data.massNumber}</span>
      <span className="input-group-text">
        <b>{data.name}</b>
      </span>
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        HP
      </button>
      <ul className="dropdown-menu">
        <li>
          <a href="#" className="dropdown-item">
            Lower By
          </a>
        </li>
        <li>
          <a href="#" className="dropdown-item">
            Raise By
          </a>
        </li>
        <li>
          <a href="#" className="dropdown-item">
            Set To
          </a>
        </li>
        <li>
          <input
            type="number"
            name="factor"
            id=""
            className="m-3"
            placeholder="Amount to raise/lower by"
          />
        </li>
      </ul>
      <input
        type="number"
        name="startHP"
        className="form-control"
        value={data.hp}
      />
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Initiative
      </button>
      <ul className="dropdown-menu">
        <li>
          <a href="#" className="dropdown-item">
            Lower By
          </a>
        </li>
        <li>
          <a href="#" className="dropdown-item">
            Raise By
          </a>
        </li>
        <li>
          <a href="#" className="dropdown-item">
            Set To
          </a>
        </li>
        <li>
          <input
            type="number"
            name="factor"
            id=""
            className="m-3"
            placeholder="Amount to raise/lower by"
          />
        </li>

        <li>
          <a href="#" className="dropdown-item" onClick={handleInitReroll}>
            Reroll
          </a>
        </li>
        <li>
          <input
            type="number"
            name="reroll"
            id=""
            className="m-3"
            placeholder="DEX Modifer"
          />
        </li>
      </ul>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={handleInitReroll}
      >
        <GiDiceTarget />
      </button>
      <input
        type="number"
        name="startHP"
        className="form-control"
        value={data.init}
      />
      <button className="btn btn-danger">
        <SlClose />
      </button>
    </div>
  );
};

export default EnemyItem;
