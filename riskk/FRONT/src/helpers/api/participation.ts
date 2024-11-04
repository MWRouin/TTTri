import { Participation } from '../../Redux/participation/type';
import { APICore } from './apiCore';

const api = new APICore();
const BASE_URL = '/api/Participations';

// Fetch all participations
const GetParticipations = async () => {
    const response = await api.getData(BASE_URL);
    return response;
};


const GetParticipationById=async(id:any)=>{
    const response= await api.getById(BASE_URL,id)
}
// Fetch participation by userId and courseId as query parameters


// Add a new participation
const AddParticipation = async (data: { Participation: any }) => {
    const response = await api.create(BASE_URL, data);
    return response;
};

// Update an existing participation
const UpdateParticipation = async (data: { Participation: Participation }) => {
    const response = await api.putSimple(BASE_URL, data);
    return response;
};



// Delete participation by userId and courseId as query parameters
const DeleteParticipation = async (id:number) => {
    const response = await api.deleteById(BASE_URL, id);
    return response;
};

export { GetParticipations, AddParticipation, UpdateParticipation, DeleteParticipation,GetParticipationById };
