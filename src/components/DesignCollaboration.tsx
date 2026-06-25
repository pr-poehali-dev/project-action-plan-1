import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Palette",
    title: "Оригинальные работы",
    description: "Доступ к эксклюзивным произведениям современных художников для интерьерных проектов и брендинга",
  },
  {
    icon: "Handshake",
    title: "Прямой контакт",
    description: "Мы связываем дизайнеров напрямую с художниками — без посредников и лишних согласований",
  },
  {
    icon: "Layers",
    title: "Любой формат",
    description: "Живопись, цифровое искусство, принты, инсталляции — подберём под концепцию любого пространства",
  },
  {
    icon: "BadgeCheck",
    title: "Авторское право",
    description: "Все юридические вопросы решены: лицензирование, воспроизведение и коммерческое использование",
  },
];

export function DesignCollaboration() {
  return (
    <section id="designers" className="py-16 lg:py-24 bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <p className="text-sm tracking-widest uppercase opacity-60">Для дизайнеров</p>
              <h2 className="font-serif text-4xl lg:text-5xl font-light leading-tight text-balance">
                Искусство как часть вашего проекта
              </h2>
              <p className="text-lg opacity-70 leading-relaxed">
                Дизайнеры интерьеров, арт-директора и бренды — мы знаем, как важно найти
                работу, которая точно попадает в концепцию. Галерист помогает встроить
                подлинное современное искусство в любой проект: от частного интерьера
                до корпоративного пространства.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="border-background text-background hover:bg-background hover:text-foreground transition-colors"
              >
                Начать сотрудничество
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="space-y-3">
                  <div className="w-10 h-10 rounded-full border border-background/30 flex items-center justify-center">
                    <Icon name={b.icon} size={18} className="opacity-80" />
                  </div>
                  <h3 className="font-serif text-lg font-light">{b.title}</h3>
                  <p className="text-sm opacity-60 leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-background/20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-serif text-4xl font-light mb-1">200+</p>
              <p className="text-sm opacity-50">художников в галерее</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-light mb-1">50+</p>
              <p className="text-sm opacity-50">завершённых проектов</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-light mb-1">15</p>
              <p className="text-sm opacity-50">стран присутствия</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-light mb-1">48ч</p>
              <p className="text-sm opacity-50">среднее время ответа</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}