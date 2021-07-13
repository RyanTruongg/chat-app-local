import React, { useState, useContext, useEffect } from 'react';
import { useAuth } from './use-auth';

const contactListContext = React.createContext();

export const ProvideContactList = ({ children }) => {
  const contactList = useProvideContactList();
  return (
    <contactListContext.Provider value={contactList}>{children}</contactListContext.Provider>
  )
}
export const useContactList = () => {
  return useContext(contactListContext);
}

const useProvideContactList = () => {
  const [data, setContactList] = useState([]);

  const auth = useAuth();

  const updateContactLastMsg = (contactID, msg) => {
    const updated = data?.map(
      (contact) => {
        if (contact.uid === contactID) {
          return { ...contact, msg: msg };
        } else {
          return contact
        }
      }
    )
    setContactList(sortByTimestamp(updated));
  }

  function sortByTimestamp(data) {
    let tmp = [...data].sort((a, b) => b.msg.timestamp - a.msg.timestamp);
    return tmp;
  }

  useEffect(() => {
    if (auth.user) {
      const res = fetch("/api/pm-list/" + auth.user?.uid);
      const json = res.then(res => res.json());
      json.then(data => setContactList(sortByTimestamp(data.users)));
      json.catch(e => console.log(e));
    }
  }, [auth.user, auth.user?.uid]);

  return {
    data,
    setContactList,
    updateContactLastMsg
  }
}

