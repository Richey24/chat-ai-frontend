import { toast } from "react-toastify"

// show a warning when user attempt typing without uploading a document first
export const promptFileUpload = (ev) => {
    if (ev.target.readOnly) {
        toast.warning("Upload a document first")
    }
}

// check if the uploaded file is of pdf format
export const checkFileFormat = (ev) => {
    if (ev.target.files[0].name.split('.').pop().toLowerCase() === "pdf") {
        return true
    } else {
        return false
    }
}