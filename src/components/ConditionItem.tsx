import Condition from "../types/Condition";

interface Props{
    condition:Condition
}

const ConditionItem = ({condition}:Props) => {
    return (
        <>
            <div className="input-group border-start border-end border-3">
                {/* Condition Name */}
                <span className="input-group-text" style={{backgroundColor: condition.color}}>Condition</span>
                <input
                    type="string"
                    name="name"
                    className="form-control"
                    value={condition.name}
                    readOnly
                    style={{maxWidth:"10%"}}
                />  
                {/* Condition Description */}
                <span className="input-group-text">Description</span>
                <input
                    type="string"
                    name="name"
                    className="form-control"
                    value={condition.description}
                    readOnly
                />  
            </div>
        </>
    );
}


export default ConditionItem;