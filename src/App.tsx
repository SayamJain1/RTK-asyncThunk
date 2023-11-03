import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/root";
import { fetchUsers } from "./store/features/usersSlice";

export default function App() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div>
      {user.users.map((user) => (
        <ul key={user.id}>
          <li>
            {user.id} : {user.title}
          </li>
        </ul>
      ))}
    </div>
  );
}
