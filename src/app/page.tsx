import Image from "next/image";
import NavBar from '@/components/NavBar/index'
import CardInfoRegistPat from '@/components/CardInfoPet/index'
import CardStaps from '@/components/CardStap/index'
import CatHome from '@/images/LogoCatIcon.jpg'
import CatIcon from '@/images/catHome.jpg'
import Img03 from '@/images/Icon03.png'
import Img02 from '@/images/Icon02.png'
import Img01 from '@/images/Icon01.png'
import Icon01 from '@/images/SyringeIcon.png'
import Icon02 from '@/images/PriceTagIcon.png'
import Icon03 from '@/images/HandsIcon.png'

export default function Home() {
  return (
    <>
      <header className="container">
        <NavBar />
      </header>
      <main className="container">
        <section className="card_info_home">
          <div className="card_img-info-home">
            <Image src={CatHome} alt="" />
          </div>
          <div className="card_register-info-home">
            <CardInfoRegistPat
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis sed viverra posuere malesuada. At et pharetra diam vel. Quis dignissim maecenas lectus vestibulum, sed. Risus est accumsan euismod ut at consequat."
            />
          </div>
        </section>

        <section className="card_info-secondy">
          <div>
            <CardInfoRegistPat
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis sed viverra posuere malesuada. At et pharetra diam vel. Quis dignissim maecenas lectus vestibulum, sed. Risus est accumsan euismod ut at consequat."
            />
          </div>
          <div className="card_info-secondy-img">
            <Image src={CatIcon} alt="" />
          </div>
        </section>

        <section className="card_info-tortyare">
          <h3>Serviços inclusos no registro</h3>
          <div>
            <ul className="card_icons-ifo-section-secondy">
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

        <section className="card_icons-ifo-section-fourth">
          <h2>Passso a passo para obter seu IdentiPatas</h2>
          <div className="cards_staps">
            <CardStaps
              img={Img03}
              title="1. Informe os dados do seu pet"
              description="Preencha todas as informações solicitadas no formulário "
            />
            <CardStaps
              img={Img02}
              title="2. Informe os dados do seu pet"
              description="Preencha todas as informações solicitadas no formulário "
            />
            <CardStaps
              img={Img01}
              title="3. Informe os dados do seu pet"
              description="Preencha todas as informações solicitadas no formulário "
            />
          </div>
        </section>
      </main>
      <footer className="">

      </footer>
    </>
  );
}
