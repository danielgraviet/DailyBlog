import React from 'react'
import Image from 'next/image'
import Posts from './components/Posts';

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Image */}
      <Image 
        src="/images/vietnambackground.jpg"
        alt="Vietnamese Patterns"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="opacity-10 z-0 grayscale" // Added grayscale class
        priority
      />

      {/* Text Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Xin Chào</h1>
        <p className="text-2xl md:text-3xl mb-6">I'm <span className="italic">Daniel Thi Graviet</span></p>
        <p className="text-lg md:text-xl max-w-md mx-auto">
          Welcome to my blog, where I share insights, ideas, and projects. Dive in, explore, and connect!
        </p>
        <Posts></Posts>
      </div>
    </main>
  );
}
