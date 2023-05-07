import BookCard from "../Components/BookCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Components/Header";
import { handleAllBooksData } from "../store/reducers/cartSlice";

export async function getServerSideProps() {
  const responce = await fetch("https://fakerapi.it/api/v1/books");
  const res = await responce.json();
  return {
    props: { data: res.data },
  };
}
const Home = () => {
  const state = useSelector((state) => state.rootReducer.cartSlice);
  const booksData = useSelector(
    (state) => state.rootReducer.cartSlice.allBooksData
  );

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://fakerapi.it/api/v1/books")
      .then((responce) => dispatch(handleAllBooksData(responce.data.data)))
      .catch((error) => console.log({ apierror: error }));
  }, []);

  const sortedData =
    state.sortOrder == "ASC"
      ? booksData
          .slice()
          .sort((a, b) =>
            a.title.toLowerCase().localeCompare(b.title.toLowerCase())
          )
      : booksData
          .slice()
          .sort((a, b) =>
            b.title.toLowerCase().localeCompare(a.title.toLowerCase())
          );

  const filterdData = sortedData.filter((item) =>
    item.genre.includes(state.filterValue)
  );

  if (!booksData.length) return <h1>Loading...</h1>;
  return (
    <>
      <Header />
      <div className="card-container">
        {filterdData.map((book) => (
          <BookCard bookData={book} />
        ))}
      </div>
    </>
  );
};

export default Home;
