import asyncHandler from "../middlleware/asyncHandler.js";
import Publisher from "../models/publisherModel.js";

const getPublishers = asyncHandler (async(req, res) => {
    const publishers = await Publisher.find({});
    res.json(publishers);
});

const getPublisherById = asyncHandler (async(req, res) => {
    const publisher = await Publisher.findById(req.params.id);
    
    if(publisher){
        res.json(publisher);
    }
    res.status(404).json({message: "Publisher not found"});
});

const updatePublisherById = asyncHandler(async (req, res) => {
    const { name, address, contact, email, phoneNumber} = req.body;

    const publisher = await Publisher.findById(req.params.id);
  
    if (publisher) {
      publisher.name = name;
      publisher.address = address;
      publisher.contact = contact;
      publisher.email = email;
      publisher.phoneNumber = phoneNumber;
  
      const updatedPublisher= await publisher.save();
      res.status(201).json(updatedPublisher);
    } else {
        res.status(404).json({message: "Publisher not found"});
    }
  });

  const deletePublisherById = asyncHandler(async (req, res) => {
    try {
        const deletedNode = await Publisher.findByIdAndDelete(req.params.id);
        if (!deletedNode) {
          return res.status(404).json({ message: 'Node not found' });
        }
    
        res.json({ message: 'Node deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Error deleting node'});
      }

  });

  const createPublisher = asyncHandler(async (req, res) => {
    const { name, address, contact, email, phoneNumber} = req.body;

    const publisherExist = await Publisher.findOne({ name });
  
    if (publisherExist) {
      res.status(400);
      throw new Error("Publisher already exists");
    }
  
    const publisher = await Publisher.create({
      name,
      address,
      contact,
      email,
      phoneNumber,
    });
  
    if (publisher) {
      res.status(201).json({
        _id: publisher._id,
        name: publisher.name,
        address: publisher.address,
        contact: publisher.contact,
        email: publisher.email,
        phoneNumber: publisher.phoneNumber,
      });
    } else {
        res.status(400).json({message: "Invalid publisher input"});
    }
  });

export {getPublisherById,getPublishers, updatePublisherById, deletePublisherById, createPublisher};
