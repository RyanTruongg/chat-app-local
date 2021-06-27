import ChatboxCard from './ChatboxCard';

const ChatboxList = ({ listData }) => {
  return (
    <div className="chatbox-list">
      {listData?.map(({ userID, ...rest }) => 
        <ChatboxCard
          key={userID}
          {...rest}
          to={"/t/" + userID} 
        />
      )}
    </div>
  );
}

export default ChatboxList;
