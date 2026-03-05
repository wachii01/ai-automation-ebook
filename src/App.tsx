import React, { useState, useEffect } from 'react';
import { Zap, Bot, BrainCircuit, Briefcase, Check, Star, ArrowRight, CheckCircle, CheckSquare, Shield, Download } from 'lucide-react';

export default function App() {
  const [timeLeft, setTimeLeft] = useState({ hours: '06', minutes: '00', seconds: '00' });

  useEffect(() => {
    const DURATION_IN_SECONDS = 6 * 60 * 60; // 6 hours
    const storageKey = 'ai_blueprint_launch_timer';
    
    let endTime = localStorage.getItem(storageKey);
    
    if (!endTime) {
        endTime = (Date.now() + (DURATION_IN_SECONDS * 1000)).toString();
        localStorage.setItem(storageKey, endTime);
    }

    const interval = setInterval(() => {
        const now = Date.now();
        let distance = parseInt(endTime!) - now;

        if (distance <= 0) {
            clearInterval(interval);
            distance = 0;
        }

        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
            hours: hours < 10 ? "0" + hours : hours.toString(),
            minutes: minutes < 10 ? "0" + minutes : minutes.toString(),
            seconds: seconds < 10 ? "0" + seconds : seconds.toString()
        });

    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="w-full bg-cyber-grid text-white pt-10 pb-16 px-4 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neonBlue/20 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
              
              <div className="bg-neonOrange/20 text-neonOrange border border-neonOrange/50 font-bold text-sm sm:text-base px-6 py-2 rounded-full mb-8 inline-flex items-center gap-2 backdrop-blur-sm shadow-[0_0_15px_rgba(255,107,0,0.2)]">
                  <Zap className="w-4 h-4 fill-current" />
                  THE COMPLETE 30-DAY BEGINNER ROADMAP
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 text-white tracking-tight">
                  FROM ZERO TO BUILDING <br className="hidden md:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-[#5ce1e6]">REAL AI SYSTEMS</span>
              </h1>

              <p className="font-sans text-lg md:text-2xl font-medium mb-4 text-gray-300 max-w-3xl leading-relaxed">
                  Master the tools, learn the core technical skills without coding, and build profitable AI automations in just 30 days.
              </p>
              <p className="text-gray-400 font-mono text-sm sm:text-base mb-12 max-w-2xl">
                  &gt; System Architect: Elewachi E. | Level: Absolute Beginner to Pro
              </p>

              <div className="w-full max-w-lg p-1 bg-gradient-to-b from-neonBlue/40 to-techDark rounded-xl shadow-2xl mb-10 relative">
                  <div className="absolute -top-5 -right-5 bg-alertRed text-white font-black text-sm sm:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-full transform rotate-12 shadow-xl border-2 border-white z-10">
                      INSTANT DOWNLOAD
                  </div>
                  <div className="bg-techCard rounded-lg overflow-hidden border border-white/10 relative group">
                      <img src="https://res.cloudinary.com/dtjj0tvac/image/upload/v1772727498/ChatGPT_Image_Feb_20_2026_03_53_02_PM_i6zuc3.png" alt="AI Automation eBook" className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500" />
                  </div>
              </div>

              <a href="https://nestuge.com/checkout?currency=NGN&items=%5B%7B%22id%22%3A%22pr_mluyuxxpyalynx5jjmi8dxq7jeysv%22%2C%22type%22%3A%22registration%22%2C%22plan%22%3A%22pl_mluyuzkqb5dmlgakz9kwz4qiatejf%22%2C%22count%22%3A1%2C%22affiliate%22%3Anull%7D%5D&redirectUrl=https%3A%2F%2Fnestuge.com%2Fai_beginner%3Fcurrency%3DNGN" className="cta-button w-full max-w-xl text-white font-black text-lg sm:text-2xl py-4 sm:py-6 px-4 sm:px-8 rounded-xl border border-neonOrange/50 flex flex-col items-center justify-center">
                  <span>DOWNLOAD THE BLUEPRINT NOW &rarr;</span>
                  <span className="text-xs sm:text-sm font-medium mt-1 opacity-90 tracking-wide font-mono">Get instant lifetime access to all 6 modules</span>
              </a>
              
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 bg-white/5 border border-white/10 rounded-full px-6 sm:px-8 py-2.5 sm:py-3.5 backdrop-blur-sm shadow-[0_0_30px_rgba(255,107,0,0.1)]">
                  <div className="flex items-center gap-3">
                      <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-alertRed opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-alertRed"></span>
                      </span>
                      <span className="text-xs sm:text-base font-bold text-gray-200 uppercase tracking-widest">Launch Pricing Ends In:</span>
                  </div>
                  <div className="text-xl sm:text-3xl font-black text-white tracking-widest font-mono flex items-center">
                      <span>{timeLeft.hours}</span><span className="text-gray-500 mx-1.5">:</span><span>{timeLeft.minutes}</span><span className="text-gray-500 mx-1.5">:</span><span className="text-neonOrange">{timeLeft.seconds}</span>
                  </div>
              </div>
          </div>
      </section>

      {/* PERSUASIVE PAIN/BENEFIT SECTION */}
      <section className="w-full bg-white py-16 px-4 border-b border-gray-200">
          <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-black text-center mb-12 text-gray-900 leading-tight">
                  The AI Gold Rush Is Happening Right Now.<br />
                  <span className="text-neonBlue">Are You Building, Or Are You Watching?</span>
              </h2>

              <div className="space-y-6 mb-12 text-lg sm:text-xl text-gray-700 font-medium">
                  <div className="flex items-start gap-4 p-5 hover:bg-gray-50 rounded-xl transition-colors border border-transparent hover:border-gray-200 shadow-sm">
                      <div className="mt-1 flex-shrink-0 bg-blue-100 rounded-lg p-2">
                          <Bot className="w-7 h-7 text-neonBlue" />
                      </div>
                      <p>Stop feeling overwhelmed by complex code. Master visual, no-code builders like <strong>Make, Zapier, and n8n</strong> to architect systems that work 24/7.</p>
                  </div>

                  <div className="flex items-start gap-4 p-5 hover:bg-gray-50 rounded-xl transition-colors border border-transparent hover:border-gray-200 shadow-sm">
                      <div className="mt-1 flex-shrink-0 bg-blue-100 rounded-lg p-2">
                          <BrainCircuit className="w-7 h-7 text-neonBlue" />
                      </div>
                      <p>Understand the exact anatomy of an AI Automation. I break down confusing technical jargon like <strong>APIs, Webhooks, and JSON</strong> using simple "Restaurant Analogies".</p>
                  </div>

                  <div className="flex items-start gap-4 p-5 hover:bg-gray-50 rounded-xl transition-colors border border-transparent hover:border-gray-200 shadow-sm">
                      <div className="mt-1 flex-shrink-0 bg-blue-100 rounded-lg p-2">
                          <Briefcase className="w-7 h-7 text-neonBlue" />
                      </div>
                      <p>Don't just learn tech—learn how to monetize it. Discover how to build <strong>E-commerce Bots, Service Automations, and AI Voice Agents</strong> that businesses will happily pay you for.</p>
                  </div>
              </div>

              <div className="flex justify-center">
                  <a href="https://nestuge.com/checkout?currency=NGN&items=%5B%7B%22id%22%3A%22pr_mluyuxxpyalynx5jjmi8dxq7jeysv%22%2C%22type%22%3A%22registration%22%2C%22plan%22%3A%22pl_mluyuzkqb5dmlgakz9kwz4qiatejf%22%2C%22count%22%3A1%2C%22affiliate%22%3Anull%7D%5D&redirectUrl=https%3A%2F%2Fnestuge.com%2Fai_beginner%3Fcurrency%3DNGN" className="cta-button w-full max-w-xl text-white font-black text-lg sm:text-2xl py-4 sm:py-6 px-4 sm:px-8 rounded-xl border border-neonOrange/50 flex flex-col items-center justify-center text-center">
                      <span>YES! SHOW ME THE ROADMAP &rarr;</span>
                      <span className="text-xs sm:text-sm font-medium mt-1 opacity-90 tracking-wide font-mono">100% Beginner Friendly. No Coding Required.</span>
                  </a>
              </div>
          </div>
      </section>

      {/* SYLLABUS / WHAT'S INSIDE SECTION */}
      <section className="w-full bg-techDark py-20 px-4 border-t-4 border-neonBlue relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-cyber-grid opacity-50 pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-5xl font-black mb-4 text-white">LOOK INSIDE THE BLUEPRINT</h2>
                  <p className="text-neonBlue font-mono text-lg uppercase tracking-widest">Everything you need to go from Zero to AI Architect</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  <div className="bg-techCard border border-white/10 rounded-xl p-6 hover:border-neonBlue/50 transition-colors">
                      <div className="text-neonOrange font-mono text-sm mb-2">PART 1</div>
                      <h3 className="text-xl font-bold mb-4">The Foundation</h3>
                      <ul className="space-y-3 text-gray-400 text-sm">
                          <li className="flex gap-2"><Check className="w-4 h-4 text-neonBlue shrink-0 mt-0.5" /> Fundamentals of Workflows</li>
                          <li className="flex gap-2"><Check className="w-4 h-4 text-neonBlue shrink-0 mt-0.5" /> Core Automation Logic</li>
                          <li className="flex gap-2"><Check className="w-4 h-4 text-neonBlue shrink-0 mt-0.5" /> AI vs Traditional Systems</li>
                          <li className="flex gap-2"><Check className="w-4 h-4 text-neonBlue shrink-0 mt-0.5" /> AI Agents & Agentic AI Explained</li>
                      </ul>
                  </div>

                  <div className="bg-techCard border border-white/10 rounded-xl p-6 hover:border-neonBlue/50 transition-colors">
                      <div className="text-neonOrange font-mono text-sm mb-2">PART 2</div>
                      <h3 className="text-xl font-bold mb-4">The Tools</h3>
                      <ul className="space-y-3 text-gray-400 text-sm">
                          <li className="flex gap-2"><Check className="w-4 h-4 text-neonBlue shrink-0 mt-0.5" /> Zapier Mastery</li>
                          <li className="flex gap-2"><Check className="w-4 h-4 text-neonBlue shrink-0 mt-0.5" /> Make.com Frameworks</li>
                          <li className="flex gap-2"><Check className="w-4 h-4 text-neonBlue shrink-0 mt-0.5" /> n8n (Cloud & Self-Hosted)</li>
                          <li className="flex gap-2"><Check className="w-4 h-4 text-neonBlue shrink-0 mt-0.5" /> LLMs: OpenAI, Claude, Gemini</li>
                          <li className="flex gap-2"><Check className="w-4 h-4 text-neonBlue shrink-0 mt-0.5" /> Leveraging OpenRouter</li>
                      </ul>
                  </div>

                  <div className="bg-techCard border border-white/10 rounded-xl p-6 hover:border-neonBlue/50 transition-colors">
                      <div className="text-neonOrange font-mono text-sm mb-2">PART 3</div>
                      <h3 className="text-xl font-bold mb-4">Core Technical Skills</h3>
                      <ul className="space-y-3 text-gray-400 text-sm">
                          <li className="flex gap-2"><Check className="w-4 h-4 text-neonBlue shrink-0 mt-0.5" /> APIs Demystified (Restaurant Analogy)</li>
                          <li className="flex gap-2"><Check className="w-4 h-4 text-neonBlue shrink-0 mt-0.5" /> Routing with Webhooks</li>
                          <li className="flex gap-2"><Check className="w-4 h-4 text-neonBlue shrink-0 mt-0.5" /> Understanding JSON</li>
                          <li className="flex gap-2"><Check className="w-4 h-4 text-neonBlue shrink-0 mt-0.5" /> Structured vs Unstructured Data</li>
                      </ul>
                  </div>

                  <div className="bg-techCard border border-white/10 rounded-xl p-6 hover:border-neonBlue/50 transition-colors">
                      <div className="text-neonOrange font-mono text-sm mb-2">PART 4</div>
                      <h3 className="text-xl font-bold mb-4">Building Real Systems</h3>
                      <ul className="space-y-3 text-gray-400 text-sm">
                          <li className="flex gap-2"><Check className="w-4 h-4 text-neonBlue shrink-0 mt-0.5" /> Anatomy of an AI Automation</li>
                          <li className="flex gap-2"><Check className="w-4 h-4 text-neonBlue shrink-0 mt-0.5" /> Advanced Prompt Engineering</li>
                          <li className="flex gap-2"><Check className="w-4 h-4 text-neonBlue shrink-0 mt-0.5" /> Memory & RAG Systems</li>
                          <li className="flex gap-2"><Check className="w-4 h-4 text-neonBlue shrink-0 mt-0.5" /> AI Voice & Chat Agent Creation</li>
                      </ul>
                  </div>

                  <div className="bg-techCard border border-white/10 rounded-xl p-6 hover:border-neonBlue/50 transition-colors">
                      <div className="text-neonOrange font-mono text-sm mb-2">PART 5</div>
                      <h3 className="text-xl font-bold mb-4">Business Use Cases</h3>
                      <ul className="space-y-3 text-gray-400 text-sm">
                          <li className="flex gap-2"><Check className="w-4 h-4 text-neonBlue shrink-0 mt-0.5" /> Deploying E-commerce Bots</li>
                          <li className="flex gap-2"><Check className="w-4 h-4 text-neonBlue shrink-0 mt-0.5" /> Service Business Automations</li>
                          <li className="flex gap-2"><Check className="w-4 h-4 text-neonBlue shrink-0 mt-0.5" /> Creating Content Multipliers</li>
                          <li className="flex gap-2"><Check className="w-4 h-4 text-neonBlue shrink-0 mt-0.5" /> Building Internal AI Systems</li>
                      </ul>
                  </div>

                  <div className="bg-techCard border border-neonOrange/30 rounded-xl p-6 relative">
                      <div className="absolute -top-3 right-4 bg-neonOrange text-white text-xs font-bold px-3 py-1 rounded-full">MONEY MODULE</div>
                      <div className="text-neonOrange font-mono text-sm mb-2">PART 6</div>
                      <h3 className="text-xl font-bold mb-4">Monetization & Roadmap</h3>
                      <ul className="space-y-3 text-gray-300 text-sm">
                          <li className="flex gap-2"><Check className="w-4 h-4 text-neonOrange shrink-0 mt-0.5" /> Finding Automation Opportunities</li>
                          <li className="flex gap-2"><Check className="w-4 h-4 text-neonOrange shrink-0 mt-0.5" /> Properly Scoping Projects</li>
                          <li className="flex gap-2"><Check className="w-4 h-4 text-neonOrange shrink-0 mt-0.5" /> <strong>Nigerian Pricing Strategy</strong></li>
                          <li className="flex gap-2"><Check className="w-4 h-4 text-neonOrange shrink-0 mt-0.5" /> Beginner → Expert Rate Scaling</li>
                          <li className="flex gap-2 pt-2 border-t border-white/10 mt-2 text-white font-bold"><Star className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5 fill-current" /> PLUS: The 30-60 Day Roadmap</li>
                          <li className="flex gap-2 text-gray-400"><ArrowRight className="w-4 h-4 shrink-0 mt-0.5" /> Week-by-week execution plan</li>
                          <li className="flex gap-2 text-gray-400"><ArrowRight className="w-4 h-4 shrink-0 mt-0.5" /> First Client Strategy</li>
                      </ul>
                  </div>

              </div>
          </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="w-full bg-gray-50 py-16 px-4 border-b border-gray-200">
          <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-black text-center mb-4 text-gray-900">
                  You Don't Need To Be A Coder.
              </h2>
              <p className="text-center text-xl text-gray-600 mb-12">See what happens when you follow a proven framework.</p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-neonBlue">
                      <div className="flex text-yellow-400 mb-4">
                          <Star className="w-5 h-5 fill-current" />
                          <Star className="w-5 h-5 fill-current" />
                          <Star className="w-5 h-5 fill-current" />
                          <Star className="w-5 h-5 fill-current" />
                          <Star className="w-5 h-5 fill-current" />
                      </div>
                      <p className="font-sans text-lg text-gray-800 font-medium mb-6">
                          "I had zero idea how APIs or Webhooks worked. Elewachi's 'Restaurant Analogy' made it click instantly. Within 3 weeks I built my first Make.com workflow for a local real estate agent and charged $500."
                      </p>
                      <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-techDark text-white rounded-full flex items-center justify-center font-bold">SO</div>
                          <div>
                              <p className="font-bold text-gray-900">Samuel O.</p>
                              <p className="text-sm text-neonBlue font-bold flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Verified Student</p>
                          </div>
                      </div>
                  </div>

                  <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-neonBlue">
                      <div className="flex text-yellow-400 mb-4">
                          <Star className="w-5 h-5 fill-current" />
                          <Star className="w-5 h-5 fill-current" />
                          <Star className="w-5 h-5 fill-current" />
                          <Star className="w-5 h-5 fill-current" />
                          <Star className="w-5 h-5 fill-current" />
                      </div>
                      <p className="font-sans text-lg text-gray-800 font-medium mb-6">
                          "The Nigerian Pricing Strategy in Part 6 is worth 100x the price of this ebook. It completely changed how I package and scope my AI Agent projects for foreign clients. Absolutely brilliant roadmap."
                      </p>
                      <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-techDark text-white rounded-full flex items-center justify-center font-bold">CA</div>
                          <div>
                              <p className="font-bold text-gray-900">Chuks A.</p>
                              <p className="text-sm text-neonBlue font-bold flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Verified Student</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* EXCLUSIVE COMMUNITIES BONUS SECTION */}
      <section className="w-full bg-techDark py-16 px-4 border-t-4 border-neonOrange text-white">
          <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                  <div className="inline-block bg-neonOrange text-white font-black px-4 py-1 rounded-full text-sm mb-4 tracking-widest">
                      FREE ACTION-TAKER BONUSES
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black mb-4 leading-tight text-white">
                      You're Not Just Buying A Book.<br />
                      <span className="text-neonOrange">You're Entering The Right Rooms.</span>
                  </h2>
                  <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                      Your net worth is your network. When you get the blueprint today, you'll instantly get free lifetime access to two of the most active AI Automation communities on the internet.
                  </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-techCard rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(0,149,255,0.1)] group flex flex-col">
                      <div className="relative w-full bg-techDark overflow-hidden">
                          <div className="absolute inset-0 bg-neonBlue/20 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay pointer-events-none"></div>
                          <img src="https://res.cloudinary.com/dtjj0tvac/image/upload/v1772727876/photo_2026-03-05_17-24-22_gknspr.jpg" alt="AI Automation Builders Community" className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-8 relative flex-grow">
                          <div className="absolute -top-5 right-6 bg-neonBlue text-white font-bold px-4 py-1 rounded-full text-sm shadow-lg">
                              VALUE: ₦50,000
                          </div>
                          <h3 className="text-2xl font-black mb-3">AI Automation Builders</h3>
                          <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                              Surround yourself with fellow builders on the same journey. Get unstuck instantly, share your wins, collaborate on projects, and watch how others are packaging their services. You never have to build in isolation again.
                          </p>
                          <ul className="space-y-2 text-sm text-gray-300 font-medium">
                              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-neonBlue" /> Real-time troubleshooting</li>
                              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-neonBlue" /> Accountability & Motivation</li>
                          </ul>
                      </div>
                  </div>

                  <div className="bg-techCard rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(255,107,0,0.1)] group flex flex-col">
                      <div className="relative w-full bg-techDark overflow-hidden">
                          <div className="absolute inset-0 bg-neonOrange/20 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay pointer-events-none"></div>
                          <img src="https://res.cloudinary.com/dtjj0tvac/image/upload/v1772727877/photo_2026-03-05_17-24-17_mw7xsy.jpg" alt="AI Automation OG Community" className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-8 relative flex-grow">
                          <div className="absolute -top-5 right-6 bg-neonOrange text-white font-bold px-4 py-1 rounded-full text-sm shadow-lg">
                              VALUE: ₦30,000
                          </div>
                          <h3 className="text-2xl font-black mb-3">AI Automation OG</h3>
                          <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                              The inner circle. Get direct access to veteran builders, high-level strategies, and insider alpha that doesn't make it to the public timeline. This is where high-ticket gigs are quietly shared and advanced road-blocks are destroyed.
                          </p>
                          <ul className="space-y-2 text-sm text-gray-300 font-medium">
                              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-neonOrange" /> Access to elite network</li>
                              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-neonOrange" /> Overflow client referrals</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* PRICING / OFFER STACK SECTION */}
      <section id="pricing" className="w-full bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-black text-center mb-12 text-gray-900 tracking-tight">
                  Here's Everything You Get Instant Access To:
              </h2>

              <div className="bg-white border-4 border-techDark rounded-2xl overflow-hidden shadow-2xl relative">
                  
                  <div className="bg-techDark text-white text-center py-6 border-b-4 border-neonBlue">
                      <h3 className="font-black text-2xl md:text-3xl tracking-wide text-white">THE AI AUTOMATION MASTERY BUNDLE</h3>
                  </div>
                  
                  <div className="p-8 sm:p-12">
                      <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                          
                          <div className="w-full md:w-5/12 relative">
                              <img src="https://res.cloudinary.com/dtjj0tvac/image/upload/v1772727498/ChatGPT_Image_Feb_20_2026_03_53_02_PM_i6zuc3.png" alt="eBook Cover" className="w-full h-auto object-contain rounded-lg shadow-lg border border-gray-200 bg-techDark" />
                              <div className="absolute -bottom-4 -right-4 bg-neonBlue text-white font-black px-4 py-2 rounded shadow-lg transform rotate-[-5deg] z-10">
                                  PDF + VIDEO AVALIABLE
                              </div>
                          </div>
                          
                          <div className="w-full md:w-7/12">
                              <ul className="space-y-4 text-lg font-bold text-gray-800">
                                  <li className="flex justify-between border-b pb-2 border-gray-200 items-start">
                                      <span className="flex gap-2"><CheckSquare className="text-neonBlue w-6 h-6 shrink-0" /> <span>Complete eBook: AI Automation for Absolute Beginners</span></span>
                                      <span className="text-gray-400 font-normal line-through ml-2 shrink-0">₦50,000</span>
                                  </li>
                                  <li className="flex justify-between border-b pb-2 border-gray-200 items-start">
                                      <span className="flex gap-2"><CheckSquare className="text-neonBlue w-6 h-6 shrink-0" /> <span>Bonus: AI Automation Builders Community</span></span>
                                      <span className="text-gray-400 font-normal line-through ml-2 shrink-0">₦50,000</span>
                                  </li>
                                  <li className="flex justify-between border-b pb-2 border-gray-200 items-start">
                                      <span className="flex gap-2"><CheckSquare className="text-neonBlue w-6 h-6 shrink-0" /> <span>Bonus: AI Automation OG Community</span></span>
                                      <span className="text-gray-400 font-normal line-through ml-2 shrink-0">₦30,000</span>
                                  </li>
                                  <li className="flex justify-between pb-2 items-start">
                                      <span className="flex gap-2"><CheckSquare className="text-neonOrange w-6 h-6 shrink-0" /> <span className="text-neonOrange">BONUS: The 30-60 Day Execution Roadmap</span></span>
                                      <span className="text-gray-400 font-normal line-through ml-2 shrink-0">₦15,000</span>
                                  </li>
                              </ul>
                          </div>
                      </div>

                      <div className="text-center mb-8 p-4 sm:p-6 bg-blue-50/50 rounded-xl border border-blue-100">
                          <p className="text-lg sm:text-xl text-gray-500 font-bold mb-1">Total Real-World Value: <span className="line-through text-alertRed">₦145,000</span></p>
                          
                          <div className="bg-techDark inline-block px-6 sm:px-10 py-4 sm:py-6 rounded-xl shadow-2xl border border-white/10 mt-4 transform scale-105">
                              <p className="text-xs sm:text-sm font-mono text-neonBlue uppercase tracking-widest mb-2">Today's Launch Price:</p>
                              <p className="text-4xl sm:text-6xl font-black text-white">₦7,800</p>
                          </div>
                      </div>

                      <a href="https://nestuge.com/checkout?currency=NGN&items=%5B%7B%22id%22%3A%22pr_mluyuxxpyalynx5jjmi8dxq7jeysv%22%2C%22type%22%3A%22registration%22%2C%22plan%22%3A%22pl_mluyuzkqb5dmlgakz9kwz4qiatejf%22%2C%22count%22%3A1%2C%22affiliate%22%3Anull%7D%5D&redirectUrl=https%3A%2F%2Fnestuge.com%2Fai_beginner%3Fcurrency%3DNGN" className="cta-button w-full block text-white font-black text-xl sm:text-3xl py-4 sm:py-6 rounded-xl border border-neonOrange/50 text-center mb-6">
                          GET INSTANT ACCESS &rarr;
                      </a>

                      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6 pt-6 border-t border-gray-200 text-gray-500 font-mono text-xs sm:text-sm">
                          <div className="flex items-center gap-2">
                              <Shield className="w-5 h-5 text-gray-400" />
                              <span>SECURE SSL CHECKOUT</span>
                          </div>
                          <div className="flex items-center gap-2">
                              <Download className="w-5 h-5 text-gray-400" />
                              <span>IMMEDIATE DIGITAL DELIVERY</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Footer */}
      <footer className="bg-techDark text-gray-500 py-12 text-center text-sm font-mono border-t border-white/10">
          <p className="mb-4 font-sans text-xl text-white font-black tracking-widest">ELEWACHI E.</p>
          <p className="mb-6">Empowering the next generation of AI Architects.</p>
          <div className="space-x-4 mb-6">
              <a href="#" className="hover:text-neonBlue transition-colors">Terms of Service</a>
              <span className="text-gray-700">|</span>
              <a href="#" className="hover:text-neonBlue transition-colors">Privacy Policy</a>
              <span className="text-gray-700">|</span>
              <a href="#" className="hover:text-neonBlue transition-colors">Contact Support</a>
          </div>
          <p>&copy; 2026 AI Automation Roadmap. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
