import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { handleFilter } from "../store/reducers/cartSlice";
import { useState } from "react";
import { InputLabel } from "@mui/material";

const Dropdown = () => {
  const [genre, setGenre] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.rootReducer.cartSlice);

  return (
    <FormControl sx={{ marginLeft: "50px", minWidth: "100px" }}>
      <InputLabel id="demo-simple-select-label">Genre</InputLabel>
      <Select
        labelId="demo-simple-select-disabled-label"
        id="demo-simple-select-disabled"
        value={genre}
        label="genre"
        onChange={(e) => {
          setGenre(e.target.value);
          dispatch(
            handleFilter(e.target.value === "ALL" ? "" : e.target.value)
          );
        }}
      >
        <MenuItem value="ALL">ALL</MenuItem>
        {state.allBooksData.map((item) => (
          <MenuItem value={item.genre}>{item.genre}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
