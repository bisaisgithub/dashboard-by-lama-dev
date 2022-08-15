import styles from '../../styles/Widgets.module.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({type}) => {
  let data;
  // temporary
  const amount = 100;
  const diff = 20;
  switch(type){
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See all users',
        icon: (
          <PersonOutlineOutlinedIcon 
            className={styles.icon} 
            style={{
              color: 'crimson',
              backgroundColor: 'rgba(255, 0, 0, 0.2)'
            }}
          />
        )
      }
      break;
      case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'View all orders',
        icon: (
          <ShoppingCartOutlinedIcon className={styles.icon} />
        )
      }
      break;
      case 'earning':
      data = {
        title: 'EARNING',
        isMoney: true,
        link: 'View net earnings',
        icon: (
          <MonetizationOnOutlinedIcon className={styles.icon} />
        )
      }
      break;
      case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'See details',
        icon: (
          <AccountBalanceWalletOutlinedIcon className={styles.icon} />
        )
      }
      break;
    default:
      break;
  }
  return ( 
    <div className={styles.widget}>
      <div className={styles.left}>
        <span className={styles.title}>{data.title}</span>
        <span className={styles.counter}>{data.isMoney && '$'} {amount}</span>
        <span className={styles.link}>{data.link}</span>
      </div>
      <div className={styles.right}>
        <div className={`${styles.percentage} ${styles.positive}`}>
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
   );
}
 
export default Widget;