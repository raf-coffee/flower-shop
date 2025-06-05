"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import img from "@/static/form/form.webp";
import { formSchema, FormSchema } from "@/constants";
import { useRouter } from "next/navigation";
import { Decor2 } from "@/static/decor";

import Form from "@/app/components/ui/Form";
import Label from "@/app/components/ui/Label";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import ErrorMessage from "@/app/components/ui/ErrorMassage";
import Group from "@/app/components/ui/Group";
import TextArea from "@/app/components/ui/TextArea";

export default function OrderForm() {
  const router = useRouter();
  const {
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
    control,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", desc: "", phone: "" },
  });

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      router.push("/success");
    } else {
      router.push("/error");
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(undefined, { keepIsValid: true });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <section className="relative bg-main-pink-400">
      <Image
        src={Decor2}
        className="absolute bottom-[-40px] left-1/4 hidden md:block"
        alt="Декоративный элемент."
      />
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
                      placeholder="Ваша идея"
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
          <Button size="large" className="mx-auto mt-4 block sm:mt-8">
            Отправить
          </Button>
        </Form>
      </div>
    </section>
  );
}
