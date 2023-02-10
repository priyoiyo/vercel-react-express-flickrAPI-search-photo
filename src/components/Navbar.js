import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';




export default function Navbar({searchTerm, setSearchTerm, setIsSearchAble}) {
    

    const onEnter = (e) => {
        if (e.key === 'Enter') {
            setSearchTerm(e.target.value)
            setIsSearchAble(true)
          }
    }
    const onClickIcon = () => {

            setIsSearchAble(true)

    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ top: "10px", left: "3%", right: "3%", width: "auto", backgroundColor:"white" }} position="fixed">
                <Toolbar>
                    <SearchIcon sx={{ color: "black", marginRight:"1rem", cursor:"pointer" }} onClick={onClickIcon}/>
                    <InputBase sx={{ color: "black",width:"90%" }} placeholder="Search images.." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={onEnter}></InputBase>
                </Toolbar>
            </AppBar>

        </Box>
    );
}