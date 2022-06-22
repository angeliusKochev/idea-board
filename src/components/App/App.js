import React, { useState, useEffect } from "react";
import ideaService from "../../services/ideas";
import "./App.css";

import Form from "../Form/Form";
import Idea from "../Idea/Idea";
import Layout from "../Layout/Layout";
import Loader from "../Loader/Loader";

const App = () => {
    const [ideas, setIdeas] = useState([]);

    const [newTitle, setTitle] = useState("");
    const [newDescription, setDescription] = useState("");

    useEffect(() => {
        ideaService.getIdeas().then((res) => {
            setIdeas(res.data);
        });
    }, []);

    const handleTitle = (e) => setTitle(e.target.value);

    const handleDescription = (e) => setDescription(e.target.value);

    const addIdea = (e) => {
        e.preventDefault();

        ideaService
            .createIdea({
                id: ideas.length,
                title: newTitle,
                description: newDescription,
                time: new Date(),
            })
            .then((res) => {
                setIdeas([...ideas, res.data]);
            });
        resetForm();
    };

    const removeIdea = (id) => {
        ideaService.removeIdea(id).then(() => {
            const updatedIdeas = ideas.filter((idea) => idea.id !== id);
            setIdeas(updatedIdeas);
        });
    };

    const resetForm = () => {
        setTitle("");
        setDescription("");
    };

    return (
        <Layout>
            <Form
                values={{ newTitle, newDescription }}
                handlers={{
                    handleTitle,
                    handleDescription,
                    addIdea,
                }}
            />
            {ideas.length > 0 ? (
                <ul>
                    {ideas
                        .slice(0)
                        .reverse()
                        .map((idea) => (
                            <Idea
                                key={idea.title}
                                id={idea.id}
                                title={idea.title}
                                time={idea.time}
                                description={idea.description}
                                removeIdea={removeIdea}
                            />
                        ))}
                </ul>
            ) : (
                <Loader />
            )}
        </Layout>
    );
};

export default App;
