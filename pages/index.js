import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import UploadFile from "../components/UploadFile";
import Navbar from "../components/Navbar";
import MainBanner from "../components/mainBanner";
import Testimonials from "../components/Testimonials";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <MainBanner/>
    <UploadFile/>
    <Testimonials/>
    <Footer/>
    </>
  )
}
