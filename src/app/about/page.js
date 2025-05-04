import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import PianoGame from "./piano";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="w-full py-10 px-6 md:px-20 flex flex-col md:flex-row justify-between gap-10">
        <div className="w-full md:w-3/5 md:pt-30">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Hey there! I’m <strong>Bansari Panchal</strong> 😇
          </h1>

          <p className="text-lg mb-4">
            A front-end developer who’s obsessed with crafting delightful web
            experiences. I specialize in building sleek, responsive interfaces
            using <strong>React, JavaScript, Tailwind CSS</strong>, and I love
            pushing visual boundaries with <strong>Three.js</strong> for
            stunning 3D interactions right in the browser. 🎨🌐
          </p>

          <p className="text-lg font-semibold mb-2">
            💡
            <span
              style={{
                textShadow:
                  "0 0 5px #ec4899, 0 0 10px #ec4899, 0 0 20px #ec4899",
              }}
            >
              My mission? To make the web not just functional—but fun.
            </span>
          </p>

          <p className="text-lg mb-4">
            I believe great design meets great code. That’s why I pay attention
            to the small things:
          </p>

          <ul className="text-lg mb-4 space-y-1">
            <li>🔹 Smooth transitions</li>
            <li>🔹 Intuitive layouts</li>
            <li>🔹 Subtle animations that bring a site to life 🎯</li>
          </ul>

          <p className="text-lg mb-4">
            Whether I’m creating a minimal portfolio or an immersive 3D
            showcase, I enjoy turning static designs into interactive
            experiences.
            <span className="inline-block hover:animate-rocket transition-transform">
              🚀
            </span>
          </p>

          <p className="text-lg mb-4">
            When I'm not coding, you’ll probably find me:
          </p>

          <ul className="text-lg mb-4 space-y-1">
            <li>✏️ Sketching ideas</li>
            <li>🧪 Exploring new tech</li>
            <li>📚 Learning ways to make my work even more impactful</li>
          </ul>

          <p className="text-lg">
            I’m always open to exciting projects, creative collaborations, or
            just a good conversation about design and development. 🤝
          </p>

          <p className="text-lg font-medium mt-6">
            Let’s connect and create something amazing together! 💬💻
          </p>
        </div>

        <div className="w-full md:w-2/5 relative top-0 left-0 flex flex-col items-center">
          <img
            src="/pro-pic.png"
            alt="Profile Picture"
            className="w-3/4 sm:w-2/3 md:w-full object-cover shadow-lg sticky top-20"
          />
          <div className="w-full absolute bottom-0 left-0 z-20 h-2 bg-gradient-to-r from-black via-blue-400 to-black"></div>
        </div>
      </main>
      <div className="w-full h-screen px-20 py-10">
        <div className="flex h-30 relative justify-center items-center gap-2 overflow-hidden">
          <h1
            className="text-4xl font-bold text-center z-10 relative"
            style={{
              background: "linear-gradient(to right, #ec4899, #9333ea)",
              WebkitBackgroundClip: "text",
              color: "text-secondary",
              textShadow:
                "0 0 5px rgba(255, 0, 255, 0.8), 0 0 10px rgba(255, 0, 255, 0.6), 0 0 15px rgba(255, 0, 255, 0.7)",
            }}
          >
            Let's have some fun!
          </h1>
        </div>

        <PianoGame />
      </div>
      <Footer />
    </>
  );
}
