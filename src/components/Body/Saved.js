import React from "react";

const Saved = (props) => {
    const saved = props.saved.map(a =>
        <div className="nyt-results hoverable" key={a.id}>
            <h3><a href={a.url} target="_blank" rel="noopener noreferrer">{a.title}</a></h3>
            <span>{a.byline}</span>

            <form onSubmit={props.handleUnsave}>
                <input type="hidden" name="id" value={a.id} />
                <button type="submit" className="btn btn-primary" title="Click to unsave this article.">clear</button>
            </form>
        </div>
    );

    return (
        <div>
            <div className="card-content">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="card-title">Saved Articles</h2>

                        {saved}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Saved;