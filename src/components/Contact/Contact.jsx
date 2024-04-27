import css from "./Contact.module.css";

import { FaUser } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ userContact }) => {
  const { id, name, number } = userContact;
  const dispatch = useDispatch();

  return (
    <li className={css.contact}>
      <div className={css["user-information"]}>
        <div>
          <FaUser />
          <p>{name}</p>
        </div>
        <div>
          <BsTelephone />
          <p>{number}</p>
        </div>
      </div>
      <button
        type="button"
        name="delete"
        onClick={() => {
          console.log(id);
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
