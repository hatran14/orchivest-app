import Style from "./navbar.module.scss";
import SpeedIcon from '@mui/icons-material/Speed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WaterfallChartRoundedIcon from '@mui/icons-material/WaterfallChartRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import { useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
function NavBar() {
    const {key, setKey} = useState('Dash')
    return (
        <div className={Style.navbar}>
            <div className={Style.title}>
                Orchivest
            </div>
            <List>
              <ListItem className={Style.navDiv}>
                <ListItemButton>
                  <ListItemIcon>
                    <SpeedIcon className={Style.navIcon}/>
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>
              <ListItem className={Style.navDiv}>
                <ListItemButton>
                  <ListItemIcon>
                    <CalendarMonthIcon className={Style.navIcon} />
                  </ListItemIcon>
                  <ListItemText primary="Schedule" />
                </ListItemButton>
              </ListItem>
              <ListItem className={Style.navDiv}>
                <ListItemButton>
                  <ListItemIcon>
                    <WaterfallChartRoundedIcon className={Style.navIcon}/>
                  </ListItemIcon>
                  <ListItemText primary="Statistics" />
                </ListItemButton>
              </ListItem>
              <ListItem className={Style.navDiv}>
                <ListItemButton>
                  <ListItemIcon>
                    <TuneRoundedIcon className={Style.navIcon} />
                  </ListItemIcon>
                  <ListItemText primary="Equipments" />
                </ListItemButton>
              </ListItem>
        </List>
        </div>

    );
}

export default NavBar