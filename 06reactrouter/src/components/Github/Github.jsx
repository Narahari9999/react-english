import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github {data?.followers}
      <img src={data?.avatar_url} alt="user" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/Narahari9999");
  return res.json();
};
