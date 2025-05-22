"use client"
import React from 'react';
import Link from "next/link";

function SearchFormReset() {
  function reset() {
    const form = document.querySelector('.search-form') as HTMLFormElement;

    if (form) {
      form.reset();
    }
  }

  return (
    <button type="reset" className="search-btn text-white" onClick={reset}>
      <Link href="/">
        X
      </Link>
    </button>
  );
}

export default SearchFormReset;