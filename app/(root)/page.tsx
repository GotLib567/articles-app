import SearchForm from "@/components/SearchForm";
import ArticleCard from "@/components/ArticleCard";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?:string }>
}) {
  const query = (await searchParams).query;

  const posts = [{
    _id: 1,
    _createdAt: new Date(),
    views: 35,
    author: { id: 1, name: "Shirokov Gleb" },
    description: "This is a description of the article.",
    image: "https://play-lh.googleusercontent.com/lmG9HlI0awHie0cyBieWXeNjpyXvHPwDBb8MNOVIyp0P8VEh95AiBHtUZSDVR3HLe3A=w240-h480-rw",
    category: "ai",
    title: "New ChatGPT device"
  }]

  return (
    <>
      <section className="dark-container">
        <h1 className="heading">Главная страница</h1>

        <p className="sub-heading">Делитесь своими идеями!</p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          { query ? `Результаты поиска по "${query}"` : 'Все статьи' }
        </p>

        <ul className="mt-7 card_grid">
          { posts.length > 0 ? posts.map((post: ArticleTypeCard) => (
            <ArticleCard key={post?._id} post={post} />
          )) : (
            <p className="no-results">Статей не найдено</p>
          )}
        </ul>
      </section>
    </>
  );
}
