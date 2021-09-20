import axios from "axios";
import { createContext, useEffect, useReducer } from "react";



const ItemContext = createContext();

const Context =(props) =>{


    const reducer =(state,action) =>{
        switch (action.type) {
            case 'init':
                return {
                    countrytracks:action.payload.countrytracks,
                    toptracks:[]
                }
            case 'search':
                return {
                   ...state,
                   toptracks:action.payload
                }

            case "loadsearch":
                return{
                    countrytracks:state.countrytracks
                }
            case "inifulldetail":
                return{
                    ...state,
                    trackname:"Loading...",
                   artistname:"Loading...",
                   albumname:"Loading...",
                   albumid:"Loading...",
                   lyrics:"Loading..."
                }
            case "lyrics":
                return{
                    ...state,
                    lyrics:action.payload
                }
            case "track":
                return{
                    ...state,
                    trackname:action.payload.trackname,
                    artistname:action.payload.artistname,
                    albumname:action.payload.albumname,
                    albumid:action.payload.albumid 
                }
             
            default:
                return state;
        }
    }

    const initFetch = async () => {
        const req1 = await axios.get(`https://cors-access-allow.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=IN&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`)
        // console.log(req1.data.message.body.track_list);
        let data;
        if(req1.data.message.body.length!==0)data =req1.data.message.body.track_list;else data =[];
        dispatch({type: 'init', payload: {countrytracks:data}})
    }

    useEffect(()=>{
        
        initFetch()
    },[]);

    

    const [state, dispatch] = useReducer(reducer,{
           countrytracks:[]
    });




    return(
       <ItemContext.Provider value={{state,dispatch}}>
           {props.children}
       </ItemContext.Provider>
    );
}

export {ItemContext,Context};