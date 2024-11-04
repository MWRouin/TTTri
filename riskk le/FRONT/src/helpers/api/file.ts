import axios from 'axios';
import { APICore } from './apiCore';
import {File as FileType} from '../../Redux/File/type'

const api = new APICore();

const BASE_URL = '/api/file';


export const UploadFile=async({file,fileName}:FileType)=>{
    const formData= new FormData();
    formData.append("formFile",file);
    formData.append("fileName",fileName);
    {
        try{
        const res=await axios.post(BASE_URL,formData);
        console.log(res)
       
    }catch(ex:any){
        console.log(ex)
    }
}
}

export const GetFileByName = async (fileName: string) => {
    const response = await api.getById(BASE_URL, fileName);
    return response;
  }
  