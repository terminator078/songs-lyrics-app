import { alpha,makeStyles } from '@material-ui/core/styles';


const Style = makeStyles((theme)=>({
    search: {
        marginTop:"5px",
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.black, 0.40),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.black, 0.45),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
      },
      searchIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:"5px"
      },
      inputRoot: {
        color: 'primary',
      },
      inputInput: {
        flex:"1",
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        // color:"white"
      },

    player:{
        color:"black",
        backgroundColor:"white",
        [theme.breakpoints.up('sm')]: {
            marginTop:"5%"
          },
        [theme.breakpoints.up('md')]: {
            marginTop:"8%"
          }
    },
    card:{
        // backgroundColor:"rgb(83, 81, 81)",
        color:"black",
        fontSize:"15px",
        flex:"1",
        [theme.breakpoints.up('md')]: {
          width:"620px"
        },
        [theme.breakpoints.down('md')]: {
          width:"400px"
        },
        [theme.breakpoints.down('sm')]: {
          width:"250px"
        },
    },
    heading:{
        margin:"0px 20px",
        padding:"2px 5px",
        cursor:"pointer"
    },
    musicIcon:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:"7px"
    },
    results:{
        display: 'flex',
      alignItems: 'center',
        justifyContent: 'center',
        color:"black"
    },
    elementcard:{
      color:"black",
      // backgroundColor:"white",
      marginTop:"5px",
      display:"flex"
    },
    cardicon:{
      marginTop:"10px",
    },
    marginheading:{
    },
    marginheadingtop10:{
      margin:"10px 0px",
        display: 'flex',
      alignItems: 'center',
        justifyContent: 'center',
        color:"white",
        fontSize:"20px",
        backgroundColor:"rgb(122, 121, 121)",
    },
    appbar:{
      width:"100%"
    },
    arrowback:{
      margin:"20px 0px"
    },
    Fulldetailsfield:{
      padding:"10px",
      margin:"10px 0px",
      borderColor:"gray",
      // backgroundColor:"gray"
    },
    trackname:{
       color:"rgb(87, 86, 86)"
    },
    artistname:{
      color:"rgb(15, 46, 112)"
    },
    abouthead:{
      display: 'flex',
      alignItems: 'center',
        justifyContent: 'center',
        color:"black",
    },
    aboutcard:{
      marginTop:"20px"
    }
}))

export default Style;