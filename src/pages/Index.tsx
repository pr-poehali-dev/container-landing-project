import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <span className="text-xl font-semibold tracking-tight">ContainerPro</span>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#hero" className="text-muted-foreground hover:text-foreground transition-colors">Главная</a>
            <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">Преимущества</a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Услуги</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Цены</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
          </div>
          <Button size="sm" variant="outline" className="text-sm">
            Связаться
          </Button>
        </div>
      </nav>

      <section id="hero" className="pt-40 pb-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-7xl font-semibold tracking-tight leading-tight">
              Доставка контейнеров<br/>по всему миру
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Международная логистика и транспортировка грузов. Быстро, надежно, выгодно.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button size="lg" className="text-sm">
                Рассчитать доставку
              </Button>
              <Button size="lg" variant="outline" className="text-sm">
                Связаться с нами
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-12 max-w-2xl mx-auto pt-16">
              <div>
                <div className="text-4xl font-semibold mb-2">15+</div>
                <div className="text-sm text-muted-foreground">лет на рынке</div>
              </div>
              <div>
                <div className="text-4xl font-semibold mb-2">50+</div>
                <div className="text-sm text-muted-foreground">стран доставки</div>
              </div>
              <div>
                <div className="text-4xl font-semibold mb-2">10k+</div>
                <div className="text-sm text-muted-foreground">клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-32 px-6 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-20">
            <h2 className="text-4xl font-semibold mb-4 tracking-tight">Почему мы</h2>
            <p className="text-lg text-muted-foreground font-light">Профессиональная логистика с заботой о вашем бизнесе</p>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            {[
              { title: 'Быстрая доставка', desc: 'Оптимальные маршруты и минимальные сроки перевозки' },
              { title: 'Надежность', desc: 'Полное страхование грузов и гарантии безопасности' },
              { title: 'Выгодные цены', desc: 'Гибкая система скидок для постоянных клиентов' },
              { title: '24/7 Поддержка', desc: 'Круглосуточная связь с персональным менеджером' },
            ].map((benefit, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-xl font-medium">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-32 px-6 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-20">
            <h2 className="text-4xl font-semibold mb-4 tracking-tight">Услуги</h2>
            <p className="text-lg text-muted-foreground font-light">Полный спектр контейнерных перевозок</p>
          </div>
          <div className="space-y-px border border-border">
            {[
              {
                title: 'Морские перевозки',
                desc: 'Контейнерные перевозки морем по всему миру. Контейнеры 20ft и 40ft.',
                features: ['FCL/LCL перевозки', 'Рефрижераторные контейнеры', 'Специальные грузы']
              },
              {
                title: 'Авиадоставка',
                desc: 'Срочная доставка грузов воздушным транспортом в любую точку мира.',
                features: ['Экспресс-доставка', 'Опасные грузы', 'Температурный режим']
              },
              {
                title: 'Автоперевозки',
                desc: 'Наземная транспортировка контейнеров по России и странам СНГ.',
                features: ['Мультимодальные перевозки', 'Таможенное оформление', 'Складское хранение']
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-10 hover:bg-muted/30 transition-colors">
                <div className="space-y-4">
                  <h3 className="text-2xl font-medium">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.features.map((feature, fIdx) => (
                      <span key={fIdx} className="text-xs px-3 py-1.5 border border-border">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-32 px-6 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-20">
            <h2 className="text-4xl font-semibold mb-4 tracking-tight">Тарифы</h2>
            <p className="text-lg text-muted-foreground font-light">Выберите оптимальный вариант</p>
          </div>
          <div className="grid md:grid-cols-3 gap-px border border-border">
            {[
              {
                name: 'Стартовый',
                price: '2 500',
                period: 'за контейнер',
                features: ['Морские перевозки', 'Базовое страхование', 'Трекинг груза', 'Email поддержка']
              },
              {
                name: 'Бизнес',
                price: '4 200',
                period: 'за контейнер',
                features: ['Все виды перевозок', 'Полное страхование', 'Приоритет', '24/7 поддержка', 'Таможня', 'Скидка 10%']
              },
              {
                name: 'Корпоративный',
                price: 'Договорная',
                period: 'индивидуально',
                features: ['Персональный менеджер', 'Максимальные скидки', 'Гибкая оплата', 'VIP обслуживание']
              },
            ].map((plan, idx) => (
              <div key={idx} className="bg-white p-10 hover:bg-muted/30 transition-colors">
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">{plan.name}</div>
                    <div className="text-4xl font-semibold mb-1">
                      {plan.price !== 'Договорная' && '₽'}{plan.price}
                    </div>
                    <div className="text-sm text-muted-foreground">{plan.period}</div>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-sm text-muted-foreground">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full text-sm">
                    Выбрать
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-32 px-6 border-t border-border">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-20">
            <h2 className="text-4xl font-semibold mb-4 tracking-tight">Вопросы</h2>
            <p className="text-lg text-muted-foreground font-light">Ответы на популярные вопросы</p>
          </div>
          <Accordion type="single" collapsible className="space-y-px border border-border">
            {[
              {
                q: 'Какие сроки доставки контейнеров?',
                a: 'Морская доставка из Китая в Россию: 25-35 дней. Авиадоставка: 5-7 дней. Автоперевозки по России: 3-10 дней.'
              },
              {
                q: 'Как рассчитывается стоимость?',
                a: 'Стоимость зависит от маршрута, типа контейнера, веса груза и дополнительных услуг. Для точного расчета свяжитесь с менеджером.'
              },
              {
                q: 'Какие документы нужны?',
                a: 'Необходимы: инвойс, упаковочный лист, сертификаты на товар, договор с контрагентом. Поможем с подготовкой.'
              },
              {
                q: 'Есть таможенное оформление?',
                a: 'Да, оказываем полный спектр услуг таможенного оформления грузов.'
              },
              {
                q: 'Как отследить груз?',
                a: 'После отправки получите трек-номер для отслеживания в реальном времени.'
              },
            ].map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-0 bg-white px-8 hover:bg-muted/30">
                <AccordionTrigger className="text-left hover:no-underline py-6 text-base font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 border-t border-border">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-20">
            <h2 className="text-4xl font-semibold mb-4 tracking-tight">Контакты</h2>
            <p className="text-lg text-muted-foreground font-light">Готовы ответить на все вопросы</p>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <div className="text-sm text-muted-foreground mb-2">Телефон</div>
                <div className="space-y-1">
                  <div>+7 (495) 123-45-67</div>
                  <div>+7 (800) 555-35-35</div>
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">Email</div>
                <div className="space-y-1">
                  <div>info@containerpro.ru</div>
                  <div>sales@containerpro.ru</div>
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">Адрес</div>
                <div className="space-y-1">
                  <div>г. Москва</div>
                  <div>ул. Логистическая, д. 1</div>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input 
                  placeholder="Имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="border-border"
                />
              </div>
              <div>
                <Input 
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="border-border"
                />
              </div>
              <div>
                <Input 
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="border-border"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Сообщение"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className="border-border resize-none"
                />
              </div>
              <Button type="submit" className="w-full text-sm">
                Отправить
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="font-semibold mb-4">ContainerPro</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Профессиональная логистика и перевозки
              </p>
            </div>
            <div>
              <div className="text-sm font-medium mb-4">Услуги</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Морские перевозки</li>
                <li>Авиадоставка</li>
                <li>Автоперевозки</li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-medium mb-4">Компания</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Преимущества</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-medium mb-4">Контакты</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@containerpro.ru</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            © 2024 ContainerPro
          </div>
        </div>
      </footer>
    </div>
  );
}
