"use client";

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Search, Heart, LayoutGrid, MessageSquare, PenTool } from 'lucide-react';

const categories = [
  { name: 'Learning & Research', icon: Search, color: 'text-blue-600', bg: 'bg-blue-50' },
  { name: 'Everyday Life', icon: Heart, color: 'text-red-600', bg: 'bg-red-50' },
  { name: 'Organization', icon: LayoutGrid, color: 'text-green-600', bg: 'bg-green-50' },
  { name: 'Creativity & Writing', icon: PenTool, color: 'text-purple-600', bg: 'bg-purple-50' },
  { name: 'General Help', icon: MessageSquare, color: 'text-amber-600', bg: 'bg-amber-50' },
];

export default function Home() {
  const [need, setNeed] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ need, email })
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setStatus('success');
        setMessage(data.recommendation || "Thanks! I'll get back to you soon.");
        setNeed('');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus('error');
      setMessage("Failed to submit. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-sans">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">AskStella</div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-500">
            <Link href="/" className="text-black">Home</Link>
            <Link href="#get-started" className="hover:text-black">Get Started</Link>
            <Link href="#quiz" className="hover:text-black">Take the Quiz</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            I&apos;ll help you ask the right questions.
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Find the right AI agent for what you need — no jargon, no confusion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="#get-started" 
              className="w-full sm:w-auto px-8 py-4 bg-[#1e3a5f] text-white rounded-lg font-medium hover:bg-[#152a45] transition-colors flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight size={18} />
            </Link>
            <Link 
              href="#quiz" 
              className="w-full sm:w-auto px-8 py-4 border border-gray-200 bg-white rounded-lg font-medium hover:bg-gray-50 transition-colors cursor-not-allowed opacity-70"
            >
              Take the Quiz
            </Link>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section id="get-started" className="py-20 px-6 border-t border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-4">What do you need help with?</h2>
              <p className="text-lg text-gray-600">Choose a category to find the perfect AI tool for your specific task.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div 
                key={cat.name}
                className="group p-8 border border-gray-100 rounded-2xl bg-[#fafafa] hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all cursor-pointer"
              >
                <div className={`${cat.bg} ${cat.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6`}>
                  <cat.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{cat.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Find tools to help with {cat.name.toLowerCase()} tasks without the complexity.
                </p>
                <div className="text-sm font-semibold flex items-center gap-1 text-[#1e3a5f]">
                  Explore tools <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section className="py-24 px-6 border-t border-gray-100 bg-[#fafafa]">
        <div className="max-w-2xl mx-auto bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
          <h2 className="text-3xl font-bold mb-4">Can&apos;t find what you need?</h2>
          <p className="text-lg text-gray-600 mb-10">Tell me what you&apos;re trying to do, and I&apos;ll personally help you find the right tool.</p>
          
          {status === 'success' ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-green-800">
              <h3 className="font-bold text-lg mb-2">Request Submitted</h3>
              <p>{message}</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-4 text-sm font-semibold text-green-700 hover:text-green-900"
              >
                Ask another question
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="need" className="block text-sm font-semibold mb-2 text-gray-700">What are you working on?</label>
                <textarea 
                  id="need" 
                  value={need}
                  onChange={(e) => setNeed(e.target.value)}
                  rows={4} 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none transition-all resize-none bg-white text-black"
                  placeholder="E.g., I want to write a letter to my grandson or organize my garden project..."
                ></textarea>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none transition-all bg-white text-black"
                  placeholder="you@example.com"
                />
              </div>
              
              {status === 'error' && (
                <div className="text-red-600 text-sm">{message}</div>
              )}
              
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-[#1e3a5f] text-white rounded-xl font-medium hover:bg-[#152a45] transition-colors disabled:opacity-70 flex justify-center items-center"
              >
                {status === 'loading' ? 'Sending...' : 'Send Request'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-500">
            © 2026 AskStella. Part of Delta Force.
          </div>
          <div className="flex gap-8 text-sm font-medium text-gray-500">
            <Link href="#" className="hover:text-black">Privacy</Link>
            <Link href="#" className="hover:text-black">Terms</Link>
            <Link href="mailto:just@askstella.online" className="hover:text-black">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}