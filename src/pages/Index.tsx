import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  const products = [
    {
      id: 1,
      name: 'Премиум продукт',
      description: 'Высококачественное решение для вашего бизнеса',
      price: '5 999',
      image: 'https://cdn.poehali.dev/projects/707e2852-9765-4c5a-a154-3e4947a56940/files/390f6cd6-2204-4be2-b19e-f5455cf267e3.jpg',
      badge: 'Хит продаж'
    },
    {
      id: 2,
      name: 'Стандарт',
      description: 'Оптимальное соотношение цены и качества',
      price: '3 499',
      image: 'https://cdn.poehali.dev/projects/707e2852-9765-4c5a-a154-3e4947a56940/files/390f6cd6-2204-4be2-b19e-f5455cf267e3.jpg',
      badge: 'Популярное'
    },
    {
      id: 3,
      name: 'Базовый',
      description: 'Отличный выбор для начинающих',
      price: '1 999',
      image: 'https://cdn.poehali.dev/projects/707e2852-9765-4c5a-a154-3e4947a56940/files/390f6cd6-2204-4be2-b19e-f5455cf267e3.jpg',
      badge: 'Новинка'
    },
    {
      id: 4,
      name: 'Профессионал',
      description: 'Максимум возможностей для профи',
      price: '8 999',
      image: 'https://cdn.poehali.dev/projects/707e2852-9765-4c5a-a154-3e4947a56940/files/390f6cd6-2204-4be2-b19e-f5455cf267e3.jpg',
      badge: 'Premium'
    }
  ];

  const services = [
    {
      icon: 'Sparkles',
      title: 'Консультации',
      description: 'Профессиональная консультация по всем вопросам'
    },
    {
      icon: 'Rocket',
      title: 'Внедрение',
      description: 'Быстрое внедрение решений под ключ'
    },
    {
      icon: 'Shield',
      title: 'Поддержка 24/7',
      description: 'Круглосуточная техническая поддержка'
    },
    {
      icon: 'TrendingUp',
      title: 'Аналитика',
      description: 'Детальная аналитика и отчетность'
    },
    {
      icon: 'Users',
      title: 'Обучение',
      description: 'Обучение персонала работе с системой'
    },
    {
      icon: 'Lock',
      title: 'Безопасность',
      description: 'Надежная защита ваших данных'
    }
  ];

  const tableData = [
    { id: 1, name: 'Проект Alpha', status: 'В работе', progress: 75, date: '15.12.2024' },
    { id: 2, name: 'Проект Beta', status: 'Завершен', progress: 100, date: '10.12.2024' },
    { id: 3, name: 'Проект Gamma', status: 'Планирование', progress: 25, date: '20.12.2024' },
    { id: 4, name: 'Проект Delta', status: 'В работе', progress: 60, date: '18.12.2024' },
    { id: 5, name: 'Проект Epsilon', status: 'В работе', progress: 45, date: '22.12.2024' }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold">ModernHub</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#hero" className="hover:text-primary transition-colors">Главная</a>
            <a href="#products" className="hover:text-primary transition-colors">Товары</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#features" className="hover:text-primary transition-colors">Возможности</a>
            <a href="#data" className="hover:text-primary transition-colors">Данные</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary">
            Начать работу
          </Button>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-primary/10 text-primary border-primary/20">🚀 Новая версия 2.0</Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Универсальная платформа{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                для вашего бизнеса
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Все инструменты в одном месте. Начните работу за несколько минут и масштабируйте свой бизнес без ограничений.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                <Icon name="Play" className="mr-2" size={20} />
                Попробовать бесплатно
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Book" className="mr-2" size={20} />
                Документация
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10k+</div>
                <div className="text-sm text-muted-foreground">Активных пользователей</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Каталог</Badge>
            <h2 className="text-4xl font-bold mb-4">Наши продукты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите решение, которое подходит именно вам
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all border-2 hover:border-primary/50">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-3 right-3 bg-primary">{product.badge}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">₽{product.price}</div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Icon name="ShoppingCart" className="mr-2" size={18} />
                    Купить
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Услуги</Badge>
            <h2 className="text-4xl font-bold mb-4">Что мы предлагаем</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг для развития вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Возможности</Badge>
            <h2 className="text-4xl font-bold mb-4">Все функции в одном месте</h2>
            <p className="text-xl text-muted-foreground">
              Изучите наши решения по категориям
            </p>
          </div>
          <Tabs defaultValue="automation" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="automation">Автоматизация</TabsTrigger>
              <TabsTrigger value="analytics">Аналитика</TabsTrigger>
              <TabsTrigger value="integration">Интеграции</TabsTrigger>
              <TabsTrigger value="security">Безопасность</TabsTrigger>
            </TabsList>
            
            <TabsContent value="automation" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Bot" className="text-primary" />
                    Автоматизация процессов
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Автоматизируйте рутинные задачи и сосредоточьтесь на развитии бизнеса. 
                    Наши инструменты позволяют настроить автоматические рабочие процессы без программирования.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { icon: 'Workflow', text: 'Визуальный конструктор' },
                      { icon: 'Timer', text: 'Планировщик задач' },
                      { icon: 'Webhook', text: 'Webhooks API' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 border rounded-lg">
                        <Icon name={item.icon} size={20} className="text-primary" />
                        <span className="text-sm font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="BarChart3" className="text-secondary" />
                    Продвинутая аналитика
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Получайте детальную аналитику по всем показателям вашего бизнеса в режиме реального времени.
                    Настраиваемые дашборды и отчеты.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { icon: 'TrendingUp', text: 'Метрики в реальном времени' },
                      { icon: 'PieChart', text: 'Кастомные дашборды' },
                      { icon: 'FileText', text: 'Автоматические отчеты' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 border rounded-lg">
                        <Icon name={item.icon} size={20} className="text-secondary" />
                        <span className="text-sm font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="integration" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Plug" className="text-accent" />
                    Интеграции с сервисами
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Подключайте любые внешние сервисы и инструменты. Более 500 готовых интеграций.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { icon: 'Mail', text: 'Email сервисы' },
                      { icon: 'Database', text: 'CRM системы' },
                      { icon: 'Cloud', text: 'Облачные хранилища' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 border rounded-lg">
                        <Icon name={item.icon} size={20} className="text-accent" />
                        <span className="text-sm font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="ShieldCheck" className="text-primary" />
                    Безопасность данных
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Ваши данные защищены по самым высоким стандартам. Шифрование, резервное копирование, контроль доступа.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { icon: 'Lock', text: 'SSL шифрование' },
                      { icon: 'Key', text: 'Двухфакторная аутентификация' },
                      { icon: 'Server', text: 'Резервное копирование' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 border rounded-lg">
                        <Icon name={item.icon} size={20} className="text-primary" />
                        <span className="text-sm font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="data" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Статистика</Badge>
            <h2 className="text-4xl font-bold mb-4">Текущие проекты</h2>
            <p className="text-xl text-muted-foreground">
              Отслеживайте прогресс всех проектов в одной таблице
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Обзор проектов</CardTitle>
              <CardDescription>Актуальная информация по всем активным проектам</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">ID</TableHead>
                    <TableHead>Название</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead>Прогресс</TableHead>
                    <TableHead className="text-right">Дата</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tableData.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell className="font-medium">{row.id}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={row.status === 'Завершен' ? 'default' : 'secondary'}
                          className={row.status === 'Завершен' ? 'bg-green-500' : ''}
                        >
                          {row.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-muted rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all"
                              style={{ width: `${row.progress}%` }}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground w-12">{row.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">{row.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Готовы ответить на все ваши вопросы
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Отправить сообщение</CardTitle>
              <CardDescription>Мы ответим в течение 24 часов</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input 
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Input 
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Ваше сообщение"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary" size="lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12 px-4 border-t">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">ModernHub</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Универсальная платформа для бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Возможности</li>
                <li>Цены</li>
                <li>API</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Блог</li>
                <li>Карьера</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Документация</li>
                <li>Контакты</li>
                <li>Статус системы</li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            © 2024 ModernHub. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
