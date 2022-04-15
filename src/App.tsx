import styles from './App.module.css'
import poweredImage from './assets/powered.png'

const App = () => {
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} />

        </div>
      </header>
      
      <div className={styles.container}>
        <div className={styles.leftSide}>
          ...
        </div>
        <div className={styles.rigthSide}>
          ...
        </div>

      </div>
    </div>
  );
}

export default App;