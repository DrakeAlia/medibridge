"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Pill, Stethoscope, Truck, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      <main>
        <section className="py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
             MediBridge
            </motion.h2>
            <motion.p
              className="text-xl mb-8 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Your trusted partner in health and wellness
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button className="mr-4">Find a Store</Button>
              <Button variant="outline">Learn More</Button>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Online Prescriptions",
                  icon: Pill,
                  description: "Easy and secure prescription services",
                },
                {
                  title: "Health Consultations",
                  icon: Stethoscope,
                  description: "Connect with healthcare professionals",
                },
                {
                  title: "Medication Delivery",
                  icon: Truck,
                  description: "Fast and reliable delivery to your doorstep",
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <service.icon className="w-12 h-12 text-primary mb-4" />
                      <CardTitle className="text-2xl">
                        {service.title}
                      </CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">Learn More</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-muted">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "John Doe",
                  comment:
                    "MediBridge has made managing my medications so much easier. Their delivery service is a lifesaver!",
                },
                {
                  name: "Jane Smith",
                  comment:
                    "The health consultations are incredibly helpful. I always feel well-informed about my health decisions.",
                },
              ].map((testimonial, index) => (
                <Card key={testimonial.name} className="bg-card">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <p className="mb-4">{testimonial.comment}</p>
                    <p className="font-semibold">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Join MediBridge today and experience healthcare made simple.
            </p>
            <Button size="lg" variant="secondary">
              Sign Up Now
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-12 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About MediBridge</h3>
            <p className="text-muted-foreground">
              Your trusted partner in health and wellness, providing easy access
              to medications and healthcare services.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "Home",
                "Services",
                "About Us",
                "Contact",
                "Privacy Policy",
                "Terms of Service",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-muted-foreground mb-2">
              123 Health Street, Wellness City
            </p>
            <p className="text-muted-foreground mb-2">Phone: (555) 123-4567</p>
            <p className="text-muted-foreground">Email: info@medibridge.com</p>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; 2024 MediBridge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
