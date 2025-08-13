import React, { useState, useEffect } from 'react';
import { mockTestimonials } from '../data/mock';
import { Card, CardContent } from './ui/card';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % mockTestimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % mockTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + mockTestimonials.length) % mockTestimonials.length);
  };

  const currentTest = mockTestimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Quote className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Winner Stories
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real players, real wins, real experiences at Pulau88
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <Card className="bg-gray-700 border-gray-600 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <img 
                    src={currentTest.avatar}
                    alt={currentTest.name}
                    className="w-24 h-24 rounded-full border-4 border-purple-400"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(currentTest.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-gray-300 mb-6 italic">
                    "{currentTest.comment}"
                  </blockquote>

                  {/* Win info */}
                  <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mb-4">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 rounded-full">
                      <span className="text-white font-bold">{currentTest.winAmount} Won!</span>
                    </div>
                    <span className="text-gray-400">playing {currentTest.game}</span>
                  </div>

                  {/* Name */}
                  <p className="text-white font-bold text-lg">{currentTest.name}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation buttons */}
          <Button
            onClick={prevTestimonial}
            variant="outline"
            size="sm"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 border-gray-600 text-gray-300 hover:bg-gray-600 rounded-full w-10 h-10 p-0"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            onClick={nextTestimonial}
            variant="outline"
            size="sm"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 border-gray-600 text-gray-300 hover:bg-gray-600 rounded-full w-10 h-10 p-0"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* All Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockTestimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className={`bg-gray-700 border-gray-600 cursor-pointer transition-all duration-300 hover:scale-105 ${
                index === currentTestimonial ? 'ring-2 ring-purple-400' : ''
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  "{testimonial.comment}"
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-bold text-sm">{testimonial.winAmount}</span>
                  <span className="text-gray-400 text-xs">{testimonial.game}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {mockTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-purple-400 w-8' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;