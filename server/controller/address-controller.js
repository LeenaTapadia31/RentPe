import addressDetail from "../model/addressSchema.js";
import User from '../model/userSchema.js';
export const addressSignUp = async (request, response) => {
    try {
        const exist = await User.findOne({ username: request.body.username });
        if(!exist) {
            return response.status(401).json({ message: 'User does not  exist'});
        }
        const user = request.body;
        const isPresent=await addressDetail.findOneAndUpdate({username: request.body.username },user,{new:true})
        if(!isPresent){
            const newUser = new addressDetail(user);
            await newUser.save();
        }
        
        response.status(200).json({ message: user });
        
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}