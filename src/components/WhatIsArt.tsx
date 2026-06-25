export function WhatIsArt() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src="/contemporary-abstract-colorful-art.jpg"
                alt="Современное искусство"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light text-balance">
                Современное искусство — язык нашего времени
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Современное искусство — это живой разговор о том, что происходит прямо сейчас.
                  Художники сегодня исследуют цифровую реальность, переосмысляют телесность,
                  деконструируют социальные нормы и создают работы, которые невозможно оставить равнодушным.
                </p>

                <p>
                  Оно провокационно, многослойно и намеренно неудобно. Именно это делает его ценным:
                  современное искусство не украшает стену — оно задаёт вопросы, меняет угол зрения
                  и остаётся в памяти надолго после того, как вы отходите от полотна.
                </p>

                <p>
                  Живопись, цифровые инсталляции, скульптура, фотография, видеоарт — форматы меняются,
                  но суть остаётся прежней: художник ищет связь со зрителем через образ, материал и идею.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Современное искусство существует на пересечении культуры, технологий и человеческого опыта.
              Оно рождается в мастерских и на экранах, в городских пространствах и онлайн — и именно
              поэтому ему нужна платформа, которая понимает его природу.
            </p>

            <div className="pt-8 border-t border-border mt-8">
              <h3 className="font-serif text-2xl font-light mb-4 text-foreground">О Галеристе</h3>
              <p>
                Галерист — это онлайн-галерея, созданная для современного искусства и тех, кто его создаёт.
                Мы отбираем работы художников, чьё видение актуально здесь и сейчас, и открываем к ним
                доступ для коллекционеров, дизайнеров и всех, кто ищет подлинное высказывание в искусстве.
                Наша миссия — сделать современное искусство доступным, а художников — видимыми.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}