"use client"
import "./globals.css";
import Nav from './_component/Nav'
import Tail from './Tail/page';
import { Provider } from "react-redux";
import { store } from "@/lib/store";

export default function RootLayout({ children }) {
 
  
  return (
    <html lang="en">
      
      <body>
        <Provider store={store}>

      <Nav  classname="z-10"/>

        {children}
        <Tail classname="mt-5"/>
        </Provider>

      </body>
    </html>
  );
}
