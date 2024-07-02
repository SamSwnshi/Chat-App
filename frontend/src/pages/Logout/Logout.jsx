
import { SlLogout } from "react-icons/sl";
import useLogout from "../../hooks/useLogout";
const Logout = () => {

  const {logout} = useLogout()
  return (
    <div className="mt-auto">
      <SlLogout className="text-lg mt-3 text-warning" onClick={logout}/>
    </div>
  )
}

export default Logout
