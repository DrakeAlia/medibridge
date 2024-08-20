"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Search, Moon, Sun, Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Command } from "../ui/command";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-primary">MediBridge</h1>
          <p className="text-sm text-muted-foreground">
            Your Health, Our Priority
          </p>
        </div>
        <nav>
          <ul className="flex space-x-6">
            {["Home", "Services", "About Us", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
