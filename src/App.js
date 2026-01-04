import React from 'react';
import './App.css';
import { motion } from 'framer-motion'; // <--- Added animation library

// --- DATA CONFIGURATION ---

const FEATURE_LIST = [
  {
    title: "ONVIF Compliance",
    desc: "Universal compatibility with Profile S (Streaming) and Profile G (Recording). Auto-discovery of cameras on the local network.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
    )
  },
  {
    title: "Multi-View Layouts",
    desc: "Customizable grid layouts (1x1, 2x2, 3x3, 4x4). Drag-and-drop camera arrangement with saved view profiles.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect></svg>
    )
  },
  {
    title: "Smart Playback",
    desc: "Intuitive timeline scrubbing. Export footage in standard formats (MP4, AVI) with digital watermarking for evidence.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
    )
  },
  {
    title: "Enterprise Security",
    desc: "Role-Based Access Control (RBAC). Secure HTTPS/TLS connections. Audit logs for all operator actions.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
    )
  },
  {
    title: "Decentralized Architecture",
    desc: "Lightweight client that can connect to local NVRs or cloud bridges. Low CPU footprint using hardware acceleration.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
    )
  },
  {
    title: "Event Handling",
    desc: "Real-time event notifications (Motion, VMD, Digital I/O). Instant bookmarking of critical incidents.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
    )
  },
];

const ROADMAP_DATA = [
  { phase: "MVP", module: "Discovery & Connect", desc: "ONVIF Device Discovery, Basic Auth (Digest), RTSP Stream Parsing.", type: "mvp" },
  { phase: "MVP", module: "Live Matrix", desc: "1, 4, 9, 16 Channel views. Stream decoding (H.264/H.265).", type: "mvp" },
  { phase: "MVP", module: "Recording Engine", desc: "Continuous recording to local disk storage (MP4 container).", type: "mvp" },
  { phase: "Phase 2", module: "Playback & Search", desc: "Timeline seek, Export clip, Digital Zoom during playback.", type: "planned" },
  { phase: "Phase 2", module: "PTZ Control", desc: "ONVIF PTZ movements, Presets, Auto-Patrol, Joystick support.", type: "planned" },
  { phase: "Phase 2", module: "Mobile Client", desc: "Android/iOS companion app for remote push notifications and view.", type: "planned" },
  { phase: "Phase 3", module: "AI Analytics", desc: "LPR (License Plate Recognition), Intrusion Detection, Loitering.", type: "research" },
  { phase: "Phase 3", module: "Failover Server", desc: "High Availability (HA) setup with dual-server redundancy.", type: "research" },
  { phase: "Phase 3", module: "Map Integration", desc: "E-Map view with camera icons and visual status indicators.", type: "research" },
];

// --- COMPONENTS ---

const Header = () => (
  <header>
    <div className="logo">
      <div className="logo-icon"></div>
      SD ViMaSo
    </div>
    <nav>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
        <li><a href="#tech">Technology</a></li>
      </ul>
    </nav>
    <a href="#" className="btn-primary">Request Access</a>
  </header>
);

