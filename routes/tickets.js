const express = require('express');
const passport = require('passport');
// const Task  = require('../models/Task');
const Ticket  = require('../models/Ticket');
const router = express.Router();


router.get('/dashboard', passport.authenticate('jwt', {session:false}),(req,res) => {
 
    tickets.find(function(err, tickets){
      if(err){
        console.log(err);
      }
      else {
    return    res.json(tickets);
      }
    });
  });
  

/**
 * Create a new request list of logged in user
 */
router.post('/add', passport.authenticate('jwt', { session: false }), (req, res) => {
    new Ticket({
    	subject: req.body.subject,
        description: req.body.description,
        request_type:req.body.request_type,
        owner:req.params.id,
        status:"New"
    
    })
    .save(()=>{
        if (err){
        res.send(err);
        }else{
      res.send('Ticket successfully added!');
       console.log('Ticket successfully added!');}
    })
    .then(ticket => res.json({id: ticket.id}))
    .catch(err => console.log(err)
    );
});


router.get('/', passport.authenticate('jwt', {session:false}),(req,res) => {
 console.log(req.user.name);
    tickets.find(function(err, tickets){
      if(err){
        console.log(err);
      }
      else {
    return    res.json(tickets);
      }
    });
  });
  

/*
Returns the Tickects of the logged user by Name
*/

// router.get('/',passport.authenticate('jwt', { session: false }),(req,res)=>{


// Ticket.findOne({name:req.body.name})
// .then(ticket=>	{
// 	if(!ticket){
// 		return res.status(400).json({name:"No requests submitted !!!"});
// 	}
// 	else{

// 	return res.json(list);

// 	}

// })
// .catch(err=>console.log(err));

// });


// /**
//  * Add new task i list
//  */
// router.post('/:id/tasks', passport.authenticate('jwt', { session: false }), (req, res) => {
//     List.findById(req.params.id)
//     	.then(list=> {
//     		const task = new Task({name: req.body.name})
//     		list.tasks.push(task);
//     		list.save()
//     			.then(list => res.json(list))
//     			.catch(err => console.log(err));
//     	})
// //     	.catch(err => console.log(err));
// });



// /*
// Returns the Task by the list ID
// */

// router.get('/:id/tasks',passport.authenticate('jwt', { session: false }),(req,res)=>{
// 	List.findById({_id:req.params.id})
// 	// to get the list created only by the user- we need to pass the user id and the List ID
// //	List.findOne({_id:req.params.id,user:req.body.user})
// 	// List.findById({_id:req.params.id})
// 	//.then(list=>res.json(list))
// 	.then(list =>
// 		{
// 	if(!list){
// 		return res.status(400).json({ID:"List ID doesnt not exist"});
// 	}
// 	else{

// 	return	res.json(list.tasks)

// 	}
// // return  res.json(list.tasks);
// })
// .catch(err=>console.log(err));

// });

module.exports = router;