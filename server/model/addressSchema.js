import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 30
    },
    address1: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 100
    },
    address2: {
        type: String,
        
        trim: true,
        min: 5,
        max: 100
    },
    pincode: {
        type: Number,
        required: true,
        
    },
    phone: {
        type: Number,
        required: true,
       
    },
    city: {
        type: String,
        required: true,
        lowercase: true
    },
});

const addressDetail = mongoose.model('addressDetail', addressSchema);

export default addressDetail;