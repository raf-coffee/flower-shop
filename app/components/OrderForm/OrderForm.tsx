"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { isValidPhoneNumber } from "libphonenumber-js/max";
import { z } from "zod";
import {
  Form,
  Input,
  Label,
  Group,
  ErrorMessage,
  TextArea,
  Button,
} from "@/app/components/ui";

import img from "@/static/form/form.png";

const schema = z.object({
  name: z
    .string()
    .min(1, { message: "Имя должно содержать как минимум 1 символ" }),
  phone: z.string().refine((value) => isValidPhoneNumber(value, "RU"), {
    message: "Неправильный номер телефона",
  }),
  desc: z
    .string()
    .min(1, { message: "Сообщение должно содержать как минимум 1 символ" }),
});

type FormSchema = z.infer<typeof schema>;

export default function OrderForm() {
  const {
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
    control,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { name: "", desc: "", phone: "" },
  });

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    console.log(data); // eslint-disable-line
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(undefined, { keepIsValid: true });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <section className="bg-main-pink-400">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:pt-20">
        <h2 className="mb-4 text-center text-lg font-bold md:text-2xl lg:text-4xl">
          Предложи свой букет
        </h2>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto max-w-screen-lg"
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex grow flex-col">
              <Group className="mb-4">
                <Label htmlFor="name" className="sr-only">
                  Имя
                </Label>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <Input
                      type="text"
                      placeholder="Имя"
                      aria-invalid={!!errors.name}
                      aria-describedby="name-error"
                      {...field}
                    />
                  )}
                />
                {errors.name && (
                  <ErrorMessage id="name-error">
                    {errors.name?.message}
                  </ErrorMessage>
                )}
              </Group>
              <Group className="mb-4">
                <Label htmlFor="phone" className="sr-only">
                  Телефон
                </Label>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <Input
                      type="text"
                      placeholder="Телефон"
                      aria-invalid={!!errors.phone}
                      aria-describedby="phone-error"
                      {...field}
                    />
                  )}
                />
                {errors.phone && (
                  <ErrorMessage id="phone-error">
                    {errors.phone?.message}
                  </ErrorMessage>
                )}
              </Group>
              <Group className="grow">
                <Label htmlFor="desc" className="sr-only">
                  Сообщение
                </Label>
                <Controller
                  name="desc"
                  control={control}
                  render={({ field }) => (
                    <TextArea
                      placeholder="Телефон"
                      aria-invalid={!!errors.desc}
                      aria-describedby="desc-error"
                      {...field}
                    />
                  )}
                />
                {errors.desc && (
                  <ErrorMessage id="desc-error">
                    {errors.desc?.message}
                  </ErrorMessage>
                )}
              </Group>
            </div>
            <div className="relative hidden h-[500px] w-[300px] sm:block">
              <Image src={img} alt="" fill />
            </div>
          </div>
          <Button className="mx-auto mt-4 block sm:mt-8">Отправить</Button>
        </Form>
      </div>
    </section>
  );
}
