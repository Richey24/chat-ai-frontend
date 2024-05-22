import "./Header.css"
import logo from "../img/logo.svg"
import add from "../img/add.svg"
import fileImg from "../img/file.svg"
import { checkFileFormat } from "../utils/helper"
import { toast } from "react-toastify"
import { uploadPdfToServer } from "../api/api"

const Header = ({ setFile, file }) => {

    // this function check the uploaded file format and the upload it to the server
    const uploadFile = async (ev) => {
        if (checkFileFormat(ev)) {
            await toast.promise(uploadPdfToServer(ev.target.files[0]), {
                pending: "Loading please wait",
                success: "PDF uploaded successfully",
                error: "Error uploading PDF"
            })
            setFile(ev.target.files[0])
        } else {
            toast.warning("Only pdf format accepted")
        }
    }

    return (
        <div className="mainHeader">
            <img src={logo} alt="" />
            <div>
                {
                    file &&
                    <div>
                        <img src={fileImg} alt="" />
                        <p>{file?.name}</p>
                    </div>
                }
                <input onChange={uploadFile} type="file" name="pdf" id="pdf" hidden accept="application/pdf" />
                <label htmlFor="pdf">
                    <img src={add} alt="" />
                    <p>Upload PDF</p>
                </label>
            </div>
        </div>
    )
}

export default Header