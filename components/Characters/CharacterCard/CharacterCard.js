import Image from 'next/image';
import THUMBNAILS from '~/public/thumbnails';
import styles from './CharacterCard.module.css';

function CharacterCard({ selected = false, character, index, onClick }) {
  const thumnailFilename = character.filename.toLowerCase();

  const handleClick = (event) => {
    const { character } = event.target.dataset;
    onClick(+character);
  };

  return (
    <button
      className={`${styles.container} ${selected ? styles.selected : ''}`}
      title={character.name}
      data-character={index}
      onClick={handleClick}
    >
      <Image
        className={styles.thumbnail}
        src={THUMBNAILS[thumnailFilename]}
        data-character={index}
        layout="fill"
      />
      <p className={styles.name} data-character={index}>
        {character.cardname}
      </p>
    </button>
  );
}

export default CharacterCard;
