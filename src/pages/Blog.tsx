import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { BlogHero } from '../components/blog/BlogHero';
import { BlogSearch } from '../components/blog/BlogSearch';
import { FeaturedPosts } from '../components/blog/FeaturedPosts';
import { BlogGrid } from '../components/blog/BlogGrid';
import { BlogSubscribe } from '../components/blog/BlogSubscribe';

export function Blog() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <BlogHero />
        <BlogSearch />
        <FeaturedPosts />
        <BlogGrid />
        <BlogSubscribe />
      </main>
      <Footer />
    </div>
  );
}