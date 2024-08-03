// import express from "express"
import { ContactModel } from "../models/contact.js"

export const createContact=async(req,res)=>{
    const {name,email,phoneno,address}=req.body;
    try{

        const newContact=new ContactModel({
            name,
            email,
            phoneno,
            address,
            postedBy:req.user._id
        })
        const result=await newContact.save()
        return res.status(201).json({success:true,...result._doc})
    }
    catch(err){
        return res.status(500).json(err.message)
    }
}
export const getContacts=async (req,res)=>{
    try{
        const contacts=await ContactModel.find({postedBy:req.user._id})
        return res.status(200).json({success:true,contacts})
    }
    catch(err){
        return res.status(500).json({error:err.meaasge})
    }
}

export const getContact = async (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(401).json({ error: "No Id Specified" });
    }
    try {
      const contact = await ContactModel.findById(id);
      if (!contact) {
        return res.status(404).json({ error: "Contact not found" });
      }
      return res.status(200).json({ success: true, contact });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  };
  
  export const updateContact = async (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(401).json({ error: "No Id Specified" });
    }
    try {
      const contact = await ContactModel.findByIdAndUpdate(
        id,
        { ...req.body },
        { new: true }
      );
      if (!contact) {
        return res.status(404).json({ error: "Contact not found" });
      }
      return res.status(200).json({ success: true, contact });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  };
  
  export const deletContact = async (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(401).json({ error: "No Id Specified" });
    }
    try {
      const contact = await ContactModel.findById(id);
      if (!contact) {
        return res.status(404).json({ error: "Contact not found" });
      }
      const deleteContact=await ContactModel.findByIdAndDelete({_id:id})
      const contacts=await ContactModel.find({postedBy:req.user._id})
      return res.status(200).json({ success: true, contacts });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  };
  