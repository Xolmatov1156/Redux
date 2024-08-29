import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export default function ProductCard({item}) {
  return (
    <Card className={`border p-2 w-[350px] h-[450px] !bg-blue-600 !text-white rounded-lg`}>
      <CardActionArea>
        <CardMedia
        className='w-[100px] h-[250px] object-cover rounded-lg'
          component="img"
          image={item.images[0]}
          alt="image"
          onError={(e) =>
            (e.target.src =
                "https://placehold.co/140x140?text=Not+Found")
        }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" className='line-clamp-4'>
            {item.description }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}
