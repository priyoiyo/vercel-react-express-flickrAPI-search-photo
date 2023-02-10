import React from 'react'

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import useMediaQuery from '@mui/material/useMediaQuery';
const Card = (data) => {
  let items = data.data

  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const matchesMd = useMediaQuery((theme) => theme.breakpoints.down('md'));
    return (
        <>

                <ImageList variant="masonry" cols={matchesXs ? 1 : matchesMd ? 2 : 4} gap={8}>
                    {items.map((item) => (
                        <ImageListItem sx={{border:"4px solid #fff", }} key={item.id}>
                            <img
                                src={item.url}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>

        </>
    )
}

export default Card