import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/reducers/cartSlice";
import { useSelector } from "react-redux";
import { Collapse } from "@mui/material";
import { useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import { ExpandMoreIcon } from "@mui/icons-material";

export default function BookCard({ bookData }) {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.rootReducer.cartSlice);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={bookData.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {bookData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {bookData.description}
        </Typography>
        <Typography variant="body1" color="secondary">
          Author : {bookData.author}
        </Typography>
        <Typography variant="body1" color="intial">
          Genre : {bookData.genre}
        </Typography>
      </CardContent>

      <CardActions>
        {expanded ? (
          <Button size="small" onClick={() => setExpanded(!expanded)}>
            Show Less
          </Button>
        ) : (
          <Button size="small" onClick={() => setExpanded(!expanded)}>
            Show More
          </Button>
        )}
        {state.selectedBooks.filter((item) => item.id == bookData.id).length ? (
          <Button
            size="small"
            onClick={() => dispatch(removeFromCart(bookData))}
          >
            Remove from Cart
          </Button>
        ) : (
          <Button size="small" onClick={() => dispatch(addToCart(bookData))}>
            Add to Cart
          </Button>
        )}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>ISBN:{bookData.isbn}</Typography>
          <Typography paragraph>Punlished:{bookData.published} </Typography>
          <Typography paragraph>Publisher:{bookData.publisher}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
