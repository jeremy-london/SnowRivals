async function getData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const response = fetch(
    "https://oyster-app-jma32.ondigitalocean.app/",
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
}

export default async function getHealthCheck() {
  const data = await getData();
  return data;
}