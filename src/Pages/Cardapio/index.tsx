import styles from './Cardapio.module.scss';
import Logo from 'assets/logo.svg';
import Buscador from './Buscador/index';
import { useState } from 'react';
import Filtros from './Filtros';

export default function Cardapio() {

    const [busca, setBusca] = useState("");

    return (
        <main>
            <nav className={ styles.menu }>
               <img src={Logo} alt="Logo do Restaurante" />
            <header className={styles.header}> 
            <div className={styles.header__text}>
                "A casa do código e da massa!!"
            </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                <Buscador busca={busca} setBusca={setBusca}/>
                <div className={styles.cardapio__filtros}>
                    <Filtros/>
                </div>
            </section>
            </nav>
        </main>
    );
}