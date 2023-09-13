import styles from './Filtros.module.scss';
import filtros from './Filtros.json'

type Iopcao = typeof filtros[0];

export default function Filtros() {

    return(
        <div className={styles.filtro}>
            {filtros.map((opcao) => (
                <button className={styles.filtro__filtro} key={opcao.id}> 
                    {opcao.label}
                </button>
            )

            )}
        </div>
    );

}