import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import Enemy from "../types/Enemy";
import { v4 as uuidv4 } from "uuid";

const schema = z.object({
  name: z.string().min(1),
  startHP: z.number().min(1),
  init: z.number().min(1),
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
        <button
          disabled={!isValid}
          type="submit"
          className="btn btn-outline-primary"
        >
          Add Creature
        </button>
      </div>
    </form>
  );
};

export default NewEnemyForm;
