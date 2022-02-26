import React from 'react';
import { useQuery } from '@apollo/client';

import CommentList from '../components/MessageList';
import CommentForm from '../components/MessageForm';


import { QUERY_MESSAGE } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_MESSAGE);
  const thoughts = data?.message || [];

  return (
    <main>
      <div className="">
        <div
          className="\"
          style={{ border: '' }}
        >
          <MessageForm />
        </div>
        <div className="">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <MessageList
              message={Message}
              title="UW post a message"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;