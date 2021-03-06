const groupMsgList = (_msgList) => {
  _msgList = Array.from(_msgList);
  let res = [];
  let tmp = { from: "", msg: [] };
  for (var _msg of _msgList) {
    const msgContentAndTime = {
      timestamp: _msg.timestamp,
      content: _msg.content,
    };
    if (tmp.from) {
      if (_msg.senderID !== tmp.from) {
        res.push(tmp);
        tmp = { from: _msg.senderID, msg: [msgContentAndTime] };
      } else {
        tmp.msg.push(msgContentAndTime);
      }
    } else {
      tmp.from = _msg.senderID;
      tmp.msg = [msgContentAndTime];
    }
    // console.log({ tmp })
  }
  if (tmp.from) res.push(tmp);

  return res;
};

export default groupMsgList;
