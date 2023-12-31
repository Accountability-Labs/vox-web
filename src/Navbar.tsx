import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ArticleIcon from '@mui/icons-material/Article';
import ListItemText from '@mui/material/ListItemText';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import CommentIcon from '@mui/icons-material/Comment';

import { styled } from '@mui/material/styles';

// TODO: move to constandts
const drawerWidth: number = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const mainListItems = (
    <>
        <ListItemButton component="a" href="/">
            <ListItemIcon>
                <NewReleasesIcon />
            </ListItemIcon>
            <ListItemText primary="New notes" />
        </ListItemButton>
        <ListItemButton component="a" href="/my-notes">
            <ListItemIcon>
                <CommentIcon />
            </ListItemIcon>
            <ListItemText primary="My notes" />
        </ListItemButton>
        <ListItemButton component="a" href="/stats">
            <ListItemIcon>
                <LeaderboardIcon />
            </ListItemIcon>
            <ListItemText primary="Stats" />
        </ListItemButton>
        <ListItemButton component="a" href="/docs">
            <ListItemIcon>
                <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="Docs" />
        </ListItemButton>
    </>
);

export default function Navbar(
    { toggleDrawer, open }: { toggleDrawer: () => void, open: boolean }
) {
    return (
        <>
            <Drawer variant="permanent" open={open}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                    }}
                >
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                <List component="nav">
                    {mainListItems}
                </List>
            </Drawer>
        </>);
}