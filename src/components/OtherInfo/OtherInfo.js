import React from "react";
import "./otherinfo.scss";
export default function OtherInfo() {
    return (
        <div className="content other_info">
            <h2 className="right_section_title">Other Information</h2>
            <div className="other_info_listing">
                <div className="other_info_item">
                    <h3 className="other_info_item_title">Tech Skills</h3>
                    <ul className="block_desc">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SASS/SCSS</li>
                        <li>JavaScript</li>
                        <li>Jquery</li>
                        <li>Wordpress Theme development</li>
                        <li>ReactJS(basic)</li>
                        <li>Redux(basic)</li>
                    </ul>
                </div>

                <div className="other_info_item">
                    <h3 className="other_info_item_title">Language Skills</h3>
                    <ul className="block_desc">
                        <li>Georgian - C2</li>
                        <li>Russian - C1</li>
                        <li>English - B1</li>
                    </ul>
                </div>
                <div className="other_info_item">
                    <h3 className="other_info_item_title">Personal Skills</h3>
                    <ul className="block_desc">
                        <li>Make decision independently</li>
                        <li>Complex problem solver</li>
                        <li>Customer Support</li>
                        <li>Leaders skills</li>
                        <li>Coaching</li>
                        <li>Data analysis</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
