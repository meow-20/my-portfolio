import Navbar from "../components/common/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="w-full py-10 px-30 flex justify-between">
        <div className="w-3/5 pt-50">
          <h1 className="text-4xl font-bold mb-6">
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

          <ul className="text-lg mb-4">
            <li>🔹 Smooth transitions</li>
            <li>🔹 Intuitive layouts</li>
            <li>🔹 Subtle animations that bring a site to life 🎯</li>
          </ul>

          <p className="text-lg mb-4">
            Whether I’m creating a minimal portfolio or an immersive 3D
            showcase, I enjoy turning static designs into interactive
            experiences.{" "}
            <span className="absolute hover:animate-rocket transition-transform cursor-none">
              {" "}
              🚀
            </span>
          </p>

          <p className="text-lg mb-4">
            When I'm not coding, you’ll probably find me:
          </p>

          <ul className="text-lg mb-4">
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
        <div className="w-2/5 pt-10 flex justify-center items-start">
          <img
            src="/pro-pic.png" 
            alt="Profile Picture"
            className="w-full object-cover shadow-lg border-b-8 border-pink-500"
          />
        </div>
      </main>
    </>
  );
}
