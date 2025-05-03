"use client";
import Button from "./components/common/Button";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

export default function HomePage() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-semibold">Welcome to my portfolio!</h1>
        <Button text="Primary Button" onClick={handleClick} color="primary" />
        <Button text="Success Button" onClick={handleClick} color="success" />
        <Button text="Warning Button" onClick={handleClick} color="warning" />
      </main>
      <Footer />
    </>
  );
}
