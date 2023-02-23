import { useState, useEffect } from 'react';
import { people } from '../constants/data';
import HOCLoading from './hoc/HOCLoading';
import SingleUser from './SingleUser';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setUsers(people);
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div>
      <HOCLoading data={users} loading={loading}>
        <SingleUser />
      </HOCLoading>
    </div>
  );
};

export default Users;
