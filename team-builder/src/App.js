import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import TeamMember from "./components/TeamMember";
import MemberForm from "./components/MemberForm";

const initialMemberList = [
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    name: "Alexis",
    email: "alexis@email.com",
    role: "Web Developer",
  },
];

const initialFormValues = {
  name: "",
  email: "",
  role: "",
};

const fakeAxiosGet = () => {
  return Promise.resolve({
    status: 200,
    success: true,
    data: initialMemberList,
  });
};
const fakeAxiosPost = (url, { name, email, role }) => {
  const newMember = { id: uuid(), name, email, role };
  return Promise.resolve({ status: 200, success: true, data: newMember });
};

function App() {
  const [members, setMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitForm = () => {
    const member = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    //  b) prevent further action if either username or email or role is empty string after trimming
    if (!member.name || !member.email) return;
    //  c) POST new friend to backend
    fakeAxiosPost("fake.com", member)
      .then((res) => {
        // and on success update the list of friends in state with the new friend from API
        const newMemberFromAPI = res.data;
        setMembers([...members, newMemberFromAPI]);
      })
      .catch((err) => {
        debugger;
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  useEffect(() => {
    fakeAxiosGet("fakeapi.com").then((res) => setMembers(res.data));
  }, []);

  return (
    <div className="App">
      <MemberForm values={formValues} update={updateForm} submit={submitForm} />

      {members.map(member => {
        return (

          <TeamMember key={member.id} details={member}/>
        )
      })}
    </div>
  );
}

export default App;
