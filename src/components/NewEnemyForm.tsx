import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import Enemy from "../types/Enemy";

const schema = z.object({
  name: z.string().min(1),
  startHP: z.number().min(1),
  init: z.number(),
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

  const onSubmit = (data: FieldValues) => {};

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
          {...register("startHP")}
          type="number"
          name="startHP"
          className="form-control"
        />
        <span className="input-group-text">Initiative</span>
        <input
          {...register("init")}
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
