export function getGuitars() {
  return async () => {
    const response = await fetch("http://localhost:8000/guitars");
    return await response.json();
  };
}
