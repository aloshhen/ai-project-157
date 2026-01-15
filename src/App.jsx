import { ShoppingCart, Phone, MapPin, Clock, Star, Package, Coffee, ChevronRight, Heart } from 'lucide-react'

function App() {
  const products = [
    {
      id: 1,
      name: 'Банани свіжі',
      category: 'Овочі та фрукти',
      price: '80',
      image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=800&q=80',
      description: 'Свіжі солодкі банани високої якості'
    },
    {
      id: 2,
      name: 'Яблука червоні',
      category: 'Овочі та фрукти',
      price: '35',
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=800&q=80',
      description: 'Соковиті червоні яблука з нашого саду'
    },
    {
      id: 3,
      name: 'Яблука зелені',
      category: 'Овочі та фрукти',
      price: '32',
      image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=800&q=80',
      description: 'Кислі зелені яблука, багаті вітамінами'
    },
    {
      id: 4,
      name: 'Хліб білий',
      category: 'Хлібобулочні вироби',
      price: '28',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
      description: 'Свіжий білий хліб, випечений сьогодні'
    },
    {
      id: 5,
      name: 'Хліб житній',
      category: 'Хлібобулочні вироби',
      price: '32',
      image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800&q=80',
      description: 'Корисний житній хліб з насінням'
    },
    {
      id: 6,
      name: 'Булочки з маком',
      category: 'Хлібобулочні вироби',
      price: '15',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80',
      description: 'М\'які булочки з маковою начинкою'
    },
    {
      id: 7,
      name: 'Булочки з кунжутом',
      category: 'Хлібобулочні вiroби',
      price: '18',
      image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=800&q=80',
      description: 'Ароматні булочки з хрустким кунжутом'
    },
    {
      id: 8,
      name: 'Батон нарізний',
      category: 'Хлібобулочні вироби',
      price: '25',
      image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80',
      description: 'Класичний батон для бутербродів'
    },
    {
      id: 9,
      name: 'Вафлі шоколадні',
      category: 'Солодощі',
      price: '42',
      image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800&q=80',
      description: 'Хрусткі вафлі з шоколадною начинкою'
    },
    {
      id: 10,
      name: 'Вафлі горіхові',
      category: 'Солодощі',
      price: '45',
      image: 'https://images.unsplash.com/photo-1612182062631-e5c0de5c0b18?w=800&q=80',
      description: 'Вафлі з ніжною горіховою начинкою'
    },
    {
      id: 11,
      name: 'Вафлі карамельні',
      category: 'Солодощі',
      price: '40',
      image: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?w=800&q=80',
      description: 'Солодкі вафлі з карамельним смаком'
    },
    {
      id: 12,
      name: 'Вафлі класичні',
      category: 'Солодощі',
      price: '38',
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&q=80',
      description: 'Традиційні вафлі зі смаком дитинства'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
      {/* HEADER */}
      <header className="sticky top-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 shadow-2xl z-50 border-b-4 border-yellow-400">
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-3 rounded-2xl shadow-lg">
                <ShoppingCart className="w-10 h-10 text-orange-600" />
              </div>
              <div>
                <h1 className="text-4xl font-black text-white tracking-tight">Свіжі Продукти</h1>
                <p className="text-yellow-100 text-lg font-semibold">Якість та свіжість щодня!</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <Phone className="w-6 h-6 text-white" />
                <span className="text-white font-bold text-xl">0800-123-456</span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-br from-orange-400 via-pink-400 to-purple-400 rounded-3xl shadow-2xl p-12 border-4 border-yellow-300">
            <h2 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
              Свіжі продукти<br/>кожен день!
            </h2>
            <p className="text-3xl md:text-4xl text-yellow-100 mb-8 font-bold drop-shadow">
              Овочі • Хліб • Вафлі
            </p>
            <p className="text-2xl text-white mb-10 max-w-3xl mx-auto leading-relaxed font-semibold">
              Найкраща якість за доступними цінами. Завжди свіже, завжди смачно!
            </p>
            <button className="bg-white hover:bg-yellow-100 text-orange-600 px-12 py-6 rounded-full text-2xl font-black transition-all transform hover:scale-110 shadow-2xl flex items-center justify-center gap-3 mx-auto">
              Переглянути каталог
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6 bg-gradient-to-r from-yellow-100 to-orange-100">
        <div className="container mx-auto">
          <h2 className="text-6xl font-black text-center mb-16 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            Чому обирають нас?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl border-4 border-orange-300 hover:border-pink-400 transition-all transform hover:scale-105 shadow-xl">
              <div className="bg-gradient-to-br from-orange-400 to-pink-400 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Star className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4">Висока якість</h3>
              <p className="text-gray-700 leading-relaxed text-xl">
                Тільки свіжі продукти найвищої якості для вашого здоров'я
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl border-4 border-orange-300 hover:border-pink-400 transition-all transform hover:scale-105 shadow-xl">
              <div className="bg-gradient-to-br from-pink-400 to-purple-400 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Package className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4">Доставка додому</h3>
              <p className="text-gray-700 leading-relaxed text-xl">
                Безкоштовна доставка при замовленні від 200 грн
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl border-4 border-orange-300 hover:border-pink-400 transition-all transform hover:scale-105 shadow-xl">
              <div className="bg-gradient-to-br from-purple-400 to-orange-400 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Clock className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4">Щодня свіже</h3>
              <p className="text-gray-700 leading-relaxed text-xl">
                Нові поставки кожного дня - гарантія свіжості
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Наш каталог продуктів
            </h2>
            <p className="text-2xl text-gray-700 font-semibold">Великий вибір свіжих та якісних товарів</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border-4 border-transparent hover:border-orange-300">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-100 to-pink-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full font-black text-lg shadow-lg">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-lg leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-4xl font-black bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                      {product.price} грн
                    </div>
                    <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white p-4 rounded-2xl transition-all transform hover:scale-110 shadow-lg">
                      <ShoppingCart className="w-7 h-7" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-8 drop-shadow-lg">
            Замовляйте прямо зараз!
          </h2>
          <p className="text-3xl text-yellow-100 mb-10 max-w-3xl mx-auto font-bold">
            Телефонуйте або приходьте до нашого магазину. Ми завжди раді вам допомогти!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white hover:bg-yellow-100 text-orange-600 px-12 py-6 rounded-full text-2xl font-black transition-all transform hover:scale-110 shadow-2xl flex items-center justify-center gap-3">
              <Phone className="w-8 h-8" />
              Зателефонувати
            </button>
            <button className="bg-yellow-400 hover:bg-yellow-300 text-orange-900 px-12 py-6 rounded-full text-2xl font-black transition-all transform hover:scale-110 shadow-2xl flex items-center justify-center gap-3">
              <MapPin className="w-8 h-8" />
              Знайти нас
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-12 px-6 border-t-4 border-orange-500">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-orange-500 p-3 rounded-xl">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <span className="text-3xl font-black text-white">Свіжі Продукти</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Ваш надійний партнер у виборі якісних продуктів харчування
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-black text-white mb-4">Контакти</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300 text-lg">
                  <Phone className="w-6 h-6 text-orange-400" />
                  <span>0800-123-456</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-lg">
                  <MapPin className="w-6 h-6 text-orange-400" />
                  <span>вул. Центральна, 15</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-lg">
                  <Clock className="w-6 h-6 text-orange-400" />
                  <span>Пн-Нд: 8:00 - 20:00</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black text-white mb-4">Переваги</h3>
              <ul className="space-y-2 text-gray-300 text-lg">
                <li className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  Висока якість
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  Доступні ціни
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  Безкоштовна доставка
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-500 text-lg">
              © 2024 Свіжі Продукти. Всі права захищені.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App