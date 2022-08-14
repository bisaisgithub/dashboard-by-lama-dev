import HeadComponent from "../../components/head/Head";
import styles from '../../styles/Home.module.scss';

const Home = () => {
  return ( 
    <div>
      <HeadComponent />
      <h1 className={styles.test}>Home</h1>
    </div>
   );
}
 
export default Home;