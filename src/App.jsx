import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { Rings } from "react-loader-spinner";

function App() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && (
        <Rings
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="rings-loading"
          wrapperStyle={{}}
          wrapperClass="spinerWrap"
        />
      )}
      {error ? (
        <p>
          Something went wrong! <br /> {error}
        </p>
      ) : (
        <ContactList />
      )}
    </div>
  );
}

export default App;

const getContacts = (state) => state.contacts;
