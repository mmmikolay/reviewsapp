import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_AUTHOR } from "../../queries/mutations";
import { GET_AUTHORS } from "../../queries/queries";

//STYLES
import "./forms.css";

import { useHistory } from "react-router-dom";

const AddAuthorForm = () => {
  let history = useHistory();

  const [authorInstance, setAuthorInstance] = useState({
    name: "",
    bio: "",
    photo: "",
  });

  // GQL Queries
  const [addAuthorMutation] = useMutation(ADD_AUTHOR);

  // Handle Query
  const submitForm = (event) => {
    event.preventDefault();
    addAuthorMutation({
      variables: {
        name: authorInstance.name,
        bio: authorInstance.bio,
        photo: authorInstance.photo,
      },
      refetchQueries: [
        {
          query: GET_AUTHORS,
        },
      ],
    });
    history.goBack();
  };

  return (
    <>
      <div className="add-item-container">
        <form className="add-item">
          <div className="field">
            <label>Name of the Author:</label>
            <input
              type="text"
              onChange={(event) =>
                setAuthorInstance({
                  ...authorInstance,
                  name: event.target.value,
                })
              }
            />
          </div>

          <div className="field">
            <label>Author bio:</label>
            <input
              type="text"
              onChange={(event) =>
                setAuthorInstance({
                  ...authorInstance,
                  bio: event.target.value,
                })
              }
            />
          </div>

          <div className="field">
            <label>Link to photo:</label>
            <input
              type="text"
              onChange={(event) =>
                setAuthorInstance({
                  ...authorInstance,
                  photo: event.target.value,
                })
              }
            />
          </div>
        </form>
        <button className="add-item-button" onClick={submitForm}>
          +
        </button>
      </div>
    </>
  );
};

export default AddAuthorForm;
