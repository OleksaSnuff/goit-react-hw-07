import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/selectors";
import { useSelector } from "react-redux";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={css["users-list"]}>
        {visibleContacts.length !== 0 ? (
          visibleContacts.map((contact) => {
            return <Contact userContact={contact} key={contact.id} />;
          })
        ) : (
          <p>Nothing to show...</p>
        )}
      </ul>
    </div>
  );
};
export default ContactList;
