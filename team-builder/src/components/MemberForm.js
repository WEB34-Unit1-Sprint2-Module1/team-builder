import React from "react";

export default function MemberForm(props) {
  const { values, update, submit } = props;

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    update(name, value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <h2>Add a Member</h2>
      </div>
      <div>
        <label>
          Username:&nbsp;
          {/* 🔥 STEP 7 - Make an input of type `text` for username.
            Controlled inputs need `value` and `onChange` props.
            Inputs render what they're told - their current value comes from app state.
            At each keystroke, a change handler fires to change app state. */}
          <input
            value={values.name}
            onChange={onChange}
            name="name"
            placeholder="type name"
            maxLength="20"
            type="text"
          />
        </label>

        <label>
          Email:&nbsp;
          {/* 🔥 STEP 8 - Make an input of type `email` or `text` for email. */}
          <input
            value={values.email}
            onChange={onChange}
            name="email"
            placeholder="type email"
            maxLength="30"
            type="email"
          />
        </label>

        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label>
          Role:&nbsp;
          {/* 🔥 STEP 9 - Make dropdown for role. Dropdowns look very different
            but they can often use the same change handler text inputs use */}
          <select onChange={onChange} value={values.role} name="role">
            <option value="">-- Select a Role --</option>
            <option value="webdev">Web Developer</option>
            <option value="ux">UX Designer</option>
            <option value="ds">Data Scientist</option>
          </select>
        </label>
        <button
          disabled={
            !values.name || !values.email || !values.role ? true : false
          }
        >
          submit
        </button>
      </div>
    </form>
  );
}
