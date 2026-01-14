import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const handleBooking = () => {
    window.location.href = "tel:+79384502228";
  };

  const features = [
    {
      icon: "Users",
      title: "Вместимость",
      description: "От 2 до 10 человек"
    },
    {
      icon: "Wallet",
      title: "Стоимость",
      description: "От 2500 рублей"
    },
    {
      icon: "Clock",
      title: "Минимальное время",
      description: "От 2 часов"
    },
    {
      icon: "Gift",
      title: "Специальное предложение",
      description: "Скидка 10% имениннику"
    }
  ];

  const services = [
    { icon: "Flame", text: "Сухая финская сауна" },
    { icon: "Waves", text: "Открытый бассейн 12×6 м (май-октябрь)" },
    { icon: "Soup", text: "Зона барбекю" },
    { icon: "Wifi", text: "Бесплатный Wi-Fi" },
    { icon: "Home", text: "Летняя беседка" },
    { icon: "ParkingSquare", text: "Бесплатная парковка" },
    { icon: "Bath", text: "Банные принадлежности" }
  ];

  const gallery = [
    {
      url: "https://cdn.poehali.dev/projects/7db7518f-8bdf-4e9d-80ec-3a84be2d1812/files/f606250f-7530-4572-8c8c-d02f9403b6d9.jpg",
      alt: "Финская сауна"
    },
    {
      url: "https://cdn.poehali.dev/projects/7db7518f-8bdf-4e9d-80ec-3a84be2d1812/files/52fde02b-d097-4343-8041-18bc42b7accf.jpg",
      alt: "Открытый бассейн"
    },
    {
      url: "https://cdn.poehali.dev/projects/7db7518f-8bdf-4e9d-80ec-3a84be2d1812/files/6af91205-478b-45c4-a1c9-92b303e1fb36.jpg",
      alt: "Зона барбекю"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${gallery[0].url})`,
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Черноморская звезда
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
            Настоящий отдых для души и тела. Финская сауна, открытый бассейн и зона барбекю.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              onClick={handleBooking}
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all hover:scale-105"
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Забронировать
            </Button>
            <a 
              href="tel:+79384502228"
              className="text-2xl font-semibold tracking-wide hover:text-primary transition-colors"
            >
              +7 938 450-22-28
            </a>
          </div>
          
          <div className="flex gap-6 justify-center">
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={20} />
              <span>Черноморское побережье</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Star" size={20} />
              <span>Премиум отдых</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white" />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            Наши преимущества
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-all hover:shadow-lg animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground">
              Точную стоимость уточняйте по телефону
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            Инфраструктура и услуги
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 p-4 bg-card rounded-lg hover:shadow-md transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name={service.icon as any} size={24} className="text-primary" />
                </div>
                <span className="text-lg font-medium">{service.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            Галерея
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {gallery.map((image, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-xl aspect-square group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white text-xl font-semibold">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            Контакты и местоположение
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            <Card className="overflow-hidden animate-scale-in">
              <CardContent className="p-0 h-full min-h-[400px]">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=39.728111%2C43.585472&mode=search&oid=160878318027&ol=biz&z=17"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  className="min-h-[400px] lg:min-h-[500px]"
                  title="Карта местоположения"
                />
              </CardContent>
            </Card>

            <div className="flex flex-col justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className="border-2 hover:border-primary transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                      <p className="text-muted-foreground text-lg">
                        Сочи, Фермерский переулок 6/3
                      </p>
                      <a 
                        href="https://yandex.ru/maps/?rtext=~43.585472,39.728111"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline mt-2 inline-block"
                      >
                        Построить маршрут →
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                      <a 
                        href="tel:+79384502228"
                        className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
                      >
                        +7 938 450-22-28
                      </a>
                      <p className="text-muted-foreground mt-2">
                        Ежедневно с 9:00 до 23:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Режим работы</h3>
                      <p className="text-muted-foreground text-lg">
                        Круглосуточно, 7 дней в неделю
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Бронирование обязательно
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button 
                size="lg"
                onClick={handleBooking}
                className="text-lg px-8 py-6 hover:scale-105 transition-transform w-full"
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Забронировать сейчас
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            © 2024 Черноморская звезда. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;