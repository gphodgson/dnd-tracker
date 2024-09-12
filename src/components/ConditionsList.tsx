import Condition from "../types/Condition";
import ConditionItem from "./ConditionItem";
import ConditionsForm from "./ConditionsForm";

interface Props {
    conditions: Condition[]
    onConditionAdded: (condition:Condition) => void
}

const ConditionList = ({conditions, onConditionAdded}: Props) => {
    return (
        <>
        <div className="row ms-5 mb-2 pb-2 pt-2 bg-light"> 
            {conditions.map((condition) => (
                <ConditionItem
                    condition={condition}
                    key={condition.name}
                />
            ))}

            <ConditionsForm
                callback={onConditionAdded}
            />
        </div>
        </>
    );
}

export default ConditionList