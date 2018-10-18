const express = require("express");
const path = require("path");
const router = express.Router();
const Article = require(path.join(__dirname, "..", "models", "Article.js"));
const helpers = require("../utils/helpers.js")


router.get("/api/saved", (req, res) => {
    // Find saved articles
    Article.find({}, (err, dbArticle) => {
        if (err) throw err;

        res.json(dbArticle);
        
    });
});

router.post("/api/saved", (req, res) => {
    Article.findOne({"id": req.body.article.id}, (err, dbArticle) => {
        if (err) throw err;

        // Save the article to database if it does not exist yet
        if (!dbArticle) {
            // Add a timestamp
            req.body.article.dateSaved = new Date();
            
            const article = new Article(req.body.article);

            article.save((err1, dbArticle1) => {
                if (err1) throw err1;

                res.json(dbArticle1);
                
            });

        } else {
            res.status(409).send("You already saved this article.");

        }

    });
});


module.exports = router;