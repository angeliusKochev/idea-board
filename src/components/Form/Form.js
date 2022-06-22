import React, { useState } from "react";
import "./Form.css";

const IdeaForm = ({
    handlers: { handleTitle, handleDescription, addIdea },
    values: { newTitle, newDescription },
}) => {
    const [active, setActive] = useState(false);

    return (
        <form onSubmit={addIdea}>
            <input
                value={newTitle}
                type="text"
                placeholder="Add an idea ..."
                onChange={handleTitle}
                onFocus={() => setActive(true)}
                style={
                    !active
                        ? {
                              opacity: 0.3,
                          }
                        : {
                              opacity: 1,
                          }
                }
            />
            {active && (
                <React.Fragment>
                    <textarea
                        value={newDescription}
                        onChange={handleDescription}
                        placeholder="Add some more context"
                    />
                    <button>Add</button>
                </React.Fragment>
            )}
        </form>
    );
};

export default IdeaForm;
