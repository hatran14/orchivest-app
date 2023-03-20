import Style from "./navbar.module.scss";
import SpeedIcon from '@mui/icons-material/Speed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WaterfallChartRoundedIcon from '@mui/icons-material/WaterfallChartRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
function NavBar() {
    const data = [
      {icon : <SpeedIcon/>, label:'Dashboard'},
      {icon : <CalendarMonthIcon/>, label:'Schedule'},
      {icon : <WaterfallChartRoundedIcon />, label :'Statistics'},
      {icon : <TuneRoundedIcon/>, label : 'Equipments'}
    ]
    return (
        <div className={Style.navbar}>
            <div className={Style.title}>
                Orchivest
            </div>
            <List className = {Style.list}>
              {data.map((item)=>(
                <ListItemButton key = {item.label} className = {Style.list_div}>
                    <ListItemIcon className = {Style.icon}>{item.icon}</ListItemIcon>
                    <ListItemText primary = {item.label}/>
                </ListItemButton>
              ))}
            </List>
            
        </div>

    );
}

export default NavBar