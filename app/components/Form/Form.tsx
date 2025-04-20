"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { isValidPhoneNumber } from "libphonenumber-js/max";
import { z } from "zod";
import { useEffect } from "react";

const schema = z.object({
  name: z.string(),
  phone: z.string().refine((value) => isValidPhoneNumber(value, "RU"), {
    message: "Неправильный номер телефона",
  }),
  desc: z.string(),
});

type FormInput = z.infer<typeof schema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { name: "", desc: "", phone: "" },
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data); // eslint-disable-line

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [reset, isSubmitSuccessful]);

  return (
    <section className="bg-main-pink-400">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:pt-20">
        <h2 className="mb-4 text-center text-lg font-bold md:text-2xl lg:text-4xl">
          Предложи свой букет
        </h2>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="name" className="sr-only">
                Имя
              </label>
              <input
                type="text"
                placeholder="Имя"
                aria-invalid={!!errors.name}
                aria-describedby="name-error"
                {...register("name")}
                className="block w-full rounded-3xl bg-main-pink-300 px-4 py-2"
              />
              <p id="name-error">{errors.name?.message}</p>
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Телефон
              </label>
              <input
                type="text"
                placeholder="Телефон"
                aria-invalid={!!errors.phone}
                aria-describedby="phone-error"
                {...register("phone")}
                className="block w-full rounded-3xl bg-main-pink-300 px-4 py-2"
              />
              <p id="phone-error">{errors.phone?.message}</p>
            </div>
            <div>
              <label htmlFor="desc" className="sr-only">
                Сообщение
              </label>
              <textarea
                aria-invalid={!!errors.desc}
                aria-describedby="desc-error"
                {...register("desc")}
                className="block w-full rounded-3xl bg-main-pink-300 px-4 py-2"
              />
              <p id="desc-error">{errors.desc?.message}</p>
            </div>
            <button>Отправить</button>
          </form>
        </div>
      </div>
    </section>
  );
}
