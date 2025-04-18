import { useForm, SubmitHandler } from "react-hook-form";

type FormInput = {
  name: string;
  phone: string;
  desc: string;
};

export default function Form() {
  const { register, handleSubmit } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data); // eslint-disable-line

  return (
    <section className="bg-main-pink-300">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:pt-20">
        <h2 className="mb-4 text-center text-lg font-bold md:text-2xl lg:text-4xl">
          Предложи свой букет
        </h2>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="name">Имя</label>
              <input type="text" {...register("name")} placeholder="Имя" />
            </div>
            <div>
              <label htmlFor="phone">Телефон</label>
              <input type="text" placeholder="Телефон" {...register("phone")} />
            </div>
            <div>
              <textarea {...register("desc")} />
            </div>
            <button>Отправить</button>
          </form>
        </div>
      </div>
    </section>
  );
}
