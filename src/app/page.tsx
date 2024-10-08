"use client";

import { useEffect } from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar/index";
import CardInfoRegistPat from "@/components/CardInfoPet/index";
import CardStaps from "@/components/CardStap/index";
import Button from "@/components/buttom/index";
import Logo from "@/components/Logo/index";
import CatHome from "@/images/LogoCatIcon.jpg";
import CatIcon from "@/images/catHome.jpg";
import Img03 from "@/images/Icon03.png";
import Img02 from "@/images/Icon02.png";
import Img01 from "@/images/Icon01.png";
import Icon01 from "@/images/SyringeIcon.png";
import Icon02 from "@/images/PriceTagIcon.png";
import Icon03 from "@/images/HandsIcon.png";
import DogSmaill from "@/images/DogSmallIcon.png";
import Starts from "@/images/starts.png";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <header className="container">
        <NavBar />
      </header>

      <main>
        <section className="card_info_home container">
          <div
            className="card_img-info-home"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <Image src={CatHome} alt="" />
          </div>
          <div className="card_register-info-home" data-aos="fade-left">
            <CardInfoRegistPat description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis sed viverra posuere malesuada. At et pharetra diam vel. Quis dignissim maecenas lectus vestibulum, sed. Risus est accumsan euismod ut at consequat." />
          </div>
        </section>

        <section className="card_info-secondy container">
          <div className="card_info-secondy-info" data-aos="fade-up">
            <CardInfoRegistPat description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis sed viverra posuere malesuada. At et pharetra diam vel. Quis dignissim maecenas lectus vestibulum, sed. Risus est accumsan euismod ut at consequat." />
          </div>
          <div
            className="card_info-secondy-img"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <Image src={CatIcon} alt="" />
          </div>
        </section>

        <section
          className="card_info-tortyare container"
          data-aos="flip-right"
          data-aos-duration="1000"
        >
          <h3>Serviços inclusos no registro</h3>
          <div>
            <ul className="card_list-info-tortyare">
              <li>
                <Image src={Icon01} alt="" />
                <p>Carteira de vacinação</p>
              </li>
              <li>
                <Image src={Icon02} alt="" />
                <p>Tag de Identificação</p>
              </li>
              <li>
                <Image src={Icon03} alt="" />
                <p>RG pet</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="card_icons-ifo-section-fourth container">
          <h2 data-aos="zoom-in" data-aos-duration="1000">
            Passso a passo para obter seu IdentiPatas
          </h2>
          <div className="cards_staps">
            <div data-aos="fade-right" data-aos-duration="1500">
              <CardStaps
                img={Img03}
                title="1. Informe os dados do seu pet"
                description="Preencha todas as informações solicitadas no formulário "
              />
            </div>
            <div data-aos="flip-up" data-aos-duration="1500">
              <CardStaps
                img={Img02}
                title="2. Informe os dados do seu pet"
                description="Preencha todas as informações solicitadas no formulário "
              />
            </div>
            <div data-aos="fade-left" data-aos-duration="1500">
              <CardStaps
                img={Img01}
                title="3. Informe os dados do seu pet"
                description="Preencha todas as informações solicitadas no formulário "
              />
            </div>
          </div>
        </section>

        <section className="card_dog-fifth">
          <div className="container_dog-fifth" data-aos="zoom-in-up">
            <h3>O que dizem nossos clientes?</h3>
            <div className="card_dog-fifth-box-info">
              <div className="card_dog-fifth-box-feedback">
                <div className="img-profile-info-feedback">
                  <Image src={DogSmaill} alt="" />
                </div>
                <div className="card_dog-fifth-box-info-feedback">
                  <h4>Nathan Silva.</h4>
                  <span>
                    <Image src={Starts} alt="" />
                    <p>4.5</p>
                  </span>
                  <p>
                    “Identipatas salvou meu Fred, ele fugiu no Natal e graças a
                    Tag consegui localiza-lo com rapidez!”
                  </p>
                  <Button />
                </div>
              </div>
            </div>
          </div>
          <div className="card_dog-fifth-box-img" data-aos="zoom-in-left" data-aos-duration="1500">
            <Image src={DogSmaill} alt="" />
          </div>
        </section>

        <section
          className="card_help container"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h3>Ficou com dúvidas?</h3>
          <p>Entre em contato conosco!</p>
          <b>identpatas@gmail.com</b>
        </section>
      </main>
      <footer className="container_footer">
        <div className="container container_footer-box">
          <div className="container_footer-box-info">
            <Logo />
            <ul>
              <li>Info</li>
              <li>lorem ipsom</li>
              <li>lorem ipsom</li>
            </ul>
            <ul>
              <li>Contatos</li>
              <li>lorem ipsom</li>
              <li>lorem ipsom</li>
            </ul>
          </div>
          <div className="container_footer-box-contact">
            <p>© 2023 — Copyright</p>
            <p>E-mail</p>
          </div>
        </div>
      </footer>
    </>
  );
}
