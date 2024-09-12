import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import Enemy from "../types/Enemy";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineCrown } from "react-icons/ai";

const schema = z.object({
  name: z.string().min(1),
  startHP: z.number().min(1),
  init: z.number().min(1),
  hero: z.boolean(),
});

interface Props {
  callback: (enemy: Enemy) => void;
}

type FormData = z.infer<typeof schema>;

const NewEnemyForm = ({ callback }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    callback({
      id: uuidv4(),
      name: data.name,
      hp: data.startHP,
      init: data.init,
      massNumber: 1,
      hero: data.hero,
      conditions: []
    });
  };

  return (
    <form className="row" onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group">
        <span className="input-group-text">Name</span>
        <input
          {...register("name")}
          type="text"
          name="name"
          className="form-control"
        />
        <span className="input-group-text">Starting HP</span>
        <input
          {...register("startHP", { valueAsNumber: true })}
          type="number"
          name="startHP"
          className="form-control"
        />
        <span className="input-group-text">Initiative</span>
        <input
          {...register("init", { valueAsNumber: true })}
          type="number"
          name="init"
          className="form-control"
        />
        <div className="input-group-text bg-warning">
          <AiOutlineCrown />
          <span className="m-1"></span>
          <input
            {...register("hero")}
            type="checkbox"
            className="form-check-input mt-0"
          />
        </div>
        <button disabled={!isValid} type="submit" className="btn btn-primary">
          Add Creature
        </button>
      </div>
    </form>
  );
};

export default NewEnemyForm;
