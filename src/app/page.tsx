"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="small"
        sizing="mediumLargeSizeLargeTitles"
        background="none"
        cardStyle="gradient-mesh"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "Shop",
          id: "shop",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="MODA"
    />
  </div>

  <div id="home" data-section="home">
      <HeroLogoBillboard
      background={{
        variant: "plain",
      }}
      logoText="MODA COLLECTION"
      description="Timeless fashion for the modern individual. Discover our curated selection of high-quality apparel designed to elevate your everyday style."
      buttons={[
        {
          text: "Shop Now",
          href: "#shop",
        },
        {
          text: "Learn More",
          href: "#about",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/owner-getting-ready-reopening_23-2149142189.jpg"
      imageAlt="Fashion shop storefront"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="shop" data-section="shop">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Essential Tee",
          price: "$35.00",
          variant: "White/Cotton",
          imageSrc: "http://img.b2bpic.net/free-photo/set-with-fashionable-women-s-clothing-jeans-sweater-shoes-accessories-flat-lay_169016-4113.jpg",
          imageAlt: "White Tee",
        },
        {
          id: "2",
          name: "Classic Denim",
          price: "$89.00",
          variant: "Indigo/Raw",
          imageSrc: "http://img.b2bpic.net/free-photo/donuts-lipstick-eyelash-curler-toe-divider-yellow-background_23-2147891351.jpg",
          imageAlt: "Denim Jeans",
        },
        {
          id: "3",
          name: "Wool Overcoat",
          price: "$249.00",
          variant: "Beige/Warm",
          imageSrc: "http://img.b2bpic.net/free-photo/light-brown-beige-pants-indoors-still-life_23-2150756258.jpg",
          imageAlt: "Beige Coat",
        },
      ]}
      title="Shop New Arrivals"
      description="Explore our latest collection of premium clothing, hand-picked for quality and style."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Miller",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-girls-taking-self-portrait-smart-phone-store_132075-12247.jpg?_wi=1",
        },
        {
          id: "2",
          name: "James Chen",
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-image-man-holding-smartphone_171337-19091.jpg",
        },
        {
          id: "3",
          name: "Emily Davis",
          imageSrc: "http://img.b2bpic.net/free-photo/lovely-woman-linen-dress-straw-hat-posing-boho-style-apartment_273443-277.jpg",
        },
        {
          id: "4",
          name: "Michael Wilson",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-tattooed-handsome-middle-aged-man-with-beard-hairstyle-dressed-formal-clothes-hat-pose-with-hand-sunglasses-isolated-textured-dark-background-studio_613910-5067.jpg",
        },
        {
          id: "5",
          name: "Jessica Lee",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-girls-taking-self-portrait-smart-phone-store_132075-12247.jpg?_wi=2",
        },
      ]}
      cardTitle="What Our Clients Say"
      cardTag="Reviews"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "What is your return policy?",
          content: "You can return any item within 30 days of purchase, provided it is in original condition.",
        },
        {
          id: "2",
          title: "Do you offer international shipping?",
          content: "Yes, we ship globally using DHL and FedEx for reliable delivery worldwide.",
        },
        {
          id: "3",
          title: "How do I care for my garments?",
          content: "Each garment comes with specific care instructions. Generally, we recommend cold wash and hang dry.",
        },
      ]}
      sideTitle="Frequently Asked Questions"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      text="Have questions or need assistance? Reach out to our support team and we'll get back to you within 24 hours."
      buttons={[
        {
          text: "Contact Us",
          href: "mailto:support@moda.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/hotel-entrance-unfocused_1203-762.jpg"
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "New Arrivals",
              href: "#shop",
            },
            {
              label: "All Products",
              href: "#shop",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Returns",
              href: "#",
            },
          ],
        },
      ]}
      logoText="MODA"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
