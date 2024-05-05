
const mongoose = require('mongoose');

const mongoDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://prashansabharti19:190602%40Pb@cluster0.iodbqku.mongodb.net/DeliciousDispatch?retryWrites=true&w=majority&appName=Cluster0');
        const collection = mongoose.connection.db.collection("Sample");
        const fetchedData = await collection.find({}).toArray();
        console.log(fetchedData);
        console.log("Data fetched successfully.");
    } catch (err) {
        console.error("Error fetching data:", err);
    }
}
module.exports = mongoDB;