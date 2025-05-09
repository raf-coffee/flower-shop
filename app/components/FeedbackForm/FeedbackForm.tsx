import { Container, Heading, Input, TextArea, Button } from "../ui";

function FeedbackForm({ title }: { title: string }) {
  return (
    <section className="bg-main-pink-400 p-4">
      <Container className="max-w-[770px] lg:mb-12">
        <Heading level={2} className="mb-4 text-center lg:mb-12">
          {title}
        </Heading>
        <form className="flex flex-col items-center gap-2">
          <Input
            className="lg:h-[90px] lg:text-2xl"
            type="text"
            placeholder="Имя"
          />
          <Input
            className="lg:h-[90px] lg:text-2xl"
            type="phone"
            placeholder="Телефон"
          />
          <TextArea
            className="mb-3 lg:mb-12 lg:min-h-[320px] lg:text-2xl"
            rows={6}
            placeholder="Напишите свой вопрос"
          />
          <Button>Отправить</Button>
        </form>
      </Container>
    </section>
  );
}

export default FeedbackForm;
