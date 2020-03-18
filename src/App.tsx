import React from 'react'
import clsx from 'clsx'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import AppMenu from './AppMenu'

const PageDefault = () => <Typography variant="h3" component="h1">Default Page</Typography>
const PageLevel1 = () => <Typography variant="h3" component="h1">Level 1 Page</Typography>
const PageLevel2 = () => <Typography variant="h3" component="h1">Level 2 Page</Typography>
const PageLevel2a = () => <Typography variant="h3" component="h1">Level 2 a Page</Typography>
const PageLevel2b = () => <Typography variant="h3" component="h1">Level 2 b Page</Typography>
const PageLevel3 = () => <Typography variant="h3" component="h1">Level 3 Page</Typography>
const PageLevel3a = () => <Typography variant="h3" component="h1">Level 3a Page</Typography>
const PageLevel1a = () => <Typography variant="h3" component="h1">Level 1a Page</Typography>
const PageLevel1b = () => <Typography variant="h3" component="h1">Level 1b Page</Typography>
const PageLevel1c = () => <Typography variant="h3" component="h1">Level 1c Page</Typography>

const App: React.FC = () => {
  const classes = useStyles()

  return (
    <BrowserRouter>
      <div className={clsx('App', classes.root)}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <AppMenu />
        </Drawer>
        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>

            <Switch>
              <Route path="/" exact component={PageDefault} />
              <Route path="/Level-1" component={PageLevel1} />
              <Route path="/Level-2" component={PageLevel2} />
              <Route path="/level-2a" component={PageLevel2a} />
              <Route path="/level-2b" component={PageLevel2b} />
              <Route path="/level-3" component={PageLevel3} />
              <Route path="/level-3a" component={PageLevel3a} />
              <Route path="/Level-1a" component={PageLevel1a} />
              <Route path="/Level-1b" component={PageLevel1b} />
              <Route path="/Level-1c" component={PageLevel1c} />
            </Switch>

          </Container>
        </main>
      </div>
    </BrowserRouter>
  )
}

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: '#535454',
    color: '#fff',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

export default App
