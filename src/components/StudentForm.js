import { useState } from "react";
import styles from "./Styles.module.css";
export const StudentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [image, setImage] = useState();
  const [gender, setGender] = useState();
  const [skill, setSkill] = useState(new Array([false, false, false]));
  const [allEntry, setAllEntry] = useState([]);
  const Submit = (event) => {
    event.preventDefault(); //for preventing loading after every submit
    // const arr = [
    //   "web development ",
    //   "app developement ",
    //   "software developement",
    // ];

    const newEntry = {
      //it is a component which has all the details of a particular user
      name: name,
      email: email,
      website: website,
      image: image,
      gender: gender,
      skill: skill,
    };
    setAllEntry([newEntry, ...allEntry]);
    // console.log(allEntry);
  };
  const Clear = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setWebsite("");
    setImage("");
  };

  return (
    <>
      <p className={styles.title}>
        <p>&nbsp;&nbsp;Student Enrollment Form</p>
        <p>Past Enrolled Students&nbsp;&nbsp;</p>
      </p>
      <form onSubmit={Submit}>
        <div className="container">
          {/*left part begin  */}

          <div className={styles.divLeft}>
            <form>
              <div className={styles.name}>
                Name:
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className={styles.name}>
                Email:
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className={styles.name}>
                Website:
                <input
                  type="text"
                  placeholder="Enter Your Website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <div className={styles.name}>
                Image Url:
                <input
                  type="text"
                  placeholder="Enter Image Url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>

              <div className={styles.name}>
                Gender:
                <label>
                  <input
                    type="radio"
                    value="Male"
                    name="radio"
                    onChecked={(e) => setGender(e.target.value)}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    value="Female"
                    name="radio"
                    onChecked={(e) => setGender(e.target.value)}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Female
                </label>
              </div>
              <div className={styles.name}>
                Skills:
                <label className={styles.small}>
                  <input
                    type="checkbox"
                    value="Web Development"
                    onChecked={(e) => setSkill(e.target.value)}
                    onChange={(e) => setSkill(e.target.value)}
                  />
                  Web Development
                </label>
                <label className={styles.small}>
                  <input
                    type="checkbox"
                    value="App Development"
                    onChecked={(e) => setSkill(e.target.value)}
                    onChange={(e) => setSkill(e.target.value)}
                  />
                  App Development
                </label>
                <label className={styles.small}>
                  <input
                    type="checkbox"
                    value="Software Development"
                    onChecked={(e) => setSkill(e.target.value)}
                    onChange={(e) => setSkill(e.target.value)}
                  />
                  Software Development
                </label>
              </div>
              <div>
                <input
                  type="submit"
                  value="Submit"
                  className={styles.submit}
                  onClick={Submit}
                />
              </div>
              <div>
                <input
                  type="submit"
                  value="Clear"
                  className={styles.clear}
                  onClick={Clear}
                />
              </div>
            </form>
          </div>

          {/* left part is completed and now coming to the right part */}
          <div className={styles.divRight}>
            {allEntry.map((ele) => {
              return (
                <div className={styles.container}>
                  <div className={styles.rowright}>
                    <p>
                      <img
                        alt="Profile Pic"
                        src={ele.image}
                        className={styles.img}
                      ></img>
                    </p>
                    <p>
                      <strong>FullName :</strong>&nbsp;&nbsp;{ele.name}
                    </p>
                    <p>
                      <strong>Email :</strong>&nbsp;&nbsp;{ele.email}
                    </p>
                    <p>
                      <strong>Website :</strong>&nbsp;&nbsp;{ele.website}
                    </p>
                    <p>
                      <strong>Gender :</strong>&nbsp;&nbsp;{ele.gender}
                    </p>
                    <p>
                      <strong>Skills :</strong>&nbsp;&nbsp;{ele.skill}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </form>
    </>
  );
};
