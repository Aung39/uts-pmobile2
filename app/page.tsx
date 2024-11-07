import "./agung_style.css";
import Hero from "./components/hero/hero";
import RiwayatPendidikan from "./components/riwayat/riwayatPendidikan";
import RiwayatPekerjaan from "./components/riwayat/riwayatPekerjaan";
import FavColor from "./components/favColor";
import ContactForm from "./components/contactMe";
import PersonalInfo from "./components/personalInfo";
import Skills from "./components/skills";
import MyGallery from "./components/gallery";
import Theme from "./components/tema";

export default function Gallery() {
  return (
    <section>
      {/* <FavColor /> */}
      <Hero />
      <PersonalInfo />
      <div style={{ marginBottom: "40px" }}></div>
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <Skills />
      <MyGallery />
      <ContactForm />
      <Theme />
    </section>
  );
}
