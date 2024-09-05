import {ChangeEvent, useState } from "react";

interface Props {
  onSort: () => void;
  onRollAll: () => void;
  onSaveToFile: () => void;
  onLoad: (value:string) => void;
}

const EnemyControls = ({ onSort, onRollAll, onSaveToFile, onLoad }: Props) => {
  const [showSaveFileInput, setShowSaveFileInput] = useState<boolean>(false);
  const [saveFileInputValue, setSaveFileInputValue] = useState<string>('');

  const onLoadFromFile = () => {
    setShowSaveFileInput(true);
  }

  const handleSaveFileInputChange = (e:ChangeEvent) => {
    var value = e.target.value;
    setSaveFileInputValue(value);
  }

  const onLoadHandler = () => {
    setShowSaveFileInput(false);
    onLoad(saveFileInputValue);
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <button className="btn btn-primary float-left" onClick={onSort}>
            Sort By Initiative
          </button>
          <button className="btn btn-primary float-left" onClick={onRollAll}>
          Roll all
          </button>
        </div>
        

        <div className="col">
          <button className="btn btn-primary float-right" onClick={onSaveToFile}>
            Save Encounter to File
          </button>

          { !showSaveFileInput &&
            <button className="btn btn-primary float-right" onClick={onLoadFromFile}>
              Load From Save File
            </button>
          }
          

          { showSaveFileInput &&
            <>
              <input 
                type="text" 
                placeholder="put save file text here"
                name="save_file_input"
                id=""
                onChange={handleSaveFileInputChange}
              />
              <button className="btn btn-primary float-right" onClick={onLoadHandler}>Load</button>
            </>
          }
        </div>
      </div>
    </>
  );
};

export default EnemyControls;
