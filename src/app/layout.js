import "./globals.css";

export const metadata = {
  title: "Bansari Panchal",
  description: "Front-End Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased" cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
