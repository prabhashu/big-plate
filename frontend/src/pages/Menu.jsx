import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { menuItems } from '../mockData';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('all');

  const renderMenuItems = (items) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card key={item.id} className="bg-zinc-900 border-orange-500/20 overflow-hidden group hover:border-orange-500 transition-all">
            {item.image && (
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                {item.featured && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Chef's Special
                  </div>
                )}
              </div>
            )}
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{item.name}</h3>
                <span className="text-xl font-bold text-orange-500 ml-2">${item.price}</span>
              </div>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          </Card>
        ))}
      </div>
    );
  };

  const allItems = [...menuItems.starters, ...menuItems.mains, ...menuItems.desserts];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541832676-9b763b0239ab" 
            alt="Gourmet Food"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The <span className="text-orange-500">Menu</span>
          </h1>
          <p className="text-xl text-gray-300">Prepared Fresh. Served Big.</p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-12">
              <TabsList className="bg-zinc-900 border border-orange-500/20 p-1">
                <TabsTrigger 
                  value="all" 
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  All Items
                </TabsTrigger>
                <TabsTrigger 
                  value="starters" 
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  Starters
                </TabsTrigger>
                <TabsTrigger 
                  value="mains" 
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  Big Plates
                </TabsTrigger>
                <TabsTrigger 
                  value="desserts" 
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  Desserts & Drinks
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-16">
              {/* Starters */}
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Starters & <span className="text-orange-500">Bites</span>
                </h2>
                <p className="text-gray-400 mb-8">The perfect way to start your Big Plate journey.</p>
                {renderMenuItems(menuItems.starters)}
              </div>

              {/* Mains */}
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  The Big Plates <span className="text-orange-500">(Mains)</span>
                </h2>
                <p className="text-gray-400 mb-8">The main event.</p>
                {renderMenuItems(menuItems.mains)}
              </div>

              {/* Desserts */}
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Desserts & <span className="text-orange-500">Drinks</span>
                </h2>
                <p className="text-gray-400 mb-8">End on a sweet note.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[...menuItems.desserts, ...menuItems.drinks].map((item) => (
                    <Card key={item.id} className="bg-zinc-900 border-orange-500/20 overflow-hidden group hover:border-orange-500 transition-all">
                      {item.image && (
                        <div className="relative h-40 overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                        </div>
                      )}
                      <div className="p-5">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-bold text-white">{item.name}</h3>
                          <span className="text-lg font-bold text-orange-500 ml-2">${item.price}</span>
                        </div>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="starters">
              <h2 className="text-3xl font-bold mb-4">
                Starters & <span className="text-orange-500">Bites</span>
              </h2>
              <p className="text-gray-400 mb-8">The perfect way to start your Big Plate journey.</p>
              {renderMenuItems(menuItems.starters)}
            </TabsContent>

            <TabsContent value="mains">
              <h2 className="text-3xl font-bold mb-4">
                The Big Plates <span className="text-orange-500">(Mains)</span>
              </h2>
              <p className="text-gray-400 mb-8">The main event.</p>
              {renderMenuItems(menuItems.mains)}
            </TabsContent>

            <TabsContent value="desserts">
              <h2 className="text-3xl font-bold mb-4">
                Desserts & <span className="text-orange-500">Drinks</span>
              </h2>
              <p className="text-gray-400 mb-8">End on a sweet note.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...menuItems.desserts, ...menuItems.drinks].map((item) => (
                  <Card key={item.id} className="bg-zinc-900 border-orange-500/20 overflow-hidden group hover:border-orange-500 transition-all">
                    {item.image && (
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                      </div>
                    )}
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-white">{item.name}</h3>
                        <span className="text-lg font-bold text-orange-500 ml-2">${item.price}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Dietary Note */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 text-sm">
              Please inform our staff of any allergies or dietary requirements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;