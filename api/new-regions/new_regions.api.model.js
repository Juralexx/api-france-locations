import mongoose from 'mongoose'

const NewRegionModel = new mongoose.Schema(
    {
        code_region: {
            type: Number
        },
        nom_region: {
            type: String
        },
        geometry: {
            type: Object,
            type: {
                type: String
            },
            coordinates: {
                type: Array
            }
        },
    },
    {
        collection: 'france_new_regions',
        timestamps: true
    }
);

export default mongoose.model("france_new_regions", NewRegionModel)