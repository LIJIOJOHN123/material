import React from 'react';
import { makeStyles, Drawer, Button, List, Divider, ListItem } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
 list: {
  width: 250,
 },
 fullList: {
  width: 'auto',
 },
}));

export default function TemporaryDrawer() {
 const classes = useStyles();
 const [state, setState] = React.useState({
  left: false,
 });

 const toggleDrawer = (side, open) => event => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
   return;
  }

  setState({ ...state, [side]: open });
 };

 const sideList = side => (
  <div
   className={classes.list}
   role="presentation"
   onClick={toggleDrawer(side, false)}
   onKeyDown={toggleDrawer(side, false)}
  >
   <List>
    {[{ name: 'Register', link: '/register' }, { name: 'Home', link: '/' }, { name: 'Login', link: '/login' }, { name: 'Data', link: '/register' }].map(({ name, link }, index) => (

     < ListItem button key={name} >
      <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
      <ListItemText ><Link to={link}>{name}</Link></ListItemText>
     </ListItem>
    ))}
   </List>
   <Divider />
   <List>
    {['All mail', 'Trash', 'Spam'].map((text, index) => (
     <ListItem button key={text}>
      <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
      <ListItemText primary={text} />
     </ListItem>
    ))}
   </List>
  </div>
 );



 return (
  <div>
   <Button onClick={toggleDrawer('left', true)}><MenuIcon /></Button>

   <Drawer className={classes.drawerHeader} open={state.left} onClose={toggleDrawer('left', false)}>
    {sideList('left')}
   </Drawer>
  </div>
 );
}