const Hero = () => (
  <section className="hero">
    {/* VIDEO BACKGROUND CONTAINER */}
    <div className="video-bg">
      <video autoPlay loop muted playsInline>
        {/* Using a tech-themed abstract video. You can replace this src with your own file later */}
        <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-white-lines-black-background-2989-large.mp4" type="video/mp4" />
      </video>
      <div className="overlay"></div>
    </div>

    <div className="panel hero-content">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="heading-hero">Next Gen Video Management for Enterprise</h1>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <p className="text-muted hero-desc">
          A lightweight, standards-based ONVIF Video Management System (VMS). 
          Built on modern Qt architecture for cross-platform performance and reliability.
        </p>
      </motion.div>
      
      <motion.div 
        className="hero-actions"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <a href="#roadmap" className="btn-primary">View Roadmap</a>
        <a href="#features" className="btn-secondary">Learn More</a>
      </motion.div>
    </div>

    <motion.div 
      className="hero-mockup panel"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div style={{position: 'relative'}}>
        <img src="https://picsum.photos/seed/sdvimaso1/1000/500.jpg" alt="App Interface Mockup" />
        <div className="recording-overlay">
          <span>CAM-01: Lobby Entry [ONVIF]</span>
          <div className="rec-indicator">
            <div className="blink-dot"></div>
            <span>REC</span>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const Features = () => (
  <section id="features" className="section-container">
    <motion.div 
      className="section-header"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="heading-section">Core Capabilities</h2>
      <p className="text-muted">Designed for seamless integration with IP camera infrastructure.</p>
    </motion.div>

    <div className="features-grid">
      {FEATURE_LIST.map((feature, index) => (
        <motion.div 
          key={index} 
          className="panel feature-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }} // Stagger effect
        >
          <div className="feature-icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p className="text-muted">{feature.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const Roadmap = () => {
  const getStatusBadge = (type) => {
    const labels = {
      mvp: "MVP (Active)",
      planned: "Phase 2",
      research: "Phase 3"
    };
    return <span className={`status-badge status-${type}`}>{labels[type]}</span>;
  };

  return (
    <section id="roadmap" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-section">Product Roadmap & Features</h2>
        <p className="text-muted">Strategic development plan based on partner feedback and market standards.</p>
      </motion.div>
      
      <motion.div 
        className="panel roadmap-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <table className="data-table">
          <thead>
            <tr>
              <th style={{width: '25%'}}>Feature Module</th>
              <th style={{width: '50%'}}>Description</th>
              <th style={{width: '25%'}}>Target Release</th>
            </tr>
          </thead>
          <tbody>
            {ROADMAP_DATA.map((item, index) => (
              <tr key={index}>
                <td><strong>{item.module}</strong></td>
                <td>{item.desc}</td>
                <td>{getStatusBadge(item.type)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
};

const Tech = () => (
  <section id="tech" className="section-container">
    <motion.div 
      className="panel tech-stats"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="stat-item">
        <div className="stat-label">Qt 6</div>
        <div className="text-muted">Core Framework</div>
        <div className="progress-mock"><div className="progress-fill" style={{width: '100%'}}></div></div>
      </div>
      <div className="stat-item">
        <div className="stat-label">FFmpeg</div>
        <div className="text-muted">Media Backend</div>
        <div className="progress-mock"><div className="progress-fill" style={{width: '90%'}}></div></div>
      </div>
      <div className="stat-item">
        <div className="stat-label">ONVIF</div>
        <div className="text-muted">Profile S / G</div>
        <div className="progress-mock"><div className="progress-fill" style={{width: '80%'}}></div></div>
      </div>
    </motion.div>
  </section>
);

const Contact = () => (
  <section className="section-container" style={{textAlign: 'center'}}>
    <motion.div 
      className="panel contact-form"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2>Partner With Us</h2>
      <p className="text-muted contact-desc">
        We are currently looking for deployment partners. Contact us to get access to the Alpha build or discuss custom integrations.
      </p>
      <form action="PASTE_YOUR_FORMSPREE_LINK_HERE" method="POST">
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" className="input-mock" placeholder="partner@company.com" name="email" required />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea className="input-mock" rows="3" placeholder="Interested in integrating SD ViMaSo..." name="message" required></textarea>
        </div>
        <button type="submit" className="btn-primary full-width">Send Inquiry</button>
      </form>
    </motion.div>
  </section>
);

const Footer = () => (
  <footer>
    <div className="footer-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Documentation</a>
    </div>
    <p className="text-muted copyright">
      &copy; 2023 SD ViMaSo. All rights reserved.<br/>
      Built with Qt technology.
    </p>
  </footer>
);

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Features />
        <Roadmap />
        <Tech />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;