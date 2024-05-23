import { useQuery } from "react-query";
import { Results } from "./components";
import { useState } from "react";

const useTrucks = ({ query }: { query: string }) => {
  const encodedQueries = query
    .split(",")
    .map((term) => encodeURIComponent(`%${term.trim()}%`));
  const soqlWhere = encodedQueries
    .map(
      (encodedQuery) =>
        // Achieve case insensitivity, which I could not make work with SoQL by default
        `(lower(fooditems) LIKE '${encodedQuery}' OR fooditems LIKE '${encodedQuery}' OR lower(fooditems) LIKE '${encodedQuery}' OR fooditems LIKE '${encodedQuery}')`
    )
    .join(` AND `);

  const { isLoading, error, data } = useQuery(["trucks", query], async () => {
    const req = query
      ? await fetch(
          `https://data.sfgov.org/resource/rqzj-sfat.json?$where=${soqlWhere}`
        )
      : await fetch(
          `https://data.sfgov.org/resource/rqzj-sfat.json?$limit=100`
        );

    return await req.json();
  });

  return { isLoading, error, data };
};

export const TrucksQueryContainer = () => {
  const [searchTerms, setSearchTerms] = useState("");
  const [query, setQuery] = useState(searchTerms);

  const { isLoading, data, error } = useTrucks({ query });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerms(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setQuery(searchTerms);
  };

  const clear = () => {
    setQuery("");
    setSearchTerms("");
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <div className="flex gap-4 justify-center">
          <input
            type="text"
            name="searchTerms"
            placeholder="Search by menu"
            value={searchTerms}
            onChange={handleInputChange}
          />
          <button type="submit">Search</button>
          <button onClick={clear}>Clear Search</button>
        </div>
      </form>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error, something went wrong...</div>}
      {data && <Results trucks={data || []} />}
    </>
  );
};
