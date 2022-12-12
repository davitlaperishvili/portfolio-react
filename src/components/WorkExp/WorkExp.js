import React, { useEffect, useState } from "react";
import "./workExp.scss";
import { db } from "../../services/firebase";
import { collection, getDocs, orderBy } from "firebase/firestore/lite";
import Loader from "../Loader/Loader";
import experiences from "../../services/ExperienceList";

export default function WorkExp() {
    const [experienceList, setExperienceList] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const expCol = collection(db, "work-experience");
            const expSnapshot = await getDocs(expCol);
            const expList = expSnapshot.docs.map((doc) => doc.data());
            setExperienceList(experiences);
        }
        fetchData();
    }, []);

    function renderView() {
        if (experienceList.length > 0) {
            return experienceList.map((item, index) => {
                return (
                    <div className="expItem" key={item.expId}>
                        <div className="expItemLeft">
                            <div className="expItemPosition">{item.positionName}</div>
                            <div className="expItemCompany">
                                <div className="expItemCompanyName">{item.companyName}</div>
                                <div className="expItemCompanyLocation">{item.location}</div>
                            </div>
                            <div className="expItemDate">{item.duration}</div>
                        </div>
                        <div className="expItemPositionDesc">{item.description}</div>
                    </div>
                );
            });
        } else {
            return <Loader />;
        }
    }
    return (
        <div className="work_exp content">
            <h2 className="right_section_title">Working Experiencees</h2>
            <div className="expList">{renderView()}</div>
        </div>
    );
}
