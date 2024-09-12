import Condition from "../types/Condition";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
    callback: (condition:Condition) => void
}

type FormData = z.infer<typeof schema>;
const schema = z.object({
    name: z.string().min(1),
    desc: z.string().min(1),
    color: z.string().min(1)
  });


const ConditionsForm = ({callback}:Props) => {
    const onSubmit = (data:FieldValues)=>{
        console.log(data)
        callback({
            name: data.name,
            description: data.desc,
            borderColor: "",
            color: data.color
        })
    }
    

    const {
        register,
        handleSubmit,
        formState: { },
      } = useForm<FormData>({
        resolver: zodResolver(schema),
      });

    return (
        <>
            <form action="" onSubmit={handleSubmit(onSubmit)} className="mt-2 border-top pt-2 pe-3 me-3 border-start border-end border-3">
                <div className="input-group">
                    {/* Condition Name Input */}
                    <span className="input-group-text">New Condition</span>
                    <input
                        {...register("name")}
                        type="text"
                        name="name"
                        className="form-control"
                    />
                    {/* Condition Description Input */}
                    <span className="input-group-text">Description</span>
                    <input
                        {...register("desc")}
                        type="text"
                        name="desc"
                        className="form-control"
                    />
                    {/* Condition Color Input */}
                    <span className="input-group-text">Color</span>
                    <input
                        {...register("color")}
                        type="color"
                        name="color"
                        className="form-control"
                    />
                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary">
                        Add Condition
                    </button>
                </div>
            </form>
        </>
    );
}

export default ConditionsForm