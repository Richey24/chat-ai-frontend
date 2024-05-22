import "./Input.css"
import send from "../img/send.svg"
import { promptFileUpload } from "../utils/helper"
import { askQuestions } from "../api/api"

const Input = ({ file, setMessages, messages, setLoad }) => {

    // this function add the user questions and the server response to the message array
    const getMessages = async () => {
        const val = document.getElementById("message").value
        if (val.length <= 0) {
        toast.warning("Type in the input field")
        return
        }
        setLoad(true)
        const arr = [...messages]
        arr.push({
            sender: "user",
            message: document.getElementById("message").value
        })
        setMessages(arr)
        document.getElementById("down").scrollIntoView()
        // get response from server
        const response = await askQuestions()
        setLoad(false)
        setMessages([...arr, {
            sender: "ai",
            message: response
        }])
        document.getElementById("message").value = ""
        document.getElementById("down").scrollIntoView()
    }

    return (
        <div className={file ? "inputMain enabled" : "inputMain"}>
            <input id="message" onClick={promptFileUpload} readOnly={file ? false : true} placeholder="Send a message..." type="text" />
            <img onClick={getMessages} src={send} alt="" />
        </div>
    )
}

export default Input
