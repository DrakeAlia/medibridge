import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12 flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-bold text-blue-600">MediBridge</h1>
            <p className="text-xl text-gray-600 mt-2">
              Your Health, Our Priority
            </p>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <section className="mb-16">
            <div className="bg-blue-600 text-white rounded-lg p-8 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Find Your Medication
                </h2>
                <p className="mb-4">
                  Search our extensive database of medications
                </p>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search medications..."
                  className="py-2 px-4 pr-10 rounded-full text-gray-800 w-64"
                />
                <Search className="absolute right-3 top-2.5 text-gray-500" />
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">
                  Online Prescriptions
                </CardTitle>
                <CardDescription>
                  Easy and secure prescription services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Get your prescriptions filled online with our secure and
                  convenient service.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">
                  Health Consultations
                </CardTitle>
                <CardDescription>
                  Connect with healthcare professionals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Speak with licensed healthcare professionals from the comfort
                  of your home.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">
                  Medication Delivery
                </CardTitle>
                <CardDescription>
                  Fast and reliable delivery to your doorstep
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Have your medications delivered directly to your home with our
                  reliable service.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Order Now
                </Button>
              </CardContent>
            </Card>
          </section>
        </main>

        <footer className="mt-16 border-t pt-8 text-center text-gray-600">
          <p>&copy; 2024 MediBridge. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
