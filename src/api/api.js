import axios from "axios"
import { toast } from "react-toastify"

const baseUrl = "https://chat-ai-server-mxss.onrender.com"

// upload pdf to server
export const uploadPdfToServer = async (file) => {
    const formData = new FormData()
    formData.append("file", file)
    await axios.post(`${baseUrl}/upload`, formData)
}

// send question to server and return the server response
export const askQuestions = async () => {
    const val = document.getElementById("message").value
    const res = await axios.post(`${baseUrl}/query`, {
        question: val
    })
    const response = res.data
    return response
}
