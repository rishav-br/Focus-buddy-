// pages/index.js

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/globals.css';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [splashVisible, setSplashVisible] = useState(true);

  // Splash screen logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll animation logic
  useEffect(() => {
    const features = document.querySelectorAll('.feature');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
        }
      });
    }, { threshold: 0.5 });

    features.forEach(feature => observer.observe(feature));
  }, []);

  return (
    <>
      <Head>
        <title>Focus Buddy</title>
        <meta name="description" content="Focus Buddy - Your AI-Powered Productivity Partner" />
      </Head>

      {/* Splash Screen */}
      {splashVisible && (
        <div id="splash">
          <Image src="/assets/1000302707.png" alt="Focus Buddy Logo" width={180} height={180} />
        </div>
      )}

      {/* Toggle Dark Mode */}
      <button className="toggle-darkmode" onClick={() => setDarkMode(!darkMode)}>
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>

      {/* Main App UI */}
      <main className={darkMode ? 'dark-mode' : ''}>
        <section className="hero">
          <Image className="mascot" src="/assets/1000305302.png" alt="Mascot" width={150} height={150} />
          <h1>Welcome to Focus Buddy</h1>
          <p>Your AI-Powered Productivity Partner</p>
          <a href="#features" className="cta">Get Started</a>
        </section>

        {/* Feature Section */}
        <section id="features" className="features">
          <div className="feature">
            <Image src="/assets/1000305301.png" alt="Focus Timer" width={60} height={60} />
            <h3>Focus Timer</h3>
            <p>Use Pomodoro-style timers to stay sharp and productive.</p>
          </div>
          <div className="feature">
            <Image src="/assets/1000305300.png" alt="Goal Tracker" width={60} height={60} />
            <h3>Goal Tracker</h3>
            <p>Track your goals with interactive progress animations.</p>
          </div>
          <div className="feature">
            <Image src="/assets/1000305299.png" alt="Smart Suggestions" width={60} height={60} />
            <h3>Smart Suggestions</h3>
            <p>Get daily motivational messages and smart AI productivity tips.</p>
          </div>
        </section>

        {/* Footer */}
        <footer>
          Made with ❤️ by Rishav | <a href="https://vercel.com">Deploy on Vercel</a>
        </footer>
      </main>
    </>
  );
}
