import { ShoppingCart, Menu, X, ChevronRight, Star, Heart, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const products = {
    fruits: [
      {
        name: 'Банани',
        price: '45 грн/кг',
        image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=800&q=80',
        description: 'Свіжі солодкі банани з Еквадору'
      },
      {
        name: 'Яблука',
        price: '35 грн/кг',
        image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=800&q=80',
        description: 'Соковиті червоні яблука'
      },
      {
        name: 'Апельсини',
        price: '50 грн/кг',
        image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=800&q=80',
        description: 'Соковиті апельсини з Іспанії'
      },
      {
        name: 'Груші',
        price: '40 грн/кг',
        image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80',
        description: 'Солодкі ароматні груші'
      }
    ],
    bread: [
      {
        name: 'Білий Хліб',
        price: '25 грн',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
        description: 'Свіжий білий хліб щодня'
      },
      {
        name: 'Чорний Хліб',
        price: '28 грн',
        image: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=800&q=80',
        description: 'Здоровий житній хліб'
      },
      {
        name: 'Булочки',
        price: '8 грн/шт',
        image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800&q=80',
        description: 'М\'які солодкі булочки'
      },
      {
        name: 'Батон',
        price: '22 грн',
        image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80',
        description: 'Класичний батон нарізний'
      },
      {
        name: 'Багет',
        price: '30 грн',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80',
        description: 'Французький хрусткий багет'
      },
      {
        name: 'Круасани',
        price: '15 грн/шт',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80',
        description: 'Масляні свіжі круасани'
      }
    ],
    waffles: [
      {
        name: 'Віденські Вафлі',
        price: '35 грн',
        image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=800&q=80',
        description: 'Хрусткі вафлі з цукровою пудрою'
      },
      {
        name: 'Шоколадні Вафлі',
        price: '40 грн',
        image: 'https://images.unsplash.com/photo-1612182062389-3c8d6f07ecde?w=800&q=80',
        description: 'Вафлі з шоколадною начинкою'
      },
      {
        name: 'Вафлі з Ягодами',
        price: '45 грн',
        image: 'https://images.unsplash.com/photo-1568051243858-533a607809a5?w=800&q=80',
        description: 'Вафлі зі свіжими ягодами'
      },
      {
        name: 'Вафельні Трубочки',
        price: '30 грн',
        image: 'https://images.unsplash.com/photo-1599785209796-786432b228bc?w=800&q=80',
        description: 'Хрусткі трубочки з кремом'
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      {/* HEADER */}
      <header className="sticky top-0 bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 shadow-xl z-50">
        <nav className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ShoppingCart className="w-10 h-10 text-white" />
              <span className="text-3xl font-black text-white tracking-tight">ПРОДУКТИ</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#fruits" className="text-white text-xl font-bold hover:text-orange-200 transition-colors">Овочі</a>
              <a href="#bread" className="text-white text-xl font-bold hover:text-yellow-200 transition-colors">Хліб</a>
              <a href="#waffles" className="text-white text-xl font-bold hover:text-green-200 transition-colors">Вафлі</a>
              <a href="#contact" className="text-white text-xl font-bold hover:text-blue-200 transition-colors">Контакти</a>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <a href="#fruits" className="block text-white text-xl font-bold py-2">Овочі</a>
              <a href="#bread" className="block text-white text-xl font-bold py-2">Хліб</a>
              <a href="#waffles" className="block text-white text-xl font-bold py-2">Вафлі</a>
              <a href="#contact" className="block text-white text-xl font-bold py-2">Контакти</a>
            </div>
          )}
        </nav>
      </header>

      {/* HERO */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-yellow-600 to-green-600 mb-6 tracking-tight">
            Свіжі Продукти
          </h1>
          <p className="text-3xl md:text-4xl text-gray-800 mb-8 font-bold">
            Щодня для Вас!
          </p>
          <p className="text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed font-semibold">
            Овочі, хліб та вафлі найвищої якості за найкращими цінами
          </p>
          <a href="#fruits">
            <button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-12 py-6 rounded-2xl text-2xl font-black transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 mx-auto">
              Переглянути Каталог
              <ChevronRight className="w-8 h-8" />
            </button>
          </a>
        </div>
      </section>

      {/* FRUITS SECTION */}
      <section id="fruits" className="py-16 px-4 bg-gradient-to-r from-orange-100 to-yellow-100">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-orange-700 text-center mb-12">
            🍌 Овочі та Фрукти
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.fruits.map((product, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all border-4 border-orange-300 hover:border-orange-500">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-3xl font-black text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-xl text-gray-600 mb-4 font-semibold">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-orange-600">{product.price}</span>
                    <Heart className="w-8 h-8 text-red-500 hover:fill-red-500 cursor-pointer transition-all" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BREAD SECTION */}
      <section id="bread" className="py-16 px-4 bg-gradient-to-r from-yellow-100 to-amber-100">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-amber-800 text-center mb-12">
            🍞 Хліб та Булочки
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.bread.map((product, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all border-4 border-yellow-300 hover:border-yellow-500">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-3xl font-black text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-xl text-gray-600 mb-4 font-semibold">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-amber-600">{product.price}</span>
                    <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAFFLES SECTION */}
      <section id="waffles" className="py-16 px-4 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-purple-700 text-center mb-12">
            🧇 Вафлі
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.waffles.map((product, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all border-4 border-pink-300 hover:border-pink-500">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-3xl font-black text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-xl text-gray-600 mb-4 font-semibold">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-purple-600">{product.price}</span>
                    <Heart className="w-8 h-8 text-pink-500 hover:fill-pink-500 cursor-pointer transition-all" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-blue-500 to-indigo-600">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-12">
            Контакти
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/20 backdrop-blur-lg p-8 rounded-3xl border-4 border-white/40">
              <Phone className="w-16 h-16 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-black text-white mb-3">Телефон</h3>
              <p className="text-xl text-white font-bold">+380 (99) 123-45-67</p>
            </div>
            <div className="bg-white/20 backdrop-blur-lg p-8 rounded-3xl border-4 border-white/40">
              <MapPin className="w-16 h-16 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-black text-white mb-3">Адреса</h3>
              <p className="text-xl text-white font-bold">вул. Центральна, 15</p>
            </div>
            <div className="bg-white/20 backdrop-blur-lg p-8 rounded-3xl border-4 border-white/40">
              <Clock className="w-16 h-16 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-black text-white mb-3">Години роботи</h3>
              <p className="text-xl text-white font-bold">Пн-Нд: 8:00-20:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 py-10 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <ShoppingCart className="w-10 h-10 text-orange-400" />
            <span className="text-3xl font-black text-white">ПРОДУКТИ</span>
          </div>
          <p className="text-xl text-gray-300 font-semibold">
            © 2024 Магазин Продуктів. Всі права захищені.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App