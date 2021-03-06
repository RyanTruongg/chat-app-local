import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Avatar from "../common/Avatar";
import { useAuth } from "../../hook/use-auth";
import useConversationList from "../../hook/use-conversations-list";

import calcTimePassed from "../../helpers/calcTimePassed";

const RoomTitleCard = (props) => {
  const { info, seen, lastMsg, to, setOpen } = props;
  const { _id, displayName, photoURL } = info;

  const [timePassed, setTimePassed] = useState(
    calcTimePassed(lastMsg.timestamp)
  );
  const location = useLocation();
  const auth = useAuth();
  const { markConversationAsRead } = useConversationList();

  useEffect(() => {
    setTimePassed(calcTimePassed(lastMsg.timestamp));
    const interval = setInterval(() => {
      setTimePassed(calcTimePassed(lastMsg.timestamp));
    }, 60000);
    return () => clearInterval(interval);
  }, [lastMsg.timestamp]);

  const handleClick = () => {
    markConversationAsRead(_id);
    setOpen(false);
  };

  return (
    <Link
      onClick={handleClick}
      to={to}
      className={
        to === location.pathname
          ? "room-title__card active"
          : "room-title__card"
      }
    >
      <Avatar imgSrc={photoURL} size="large" />

      <div className="room-title__card-info">
        <p>{displayName}</p>
        <div style={{ fontWeight: !seen && "600" }} className="last-msg">
          <span>
            {auth.user?.uid === lastMsg?.from
              ? "You: " + lastMsg?.content
              : lastMsg?.content}
          </span>
          <span>{timePassed}</span>
        </div>
      </div>
    </Link>
  );
};

export default RoomTitleCard;
