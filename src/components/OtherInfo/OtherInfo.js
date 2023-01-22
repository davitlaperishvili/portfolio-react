import React from "react";
import "./otherinfo.scss";
export default function OtherInfo() {
  return (
    <div className="content other_info">
      <h2 className="right_section_title">Other Information</h2>
      <div className="other_info_listing">
        <div className="other_info_item">
          <h3 className="other_info_item_title">Tech Skills</h3>
          <section className="skills">
            <ul className="skills_list no_bar">
              <li>
                <progress
                  value="90"
                  max="100"
                ></progress>
                <span>HTML</span>
              </li>
              <li>
                <progress
                  value="90"
                  max="100"
                ></progress>
                <span>CSS / SCSS</span>
              </li>
              <li>
                <progress
                  value="70"
                  max="100"
                ></progress>
                <span>JavaScript</span>
              </li>
              <li>
                <progress
                  value="70"
                  max="100"
                ></progress>
                <span>JQuery</span>
              </li>
              <li>
                <progress
                  value="50"
                  max="100"
                ></progress>
                <span>ReactJs</span>
              </li>
              <li>
                <progress
                  value="60"
                  max="100"
                ></progress>
                <span>Redux</span>
              </li>
              <li>
                <progress
                  value="30"
                  max="100"
                ></progress>
                <span>TypeScript</span>
              </li>
              <li>
                <progress
                  value="30"
                  max="100"
                ></progress>
                <span>NextJs</span>
              </li>
              <li>
                <progress
                  value="80"
                  max="100"
                ></progress>
                <span>PHP(Basic)</span>
              </li>
              <li>
                <progress
                  value="80"
                  max="100"
                ></progress>
                <span>Wordpress</span>
              </li>
              <li>
                <progress
                  value="70"
                  max="100"
                ></progress>
                <span>Git</span>
              </li>
              <li>
                <progress
                  value="70"
                  max="100"
                ></progress>
                <span>Webpack, Gulp </span>
              </li>
              <li>
                <progress
                  value="70"
                  max="100"
                ></progress>
                <span>Yarn, NPM</span>
              </li>
            </ul>
          </section>
        </div>

        <div className="other_info_item">
          <h3 className="other_info_item_title">Language Skills</h3>
          <section className="skills">
            <ul className="skills_list">
              <li>
                <progress
                  value="100"
                  max="100"
                ></progress>
                <span>Georgian - C2</span>
              </li>
              <li>
                <progress
                  value="90"
                  max="100"
                ></progress>
                <span>Russian - C1</span>
              </li>
              <li>
                <progress
                  value="70"
                  max="100"
                ></progress>
                <span>English - B1</span>
              </li>
            </ul>
          </section>
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
