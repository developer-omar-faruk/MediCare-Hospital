import HomeHero from "../components/HomeHero";
import HomeQuickService from "../components/HomeQuickService";
import HomeAboutPrev from "../components/HomeAboutPrev";
import HomeFeaturedDoctors from "../components/HomeFeaturedDoctors";
import HomeDepartments from "../components/HomeDepartments";
import HomeWhyUs from "../components/HomeWhyUs";
import HomeTestimonial from "../components/HomeTestimonial";
import HomeFaq from "../components/HomeFAQ";
import HomeCTA from "../components/HomeCTA";


function HomePage({ setActivePage }) {
  return (
    <div>
      
      {/* HERO */}
      <HomeHero setActivePage={setActivePage} />
      {/* QUICK SERVICES */}
      <HomeQuickService setActivePage={setActivePage} />
      {/* ABOUT PREVIEW */}
      <HomeAboutPrev setActivePage={setActivePage} />
      {/* FEATURED DOCTORS */}
      <HomeFeaturedDoctors setActivePage={setActivePage} />
      {/* DEPARTMENTS */}
      <HomeDepartments setActivePage={setActivePage} />
      {/* WHY CHOOSE US */}
      <HomeWhyUs/>
      {/* TESTIMONIALS */}
      <HomeTestimonial/>
      {/* FAQ */}
      <HomeFaq/>
      {/* CTA */}
      <HomeCTA setActivePage={setActivePage} />

    </div>
  );
}

export default HomePage
