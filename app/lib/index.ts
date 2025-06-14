export const fetchData = async (endpoint: string = "https://dummyjson.com/products") => {
  const res = await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error('Failed to fetch data');

  const data = await res.json();
  return data;
};
