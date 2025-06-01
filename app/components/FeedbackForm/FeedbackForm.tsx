"use client";

import { useEffect, useRef } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import {
  Container,
  Heading,
  Input,
  TextArea,
  Button,
  Form,
  Group,
  Label,
  ErrorMessage,
} from "@/app/components/ui";
import { formSchema, FormSchema } from "@/constants";
import ParallaxDecor from "../ParallaxDecor/ParallaxDecor";
import { Decor3, Decor4 } from "@/static/decor";

function FeedbackForm({ title }: { title: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", phone: "", desc: "" },
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
      "Ошибка при отправке".toString();
      router.push("/error");
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(undefined, { keepIsValid: true });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <section className="relative bg-main-pink-400 p-4" ref={sectionRef}>
      {!!sectionRef.current && (
        <ParallaxDecor
          speed={50}
          src={Decor4.src}
          width={83}
          height={107}
          className="bottom-[-40px] left-[20%] z-10 hidden md:block"
          container={sectionRef.current}
        />
      )}
      <Container className="max-w-[770px] lg:mb-12">
        <Heading level={2} className="mb-4 text-center lg:mb-12">
          {title}
        </Heading>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="relative flex flex-col items-center gap-2"
        >
          {!!sectionRef.current && (
            <ParallaxDecor
              speed={50}
              src={Decor3.src}
              width={164}
              height={150}
              container={sectionRef.current}
              className="z-1 left-[48%] top-[20px] hidden md:block"
            />
          )}
          <Group className="z-3 relative w-full">
            <Label htmlFor="name" className="sr-only">
              Имя
            </Label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  className="lg:h-[90px] lg:text-2xl"
                  type="text"
                  placeholder="Имя"
                  aria-invalid={!!errors.name}
                  aria-describedby="name-error"
                  {...field}
                />
              )}
            />
            {errors.name && (
              <ErrorMessage id="name-error">{errors.name.message}</ErrorMessage>
            )}
          </Group>
          <Group className="z-3 relative w-full">
            <Label htmlFor="phone" className="sr-only">
              Телефон
            </Label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <Input
                  className="lg:h-[90px] lg:text-2xl"
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
                {errors.phone.message}
              </ErrorMessage>
            )}
          </Group>
          <Group className="z-3 relative mb-3 w-full lg:mb-12">
            <Label htmlFor="desc" className="sr-only">
              Сообщение
            </Label>
            <Controller
              name="desc"
              control={control}
              render={({ field }) => (
                <TextArea
                  className="lg:min-h-[320px] lg:text-2xl"
                  rows={6}
                  placeholder="Напишите свой вопрос"
                  aria-invalid={!!errors.desc}
                  aria-describedby="desc-error"
                  {...field}
                />
              )}
            />
            {errors.desc && (
              <ErrorMessage id="desc-error">{errors.desc.message}</ErrorMessage>
            )}
          </Group>
          <Button size="large">Отправить</Button>
        </Form>
      </Container>
    </section>
  );
}

export default FeedbackForm;
