export async function getGuitars() {
  const response = await fetch("http://localhost:8000/guitars");
  const data = await response.json();
  return data;
}
