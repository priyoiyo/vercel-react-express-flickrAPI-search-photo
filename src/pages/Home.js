import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


const Home = ({searchTerm, isSearchAble, setIsSearchAble }) => {

  const [list, setList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    if (searchTerm && isSearchAble) {
      axios.post(`/api/flickr`, { "tags": searchTerm })
        .then((data) => {
          setList(data.data.data)
          setIsLoading(false);
          setIsSearchAble(false)
          console.log('boom')
        })
        .catch(error => {
          console.log(error)
        })

    } else if (!searchTerm && !isSearchAble) {
      axios.get('/api/flickr')
        .then((data) => {
          setList(data.data.data)
          setIsLoading(false);
          setIsSearchAble(false)
          console.log("hit")
          
        })
        .catch(error => {
          console.log(error)
        })
    }


  }, [searchTerm, isSearchAble, setIsSearchAble]);


  return (
    <div style={{ marginTop: "80px" }}>
      {isLoading ? (
        <Box sx={{
          display: 'flex',
          width: "auto",
          height: "100vh",
          justifyContent:
            "center", alignItems:
            "center"
        }}>
          <CircularProgress />
        </Box>
      ) : (
        <>

          <Typography variant='h2' 
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: 3
            }}>

            {list.searchTitle}

          </Typography>
          <Card data={list.items} />
        </>
      )}
    </div>
  )
}

export default Home