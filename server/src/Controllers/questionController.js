import { Query } from "../Models/questionModel.js"


// Get


export async function GetQueries(req, res) {
    try {
        const queries = await Query.find()
        res.status(200).send(queries)
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
}

export async function GetQueryByID(req, res) {
    try {
        const { id } = req.params
        const query = await Query.findById(id)
        res.status(200).send(query)
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
}


// Post


export async function CreateQuery(req, res) {
    try {
        const { question, answer } = req.body

        let fixedQuestion = question

        if (question.trim().endsWith('?')) {
            fixedQuestion = question.trim().slice(0, -1).trim()
        }

        if (await Query.findOne({question:fixedQuestion})) {
            res.status(406).json({message:'This question has been answered!'})
            return
        }

        const newQuery = await Query.create({
            question: fixedQuestion,
            answer: answer
        })
        res.status(200).json({ message: 'Query created successfully!' })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
}


// Delete


export async function DeleteQueryByID(req, res) {
    try {
        const { id } = req.params
        const query = await Query.findByIdAndDelete(id)
        res.status(200).json({ message: 'Query successfully deleted!' })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
}


// Put


export async function UpdateQuery(req, res) {
    try {
        const { id } = req.params
        const { question, answer } = req.body
        const query = await Query.findByIdAndUpdate(id, {
            question: question,
            answer: answer
        })
        res.status(200).json({ message: `Query updated successfully by ${req.role} ${req.username}!` })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
}
