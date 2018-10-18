import React from "react";

const numArticlesToReturn = 5;

const Results = (props) => {
    const results = props.articles.slice(0, numArticlesToReturn).map(a =>
        <div className="nyt-results hoverable" key={a.id}>
            <h3><a href={a.url} target="_blank" rel="noopener noreferrer">{a.title}</a></h3>
            <span>{a.byline}</span>

            <form onSubmit={props.handleSave}>
                <input type="hidden" name="id" value={a.id} />
                <button type="submit" className="btn btn-primary" title="Click to save this article.">add</button>
            </form>
        </div>
    );

    return (
        <div className="card">
            <div className="card-content">
                <div className="row">
                    <div className="col-sm-auto">
                        <h2 className="card-title">Results</h2>

                        {results}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Results;