import React from 'react';
import styles from '../../style/style.css';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      formValue: '',
      messages: [
        {id: 100,
         name: 'Mike P.',
         message: `I like the Comuna Factory Celestial Room the best. And it's not too expensive`,
         timeStamp: 'Aug 1, 2019',
         imgUrl: `https://rentro-icons.s3-us-west-1.amazonaws.com/Avatar3B.png`
        },
        {id: 101,
          name: 'Sheryl M.',
          message: `+1 Yup.`,
          timeStamp: 'Aug 1, 2019',
          imgUrl: `https://rentro-icons.s3-us-west-1.amazonaws.com/Avatar1B.png`
         },
         {id: 102,
          name: 'Lisa X.',
          message: `The GEM IN THE CITY place looks good, but it only has 1 br. We can't all fit in there`,
          timeStamp: 'Jul, 30 2019',
          imgUrl: `https://rentro-icons.s3-us-west-1.amazonaws.com/Avatar2B.png`
         }
      ]
    }

    this.handleChatView=this.handleChatView.bind(this);
    this.handleSubmitMsg=this.handleSubmitMsg.bind(this);
    this.handleFormValue=this.handleFormValue.bind(this);
  }

  handleChatView(e) {
    e.preventDefault();
    this.props.chatView();
  }

  handleFormValue(e) {
    e.preventDefault();
    this.setState({
      formValue: e.target.value
    });  
  }

  handleSubmitMsg(e) {
    e.preventDefault();
    let value = this.state.formValue
    let newMsg = 
    {
      id: 99,
      name: 'Shane Z.',
      message: value,
      timeStamp: 'Aug, 13, 2019',
      imgUrl: `https://rentro-icons.s3-us-west-1.amazonaws.com/Avatar5B.png`
    }
    let msgArr = this.state.messages.slice(0);
    msgArr.unshift(newMsg);
    this.setState({
      messages: msgArr
    }, () => {console.log('Chat mesages', this.state.messages) });

    this.setState({
      formValue: '' 
    })
  }
    
  render() {
    return (
      <div className={styles.chatModalContainer}>
        <div 
          className={styles.iconXcontainerSmall}
          onClick={this.handleChatView}>
          <img 
            className={styles.iconX} 
            onClick={this.handleModalView}
            src='https://rentro-icons.s3-us-west-1.amazonaws.com/icon-x.png'/>
        </div>
        <div className={styles.formWrapper}>
          <form>
            <textarea 
              className={styles.formField}
              type="search"
              onChange={this.handleFormValue}
              onKeyDown={this.handleInput}
              value={this.state.formValue}></textarea>
            <br></br>
            <input 
              type="submit" 
              className={styles.formCreate}
              onClick={this.handleSubmitMsg} 
              value="Submit">
            </input>

          </form>
        </div>
        <div className={styles.chatArea}>
            {this.state.messages.map(item => 
            <div className={styles.msgOuterContainer}>
              <div className={styles.msgAvatarContainer}>
                <img 
                className={styles.msgAvatar} 
                src={item.imgUrl}/> 
                <div className={styles.msgName}>
                  {item.name}
                </div>     
              </div>



              <div 
                key={item.id}
                className={styles.msgContainer}>
                  <div className={styles.msgText}>
                    {item.message}
                  </div>
                  <div className={styles.msgTextTimeStamp}>
                    {item.timeStamp}
                  </div>            
              </div>
            </div>
            )}
        </div>
      </div>
    )
  }  
}

export default Chat;