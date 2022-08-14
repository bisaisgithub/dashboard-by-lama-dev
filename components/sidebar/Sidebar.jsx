import styles from '../../styles/Sidebar.module.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const Sidebar = () => {
  return ( 
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <span className={styles.logo}>benadmin</span>
      </div>
      <hr />
      <div className={styles.center}>
        <ul>
          <p className={styles.title}>MAIN</p>
          <li>
            <DashboardIcon className={styles.icon}/>
            <span>Dashboard</span>
          </li>
          <p className={styles.title}>LIST</p>
          <li>
            <PersonOutlineOutlinedIcon className={styles.icon}/>
            <span>Users</span>
          </li>
          <li>
            <Inventory2OutlinedIcon className={styles.icon}/>
            <span>Products</span>
          </li>
          <li>
            <ListAltOutlinedIcon className={styles.icon}/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className={styles.icon}/>
            <span>Delivery</span>
          </li>
          <p className={styles.title}>USEFUL</p>
          <li>
            <QueryStatsIcon className={styles.icon}/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className={styles.icon}/>
            <span>Notifications</span>
          </li>
          <p className={styles.title}>SERVICE</p>
          <li>
            <SettingsSystemDaydreamIcon className={styles.icon}/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className={styles.icon}/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className={styles.icon}/>
            <span>Settings</span>
          </li>
          <p className={styles.title}>USER</p>
          <li>
            <AccountCircleOutlinedIcon className={styles.icon}/>
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className={styles.icon}/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className={styles.bottom}>
        <div className={styles.color_option}></div>
        <div className={styles.color_option}></div>
      </div>
    </div>
   );
}
 
export default Sidebar;