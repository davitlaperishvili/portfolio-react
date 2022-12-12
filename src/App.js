import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/mainContent/MainContent";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import Parser from "html-react-parser";
import { openModal } from "./redux/actions";
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};
function App(props) {
    const dispatch = useDispatch();

    function onProjectClick() {
        console.log("works");
    }
    let state = useSelector((state) => {
        return state;
    });

    function closeModal() {
        dispatch(openModal());
    }
    Modal.setAppElement("#root");
    return (
        <main className={`trans-all-4 ${state.app.theme}`}>
            <div className="container">
                <section className="left_section">
                    <Sidebar />
                </section>
                <section className="right_section">
                    <MainContent onProjectClick={onProjectClick} />
                </section>
            </div>
            <Modal
                isOpen={state.project.isOpen}
                //onAfterOpen={afterOpenModal}
                style={customStyles}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                {state.project.projectDesc ? Parser(state.project.projectDesc) : Parser("<div> No Info About This Project <div>")}
            </Modal>
        </main>
    );
}
export default App;
