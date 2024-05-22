import "./Chat.css"
import user from "../img/user.svg"
import ai from "../img/dp.svg"

// both user messages and server responses are displayed here
const Chat = ({ messages, load }) => {
    return (
        <div className="chatMain">
            {
                messages?.map((message, i) => (
                    <div key={i}>
                        <img src={message.sender === "user" ? user : ai} alt="" />
                        <p>{message.message}</p>
                    </div>
                ))
            }
            {load && <p>Loading...</p>}
            <div style={{ width: "100%", height: "50px" }} id="down"></div>
        </div>
    )
}

export default Chat