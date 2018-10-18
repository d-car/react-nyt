import React from "react";

const Query = (props) => {
    return (
        <div>
            <div className="card-content">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="card-title">Search</h2>

                        <form className="nyt-query" onSubmit={props.handleSubmit}>
                            <div className="input-field">
                                <label htmlFor="nyt-topic">Topic</label>
                                <input type="text" name="topic" id="nyt-topic" value={props.topic} onChange={props.handleChange} className="form-control" placeholder="ex. Politics" required />
                            </div>

                            <div className="input-field">
                                <label htmlFor="nyt-start-year">Start year</label>
                                <input type="text" name="startYear" id="nyt-start-year" value={props.startYear} onChange={props.handleChange} className="form-control" placeholder="2018" required />
                            </div>

                            <div className="input-field">
                                <label htmlFor="nyt-end-year">End year</label>
                                <input type="text" name="endYear" id="nyt-end-year" value={props.endYear} onChange={props.handleChange} className="form-control" placeholder="2018" required />
                            </div>

                            <div className="nyt-separator-2"></div>

                            <button type="submit" className="btn btn-primary" title="Click to search articles.">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Query;