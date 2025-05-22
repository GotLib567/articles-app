import React from 'react';
import Form from "next/form";
import SearchFormReset from "@/app/components/SearchFormReset";

function SearchForm({ query }: { query?: string }) {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Искать стартапы"
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button type="submit" className="search-btn text-white">О</button>
      </div>
    </Form>
  );
}

export default SearchForm;