// import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'

import { Form } from '../../components/Form/Form'
import { MessageList } from '../../components/MessageList/MessageList'
import { ChatList } from '../../components/ChatList/ChatList'

import { WithClasses } from '../../HOC/WithClasses'
import { useSelector } from 'react-redux'
import { selectMessage } from '../../store/messages/selectors'

import styles from './ChatsPage.module.css'


export function ChatsPage () {
  const {chatId} = useParams()
  const messages = useSelector(selectMessage)

  const MessageListWithClass = WithClasses(MessageList)

  if(chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />
  }

  return (
    <>
      <h1>Welcome to chat!</h1>
      <ChatList />
            <Form />

      <MessageListWithClass 
        messages={chatId ? messages[chatId] : []}
        classes={styles.border}
      />
    </>
  )
}

// export default App