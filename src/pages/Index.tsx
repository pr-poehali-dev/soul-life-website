import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const newGames = [
    {
      id: 1,
      title: "Cyber Runner",
      platform: ["PC", "Mobile"],
      rating: 4.8,
      downloads: "12K",
      image: "img/2e453217-b820-4887-891c-4b13c7aa6f27.jpg"
    },
    {
      id: 2,
      title: "Space Odyssey",
      platform: ["PC", "Console"],
      rating: 4.9,
      downloads: "25K",
      image: "img/2e453217-b820-4887-891c-4b13c7aa6f27.jpg"
    },
    {
      id: 3,
      title: "Puzzle Master",
      platform: ["Mobile"],
      rating: 4.6,
      downloads: "8K",
      image: "img/2e453217-b820-4887-891c-4b13c7aa6f27.jpg"
    }
  ];

  const popularGames = [
    {
      id: 4,
      title: "Battle Arena",
      platform: ["PC", "Console", "Mobile"],
      rating: 4.7,
      downloads: "150K",
      image: "img/2e453217-b820-4887-891c-4b13c7aa6f27.jpg"
    },
    {
      id: 5,
      title: "Mystic Quest",
      platform: ["PC", "Console"],
      rating: 4.9,
      downloads: "89K",
      image: "img/2e453217-b820-4887-891c-4b13c7aa6f27.jpg"
    },
    {
      id: 6,
      title: "Racing Pro",
      platform: ["Console", "Mobile"],
      rating: 4.5,
      downloads: "67K",
      image: "img/2e453217-b820-4887-891c-4b13c7aa6f27.jpg"
    }
  ];

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "PC":
        return "Monitor";
      case "Mobile":
        return "Smartphone";
      case "Console":
        return "Gamepad2";
      default:
        return "Device";
    }
  };

  const GameCard = ({ game }: { game: any }) => (
    <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-xl bg-card border-gaming-dark-light">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={game.image} 
            alt={game.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 flex gap-1">
            {game.platform.map((p: string) => (
              <Badge key={p} variant="secondary" className="bg-primary/90 text-primary-foreground backdrop-blur">
                <Icon name={getPlatformIcon(p)} size={12} className="mr-1" />
                {p}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="font-orbitron text-lg mb-2 group-hover:text-primary transition-colors">
          {game.title}
        </CardTitle>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{game.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Icon name="Download" size={16} />
            <span className="text-sm">{game.downloads}</span>
          </div>
        </div>
        <Button className="w-full mt-3 bg-primary hover:bg-primary/90 font-medium">
          Играть
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-gaming-dark-light bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Gamepad2" size={32} className="text-primary" />
              <h1 className="text-2xl font-orbitron font-bold">GAMING HUB</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="hover:text-primary transition-colors">Главная</a>
              <a href="#" className="hover:text-primary transition-colors">Новые игры</a>
              <a href="#" className="hover:text-primary transition-colors">Популярные</a>
              <a href="#" className="hover:text-primary transition-colors">Поддержка</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Icon name="Trophy" size={40} className="text-primary" />
          </div>
          <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6 bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
            ИГРОВАЯ ВСЕЛЕННАЯ
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-inter">
            Откройте для себя лучшие игры для всех платформ. PC, мобильные устройства, консоли — всё в одном месте.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              <Icon name="Play" size={20} className="mr-2" />
              Начать играть
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/30 hover:border-primary">
              <Icon name="Search" size={20} className="mr-2" />
              Обзор игр
            </Button>
          </div>
        </div>
      </section>

      {/* Platform Filters */}
      <section className="py-8 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-primary text-primary-foreground cursor-pointer">
              <Icon name="Monitor" size={16} className="mr-2" />
              Все платформы
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              <Icon name="Monitor" size={16} className="mr-2" />
              PC
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              <Icon name="Smartphone" size={16} className="mr-2" />
              Мобильные
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              <Icon name="Gamepad2" size={16} className="mr-2" />
              Консоли
            </Badge>
          </div>
        </div>
      </section>

      {/* Games Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="new" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-card">
              <TabsTrigger value="new" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Icon name="Sparkles" size={16} className="mr-2" />
                Новые игры
              </TabsTrigger>
              <TabsTrigger value="popular" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Icon name="TrendingUp" size={16} className="mr-2" />
                Популярные
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="new">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newGames.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="popular">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularGames.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto text-center">
          <Icon name="Headphones" size={48} className="text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-orbitron font-bold mb-4">Нужна помощь?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Наша команда поддержки работает 24/7, чтобы помочь вам с любыми вопросами по играм, техническими проблемами или предложениями.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card border-gaming-dark-light">
              <CardContent className="p-6 text-center">
                <Icon name="MessageCircle" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Чат поддержки</h3>
                <p className="text-sm text-muted-foreground mb-4">Быстрые ответы онлайн</p>
                <Button variant="outline" size="sm">Начать чат</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-gaming-dark-light">
              <CardContent className="p-6 text-center">
                <Icon name="Mail" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email поддержка</h3>
                <p className="text-sm text-muted-foreground mb-4">Подробные консультации</p>
                <Button variant="outline" size="sm">Написать</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-gaming-dark-light">
              <CardContent className="p-6 text-center">
                <Icon name="BookOpen" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">База знаний</h3>
                <p className="text-sm text-muted-foreground mb-4">Ответы на частые вопросы</p>
                <Button variant="outline" size="sm">Открыть</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gaming-dark-light bg-card/30">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Gamepad2" size={24} className="text-primary" />
            <span className="font-orbitron font-bold text-lg">GAMING HUB</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 Gaming Hub. Все права защищены. Играйте с удовольствием!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;