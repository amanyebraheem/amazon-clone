export const fetchData = async (url: string) => {
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
  });
  return res.json();
};
