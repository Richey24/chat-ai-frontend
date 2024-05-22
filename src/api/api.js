import axios from "axios"
import { toast } from "react-toastify"

const baseUrl = "http://127.0.0.1:5000"

// upload pdf to server
export const uploadPdfToServer = async (file) => {
    const formData = new FormData()
    formData.append("file", file)
    await axios.post(`${baseUrl}/upload`, formData)
}

// send question to server and return the server response
export const askQuestions = async () => {
    const val = document.getElementById("message").value
    if (val.length <= 0) {
        toast.warning("Type in the input field")
        return
    }
    console.log(val);
    const res = await axios.post(`${baseUrl}/query`, {
        question: val
    })
    const response = res.data
    return response
}