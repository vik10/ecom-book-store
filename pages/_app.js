import { wrapper } from "../store/index";
import "./style.scss";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
  </>
);

export default wrapper.withRedux(MyApp);
