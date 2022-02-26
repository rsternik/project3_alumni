import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_MESSAGE } from '../../utils/mutations';
import { QUERY_MESSAGE } from '../../utils/queries';

const ThoughtForm = () => {
  const [formState, setFormState] = useState({
    messageText: '',
    messageAuthor: '',
  });
  const [characterCount, setCharacterCount] = useState(0);

  const [addMessage, { error }] = useMutation(ADD_MESSAGE, {
    update(cache, { data: { addMessage } }) {
      try {
        const { thoughts } = cache.readQuery({ query: QUERY_MESSAGE });

        cache.writeQuery({
          query: QUERY_MESSAGE,
          data: { message: [addMessage, ...message] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addMessage({
        variables: { ...formState },
      });

      setFormState({
        messageText: '',
        messageAuthor: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'messageText' && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
      setCharacterCount(value.length);
    } else if (name !== 'messageText') {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div>
      <h3>What's new?</h3>

      <p
        className={`m-0 ${
          characterCount === 280 || error ? 'text-danger' : ''
        }`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12">
          <textarea
            name="messageText"
            placeholder="Sup?"
            value={formState.messageText}
            className="form-input w-100"
            style={{ lineHeight: '1.5' }}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="messageAuthor"
            placeholder="please share your name"
            value={formState.thoughtAuthor}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Message
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};


export default MessageForm;

