import styles from '../../styles/Navbar.module.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const Navbar = () => {
  return ( 
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.search}>
          <input type="text" placeholder='Search...'/>
          <SearchOutlinedIcon/>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <LanguageOutlinedIcon/>
            English
          </div>
          <div className={styles.item}>
            <DarkModeOutlinedIcon/>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Navbar;