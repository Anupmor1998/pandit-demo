import {
  Calendar,
  MessageCircle,
  ScrollText as ScrollIcon,
  MessageSquare as WhatsappIcon
} from 'lucide-react';
import { useState } from 'react';

const poojaCategories = [
  { name: 'Griha Pravesh', description: 'House warming ceremony', image: 'https://images.unsplash.com/photo-1609159085820-d9a6ff0f4ed9' },
  { name: 'Satyanarayan Puja', description: 'Worship of Lord Vishnu', image: 'https://images.unsplash.com/photo-1620503292890-c597f62cce8d' },
  { name: 'Ganesh Puja', description: 'Worship of Lord Ganesha', image: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56ae' },
  { name: 'Marriage Ceremony', description: 'Wedding rituals', image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a' }
];

const pandits = [
  {
    name: 'Pandit Ramesh Sharma',
    experience: '15+ years',
    specialization: 'Vedic Rituals',
    image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115',
    rating: 4.8
  },
  {
    name: 'Pandit Suresh Joshi',
    experience: '20+ years',
    specialization: 'Marriage Ceremonies',
    image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f',
    rating: 4.9
  }
];

function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              {/* <Prayer className="h-8 w-8 text-orange-600" /> */}
              <span className="ml-2 text-xl font-bold text-gray-800">BookPandit101</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#services" className="text-gray-600 hover:text-orange-600">Services</a>
              <a href="#pandits" className="text-gray-600 hover:text-orange-600">Pandits</a>
              <a href="#blog" className="text-gray-600 hover:text-orange-600">Blog</a>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center">
                <WhatsappIcon className="h-5 w-5 mr-2" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
            Find the Perfect Pandit in Pune
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Book experienced pandits for all your religious ceremonies and rituals
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700">
                Book Now
                <Calendar className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pooja Categories */}
      <section id="services" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Pooja Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {poojaCategories.map((category) => (
              <div key={category.name} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
                <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <p className="text-gray-600 mt-2">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Pandits */}
      <section id="pandits" className="py-12 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Featured Pandits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pandits.map((pandit) => (
              <div key={pandit.name} className="bg-white rounded-lg shadow-lg p-6 flex items-start space-x-4">
                <img src={pandit.image} alt={pandit.name} className="w-24 h-24 rounded-full object-cover" />
                <div>
                  <h3 className="text-xl font-semibold">{pandit.name}</h3>
                  <p className="text-gray-600">Experience: {pandit.experience}</p>
                  <p className="text-gray-600">Specialization: {pandit.specialization}</p>
                  <div className="mt-2 flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1">{pandit.rating}/5</span>
                  </div>
                  <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg flex items-center">
                    <WhatsappIcon className="h-5 w-5 mr-2" />
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbot Toggle */}
      <button
        onClick={() => setShowChatbot(!showChatbot)}
        className="fixed bottom-4 right-4 bg-orange-600 text-white p-4 rounded-full shadow-lg hover:bg-orange-700"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chatbot Dialog */}
      {showChatbot && (
        <div className="fixed bottom-20 right-4 w-96 bg-white rounded-lg shadow-xl p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Pooja Assistant</h3>
            <button onClick={() => setShowChatbot(false)} className="text-gray-500">×</button>
          </div>
          <div className="h-64 overflow-y-auto border rounded p-2 mb-4">
            {/* Chat messages would go here */}
            <p className="text-gray-600">Hello! Tell me about your concerns, and I'll suggest the right pooja for you.</p>
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border rounded-l px-3 py-2"
            />
            <button className="bg-orange-600 text-white px-4 py-2 rounded-r">Send</button>
          </div>
        </div>
      )}

      {/* Blog Section */}
      <section id="blog" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1604608678051-64d46d8d0ffe" alt="Blog 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Understanding the Significance of Griha Pravesh</h3>
                <p className="text-gray-600">Learn about the importance and rituals of house warming ceremony...</p>
                <a href="#" className="mt-4 text-orange-600 flex items-center">
                  Read More
                  <ScrollIcon className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            {/* Add more blog posts as needed */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">BookPandit101</h3>
              <p className="text-gray-400">Your trusted platform for booking pandits in Pune</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#pandits" className="text-gray-400 hover:text-white">Pandits</a></li>
                <li><a href="#blog" className="text-gray-400 hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400">Pune, Maharashtra</p>
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg flex items-center">
                <WhatsappIcon className="h-5 w-5 mr-2" />
                Chat with Us
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;