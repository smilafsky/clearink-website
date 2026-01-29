import "./globals.css";

export const metadata = {
  title: "ClearInk | Denver Tattoo Removal Matching",
  description: "Get matched with trusted Denver tattoo removal providers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
