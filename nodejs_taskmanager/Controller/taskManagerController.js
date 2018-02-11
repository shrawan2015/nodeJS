var tasks  = require('../Config/Task')

module.exports = {
    createNewTask(req,res) {
        console.log('this is the new task')
        let taskID = req.body.taskID
        let taskName = req.body.taskName
        let taskDesription = req.body.taskDesription

        let task = {
            taskID,
            taskName,
            taskDesription
        }

        tasks.push(task)
        return res.json(tasks)
    },
    getAllTask(req,res) {
        console.log('this is the all tasks')
        return res.json(tasks)
    }

}