import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'

import IconDashboard from '@material-ui/icons/Dashboard'
import IconShoppingCart from '@material-ui/icons/ShoppingCart'
import IconPeople from '@material-ui/icons/People'
import IconBarChart from '@material-ui/icons/BarChart'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'

import AppMenuItem from './AppMenuItem'

const appMenuItems = [
  {
    name: 'Default',
    link: '/',
    Icon: IconDashboard,
  },
  {
    name: 'Level-1',
    Icon: IconLibraryBooks,
    link: '/Level-1',
    items: [
      {
        name: 'Level-2',
        link: '/Level-2',
        items: [
          {
            name: 'Level-3',
            link: '/Level-3'
          },
          {
            name: 'Level-3a',
            link: '/level-3a'
          },
        ],
      },
      {
        name: 'Level-2b',
        link: '/Level-2b'
      },
    ],
  },
  {
    name: 'Level-1a',
    link: '/Level-1a',
    Icon: IconPeople,
  },
  {
    name: 'Level-1b',
    link: '/Level-1b',
    Icon: IconBarChart,
  },
  {
    name: 'Level-1c',
    link: '/Level-1c',
    Icon: IconShoppingCart,
  },
]

const AppMenu: React.FC = () => {
  const classes = useStyles()

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {/* <AppMenuItem {...appMenuItems[0]} /> */}
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} />
      ))}
    </List>
  )
}

const drawerWidth = 240

const useStyles = makeStyles(theme =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  }),
)

export default AppMenu
