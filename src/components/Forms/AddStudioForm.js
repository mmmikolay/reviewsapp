import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_STUDIO } from "../../queries/mutations";
import { GET_STUDIOS } from "../../queries/queries";

//STYLES
import "./forms.css";

import { useHistory } from "react-router-dom";

const AddStudioForm = () => {
  let history = useHistory();

  const [studioInstance, setStudioInstance] = useState({
    name: "",
    bio: "",
    photo: "",
  });

  // GQL Queries
  const [addStudioMutation] = useMutation(ADD_STUDIO);

  // Handle Query
  const submitForm = (event) => {
    event.preventDefault();
    addStudioMutation({
      variables: {
        name: studioInstance.name,
        bio: studioInstance.bio,
        photo: studioInstance.photo,
      },
      refetchQueries: [
        {
          query: GET_STUDIOS,
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
            <label>Name of the Studio:</label>
            <input
              type="text"
              onChange={(event) =>
                setStudioInstance({
                  ...studioInstance,
                  name: event.target.value,
                })
              }
            />
          </div>

          <div className="field">
            <label>Studio bio:</label>
            <input
              type="text"
              onChange={(event) =>
                setStudioInstance({
                  ...studioInstance,
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
                setStudioInstance({
                  ...studioInstance,
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
export default AddStudioForm;
