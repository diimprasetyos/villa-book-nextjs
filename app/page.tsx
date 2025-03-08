"use client";

import type React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  House,
  Utensils,
  Car,
  Tv,
  Wind,
  Bed,
  Heater,
  Bath,
  Refrigerator,
  Menu,
  X,
  Users,
  Coffee,
} from "lucide-react";
import { useState } from "react";
import Chatbox from "@/components/chatBox";

export default function VillaLandingPage() {

  {
    /* Mobile Responsive Handler */
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">Villa</span>
            <span>Orlando</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-sm font-medium hover:text-primary">
              Home
            </a>
            <a
              href="#gallery"
              className="text-sm font-medium hover:text-primary"
            >
              Gallery
            </a>
            <a
              href="#facilities"
              className="text-sm font-medium hover:text-primary"
            >
              Facilities
            </a>
            <a
              href="#location"
              className="text-sm font-medium hover:text-primary"
            >
              Location
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </a>
            <Button className="ml-4">
              <a
                href="https://api.whatsapp.com/send?phone=6281235720521&text=Saya%20ingin%20memesan%20villa"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </a>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white border-b shadow-lg md:hidden">
              <div className="flex flex-col p-4 space-y-4">
                <a
                  href="#home"
                  className="text-sm font-medium hover:text-primary"
                >
                  Home
                </a>
                <a
                  href="#gallery"
                  className="text-sm font-medium hover:text-primary"
                >
                  Gallery
                </a>
                <a
                  href="#facilities"
                  className="text-sm font-medium hover:text-primary"
                >
                  Facilities
                </a>
                <a
                  href="#location"
                  className="text-sm font-medium hover:text-primary"
                >
                  Location
                </a>
                <a
                  href="#contact"
                  className="text-sm font-medium hover:text-primary"
                >
                  Contact
                </a>
                <Button className="w-full">Book Now</Button>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative">
          <div className="relative h-[70vh] w-full">
            <Image
              src="/front-view.png?height=1080&width=1920"
              alt="Luxury Villa"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center">
              <div className="container px-4 sm:px-6 lg:px-8">
                <div className="max-w-xl text-white space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                    Experience Cozy Villa Living
                  </h1>
                  <p className="text-lg md:text-xl">
                    Escape to our exclusive villa orlando and indulge in the
                    perfect blend of comfort, luxury, and natural environment.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button size="lg" className="btn-primary">
                      <a
                        href="https://api.whatsapp.com/send?phone=6281235720521&text=Saya%20ingin%20memesan%20villa"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Your Stay
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-white/10 backdrop-blur-sm"
                    >
                      <a
                        href="#gallery"
                      >
                        Explore More
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Facilities Section */}
        <section id="gallery" className="py-12 sm:py-16 bg-muted-30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">Experience Our Villa</h2>

            {/* Facility 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
              <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px]">
                <Image
                  src="/outside-view.jpg?height=800&width=1200"
                  alt="Luxury Pool Area"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">
                  Stunning and Relaxing Garden
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Relax in our lush garden, surrounded by fresh greenery and a
                  cozy gazebo—perfect for unwinding and enjoying nature.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Coffee size={20} className="text-black dark:text-white" />
                    <span>Outdoor lounge area</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Utensils
                      size={20}
                      className="text-black dark:text-white"
                    />
                    <span>BBQ facilities</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Facility 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-20">
              <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px]">
                <Image
                  src="/front-view2.jpg?height=800&width=1200"
                  alt="Luxury Interior"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">
                  Elegant Living Spaces
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our villa features spacious, beautifully designed living areas
                  with high ceilings and large windows that flood the space with
                  natural light. The open-plan design creates a seamless flow
                  between indoor and outdoor living.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Tv size={20} className="text-black dark:text-white" />
                    <span>Smart entertainment system</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Wind size={20} className="text-black dark:text-white" />
                    <span>Cool & relaxing environment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users size={20} className="text-black dark:text-white" />
                    <span>Comfortable for 8+ guests</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Facility 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px]">
                <Image
                  src="/bedroom-1.jpg?height=800&width=1200"
                  alt="Luxury Bedroom"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">
                  Cozy Large Bedrooms
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Each bedroom is thoughtfully designed with comfort in mind,
                  featuring premium mattresses, high-quality linens, and ample
                  storage. All bedrooms have en-suite bathrooms and air
                  conditioning for your comfort.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Users size={20} className="text-black dark:text-white" />
                    <span>Large-sized beds</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin size={20} className="text-black dark:text-white" />
                    <span>Stunning views from every room</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section id="facilities" className="py-12 sm:py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight mb-6 sm:mb-8">
              What our villa offer
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              <FacilityCard
                icon={<Car className="h-6 w-6" />}
                title="Car Parking"
              />
              <FacilityCard
                icon={<Utensils className="h-6 w-6" />}
                title="Kitchen"
              />
              <FacilityCard icon={<Tv className="h-6 w-6" />} title="TV" />
              <FacilityCard
                icon={<Wind className="h-6 w-6" />}
                title="Air Conditioning"
              />
              <FacilityCard
                icon={<MapPin className="h-6 w-6" />}
                title="Garden View"
              />
              <FacilityCard
                icon={<Heater className="h-6 w-6" />}
                title="BBQ Area"
              />
              <FacilityCard
                icon={<House className="h-6 w-6" />}
                title="Gazebo"
              />
              <FacilityCard
                icon={<Bed className="h-6 w-6" />}
                title="2 Bedroom"
              />
              <FacilityCard
                icon={<Refrigerator className="h-6 w-6" />}
                title="Refrigerator"
              />
              <FacilityCard
                icon={<Bath className="h-6 w-6" />}
                title="Water Heater"
              />
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="py-12 sm:py-16 bg-muted-30">
          <div className="container px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight mb-6 sm:mb-8">
              Location
            </h2>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Find Us Here</h3>
                <p className="text-muted-foreground">
                  Our villa is located in a serene environment, just a short
                  drive from the city center. Enjoy the peaceful surroundings
                  while still having easy access to local attractions.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>
                      Villa Taman Dayu Orlando Hills Jl. Taman Dayu Ketanireng, Prigen,
                      Pasuruan Regency, East Java
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <House className="h-5 w-5 text-primary" />
                    <span>Located in the corner with green cozy view</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="h-5 w-5 text-primary" />
                    <span>10 minutes to nearest toll entrance</span>
                  </div>
                </div>
                <Button variant="outline" className="mt-4 text-black">
                  Get Directions
                </Button>
              </div>
              {/* <div className="aspect-video w-full rounded-lg overflow-hidden border shadow-sm">
                <div className="w-full h-full bg-muted relative">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Map"
                    alt="Location Map"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-sm text-muted-foreground bg-white/80 p-2 rounded">
                      Interactive map would be displayed here
                    </p>
                  </div>
                </div>
              </div> */}
              <div className="aspect-video w-full rounded-lg overflow-hidden border shadow-sm">
                <div className="w-full h-full bg-muted relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d293.8767964693282!2d112.6778676499645!3d-7.6918297851185855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7d700777e6093%3A0x4336c7b5424dd17e!2sVilla%20Taman%20Dayu%20Orlando%20Hills%202.9!5e0!3m2!1sen!2sid!4v1741240891495!5m2!1sen!2sid"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight mb-6 sm:mb-8">
              Contact Us
            </h2>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Get in Touch</h3>
                  <p className="text-muted-foreground">
                    Have questions about our villa or want to make a
                    reservation? Contact us and our team will get back to you as
                    soon as possible.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+62 812-3572-0521</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">
                        villaorlandohills@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">
                        Villa Taman Dayu Orlando Hills 2.9, 8M5H+96H, Orlando
                        Hills OH, Jl. Taman Dayu 2, RW.9, Ketanireng, Prigen,
                        Pasuruan Regency, East Java
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-muted p-4 sm:p-6 rounded-lg">
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Subject" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 bg-muted-30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <span className="text-primary">Villa</span>
                <span>Orlando</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Experience cozy living in our exclusive villa orlando hills,
                where comfort meets elegance in a serene natural setting.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#home"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#facilities"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Facilities
                  </a>
                </li>
                <li>
                  <a
                    href="#location"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Location
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Subscribe to our newsletter for special deals and updates.
              </p>
              <div className="flex gap-2">
                <Input placeholder="Your email" className="max-w-[220px]" />
                <Button variant="outline" className="text-black">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
            <p>©2025 Villa Orlando. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <Chatbox />
    </div>
  );
}

function FacilityCard({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6 flex flex-col items-center text-center gap-3">
        <div className="bg-primary-transparent p-3 rounded-full">{icon}</div>
        <h3 className="font-medium">{title}</h3>
      </CardContent>
    </Card>
  );
}
