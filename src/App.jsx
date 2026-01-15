import { ShoppingCart, Phone, MapPin, Heart, Star, Package } from 'lucide-react'

function App() {
  const products = {
    vegetables: [
      {
        id: 1,
        name: 'Банани',
        price: 80,
        image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=800&q=80',
        description: 'Свіжі солодкі банани',
        badge: 'Популярне'
      },
      {
        id: 2,
        name: 'Яблука',
        price: 35,
        image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=800&q=80',
        description: 'Соковиті червоні яблука',
        badge: 'Свіжі'
      },
      {
        id: 3,
        name: 'Помідори',
        price: 45,
        image: 'https://images.unsplash.com/photo-1546470427-227a1e97e5fe?w=800&q=80',
        description: 'Червоні стиглі помідори',
        badge: 'Нове'
      },
      {
        id: 4,
        name: 'Огірки',
        price: 38,
        image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=800&q=80',
        description: 'Хрусткі свіжі огірки',
        badge: 'Свіжі'
      }
    ],
    bread: [
      {
        id: 5,
        name: 'Білий Хліб',
        price: 28,
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
        description: 'Свіжоспечений білий хліб',
        badge: 'Щодня'
      },
      {
        id: 6,
        name: 'Чорний Хліб',
        price: 32,
        image: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=800&q=80',
        description: 'Житній чорний хліб',
        badge: 'Корисно'
      },
      {
        id: 7,
        name: 'Булочки',
        price: 8,
        image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=800&q=80',
        description: 'М\'які солодкі булочки',
        badge: 'Популярне'
      },
      {
        id: 8,
        name: 'Батон',
        price: 25,
        image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80',
        description: 'Довгий французький батон',
        badge: 'Свіжі'
      },
      {
        id: 9,
        name: 'Круасани',
        price: 18,
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80',
        description: 'Хрусткі масляні круасани',
        badge: 'Преміум'
      },
      {
        id: 10,
        name: 'Багет',
        price: 30,
        image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?w=800&q=80',
        description: 'Класичний французький багет',
        badge: 'Нове'
      }
    ],
    waffles: [
      {
        id: 11,
        name: 'Класичні Вафлі',
        price: 42,
        image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=800&q=80',
        description: 'Хрусткі класичні вафлі',
        badge: 'Популярне'
      },
      {
        id: 12,
        name: 'Шоколадні Вафлі',
        price: 48,
        image: 'https://images.unsplash.com/photo-1612182062370-bd3d6b17b8a8?w=800&q=80',
        description: 'Вафлі з шоколадом',
        badge: 'Топ'
      },
      {
        id: 13,
        name: 'Вафлі з Кремом',
        price: 55,
        image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=800&q=80',
        description: 'Вафлі з вершковим кремом',
        badge: 'Преміум'
      },
      {
        id: 14,
        name: 'Вафельні Трубочки',
        price: 38,
        image: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?w=800&q=80',
        description: 'Солодкі вафельні трубочки',
        badge: 'Свіжі'
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50">
      {/* HEADER */}
      <header className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 shadow-xl sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Package className="w-12 h-12 text-white" />
              <div>
                <h1 className="text-3xl font-black text-white tracking-tight">КАТАЛОГ ПРОДУКТІВ</h1>
                <p className="text-white/90 text-sm font-semibold">Свіжі продукти кожен день</p>
              </div>
            </div>
            <button className="bg-white hover:bg-orange-50 text-orange-600 px-8 py-4 rounded-2xl text-xl font-black transition-all transform hover:scale-105 shadow-lg flex items-center gap-3">
              <ShoppingCart className="w-7 h-7" />
              <span>Кошик</span>
            </button>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="py-16 px-6 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
            Свіжі Продукти
          </h2>
          <p className="text-3xl text-white/95 font-bold mb-8">
            Овочі • Хліб • Вафлі
          </p>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-semibold">
            Якісні продукти за доступними цінами. Доставка по місту!
          </p>
        </div>
      </section>

      {/* VEGETABLES SECTION */}
      <section id="vegetables" className="py-16 px-6 bg-gradient-to-b from-green-50 to-emerald-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-black text-green-700 mb-4 flex items-center justify-center gap-4">
              <Star className="w-12 h-12 fill-green-600 text-green-600" />
              Овочі та Фрукти
              <Star className="w-12 h-12 fill-green-600 text-green-600" />
            </h3>
            <p className="text-2xl text-green-600 font-bold">Свіжі щодня!</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.vegetables.map(product => (
              <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-green-200 hover:border-green-400 transition-all transform hover:scale-105 hover:shadow-3xl">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
                  <span className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-black shadow-lg">
                    {product.badge}
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="text-3xl font-black text-gray-900 mb-3">{product.name}</h4>
                  <p className="text-xl text-gray-600 mb-4 font-semibold">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black text-green-600">{product.price} грн</span>
                    <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-2xl transition-all transform hover:scale-110 shadow-lg">
                      <ShoppingCart className="w-7 h-7" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BREAD SECTION */}
      <section id="bread" className="py-16 px-6 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-black text-amber-700 mb-4 flex items-center justify-center gap-4">
              <Star className="w-12 h-12 fill-amber-600 text-amber-600" />
              Хліб та Булочки
              <Star className="w-12 h-12 fill-amber-600 text-amber-600" />
            </h3>
            <p className="text-2xl text-amber-600 font-bold">Свіжоспечені!</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.bread.map(product => (
              <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-200 hover:border-amber-400 transition-all transform hover:scale-105 hover:shadow-3xl">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
                  <span className="absolute top-4 right-4 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-black shadow-lg">
                    {product.badge}
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="text-3xl font-black text-gray-900 mb-3">{product.name}</h4>
                  <p className="text-xl text-gray-600 mb-4 font-semibold">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black text-amber-600">{product.price} грн</span>
                    <button className="bg-amber-500 hover:bg-amber-600 text-white p-4 rounded-2xl transition-all transform hover:scale-110 shadow-lg">
                      <ShoppingCart className="w-7 h-7" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAFFLES SECTION */}
      <section id="waffles" className="py-16 px-6 bg-gradient-to-b from-pink-50 to-rose-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-black text-pink-700 mb-4 flex items-center justify-center gap-4">
              <Star className="w-12 h-12 fill-pink-600 text-pink-600" />
              Вафлі
              <Star className="w-12 h-12 fill-pink-600 text-pink-600" />
            </h3>
            <p className="text-2xl text-pink-600 font-bold">Смачні та хрусткі!</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.waffles.map(product => (
              <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-200 hover:border-pink-400 transition-all transform hover:scale-105 hover:shadow-3xl">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
                  <span className="absolute top-4 right-4 bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-black shadow-lg">
                    {product.badge}
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="text-3xl font-black text-gray-900 mb-3">{product.name}</h4>
                  <p className="text-xl text-gray-600 mb-4 font-semibold">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black text-pink-600">{product.price} грн</span>
                    <button className="bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-2xl transition-all transform hover:scale-110 shadow-lg">
                      <ShoppingCart className="w-7 h-7" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">
        <div className="container mx-auto text-center">
          <h3 className="text-6xl font-black text-white mb-8 drop-shadow-lg">
            Замовляйте Зараз!
          </h3>
          <p className="text-3xl text-white/95 mb-10 font-bold">
            Безкоштовна доставка від 300 грн
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white hover:bg-orange-50 text-orange-600 px-12 py-6 rounded-2xl text-2xl font-black transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3">
              <Phone className="w-8 h-8" />
              Телефонувати
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 rounded-2xl text-2xl font-black transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3">
              <ShoppingCart className="w-8 h-8" />
              До Кошика
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <Package className="w-10 h-10 text-orange-400" />
                <span className="text-2xl font-black text-white">КАТАЛОГ ПРОДУКТІВ</span>
              </div>
              <p className="text-gray-400 text-lg font-semibold">Свіжі продукти щодня</p>
            </div>
            <div>
              <h4 className="text-xl font-black text-white mb-4">Контакти</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start gap-3 text-gray-300">
                  <Phone className="w-6 h-6 text-orange-400" />
                  <span className="text-lg font-semibold">+380 (XX) XXX-XX-XX</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3 text-gray-300">
                  <MapPin className="w-6 h-6 text-orange-400" />
                  <span className="text-lg font-semibold">м. Київ, вул. Центральна</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-black text-white mb-4">Режим роботи</h4>
              <p className="text-gray-300 text-lg font-semibold">Пн-Нд: 8:00 - 21:00</p>
            </div>
          </div>
          <div className="text-center text-gray-500 text-lg mt-10 pt-8 border-t border-gray-700">
            © 2024 Каталог Продуктів. Всі права захищені.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App