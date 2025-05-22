import SearchForm from "@/app/components/SearchForm";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?:string }>
}) {
  const query = (await searchParams).query;

  return (
    <>
      <section className="dark-container">
        <h1 className="heading">Главная страница</h1>

        <p className="sub-heading">Добавляйте новую информацию легко</p>

        <SearchForm query={query} />
      </section>
    </>
  );
}
