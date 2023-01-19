import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";
import response from "../response.json";

type Props = {};

const HomePage = async (props: Props) => {
  // fetch the news data
  const news: NewsResponse =
    response || (await fetchNews(categories.join(",")));

  // await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  // console.log(news);

  return (
    <div className="">
      <NewsList news={news} />
    </div>
  );
};

export default HomePage;
