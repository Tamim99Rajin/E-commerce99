import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X, Heart, Home, LogOut } from 'lucide-react';
import { useCartStore } from '../../store/cart';
import { useAuthStore } from '../../store/auth';
import { Button } from '../ui/Button';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const cartStore = useCartStore();
  const { isAuthenticated, logout } = useAuthStore();
  
  const totalItems = cartStore.getTotalItems();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Home className="h-6 w-6 text-primary-600" />
            <span className="ml-2 text-xl font-bold text-primary-800">বাংলাশপ</span>
          </Link>
          
          {/* Search - hidden on mobile */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="w-full relative">
              <input 
                type="text" 
                placeholder="পণ্য খুঁজুন..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          {/* Navigation - desktop */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/categories" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              ক্যাটাগরি
            </Link>
            <Link to="/deals" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              অফার
            </Link>
            <Link to="/wishlist" className="relative p-2">
              <Heart className="h-6 w-6 text-gray-700 hover:text-primary-600" />
            </Link>
            <Link to="/cart" className="relative p-2">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-primary-600" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 h-5 w-5 rounded-full bg-secondary-500 text-white text-xs flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {isAuthenticated ? (
              <div className="relative">
                <button 
                  onClick={toggleUserMenu}
                  className="flex items-center text-gray-700 hover:text-primary-600"
                >
                  <User className="h-6 w-6" />
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      প্রোফাইল
                    </Link>
                    <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      অর্ডার
                    </Link>
                    <button 
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <div className="flex items-center">
                        <LogOut className="h-4 w-4 mr-2" />
                        <span>লগ আউট</span>
                      </div>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login">
                <Button variant="primary" size="sm">
                  লগইন / সাইনআপ
                </Button>
              </Link>
            )}
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <Link to="/cart" className="relative p-2">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 h-5 w-5 rounded-full bg-secondary-500 text-white text-xs flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            <button onClick={toggleMenu} className="p-2">
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile search - only visible on mobile */}
        <div className="md:hidden pb-4">
          <div className="w-full relative">
            <input 
              type="text" 
              placeholder="পণ্য খুঁজুন..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-b-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/categories" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                ক্যাটাগরি
              </Link>
              <Link 
                to="/deals" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                অফার
              </Link>
              <Link 
                to="/wishlist" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                ইচ্ছেতালিকা
              </Link>
              
              {isAuthenticated ? (
                <>
                  <Link 
                    to="/profile" 
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                    onClick={toggleMenu}
                  >
                    প্রোফাইল
                  </Link>
                  <Link 
                    to="/orders" 
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                    onClick={toggleMenu}
                  >
                    অর্ডার
                  </Link>
                  <button 
                    onClick={() => {
                      logout();
                      toggleMenu();
                    }}
                    className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                  >
                    <div className="flex items-center">
                      <LogOut className="h-4 w-4 mr-2" />
                      <span>লগ আউট</span>
                    </div>
                  </button>
                </>
              ) : (
                <Link 
                  to="/login" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  লগইন / সাইনআপ
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}