const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                <div className="form-group">
                <label htmlFor="name">Place Name</label>
                <input 
                    className="form-control" 
                    id="name" 
                    name="name" 
                    value={data.place.name} 
                required />
                </div>
                <div className="form-group">
                <label htmlFor="pic">Place Picture</label>
                <input 
                  className="form-control"
                  id="pic"
                  name="pic"
                  value={data.place.pic} 
                required />
                </div>
                <div className="form-group">
                <label htmlFor="city">City</label>
                <input 
                  className="form-control"
                  id="city"
                  name="city"
                  value={data.place.city} 
                required />
                </div>
                <div className="form-group">
                <label htmlFor="pic">State</label>
                <input 
                  className="form-control"
                  id="state"
                  name="state"
                  value={data.place.state} 
                required />
                </div>
                <div className="form-group">
                <label htmlFor="pic">Cruisine</label>
                <input 
                  className="form-control"
                  id="cruisine"
                  name="cruisine"
                  value={data.place.cruisine} 
                 />
                </div>
                <input className="btn btn-primary" type="submit" value="Update Place" />
            </form>

          </main>
        
        </Def>
    )
}

module.exports = edit_form