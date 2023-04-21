import { checkToken } from "../../utilities/users-service";

export default function OrderHistoryPage() {
  const handleCheckToken = async function(evt) {
    const expDate = await checkToken()
    console.log(expDate)
  }
  return (
    <div>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check when my Login Expires</button>
    </div>
  );
}