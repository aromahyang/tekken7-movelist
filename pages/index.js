import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import Characters from '~/components/Characters';
import CommandTable from '~/components/CommandTable';
import { TooltipProvider } from '~/context/TooltipContext';
import logo from '~/public/images/logo.png';
import CHARACTERS from '~/public/json/characters.json';
import {
  getCookie,
  setCookie,
  CHARACTER_INDEX_COOKIE,
  LANGUAGE_INDEX_COOKIE,
} from '~/utils/cookies';
import { trickHeight } from '~/utils/deviceHightl';
import styles from '~/styles/Home.module.css';

function Home({ characters }) {
  const [charIndex, setCharIndex] = useState(0);
  const [langIndex, setLangIndex] = useState(0);

  const tableRef = useRef(null);
  const menuOpen = useRef(false); // menu open control for mobile

  const init = () => {
    trickHeight();
    const charIndexCookie = getCookie(CHARACTER_INDEX_COOKIE, 'number');
    const langIndexCookie = getCookie(LANGUAGE_INDEX_COOKIE, 'number');
    if (charIndexCookie) {
      setCharIndex(charIndexCookie);
    }
    if (langIndexCookie) {
      setLangIndex(langIndexCookie);
    }
  };

  useEffect(init, []);

  const handleCharacterClick = (index) => {
    setCookie(CHARACTER_INDEX_COOKIE, index);
    setCharIndex(index);
    if (tableRef.current) {
      tableRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLanguageChange = (index) => {
    setLangIndex(index);
  };

  return (
    <TooltipProvider>
      <div className={styles.container}>
        <Head>
          <title>
            {langIndex === 0 ? '철권7 프레임표' : 'Tekken7 Movelist'}
          </title>
        </Head>
        <header className={styles.header}>
          <div>
            <Image src={logo} alt="Tekken7" layout="responsive" />
          </div>
          <h3>MOVELIST</h3>
        </header>
        <main className={styles.main}>
          <Characters
            list={characters}
            selectedIndex={charIndex}
            menuOpen={menuOpen}
            onClick={handleCharacterClick}
          />
          <div className={styles.divider} />
          <CommandTable
            ref={tableRef}
            character={characters[charIndex]}
            langIndex={langIndex}
            menuOpen={menuOpen}
            onLanguageChange={handleLanguageChange}
          />
        </main>
        <footer className={styles.footer}>
          <p>Contact: aromahyang.dev@gmail.com</p>
          <div className="ad-container"></div>
        </footer>
      </div>
    </TooltipProvider>
  );
}

export async function getStaticProps() {
  return {
    props: {
      characters: CHARACTERS,
    },
  };
}

export default Home;
