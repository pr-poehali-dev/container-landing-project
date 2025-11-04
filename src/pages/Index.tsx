import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Container" size={32} className="text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              ContainerPro
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#hero" className="hover:text-primary transition-colors">Главная</a>
            <a href="#benefits" className="hover:text-primary transition-colors">Преимущества</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Цены</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Заказать звонок
          </Button>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 -z-10"></div>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Доставка контейнеров{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  по всему миру
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Международная логистика и транспортировка грузов. Быстро, надежно, выгодно.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Truck" className="mr-2" size={20} />
                  Рассчитать доставку
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Связаться с нами
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">лет на рынке</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">50+</div>
                  <div className="text-sm text-muted-foreground">стран доставки</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">10k+</div>
                  <div className="text-sm text-muted-foreground">довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src="https://cdn.poehali.dev/projects/707e2852-9765-4c5a-a154-3e4947a56940/files/30589221-6340-4869-a644-0c4cebc7437c.jpg"
                alt="Контейнерная логистика"
                className="rounded-2xl shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground">Профессиональная логистика с заботой о вашем бизнесе</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'Zap', title: 'Быстрая доставка', desc: 'Оптимальные маршруты и сроки', color: 'text-primary' },
              { icon: 'Shield', title: 'Надежность', desc: 'Полное страхование грузов', color: 'text-secondary' },
              { icon: 'DollarSign', title: 'Выгодные цены', desc: 'Гибкая система скидок', color: 'text-accent' },
              { icon: 'Headphones', title: '24/7 Поддержка', desc: 'Всегда на связи с вами', color: 'text-primary' },
            ].map((benefit, idx) => (
              <Card key={idx} className="hover-scale border-2 hover:border-primary/50 transition-all animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4`}>
                    <Icon name={benefit.icon} size={28} className={benefit.color} />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription className="text-base">{benefit.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр контейнерных перевозок</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Ship',
                title: 'Морские перевозки',
                desc: 'Контейнерные перевозки морем по всему миру. 20ft и 40ft контейнеры.',
                features: ['FCL/LCL перевозки', 'Рефрижераторные контейнеры', 'Специальные грузы'],
                gradient: 'from-primary to-secondary'
              },
              {
                icon: 'Plane',
                title: 'Авиадоставка',
                desc: 'Срочная доставка грузов воздушным транспортом в любую точку мира.',
                features: ['Экспресс-доставка', 'Опасные грузы', 'Температурный режим'],
                gradient: 'from-secondary to-accent'
              },
              {
                icon: 'Truck',
                title: 'Автоперевозки',
                desc: 'Наземная транспортировка контейнеров по России и странам СНГ.',
                features: ['Мультимодальные перевозки', 'Таможенное оформление', 'Складское хранение'],
                gradient: 'from-accent to-primary'
              },
            ].map((service, idx) => (
              <Card key={idx} className="hover-scale border-2 hover:shadow-xl transition-all animate-fade-in" style={{ animationDelay: `${idx * 0.15}s` }}>
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}>
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <Icon name="CheckCircle" size={18} className="text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Тарифные планы</h2>
            <p className="text-xl text-muted-foreground">Выберите оптимальный вариант для вашего бизнеса</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Стартовый',
                price: '2500',
                period: 'за контейнер',
                features: ['Морские перевозки', 'Базовое страхование', 'Трекинг груза', 'Email поддержка'],
                popular: false
              },
              {
                name: 'Бизнес',
                price: '4200',
                period: 'за контейнер',
                features: ['Все виды перевозок', 'Полное страхование', 'Приоритетная обработка', '24/7 поддержка', 'Таможня под ключ', 'Скидка 10%'],
                popular: true
              },
              {
                name: 'Корпоративный',
                price: 'Договорная',
                period: 'индивидуально',
                features: ['Персональный менеджер', 'Максимальные скидки', 'Гибкие условия оплаты', 'VIP обслуживание', 'Складские услуги'],
                popular: false
              },
            ].map((plan, idx) => (
              <Card 
                key={idx} 
                className={`hover-scale transition-all animate-fade-in relative ${
                  plan.popular ? 'border-4 border-primary shadow-2xl scale-105' : 'border-2'
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-4">{plan.name}</CardTitle>
                  <div className="mb-2">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    {plan.price !== 'Договорная' && <span className="text-xl">₽</span>}
                  </div>
                  <CardDescription className="text-base">{plan.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90' 
                        : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-xl text-muted-foreground">Ответы на популярные вопросы о доставке</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Какие сроки доставки контейнеров?',
                a: 'Сроки зависят от маршрута и типа перевозки. Морская доставка из Китая в Россию занимает 25-35 дней, авиадоставка 5-7 дней, автоперевозки по России 3-10 дней.'
              },
              {
                q: 'Как рассчитывается стоимость доставки?',
                a: 'Стоимость зависит от маршрута, типа контейнера (20ft/40ft), веса груза, вида транспорта и дополнительных услуг. Для точного расчета свяжитесь с нашими менеджерами.'
              },
              {
                q: 'Какие документы нужны для отправки?',
                a: 'Необходимы: инвойс, упаковочный лист, сертификаты на товар (при необходимости), договор с контрагентом. Мы поможем с подготовкой всех документов.'
              },
              {
                q: 'Предоставляете ли вы таможенное оформление?',
                a: 'Да, мы оказываем полный спектр услуг таможенного оформления грузов, включая декларирование, сертификацию и получение разрешительных документов.'
              },
              {
                q: 'Как отследить местонахождение груза?',
                a: 'После отправки вы получите трек-номер для отслеживания груза в режиме реального времени через наш сайт или мобильное приложение.'
              },
              {
                q: 'Какие виды контейнеров доступны?',
                a: 'Мы предоставляем стандартные контейнеры 20ft и 40ft, рефрижераторные контейнеры, контейнеры повышенной вместимости (High Cube) и специализированные контейнеры.'
              },
            ].map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">Готовы ответить на все ваши вопросы</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={24} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Телефон</div>
                        <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                        <div className="text-muted-foreground">+7 (800) 555-35-35</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={24} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Email</div>
                        <div className="text-muted-foreground">info@containerpro.ru</div>
                        <div className="text-muted-foreground">sales@containerpro.ru</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={24} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Адрес</div>
                        <div className="text-muted-foreground">г. Москва, ул. Логистическая, д. 1</div>
                        <div className="text-muted-foreground">Бизнес-центр "Континент"</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <img 
                src="https://cdn.poehali.dev/projects/707e2852-9765-4c5a-a154-3e4947a56940/files/87f1ffe4-0a46-4e04-8076-54a64efad7b4.jpg"
                alt="Контейнеровоз"
                className="rounded-xl shadow-lg hover-scale"
              />
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Отправить заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Имя</label>
                    <Input 
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input 
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input 
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea 
                      placeholder="Опишите ваш груз и маршрут доставки..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                    size="lg"
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Container" size={28} />
                <span className="text-xl font-bold">ContainerPro</span>
              </div>
              <p className="text-white/80 text-sm">
                Профессиональная логистика и контейнерные перевозки по всему миру
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Морские перевозки</li>
                <li>Авиадоставка</li>
                <li>Автоперевозки</li>
                <li>Таможенное оформление</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>О нас</li>
                <li>Наши преимущества</li>
                <li>Отзывы клиентов</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@containerpro.ru</li>
                <li>г. Москва, ул. Логистическая, 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 text-center text-sm text-white/60">
            © 2024 ContainerPro. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
