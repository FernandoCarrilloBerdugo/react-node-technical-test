const { Comment } = require("../../database/db");

async function getComments(req, res) {
	try {
		const comments = await Comment.findAll();
		if (!comments.length) res.send("No comments in the Database");
		else res.json(comments);
	} catch (error) {
		res.send(
			"The server encountered an Error, please contact the administrator" //In case the server burns and dies
		);
	}
}

async function getCommentById(req, res) {
	const { id } = req.params;
	try {
		if (!id) res.status(400).send("No id sent"); //Checking that the id was sent
		else {
			const comment = await Comment.findByPk(id);
			if (!comment)
				res.status(404).send("No comment found"); //If no comment matches the id
			else res.json(comment);
		}
	} catch (error) {
		res.send(
			"The server encountered an Error, please contact the administrator" 
		);
	}
}

async function postComment(req, res) {
	const { email, comment } = req.body;
	if (!email || !comment)
		res
			.status(500)
			.send("Missing info"); //Checking that the email and comment was sent
	else {
		const newComment = await Comment.create({ email, comment });
		res.send("Comment created");
	}
}

async function putComment(req, res) {
	const { id } = req.params;
	const { email, comment } = req.body;
	try {
		if (!id)
			res
				.status(500)
				.send("No id sent"); //Checking that the info required was sent
		else if (!email && !comment) res.send("Nothing to update");
		else {
			const toUpdate = await Comment.findByPk(id);
			if (!toUpdate)
				res.status(404).send("No comment found"); //If no comment matches the id
			else {
				if (email) toUpdate.email = email;
				if (comment) toUpdate.comment = comment;
				await toUpdate.save();
				res.send("Comment updated");
			}
		}
	} catch (error) {
		res.send(
			"The server encountered an Error, please contact the administrator"
		);
	}
}

async function deleteComment(req, res) {
	try {
		const { id } = req.params;
		if (!id) res.status(400).send("No id sent");
		else {
			const comment = await Comment.findByPk(id);
			if (!comment) res.status(404).send("No comment found");
			else {
				comment.destroy();
				res.send("Comment deleted");
			}
		}
	} catch (error) {
		res.send(
			"The server encountered an Error, please contact the administrator"
		);
	}
}

module.exports = {
	getComments,
	getCommentById,
	postComment,
	putComment,
	deleteComment
};
