const express = require('express')
const { 
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
 } = require('../controllers/workoutController')
 const requireAuth = require('../middleware/requireAuth.js')

const router = express.Router()

//require authentication for all workout routes
router.use(requireAuth)

//get all workouts
router.get('/', getWorkouts)

//get a single workout
router.get('/:id', getWorkout)

//post a new workout
router.post('/', createWorkout)

//delete a new workout
router.delete('/:id', deleteWorkout)

//update a new workout
router.patch('/:id', updateWorkout)


module.exports = router