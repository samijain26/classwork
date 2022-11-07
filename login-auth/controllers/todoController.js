const { findByIdAndUpdate } = require('../models/Todo');
const TodoModel = require('../models/Todo') 

const index = async (req, res) => {
    console.log('user:',req.user)
    try {
        const foundCurrentUsersTodos = await TodoModel.find({ user: req.user })
        console.log('hitting con',foundCurrentUsersTodos);
        res.status(200).json({ todos: foundCurrentUsersTodos });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
const add = async (req, res) => {
  try {
    const createdTodoForCurrentUser= await TodoModel.create(req.body);  //todonotes (notes,user)
   res.status(200).json({ todos: createdTodoForCurrentUser });
  } catch (error) {
       res.status(400).json({ error: error.message });
  }
};

const remove = async (req, res) => {
    try {
        console.log(req.params.id);
        const deletedTodo = await TodoModel.findByIdAndDelete(req.params.id)
        res.status(200).json({ todos: deletedTodo});
  } catch (error) {
       res.status(400).json({ error: error.message });
  }
    }

const update = async (req, res) => {



  try {
   
    const updateNotes = await TodoModel.findByIdAndUpdate(req.body.id, { $set: req.body },{new:true})
          
      
     
    res.status(200).json({ todos: updateNotes });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};




module.exports = {
    index,
    add,
    remove,
    update
}