"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo/index";
import { Menu, X } from "lucide-react";

const Index = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="card_navbar">
        <Logo />
        <ul className="box_links-navigation">
          <li>
            <Link href="" target="__blank">
              Home
            </Link>
          </li>
          <li>
            <Link href="" target="__blank">
              Quem somos
            </Link>
          </li>
          <li>
            <Link href="" target="__blank">
              Serviçes
            </Link>
          </li>
          <li>
            <Link href="" target="__blank">
              Como fazer
            </Link>
          </li>
          <li>
            <Link href="" target="__blank">
              Clientes
            </Link>
          </li>
        </ul>
        <button
          className="btn_menu"
          onClick={() => handleOpen()}
        >
          {open === true ? <X /> : <Menu />}
        </button>
      </nav>
      {open === true && (
        <>
          <div className="background-menu" />
          <div
            className="card_menu"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Logo />
            <ul className="box_links-navigation-menu">
              <li>
                <Link href="" target="__blank">
                  Home
                </Link>
              </li>
              <li>
                <Link href="" target="__blank">
                  Quem somos
                </Link>
              </li>
              <li>
                <Link href="" target="__blank">
                  Serviçes
                </Link>
              </li>
              <li>
                <Link href="" target="__blank">
                  Como fazer
                </Link>
              </li>
              <li>
                <Link href="" target="__blank">
                  Clientes
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Index;
