import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { removeFromCart } from "../store/reducers/cartSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  overflow: "scroll",
  height: "100%",
  display: "block",
  padding: "30px",
};

export default function Cart({ cartOpen, setCartOpen }) {
  const state = useSelector((state) => state.rootReducer.cartSlice);
  const cartItems = state.selectedBooks.map((item) => ({ ...item, price: 10 }));
  const dispatch = useDispatch();
  return (
    <div>
      <Modal
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              display: "flex",
              padding: "20px",
              justifyContent: "space-between",
            }}
          >
            <div>
              {cartItems.map((item) => (
                <div
                  style={{
                    border: "2px solid black",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                    marginTop: "10px",
                  }}
                >
                  <Box>
                    <img src={item.image} alt="" style={{ width: "80px" }} />
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="p"
                    >
                      {item.author}
                    </Typography>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="p"
                    >
                      ${item.price}
                    </Typography>
                  </Box>
                  <Button onClick={() => dispatch(removeFromCart(item))}>
                    Remove from Cart
                  </Button>
                </div>
              ))}
            </div>
            <Box>
              <Typography variant="h5">Total</Typography>
              <Typography variant="h6">
                ${cartItems.reduce((acc, item) => acc + Number(item.price), 0)}
              </Typography>
            </Box>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
