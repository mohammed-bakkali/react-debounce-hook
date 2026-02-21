# react-debounce-hook

A simple and lightweight React hook for debouncing values (search, input, filters…).

##  What is Debouncing?

Debouncing prevents a function from running too often.  
It waits until the user stops triggering an event (like typing) before executing.

Example:

- User types search
- Instead of sending request for every character
- Request is sent only after user stops typing

---

##  Example (Search)

```jsx
import useDebounce from "../../utils/useDebounce";
import { useEffect, useState } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 500);

  useEffect(() => {
    if (debouncedSearch) {
      fetch(`/api/search?q=${debouncedSearch}`);
    }
  }, [debouncedSearch]);

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search..."
    />
  );
};

export default Search;
