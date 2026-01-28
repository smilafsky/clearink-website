export const metadata = {
  title: "ClearInk",
  description: "Tattoo removal leads made simple"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
