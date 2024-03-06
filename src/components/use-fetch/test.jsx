import useFetch from "./useFetch";

function UseFetchHookTest() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {pending ? <h3>Pending...</h3> : null}
      {error ? <h3>Error!</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((item) => <p key={item.key}>{item.title}</p>)
        : null}
    </div>
  );
}

export default UseFetchHookTest;
