import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import Providers from "./globalRedux/provider";
import Cart from "@components/Cart";

export const metadata = {
  title: "Trade Kings Group",
  description: "Your Home Online Shop",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Providers>
        <main className='app'>
          <Navbar />
          <Cart />
          {children}
          <Footer />
        </main>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
