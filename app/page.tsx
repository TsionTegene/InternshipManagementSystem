import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"



import './page.css';
export default function Home() {
  return (
    <section className="main">
      <h1>Hello</h1>
      {/* <Drawer direction="left">
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>

        </DrawerContent>
      </Drawer> */}

      {/* <div>
        <Image src="/images/logo.png" alt="logo" width={120} height={120} objectFit="contain" />
      </div>
      <div className="sideBar">
        <ul className="options">
          <li className="listStyle">My internships</li>
          <li className="listStyle">Internship opportunities</li>
          <li className="listStyle">Application status</li>
          <li className="listStyle">skills and achievements</li>
          <li className="listStyle">my advisor</li>
          <li className="listStyle">my mentor</li>
          <li className="listStyle">department head</li>
        </ul>
      </div> */}
    </section>
  );
}
