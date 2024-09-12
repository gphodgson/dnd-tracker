import Enemy from "../types/Enemy";
import { SlClose } from "react-icons/sl";
import { GiDiceTarget } from "react-icons/gi";
import { ChangeEvent, useState } from "react";
import { AiOutlineCrown } from "react-icons/ai";
import Collapse from 'react-bootstrap/Collapse';
import ConditionList from "./ConditionsList";
import Condition from "../types/Condition";

interface Props {
  data: Enemy;
  onInitReroll: (id: string) => void;
  onInitSet: (id: string, amount: number) => void;

  onHpSet: (id: string, amount: number) => void;
  onHpEditBy: (id: string, amount: number) => void;

  onDelete: (id: string) => void;

  onConditionAdded: (id:string, condition:Condition) => void;
}

const EnemyItem = ({
  data,
  onInitReroll,
  onInitSet,
  onHpSet,
  onHpEditBy,
  onDelete,
  onConditionAdded
}: Props) => {
  const [hpChange, setHpChange] = useState<number>(0);
  const [hpChangeIsValid, setHpChangeIsValid] = useState<boolean>(true);

  const [initChange, setInitChange] = useState<number>(0);
  const [conListOpen, setConListOpen] = useState<boolean>(false);

  const handleHpChangeUpdate = (e: ChangeEvent) => {
    var value = parseInt(e.target.value);
    if (value < 0) {
      setHpChangeIsValid(true);
    } else {
      setHpChangeIsValid(false);
    }

    setHpChange(value);
  };

  const handleHpChangeSet = () => onHpSet(data.id, hpChange);
  const handleHpChangeRaise = () => onHpEditBy(data.id, hpChange);
  const handleHpChangeLower = () => onHpEditBy(data.id, -hpChange);

  const handleInitChangeUpdate = (e: ChangeEvent) => {
    setInitChange(parseInt(e.target.value));
  };

  const handleInitReroll = () => onInitReroll(data.id);
  const handleInitSet = () => onInitSet(data.id, initChange);

  const handleDelete = (e: SubmitEvent) => {
    e.preventDefault();
    onDelete(data.id);
  };

  const handleConditionAdded = (condition:Condition) => onConditionAdded(data.id, condition)

  return (
    <>
      <div className="input-group mb-2">
        {/* Mass Number */}
        <span className="input-group-text">{data.massNumber}</span>

        {/* Mob Name */}
        {data.hero ? (
          <span className="input-group-text bg-warning">
            <b>
              <AiOutlineCrown />
              <span className="m-1"></span>
              {data.name}
            </b>
          </span>
        ) : (
          <span className="input-group-text">
            <b>{data.name}</b>
          </span>
        )}

        {/* HP Button */}
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
            <a href="#" className="dropdown-item" onClick={handleHpChangeLower}>
              Lower By
            </a>
          </li>
          <li>
            <a href="#" className="dropdown-item" onClick={handleHpChangeRaise}>
              Raise By
            </a>
          </li>
          <li>
            <a href="#" className="dropdown-item" onClick={handleHpChangeSet}>
              Set To
            </a>
          </li>
          {hpChangeIsValid ?? (
            <li>
              <p>Number is not valid.</p>
            </li>
          )}
          <li>
            <input
              type="number"
              name="factor"
              id=""
              className="m-3"
              placeholder="Amount to raise/lower by"
              // value={hpChange}
              onChange={handleHpChangeUpdate}
            />
          </li>
        </ul>

        {/* HP Display */}
        <input
          type="number"
          name="startHP"
          className="form-control"
          value={data.hp}
          readOnly
        />

        {/* Init Button */}
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
            <a href="#" className="dropdown-item" onClick={handleInitSet}>
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
              onChange={handleInitChangeUpdate}
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

        {/* Init Display */}
        <input
          type="number"
          name="startHP"
          className="form-control"
          value={data.init}
          readOnly
        />

        {/* Concition Dropdown Button */}
        <button
          className="btn btn-secondary"
          type="button"
          aria-expanded={conListOpen}
          aria-controls="condition-list"
          onClick={()=> setConListOpen(!conListOpen)}
        >
          Conditions
        </button>

        {/* Delete Button */}
        <button className="btn btn-danger" onClick={handleDelete}>
          <SlClose />
        </button>
      </div>

      {/* Condition Dropdown */}
      <Collapse in={conListOpen}>
          <div id="">
            <ConditionList
              conditions={data.conditions}
              onConditionAdded={handleConditionAdded}
            />  
          </div>
      </Collapse>
    </>
    
  );
};

export default EnemyItem;
